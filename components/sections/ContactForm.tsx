"use client";

import * as React from "react";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

const roleOptions = [
  { value: "architect", label: "Architect" },
  { value: "civil-engineer", label: "Civil Engineer" },
  { value: "quantity-surveyor", label: "Quantity Surveyor" },
  { value: "construction-company", label: "Construction Company" },
  { value: "sustainability-consultant", label: "Sustainability Consultant" },
  { value: "other", label: "Other" },
];

export function ContactForm() {
  const [submitted, setSubmitted] = React.useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    // UI-only: no backend or network request is wired up yet.
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="flex flex-col items-start gap-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-forest-50)] p-8"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-forest-600)] text-white">
          <Icon name="arrow-right" className="h-5 w-5 -rotate-45" strokeWidth={2} />
        </span>
        <h3 className="text-lg font-medium text-[var(--color-ink)]">Request received</h3>
        <p className="text-sm leading-relaxed text-[var(--color-ink-muted)]">
          Thanks for reaching out. A member of the team will follow up at the email address you
          provided.
        </p>
        <Button variant="secondary" onClick={() => setSubmitted(false)} type="button">
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate={false}
      className="rounded-lg border border-[var(--color-border)] bg-white p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Input id="full-name" name="full-name" label="Full name" placeholder="Ada Okafor" required />
        <Input
          id="email"
          name="email"
          type="email"
          label="Work email"
          placeholder="ada@studio.com"
          required
        />
        <Input id="company" name="company" label="Company" placeholder="Studio or firm name" />
        <Select id="role" name="role" label="Role" options={roleOptions} required />
      </div>

      <div className="mt-5">
        <Textarea
          id="message"
          name="message"
          label="Project details"
          placeholder="Tell us about your project and what you'd like to assess."
          required
        />
      </div>

      <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-[var(--color-ink-faint)]">
          This form does not send data anywhere yet — connect it to your backend of choice.
        </p>
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          Send message
        </Button>
      </div>
    </form>
  );
}
