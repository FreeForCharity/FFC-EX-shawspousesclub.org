'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { siteConfig } from '@/lib/site.config'
import { clubContacts } from '@/data/contacts'

export default function AuctionSponsorshipForm({
  general = false,
  clubs = false,
}: {
  general?: boolean
  clubs?: boolean
}) {
  const endpoint = clubs
    ? 'https://formspree.io/f/xjyypzlk'
    : general
      ? 'https://formspree.io/f/meaaplye'
      : 'https://formspree.io/f/mljjowzd'
  const formId = clubs ? 'sub-club-contact' : general ? 'general-contact' : 'auction-sponsorship'
  const replyEmail = general
    ? siteConfig.contactEmail
    : clubs
      ? clubContacts.specialactivities.email
      : clubContacts.auction.email
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    setStatus('sending')
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (!response.ok) throw new Error('Submission failed')
      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }
  const inputClass =
    'mt-2 block w-full rounded-lg border border-[#B8C9E5] bg-white px-3 py-3 text-[#26394D] focus:border-[#234F93] focus:outline focus:outline-2 focus:outline-[#4F83E5]'
  return (
    <section
      id={formId}
      aria-labelledby={`${formId}-heading`}
      className={`scroll-mt-28 rounded-2xl border border-[#D9E5FA] bg-[#F4F7FF] p-5 sm:p-8 ${general ? '' : 'mt-10'}`}
    >
      <h2 id={`${formId}-heading`} className="mb-3 text-2xl font-semibold text-[#234F93]">
        {clubs
          ? 'Have a club question or a new idea?'
          : general
            ? 'Questions, concerns, or comments?'
            : 'Interested in sponsoring the auction?'}
      </h2>
      <p className="mb-6 leading-7 text-[#26394D]">
        {clubs
          ? 'Interested in one of our sub-clubs, or have an idea for a new one? Tell us which club you’re curious about, or share the activity you’d like to see added.'
          : general
            ? 'We’d love to hear from you. Send the club a message below.'
            : 'Send our treasurer a message about sponsorship or donating an auction item.'}{' '}
        All fields are required.
      </p>
      <form action={endpoint} method="POST" onSubmit={submit} className="space-y-5">
        <fieldset disabled={status === 'sending'} className="space-y-5 disabled:opacity-70">
          <legend className="sr-only">
            {clubs
              ? 'Sub-club question or suggestion'
              : general
                ? 'Contact message details'
                : 'Sponsorship inquiry details'}
          </legend>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block font-semibold text-[#26394D]">
              First Name <span aria-hidden="true">*</span>
              <input name="first_name" autoComplete="given-name" required className={inputClass} />
            </label>
            <label className="block font-semibold text-[#26394D]">
              Last Name <span aria-hidden="true">*</span>
              <input name="last_name" autoComplete="family-name" required className={inputClass} />
            </label>
          </div>
          <label className="block font-semibold text-[#26394D]">
            Email <span aria-hidden="true">*</span>
            <input name="email" type="email" autoComplete="email" required className={inputClass} />
          </label>
          <label className="block font-semibold text-[#26394D]">
            {clubs ? 'Your question or sub-club idea' : 'Comment'} <span aria-hidden="true">*</span>
            <textarea name="comment" rows={6} required className={inputClass} />
          </label>
          <p className="text-sm leading-6 text-[#26394D]">
            Your name, email, and message are processed by Formspree and shared with{' '}
            {general || clubs ? 'the club' : 'the club’s treasurer'} to respond to your inquiry. See
            our{' '}
            <Link href="/privacy-policy" className="font-semibold text-[#234F93] underline">
              Privacy Policy
            </Link>
            .
          </p>
          <button
            type="submit"
            className="min-h-11 rounded-full bg-[#2F5FB8] px-7 py-3 font-semibold text-white hover:bg-[#376BCD] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#234F93]"
          >
            {status === 'sending' ? 'Sending…' : 'Submit'}
          </button>
        </fieldset>
        <div aria-live="polite" aria-atomic="true">
          {status === 'success' && (
            <p className="font-semibold text-[#105237]" role="status">
              Thank you! Your message has been submitted.
            </p>
          )}
          {status === 'error' && (
            <p className="text-[#821835]" role="alert">
              Your message could not be sent. Please try again or email{' '}
              <a href={`mailto:${replyEmail}`} className="underline">
                {replyEmail}
              </a>
              .
            </p>
          )}
        </div>
      </form>
    </section>
  )
}
