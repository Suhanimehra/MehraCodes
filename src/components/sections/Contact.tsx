import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, Check, Copy, AlertCircle, CheckCircle2, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import { contact } from "@/data";

interface SubmissionStatus {
  type: "idle" | "success" | "error" | "fallback";
  message: string;
}

const WEB3FORMS_ACCESS_KEY =
  (import.meta.env.VITE_FORM_API_KEY as string | undefined) ||
  (import.meta.env.FORM_API_KEY as string | undefined) ||
  "6f996e11-68c8-4c14-88e8-0cb0c87cc38c";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<SubmissionStatus>({ type: "idle", message: "" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(contact.email);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = contact.email;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopied(true);
      toast.success("Email copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Could not copy email automatically");
    }
  };

  const openMailClient = () => {
    const subject = encodeURIComponent(formData.subject || `Message from ${formData.name || "Portfolio Visitor"}`);
    const body = encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ type: "idle", message: "" });

    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        type: "error",
        message: "Please fill in all required fields (Name, Email, and Message).",
      });
      toast.error("Please fill in all required fields.");
      return;
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      toast.error("Invalid email address format.");
      return;
    }

    setIsSubmitting(true);

    try {
      const formPayload = new FormData(e.currentTarget);
      formPayload.append("access_key", WEB3FORMS_ACCESS_KEY);
      formPayload.set("from_name", formData.name.trim());
      if (formData.subject.trim()) {
        formPayload.set("subject", formData.subject.trim());
      } else {
        formPayload.set("subject", `New Portfolio Message from ${formData.name.trim()}`);
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload,
      });

      const data = await response.json().catch(() => null);

      if (data && data.success) {
        setStatus({
          type: "success",
          message: "Your message has been dispatched successfully! I will get back to you shortly.",
        });
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(data?.message || "Failed to dispatch message via Web3Forms.");
      }
    } catch (err: unknown) {
      console.warn("Web3Forms submission error:", err);
      const errMsg = err instanceof Error ? err.message : "Failed to dispatch message.";
      setStatus({
        type: "fallback",
        message: `${errMsg} You can send your message directly via email:`,
      });
      toast.error("Submission failed. You can use direct email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative border-b border-border/40">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-xs font-mono text-muted-foreground">
            <span>LET'S BUILD TOGETHER</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-foreground">
            Initiate a <span className="text-muted-foreground font-normal">Conversation</span>.
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl">
            Whether you have an ambitious product idea, an engineering role, or a consulting inquiry, my inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info & Availability (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-card border border-border space-y-6">
              <div>
                <h3 className="text-xl font-bold font-display text-foreground mb-2">
                  Direct Inquiries
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Based in India, working with teams globally. Typical response turnaround within 24 hours.
                </p>
              </div>

              {/* Email Card with Quick Copy */}
              <div className="p-4 rounded-xl bg-secondary border border-border flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-background border border-border text-foreground flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-mono text-muted-foreground uppercase">Email</div>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors truncate block"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleCopyEmail}
                  className="rounded-lg bg-background border border-border hover:bg-muted shrink-0 text-foreground"
                  aria-label="Copy Email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-secondary border border-border flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-background border border-border text-foreground flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-muted-foreground uppercase">Location</div>
                  <div className="text-sm font-medium text-foreground">
                    {contact.location}
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-xl bg-secondary border border-border flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-background border border-border text-foreground flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-muted-foreground uppercase">Phone</div>
                  <a
                    href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                    className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
                  >
                    {contact.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Scope of engagement */}
            <div className="p-6 rounded-2xl bg-card border border-border">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground block mb-3">
                Engagements & Roles
              </span>
              <div className="flex flex-wrap gap-1.5 text-xs font-mono text-muted-foreground">
                {contact.engagements.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-md bg-secondary border border-border text-foreground/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 rounded-2xl bg-card border border-border shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold font-display text-foreground">
                  Send a Message
                </h3>
                <span className="text-xs font-mono text-muted-foreground">
                  * Required fields
                </span>
              </div>

              {/* Inline Status Messages */}
              {status.type === "success" && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-start gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-medium text-foreground">Dispatched Successfully</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{status.message}</p>
                  </div>
                </div>
              )}



              {status.type === "error" && (
                <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 flex items-start gap-3 text-sm">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-medium text-foreground">Validation Error</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{status.message}</p>
                  </div>
                </div>
              )}

              {status.type === "fallback" && (
                <div className="mb-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 space-y-3">
                  <div className="flex items-start gap-3 text-sm">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-amber-400" />
                    <div>
                      <p className="font-medium text-foreground">Direct Sending Blocked</p>
                      <p className="text-xs text-muted-foreground leading-relaxed pt-0.5">{status.message}</p>
                    </div>
                  </div>
                  <Button
                    type="button"
                    onClick={openMailClient}
                    className="w-full bg-secondary hover:bg-muted text-foreground border border-border text-xs font-mono gap-2 rounded-lg"
                  >
                    <span>Open in Email Client with Prefilled Message</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Button>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="text-xs font-mono text-muted-foreground uppercase">
                      Your Name <span className="text-foreground">*</span>
                    </label>
                    <Input
                      id="contact-name"
                      name="name"
                      autoComplete="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="rounded-xl bg-secondary border-border focus:border-neutral-500 py-6 text-foreground placeholder:text-muted-foreground/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="text-xs font-mono text-muted-foreground uppercase">
                      Email Address <span className="text-foreground">*</span>
                    </label>
                    <Input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="rounded-xl bg-secondary border-border focus:border-neutral-500 py-6 text-foreground placeholder:text-muted-foreground/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-subject" className="text-xs font-mono text-muted-foreground uppercase">
                    Subject / Objective
                  </label>
                  <Input
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="rounded-xl bg-secondary border-border focus:border-neutral-500 py-6 text-foreground placeholder:text-muted-foreground/50"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-message" className="text-xs font-mono text-muted-foreground uppercase">
                    Message <span className="text-foreground">*</span>
                  </label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, requirements, or timeframe..."
                    className="rounded-xl bg-secondary border-border focus:border-neutral-500 text-foreground placeholder:text-muted-foreground/50 resize-none p-4"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-6 rounded-xl bg-foreground text-background hover:bg-foreground/90 font-medium text-base transition-all duration-200 gap-2 cursor-pointer disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <span className="font-mono text-sm">Transmitting to {contact.email}...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>

                <div className="flex items-center justify-between pt-1 text-xs text-muted-foreground">
                  <span className="font-mono">Prefer your own email app?</span>
                  <button
                    type="button"
                    onClick={openMailClient}
                    className="inline-flex items-center gap-1.5 font-mono text-foreground hover:underline transition-all cursor-pointer"
                  >
                    <span>Open prefilled draft</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;