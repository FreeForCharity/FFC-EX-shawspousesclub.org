import Link from 'next/link'
import { clubContacts } from '@/data/contacts'
import { siteConfig } from '@/lib/site.config'
import InquiryForm from '@/components/site-pages/AuctionSponsorshipForm'

export default function ContactUsPage() {
  return (
    <section className="bg-[#F4F7FF] px-5 py-12 sm:py-16">
      <article className="mx-auto max-w-6xl rounded-2xl bg-white p-6 shadow-sm sm:p-10">
        <Link href="/" className="mb-5 inline-block font-semibold text-[#234F93] underline">
          Home
        </Link>
        <h1 className="faustina-font mb-4 text-3xl font-semibold text-[#234F93] sm:text-4xl">
          Contact Us
        </h1>
        <p className="mb-8 leading-7 text-[#26394D]">
          Contact the Shaw Spouses&apos; Club with questions about membership, activities, or
          charitable programs.
        </p>

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <InquiryForm general />
          <div className="min-w-0 rounded-2xl border border-[#D9E5FA] p-5 sm:p-8">
            <h2 className="mb-2 text-xl font-semibold text-[#234F93]">Email</h2>
            <p className="mb-8 text-[#26394D]">
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="break-words font-semibold text-[#234F93] underline"
              >
                {siteConfig.contactEmail}
              </a>
            </p>

            {siteConfig.addresses.map((address) => (
              <div key={address.label} className="mb-6">
                <h2 className="mb-2 text-xl font-semibold text-[#234F93]">{address.label}</h2>
                <address className="not-italic leading-7 text-[#26394D]">
                  {address.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>
            ))}

            <h2 className="mb-3 mt-8 text-xl font-semibold text-[#234F93]">Follow us</h2>
            <div className="flex flex-wrap gap-4">
              {siteConfig.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#234F93] underline decoration-[#4F83E5] underline-offset-4 hover:text-[#376BCD]"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <section
          aria-labelledby="club-contacts-heading"
          className="mt-10 border-t border-[#D9E5FA] pt-8"
        >
          <h2 id="club-contacts-heading" className="mb-3 text-2xl font-semibold text-[#234F93]">
            Contact a club team
          </h2>
          <p className="mb-6 leading-7 text-[#26394D]">
            Reach the right team for membership, events, charitable programs, and club business.
          </p>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Object.values(clubContacts).map((contact) => (
              <li
                key={contact.email}
                className="min-w-0 rounded-xl border border-[#D9E5FA] bg-[#F4F7FF] p-4"
              >
                <h3 className="mb-2 font-semibold text-[#234F93]">{contact.label}</h3>
                <a
                  href={`mailto:${contact.email}`}
                  className="break-all text-sm font-semibold text-[#234F93] underline"
                >
                  {contact.email}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </section>
  )
}
