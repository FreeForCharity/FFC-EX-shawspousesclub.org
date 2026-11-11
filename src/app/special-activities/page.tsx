import Image from 'next/image'
import { assetPath } from '@/lib/assetPath'
import { pageMetadata } from '@/lib/page-metadata'
import ClubProgramPage from '@/components/site-pages/ClubProgramPage'
import InquiryForm from '@/components/site-pages/AuctionSponsorshipForm'

const clubs = [
  {
    name: 'Cookbook Club',
    icon: '🍽️',
    note: 'Share recipes, flavors, and friendship.',
    color: '#FFF3D9',
  },
  { name: 'Pickleball Club', icon: '🏓', note: 'A little friendly competition.', color: '#E4F3F0' },
  { name: 'Wine Night', icon: '🍷', note: 'Sip, chat, and unwind together.', color: '#F9EAF0' },
  { name: 'Lunch Bunch', icon: '🥗', note: 'Good food. Even better company.', color: '#E4F3F0' },
  { name: 'Craft Club', icon: '🎨', note: 'Make something. Make memories.', color: '#FFF3D9' },
  { name: 'Book Club', icon: '📚', note: 'One more chapter, one more friend.', color: '#EAF0FF' },
  {
    name: 'Spouses with Kids',
    icon: '🧸',
    note: 'Connect, play, and grow friendships.',
    color: '#EEEAFB',
  },
]

export const metadata = pageMetadata({
  title: 'Special Activities',
  description: 'Explore special activities and interest groups at the Shaw Spouses’ Club.',
  canonical: '/special-activities',
})

export default function SpecialActivitiesPage() {
  return (
    <ClubProgramPage title="Special Activity Groups" showPoints={false}>
      <section
        aria-labelledby="sub-clubs-heading"
        className="relative mt-8 overflow-hidden rounded-[28px] border border-[#D9E5FA] bg-[#F4F7FF] p-5 sm:p-8"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full border-[24px] border-[#E2EBFD]"
        />
        <div className="relative mb-8 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#376BCD]">
            Little clubs · Big connections
          </p>
          <h2 id="sub-clubs-heading" className="text-4xl font-semibold text-[#234F93] sm:text-5xl">
            Find your people
          </h2>
          <p className="mx-auto mt-3 max-w-md leading-7 text-[#26394D]">
            A shared interest is just the beginning. There’s a little something for everyone in our
            activity sub-clubs.
          </p>
        </div>
        <ul className="relative grid gap-4 sm:grid-cols-2">
          {clubs.map((club) => (
            <li
              key={club.name}
              className="flex items-center gap-4 rounded-[24px] border border-white bg-white p-4 shadow-sm sm:p-5"
            >
              <span
                aria-hidden="true"
                style={{ backgroundColor: club.color }}
                className="flex h-16 w-16 shrink-0 -rotate-6 items-center justify-center rounded-[22px] text-4xl"
              >
                {club.icon}
              </span>
              <div>
                <h3 className="text-xl font-semibold leading-tight text-[#234F93]">{club.name}</h3>
                <p className="mt-2 text-sm leading-5 text-[#26394D]">{club.note}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="relative mt-7 text-center text-sm font-semibold text-[#234F93]">
          Shared hobbies. New friendships. Your SSC community.
        </p>
      </section>
      <figure className="mx-auto mt-8 max-w-[526px]">
        <Image
          src={assetPath('/Images/sub-club-flyer.webp')}
          alt="Shaw Spouses’ Sub Clubs flyer featuring Book Club, Wine Night, Cookbook Club, Pickleball Club, Craft Club, and Lunch Bunch."
          width={526}
          height={681}
          className="h-auto w-full rounded-xl"
        />
      </figure>
      <InquiryForm clubs />
    </ClubProgramPage>
  )
}
