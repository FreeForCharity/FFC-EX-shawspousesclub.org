import Link from 'next/link'
import BoardInterestForm from '@/components/site-pages/BoardInterestForm'
import { boardGroups, boardOpenings, boardTerm } from '@/data/board'
import { assetPath } from '@/lib/assetPath'

export default function BoardPage() {
  return (
    <section className="bg-[#F4F7FF] px-5 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/governance"
          className="mb-5 inline-block font-semibold text-[#234F93] underline"
        >
          Governance
        </Link>
        <header className="mb-9 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#2F5FB8]">
            Shaw Spouses&apos; Club
          </p>
          <h1 className="faustina-font mb-3 text-3xl font-semibold text-[#234F93] sm:text-4xl">
            {boardTerm} Governing Board
          </h1>
          <p className="mx-auto max-w-2xl leading-7 text-[#26394D]">
            Meet the volunteers serving on the Shaw Spouses&apos; Club board and standing
            committees.
          </p>
        </header>

        <section
          aria-labelledby="board-openings-heading"
          className="mb-10 rounded-2xl bg-[#234F93] p-6 text-white sm:p-8"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#DCE8FF]">
                Interested in serving?
              </p>
              <h2 id="board-openings-heading" className="mb-3 text-2xl font-semibold sm:text-3xl">
                Board openings for {boardTerm}
              </h2>
              <p className="leading-7 text-white/90">
                The following positions are currently listed as open. Contact the club to ask about
                serving and the responsibilities of each role.
              </p>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Open board positions">
                {boardOpenings.map((role) => (
                  <li
                    key={role}
                    className="rounded-full border border-white/40 px-3 py-1 text-sm font-semibold"
                  >
                    {role}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/contact-us"
              className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-[#234F93] transition-colors hover:bg-[#F4F7FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Contact the club
            </Link>
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-3">
          {boardGroups.map((group) => (
            <section
              key={group.title}
              aria-labelledby={`board-${group.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="rounded-2xl border border-[#D9E5FA] bg-white p-5 shadow-sm sm:p-6"
            >
              <h2
                id={`board-${group.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="mb-5 border-b border-[#D9E5FA] pb-3 text-xl font-semibold text-[#234F93]"
              >
                {group.title}
              </h2>
              <ul className="space-y-3">
                {group.positions.map((position, index) => (
                  <li key={`${position.role}-${position.name}-${index}`}>
                    <a
                      href={assetPath(position.documentPath)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start justify-between gap-3 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4F83E5]"
                      aria-label={`${position.role}: ${position.name}, position description (Word document)`}
                    >
                      <span className="text-sm leading-6 text-[#26394D]">{position.role}</span>
                      <span
                        className={`shrink-0 text-right text-sm font-semibold ${
                          position.name === 'Open' ? 'text-[#376BCD]' : 'text-[#26394D]'
                        }`}
                      >
                        {position.name}
                        {position.name === 'Open' && <span className="sr-only"> position</span>}
                      </span>
                    </a>
                    <p className="mt-1 text-sm leading-6 text-[#26394D]">{position.overview}</p>
                    {position.email && (
                      <a
                        href={`mailto:${position.email}`}
                        className="mt-1 inline-block break-all text-sm font-semibold text-[#234F93] underline"
                      >
                        {position.email}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <section
          aria-labelledby="board-bios-heading"
          className="mx-auto mt-12 max-w-5xl rounded-2xl border border-[#D9E5FA] bg-white p-6 text-center shadow-sm sm:p-8"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#2F5FB8]">
            Get to know the team
          </p>
          <h2
            id="board-bios-heading"
            className="faustina-font text-2xl font-semibold text-[#234F93] sm:text-3xl"
          >
            Board Bios
          </h2>
          <p className="mx-auto mt-3 max-w-2xl leading-6 text-[#26394D]">
            Biographies for the volunteers serving in each position will appear here.
          </p>
          <p className="mt-5 inline-flex rounded-full bg-[#F4F7FF] px-4 py-2 text-sm font-medium text-[#234F93]">
            Bios coming soon
          </p>
        </section>

        <BoardInterestForm />

        <p className="mx-auto mt-8 max-w-4xl text-center text-sm leading-6 text-[#26394D]/80">
          Board roles and openings are listed for the {boardTerm} term. Contact the club for current
          information.
        </p>
      </div>
    </section>
  )
}
