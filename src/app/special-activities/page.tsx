import Image from 'next/image'
import { assetPath } from '@/lib/assetPath'
import { pageMetadata } from '@/lib/page-metadata'
import ClubProgramPage from '@/components/site-pages/ClubProgramPage'
import InquiryForm from '@/components/site-pages/AuctionSponsorshipForm'

export const metadata = pageMetadata({
  title: 'Special Activities',
  description: 'Explore special activities and interest groups at the Shaw Spouses’ Club.',
  canonical: '/special-activities',
})

export default function SpecialActivitiesPage() {
  return (
    <ClubProgramPage title="Special Activity Groups" showPoints={false}>
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
