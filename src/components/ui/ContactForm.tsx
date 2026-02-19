"use client";

import React from "react";

interface ContactFormProps {
  predefinedSubject?: string;
  showSubjectField?: boolean;
}

export default function ContactForm({
  predefinedSubject,
  showSubjectField = false,
}: ContactFormProps) {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: predefinedSubject || "",
    message: "",
  });

  const [errors, setErrors] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = React.useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null as string | null },
  });

  React.useEffect(() => {
    if (predefinedSubject) {
      setFormData((prev) => ({ ...prev, subject: predefinedSubject }));
    }
  }, [predefinedSubject]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    if (errors[name as keyof typeof errors]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };

  const validateForm = () => {
    const tempErrors = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        tempErrors.email = "Please provide a valid email address";
        isValid = false;
      }
    }

    if (showSubjectField && !formData.subject.trim()) {
      tempErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          subject: predefinedSubject || "",
          message: "",
        });
        setStatus({
          submitted: true,
          submitting: false,
          info: {
            error: false,
            msg: "Your message has been sent successfully!",
          },
        });

        setTimeout(() => {
          setStatus((prevStatus) => ({
            ...prevStatus,
            submitted: false,
            info: { error: false, msg: null },
          }));
        }, 5000);
      } else {
        setStatus({
          submitted: false,
          submitting: false,
          info: {
            error: true,
            msg:
              data.error ||
              "Something went wrong. Please try again later.",
          },
        });
      }
    } catch {
      setStatus({
        submitted: false,
        submitting: false,
        info: {
          error: true,
          msg: "An error occurred. Please try again later.",
        },
      });
    }
  };

  const inputClasses = (hasError: boolean) =>
    `w-full px-4 py-3 rounded border bg-surface text-foreground font-mono text-sm transition-all duration-200 placeholder:text-text-dim focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary ${
      hasError ? "border-red-500" : "border-border"
    }`;

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-surface border border-border rounded-lg p-6 md:p-8"
    >
      <div className="mb-5">
        <label
          htmlFor="name"
          className="block text-xs font-mono font-medium text-muted-foreground uppercase tracking-wider mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={inputClasses(!!errors.name)}
          placeholder="Your Name"
        />
        {errors.name && (
          <p className="mt-1.5 text-xs text-red-500 font-mono">{errors.name}</p>
        )}
      </div>

      <div className="mb-5">
        <label
          htmlFor="email"
          className="block text-xs font-mono font-medium text-muted-foreground uppercase tracking-wider mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={inputClasses(!!errors.email)}
          placeholder="your.email@example.com"
        />
        {errors.email && (
          <p className="mt-1.5 text-xs text-red-500 font-mono">
            {errors.email}
          </p>
        )}
      </div>

      {showSubjectField && (
        <div className="mb-5">
          <label
            htmlFor="subject"
            className="block text-xs font-mono font-medium text-muted-foreground uppercase tracking-wider mb-2"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={inputClasses(!!errors.subject)}
            placeholder="Message Subject"
          />
          {errors.subject && (
            <p className="mt-1.5 text-xs text-red-500 font-mono">
              {errors.subject}
            </p>
          )}
        </div>
      )}

      <div className="mb-6">
        <label
          htmlFor="message"
          className="block text-xs font-mono font-medium text-muted-foreground uppercase tracking-wider mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={`${inputClasses(!!errors.message)} h-36 resize-none`}
          placeholder="Your message..."
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-500 font-mono">
            {errors.message}
          </p>
        )}
      </div>

      {status.info.msg && (
        <div
          className={`mb-5 p-3 rounded border font-mono text-sm ${
            status.info.error
              ? "bg-red-500/10 border-red-500/30 text-red-400"
              : "bg-green-500/10 border-green-500/30 text-green-400"
          }`}
        >
          {status.info.msg}
        </div>
      )}

      <button
        type="submit"
        disabled={status.submitting}
        className={`w-full py-3 rounded font-mono text-sm font-medium tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
          status.submitting
            ? "bg-primary/50 text-background/70 cursor-not-allowed"
            : "bg-primary text-background hover:bg-primary-dark hover:shadow-lg hover:shadow-primary-glow active:scale-[0.99]"
        }`}
      >
        {status.submitting
          ? "SENDING..."
          : status.submitted
          ? "SENT"
          : "SEND MESSAGE"}
      </button>
    </form>
  );
}
