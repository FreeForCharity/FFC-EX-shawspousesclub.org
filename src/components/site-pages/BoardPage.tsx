import Image from 'next/image'
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
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#26394D]">
            <a href="#meet-board-heading" className="font-semibold text-[#234F93] underline">
              Explore board profiles
            </a>
            . Hover or tab to a title for a quick overview, or click it to open the PDF. On a touch
            screen, tap Details for the overview.
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

        <BoardInterestForm />

        <p className="mx-auto mt-8 max-w-4xl text-center text-sm leading-6 text-[#26394D]/80">
          Board roles and openings are listed for the {boardTerm} term. Contact the club for current
          information.
        </p>

        <section aria-labelledby="meet-board-heading" className="mx-auto mt-12 max-w-6xl">
          <h2
            id="meet-board-heading"
            className="scroll-mt-24 faustina-font text-center text-3xl font-semibold text-[#234F93]"
          >
            Meet the Board
          </h2>
          {boardGroups.map((group, groupIndex) => (
            <section key={group.title} className="mt-8">
              <h3 className="mb-5 border-b-2 border-[#D9E5FA] pb-2 text-2xl font-bold text-[#234F93] sm:text-3xl">
                {group.title}
              </h3>
              <ul
                className={
                  groupIndex === 0 ? 'grid gap-5 md:grid-cols-2' : 'grid gap-5 sm:grid-cols-2'
                }
              >
                {group.positions.map((position, index) => (
                  <li
                    key={`${position.role}-${position.name}`}
                    className={
                      groupIndex === 0
                        ? 'group relative flex items-start gap-4 rounded-2xl border border-[#D9E5FA] bg-white p-5'
                        : 'group relative border-t border-[#D9E5FA] py-4'
                    }
                  >
                    {groupIndex === 0 &&
                      position.name !== 'Open' &&
                      (position.photoPath ? (
                        <Image
                          src={assetPath(position.photoPath)}
                          alt=""
                          width={80}
                          height={80}
                          className="size-20 shrink-0 rounded-full object-cover"
                        />
                      ) : (
                        <span
                          aria-hidden="true"
                          className="flex size-20 shrink-0 items-center justify-center rounded-full bg-[#DCE8FF] text-xl font-semibold text-[#234F93]"
                        >
                          {position.name
                            .split(' ')
                            .map((part) => part[0])
                            .slice(0, 2)
                            .join('')}
                        </span>
                      ))}
                    <div className="min-w-0">
                      <h4 className="text-lg font-semibold text-black">
                        <a
                          href={assetPath(position.documentPath)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline decoration-[#A5B5CC] underline-offset-4 hover:text-[#234F93]"
                          aria-label={`${position.role}, position description (PDF, opens in a new tab)`}
                          aria-describedby={`${group.title.toLowerCase().replace(/\s+/g, '-')}-overview-${index}`}
                        >
                          {position.role}
                        </a>{' '}
                        <span aria-hidden="true">·</span>{' '}
                        <span className="text-base text-[#26394D]">{position.name}</span>
                      </h4>
                      {position.bio && (
                        <p className="mt-2 text-sm leading-6 text-[#26394D]">{position.bio}</p>
                      )}
                      <div
                        id={`${group.title.toLowerCase().replace(/\s+/g, '-')}-overview-${index}`}
                        role="tooltip"
                        className="invisible absolute left-0 top-full w-full max-w-md z-10 rounded-lg border border-[#D9E5FA] bg-white p-3 text-sm leading-6 text-[#26394D] shadow-lg group-focus-within:visible [@media(hover:hover)]:group-hover:visible [@media(hover:none)]:hidden"
                      >
                        {position.overview}
                      </div>
                      <details className="mt-1 text-sm text-[#26394D] [@media(hover:hover)]:hidden">
                        <summary className="cursor-pointer font-semibold text-[#234F93]">
                          Details
                        </summary>
                        <p className="mt-1 rounded-lg bg-[#F4F7FF] p-3 leading-6">
                          {position.overview}
                        </p>
                      </details>
                      {position.email && (
                        <a
                          href={`mailto:${position.email}`}
                          className="mt-1 inline-block break-all text-sm font-semibold text-[#234F93] underline"
                        >
                          {position.email}
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </section>
      </div>
    </section>
  )
}
