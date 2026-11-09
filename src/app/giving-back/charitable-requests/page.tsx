import Link from 'next/link'
import { pageMetadata } from '@/lib/page-metadata'
import { assetPath } from '@/lib/assetPath'
import { clubContacts } from '@/data/contacts'

export const metadata = pageMetadata({
  title: 'Charitable Donation Requests',
  description:
    'Learn about eligibility, funding guidelines, and the charitable donation request process for the Shaw Spouses’ Club.',
  canonical: '/giving-back/charitable-requests',
})

const eligibility = [
  'Requesting organizations must be nonprofit organizations, schools, or military organizations. Funds cannot be given to individuals or for-profit businesses.',
  'The club does not provide monetary support to political candidates or partisan political causes.',
  'Priority goes to organizations and projects supporting the welfare of Shaw AFB military members, their families, and veterans, followed by the local community. Eligible activities may be charitable, religious, scientific, literary, or educational.',
]
const guidelines = [
  'All organizations seeking funding must complete the Charitable Funds Donation Request form.',
  'Organizations may normally receive funds once per fiscal year, which runs from June 1 through May 31. Exceptions are considered on a case-by-case basis.',
  'Funding must support specific programs, events, or services that benefit the local community. General operating funds and salaries cannot be funded.',
  'Club funding cannot be used to purchase alcohol.',
]
const review = [
  'The board reviews requests on the first Tuesday of each month from August through May.',
  'Submit your request at least 10 days before the monthly board meeting. Requests received later will be carried over to the following month’s meeting.',
  'Requests are considered on a first-come, first-served basis, with funds awarded as requests are submitted and approved throughout the year.',
  'Funding is not guaranteed. Approval depends on eligibility, compliance with audit and documentation requirements, and available funds.',
  'The board may approve an amount lower or higher than requested, depending on available funding, program impact, and other considerations.',
]

export default function CharitableRequestsPage() {
  return (
    <section className="bg-[#F4F7FF] px-5 py-12 sm:py-16">
      <article className="mx-auto max-w-5xl rounded-2xl bg-white p-6 shadow-sm sm:p-10">
        <Link
          href="/giving-back"
          className="mb-5 inline-block font-semibold text-[#234F93] underline"
        >
          Giving Back
        </Link>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#376BCD]">
          Supporting Team Shaw and our community
        </p>
        <h1 className="mb-5 text-3xl font-semibold text-[#234F93] sm:text-4xl">
          Charitable Donation Requests
        </h1>
        <p className="mb-6 text-lg leading-8 text-[#26394D]">
          The Shaw Spouses’ Club welcomes funding requests from organizations serving the military
          and local community. Learn about eligibility, review the guidelines, and complete the
          request form below.
        </p>
        <section
          aria-labelledby="giving-impact-heading"
          className="mb-8 rounded-2xl border border-[#D9E5FA] bg-[#F4F7FF] p-6"
        >
          <h2 id="giving-impact-heading" className="mb-3 text-2xl font-semibold text-[#234F93]">
            Giving that makes a difference
          </h2>
          <p className="leading-7 text-[#26394D]">
            In fiscal year 2024–2025, the club provided thousands of dollars in grants supporting
            Team Shaw military members, families, and the local community. Recipients and programs
            included the Shaw Airmen’s Attic, Spouse Appreciation Day, the Library Summer Reading
            Program, Angel Tree, the Dorm Airmen Cookie Drive, Girl Scouts, Sumter United
            Ministries, and the Sumter HS Gamecock Poppers.
          </p>
        </section>
        <div className="space-y-8">
          {[
            { title: 'Who can apply?', id: 'request-eligibility', items: eligibility },
            { title: 'Funding guidelines', id: 'funding-guidelines', items: guidelines },
            { title: 'How requests are reviewed', id: 'request-review', items: review },
          ].map((section) => (
            <section key={section.id} aria-labelledby={section.id}>
              <h2 id={section.id} className="mb-4 text-2xl font-semibold text-[#234F93]">
                {section.title}
              </h2>
              <ul className="list-disc space-y-3 pl-6 leading-7 text-[#26394D]">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <section
          aria-labelledby="request-form-heading"
          className="mt-10 rounded-2xl border border-[#D9E5FA] bg-[#F4F7FF] p-6 sm:p-8"
        >
          <h2 id="request-form-heading" className="mb-3 text-2xl font-semibold text-[#234F93]">
            Charitable Funds Donation Request Form
          </h2>
          <p className="mb-5 leading-7 text-[#26394D]">
            Download the request form and follow its completion and submission instructions.
          </p>
          <a
            href={assetPath('/documents/charitable-funds-request-2025-2026.pdf')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#2F5FB8] px-6 py-3 font-semibold text-white hover:bg-[#376BCD] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#234F93]"
          >
            Charitable Funds Donation Request Form (PDF)
          </a>
          <p className="mt-5 text-sm leading-6 text-[#26394D]">
            For questions about the form or your request, contact{' '}
            <a
              href={`mailto:${clubContacts.philanthropy.email}`}
              className="font-semibold text-[#234F93] underline"
            >
              {clubContacts.philanthropy.email}
            </a>
            .
          </p>
        </section>
      </article>
    </section>
  )
}
