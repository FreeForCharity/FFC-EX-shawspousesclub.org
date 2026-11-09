import Link from 'next/link'
import { clubContacts } from '@/data/contacts'

const eligibility = [
  'Spouses of active duty service members, from all branches and ranks',
  'Spouses of Reserve, National Guard, or retired service members',
  'Spouses of Department of Defense employees and widowed spouses',
  'Adult dependents age 18 or older who hold a DoD ID',
  'Unmarried active duty service members and military-to-military spouses',
]

const membershipUrl = 'https://www.zeffy.com/en-US/ticketing/shaw-spouses-clubs-26-27-memberships'

export default function MembershipPage() {
  return (
    <section className="bg-[#F4F7FF] px-5 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="mb-5 inline-block font-semibold text-[#234F93] underline">
          Home
        </Link>

        <header className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#4F83E5]">
            Membership &amp; Activities
          </p>
          <h1 className="faustina-font mb-3 text-3xl font-semibold text-[#234F93] sm:text-4xl">
            Find your community at Shaw
          </h1>
          <p className="mx-auto max-w-3xl text-base leading-7 text-[#26394D] sm:text-lg">
            The Shaw Spouses&apos; Club brings military-connected families together through monthly
            socials, shared interests, and service to the Shaw and Sumter communities.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <section
            aria-labelledby="membership-eligibility-heading"
            className="rounded-2xl border border-[#D9E5FA] bg-white p-6 shadow-sm sm:p-8"
          >
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#4F83E5]">
              Everyone has a place here
            </p>
            <h2
              id="membership-eligibility-heading"
              className="faustina-font mb-4 text-2xl font-semibold text-[#234F93]"
            >
              Who can join?
            </h2>
            <p className="mb-4 leading-6 text-[#26394D]">
              Membership is open to military-connected spouses, families, and service members,
              including:
            </p>
            <ul className="space-y-3">
              {eligibility.map((item) => (
                <li key={item} className="flex gap-3 leading-6 text-[#26394D]">
                  <span aria-hidden="true" className="mt-0.5 font-bold text-[#4F83E5]">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section
            aria-labelledby="membership-join-heading"
            className="rounded-2xl bg-[#234F93] p-6 text-white shadow-sm sm:p-8"
          >
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#DCE8FF]">
              Ready to join?
            </p>
            <h2 id="membership-join-heading" className="faustina-font mb-5 text-2xl font-semibold">
              Become a member
            </h2>
            <p className="leading-6 text-white/85">
              Complete the membership form and pay your dues together in one secure checkout.
            </p>
            <a
              href={membershipUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-[#234F93] transition-colors hover:bg-[#F4F7FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Become a member ↗
            </a>
          </section>
        </div>

        <section
          aria-labelledby="membership-benefits-heading"
          className="mt-8 grid gap-6 md:grid-cols-2"
        >
          <article className="rounded-2xl border border-[#D9E5FA] bg-white p-6 shadow-sm sm:p-8">
            <h2
              id="membership-benefits-heading"
              className="faustina-font mb-3 text-xl font-semibold text-[#234F93]"
            >
              Come as a guest
            </h2>
            <p className="leading-7 text-[#26394D]">
              Eligible prospective members may attend one SSC event as a guest before joining. See
              the Socials page for upcoming gatherings.
            </p>
            <Link
              href="/socials"
              className="mt-4 inline-block font-semibold text-[#234F93] underline underline-offset-4"
            >
              Explore Socials
            </Link>
          </article>
          <article className="rounded-2xl border border-[#D9E5FA] bg-white p-6 shadow-sm sm:p-8">
            <h2 className="faustina-font mb-3 text-xl font-semibold text-[#234F93]">
              More than a monthly social
            </h2>
            <p className="leading-7 text-[#26394D]">
              Members can connect through special interest groups and take part in the club&apos;s
              fundraising, scholarship, and community service activities.
            </p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              <Link
                href="/special-activities"
                className="font-semibold text-[#234F93] underline underline-offset-4"
              >
                Explore Special Activities
              </Link>
              <Link
                href="/board#board-openings-heading"
                className="font-semibold text-[#234F93] underline underline-offset-4"
              >
                Explore Volunteer Opportunities
              </Link>
              <Link
                href="/giving-back/scholarships"
                className="font-semibold text-[#234F93] underline underline-offset-4"
              >
                Explore Scholarship Opportunities
              </Link>
            </div>
          </article>
        </section>

        <section
          aria-labelledby="membership-merch-heading"
          className="mt-8 flex flex-col gap-5 rounded-2xl bg-[#234F93] p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8"
        >
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#DCE8FF]">
              Club Merch
            </p>
            <h2 id="membership-merch-heading" className="faustina-font text-2xl font-semibold">
              Interested in Shaw Spouses&apos; Club merch?
            </h2>
            <p className="mt-2 max-w-2xl leading-6 text-white/85">
              Show your club spirit! Visit the merch page to explore our current selection and place
              an order. Check back for new items as our collection grows.
            </p>
          </div>
          <Link
            href="/ssc-merch"
            className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-[#234F93] transition-colors hover:bg-[#F4F7FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Shop SSC Merch
          </Link>
        </section>

        <p className="mt-8 text-center leading-6 text-[#26394D]">
          Questions about joining? Email{' '}
          <a
            href={`mailto:${clubContacts.membership.email}`}
            className="font-semibold text-[#234F93] underline"
          >
            {clubContacts.membership.email}
          </a>
          .
        </p>
      </div>
    </section>
  )
}
