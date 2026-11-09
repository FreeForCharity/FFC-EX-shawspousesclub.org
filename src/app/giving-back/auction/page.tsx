import Link from 'next/link'
import { pageMetadata } from '@/lib/page-metadata'
import Image from 'next/image'
import { clubContacts } from '@/data/contacts'
import { assetPath } from '@/lib/assetPath'
import PhotoReels from '@/components/site-pages/SocialPhotoReels'
import auctionGalleries from '@/data/auction-galleries.json'
import auctionSponsors from '@/data/auction-sponsors.json'
import AuctionSponsorshipForm from '@/components/site-pages/AuctionSponsorshipForm'

export const metadata = pageMetadata({
  title: 'Charity Auction',
  description:
    'Support scholarships and charitable giving through the Shaw Spouses’ Club Charity Auction.',
  canonical: '/giving-back/auction',
})

export default function AuctionPage() {
  const contact = `mailto:${clubContacts.auction.email}?subject=Charity%20Auction`
  return (
    <section className="bg-[#F4F7FF] px-5 py-12 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap gap-2 text-sm text-[#234F93]">
          <Link href="/giving-back" className="underline">
            Giving Back
          </Link>
          <span aria-hidden="true">/</span>
          <Link href="/giving-back/fundraisers" className="underline">
            Fundraisers
          </Link>
          <span aria-hidden="true">/</span>
          <span>Charity Auction</span>
        </nav>
        <div className="rounded-[28px] border border-[#D9E5FA] bg-white p-6 shadow-sm sm:p-10">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[#376BCD]">
            An evening with a purpose
          </p>
          <h1 className="mb-5 text-4xl font-semibold text-[#234F93] sm:text-5xl">
            Charity Auction
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-[#26394D]">
            Come together to give back. The Shaw Spouses’ Club’s annual Charity Auction helps
            support scholarships and charitable giving in our community.
          </p>
          <div className="my-8 rounded-2xl bg-[#F4F7FF] p-6">
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.14em] text-[#376BCD]">
              Save the date · Jungle Safari
            </p>
            <h2 className="mb-4 text-2xl font-semibold text-[#234F93]">Annual Charity Auction</h2>
            <dl className="mb-5 grid gap-4 text-[#26394D] sm:grid-cols-3">
              <div>
                <dt className="font-semibold">When</dt>
                <dd>
                  <time dateTime="2027-02-20">February 20, 2027</time>
                </dd>
              </div>
              <div>
                <dt className="font-semibold">Doors open</dt>
                <dd>5 PM</dd>
              </div>
              <div>
                <dt className="font-semibold">Where</dt>
                <dd>The Magnolia Club</dd>
              </div>
            </dl>
            <p className="leading-7 text-[#26394D]">
              Join us for a Jungle Safari evening featuring silent and live auctions, experiences,
              luxury items, and exclusive packages. Proceeds support grants and scholarships for
              military families and the Shaw community.
            </p>
          </div>
          <p className="mb-6 text-[#26394D]">Ticket information will be posted when available.</p>
          <a
            href={assetPath('/Images/auction/auction-save-the-date_orig.webp')}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-10 block"
            aria-label="Open the Charity Auction save-the-date flyer (new tab)"
          >
            <Image
              src={assetPath('/Images/auction/auction-save-the-date_orig.webp')}
              alt="Annual Charity Auction: Jungle Safari, February 20, 2027, doors open at 5 PM at The Magnolia Club. Silent and live auctions support grants and scholarships."
              width={1080}
              height={1350}
              sizes="(max-width: 768px) 90vw, 640px"
              className="mx-auto h-auto w-full max-w-xl rounded-2xl"
            />
          </a>
          <h2 className="mb-5 text-2xl font-semibold text-[#234F93]">Be part of the impact</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                title: 'Join us',
                text: 'Interested in attending? Contact us for information about the next auction.',
              },
              {
                title: 'Contribute an item',
                text: 'Have an item or experience to offer? Get in touch with the club to discuss a contribution.',
              },
              {
                title: 'Lend a hand',
                text: 'Help bring the event to life. Ask about opportunities to volunteer with the auction team.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-[#D9E5FA] p-5">
                <h3 className="mb-2 text-xl font-semibold text-[#234F93]">{item.title}</h3>
                <p className="leading-7 text-[#26394D]">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-2">
            <div className="flex flex-col items-start justify-center rounded-2xl border border-[#D9E5FA] bg-[#F4F7FF] p-6 sm:p-8">
              <a
                href={contact}
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#2F5FB8] px-6 py-3 font-semibold text-white hover:bg-[#376BCD]"
              >
                Contact Us About the Auction
              </a>
              <p className="mt-6 text-[#26394D]">
                Learn more about our{' '}
                <Link
                  href="/giving-back/scholarships"
                  className="font-semibold text-[#234F93] underline"
                >
                  scholarship opportunities
                </Link>
                .
              </p>
            </div>
            <section
              aria-labelledby="auction-documents-heading"
              className="flex flex-col items-start justify-center rounded-2xl border border-[#D9E5FA] bg-[#F4F7FF] p-6 sm:p-8"
            >
              <h2
                id="auction-documents-heading"
                className="mb-4 text-2xl font-semibold text-[#234F93]"
              >
                Auction Documents
              </h2>
              <a
                href={assetPath('/documents/ssc-auction-documents.pdf')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#2F5FB8] px-6 py-3 font-semibold text-white hover:bg-[#376BCD] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#234F93]"
              >
                View SSC Auction Documents (PDF)
              </a>
              <a
                href={assetPath('/documents/ssc-tax-exempt.pdf')}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block w-fit font-semibold text-[#234F93] underline"
              >
                View our tax-exempt document (PDF)
              </a>
            </section>
          </div>
          <section
            aria-labelledby="auction-sponsors-heading"
            className="mt-12 border-t border-[#D9E5FA] pt-8"
          >
            <h2
              id="auction-sponsors-heading"
              className="mb-3 text-center text-3xl font-semibold text-[#234F93]"
            >
              Thank you to our 2026 auction sponsors &amp; donors
            </h2>
            <p className="mb-6 text-center leading-7 text-[#26394D]">
              We are grateful to the businesses and individuals whose generosity supports our
              scholarship and community grant programs.
            </p>
            <div className="space-y-8">
              <svg width="0" height="0" aria-hidden="true" className="absolute">
                <defs>
                  <filter id="global-tax-sharpen" colorInterpolationFilters="sRGB">
                    <feConvolveMatrix
                      order="3"
                      kernelMatrix="0 -0.12 0 -0.12 1.48 -0.12 0 -0.12 0"
                      preserveAlpha="true"
                    />
                  </filter>
                </defs>
              </svg>
              {auctionSponsors.map((tier, tierIndex) => (
                <section
                  key={tier.title}
                  aria-label={tier.title}
                  className="rounded-2xl border border-t-4 p-5 shadow-sm sm:p-6"
                  style={{ background: tier.theme.background, borderColor: tier.theme.accent }}
                >
                  <h3
                    className="mb-5 text-center text-2xl font-semibold"
                    style={{ color: tier.theme.heading }}
                  >
                    {tier.title}
                  </h3>
                  {tier.sponsors.length > 0 && (
                    <ul
                      className={`grid gap-4 ${tierIndex === 0 ? 'grid-cols-1' : 'sm:grid-cols-2'}`}
                    >
                      {tier.sponsors.map((sponsor) => (
                        <li key={sponsor.src} className="flex flex-col justify-center p-4">
                          <div
                            className={`relative mx-auto w-full ${tierIndex === 3 ? 'h-20 max-w-44' : tierIndex === 0 ? 'h-40' : 'h-28'}`}
                          >
                            <Image
                              src={assetPath(sponsor.src)}
                              alt={sponsor.name}
                              fill
                              sizes={
                                tierIndex === 0
                                  ? '(max-width: 768px) 80vw, 700px'
                                  : '(max-width: 640px) 80vw, 350px'
                              }
                              className="object-contain"
                              style={
                                sponsor.name === 'Global Tax'
                                  ? { filter: 'url(#global-tax-sharpen)' }
                                  : undefined
                              }
                            />
                          </div>
                          {sponsor.name === 'Global Tax' && (
                            <p
                              className="mt-3 text-center text-sm font-semibold"
                              style={{ color: tier.theme.heading }}
                            >
                              Global Tax and Business Services
                            </p>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>
          </section>
          <div className="mt-10 grid items-start gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] [&>section]:mt-0">
            <AuctionSponsorshipForm />
            <section
              aria-labelledby="auction-contribution-heading"
              className="mt-8 rounded-2xl border border-[#D9E5FA] bg-[#F4F7FF] p-6 text-center sm:p-8"
            >
              <h3
                id="auction-contribution-heading"
                className="mb-3 text-2xl font-semibold text-[#234F93]"
              >
                Make your sponsorship contribution
              </h3>
              <p className="mb-4 leading-7 text-[#26394D]">
                To make your auction sponsorship contribution, use the Zeffy link below or scan the
                QR code. For sponsorship questions or details, use the form alongside this panel.
              </p>
              <a
                href="https://www.zeffy.com/en-US/ticketing/ssc-auction-donations"
                target="_blank"
                rel="noopener noreferrer"
                className="break-words font-semibold text-[#234F93] underline decoration-[#4F83E5] underline-offset-4"
              >
                https://www.zeffy.com/en-US/ticketing/ssc-auction-donations
              </a>
              <a
                href="https://www.zeffy.com/en-US/ticketing/ssc-auction-donations"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Make your auction sponsorship contribution through Zeffy (new tab)"
                className="mx-auto mt-5 block w-fit rounded-lg bg-white p-2"
              >
                <Image
                  src={assetPath('/Images/auction/donation-qr-code.png')}
                  alt="Scan to make your auction sponsorship contribution through Zeffy"
                  width={164}
                  height={164}
                  className="h-auto w-[164px]"
                />
              </a>
            </section>
          </div>

          <PhotoReels
            collections={auctionGalleries}
            title="Memories from past auctions"
            headingId="past-auctions-heading"
            intro="Celebrate the community behind our auctions. Browse five collections of photos from past events, including Lights, Camera, Auction! and Denim & Diamonds."
          />
        </div>
      </div>
    </section>
  )
}
