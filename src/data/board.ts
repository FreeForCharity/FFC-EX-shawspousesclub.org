import { clubContacts } from '@/data/contacts'

export type BoardPosition = {
  role: string
  name: string
  documentPath: string
  email?: string
  overview: string
}

export type BoardGroup = {
  title: string
  positions: readonly BoardPosition[]
}

export const boardTerm = '2026–2027'

export const boardOpenings = [
  'Parliamentarian',
  'Social Media Manager',
  'Ways and Means',
  'Golf Tournament Chair',
]

export const boardGroups: readonly BoardGroup[] = [
  {
    title: 'Executive Board',
    positions: [
      {
        role: 'President',
        email: clubContacts.president.email,
        name: 'Nancy Galas',
        documentPath: '/board-positions/president-position-description.docx',
        overview:
          'Leads the club and Governing Board, presides over membership meetings, and represents the club in the community.',
      },
      {
        role: 'Vice President',
        email: clubContacts.vicepresident.email,
        name: 'Jennifer Craven',
        documentPath: '/board-positions/vice-president-position-description.docx',
        overview:
          'Supports the President, steps in when needed, and helps coordinate board committees and club operations.',
      },
      {
        role: 'Treasurer',
        email: clubContacts.treasurer.email,
        name: 'Kelsie Perez',
        documentPath: '/board-positions/treasurer-position-description.docx',
        overview:
          'Oversees club finances, tracks income and expenses, reports to the board, and supports budgeting and required filings.',
      },
      {
        role: 'Secretary',
        email: clubContacts.secretary.email,
        name: 'Angel McPeek',
        documentPath: '/board-positions/secretary-position-description.docx',
        overview:
          'Prepares agendas, records and distributes meeting minutes, and maintains club correspondence and organizational files.',
      },
      {
        role: 'Parliamentarian',
        email: clubContacts.parliamentarian.email,
        name: 'Open',
        documentPath: '/board-positions/parliamentarian-position-description.docx',
        overview:
          'Advises the board on the club’s constitution, bylaws, and meeting procedures; supports voting, elections, and governing-document reviews.',
      },
      {
        role: 'Honorary Advisor',
        name: 'Kristin Walker',
        documentPath: '/board-positions/honorary-advisor-position-description.docx',
        overview:
          'Offers historical perspective and leadership guidance, and represents the club at community events as a non-voting advisor.',
      },
      {
        role: 'Honorary Advisor',
        name: 'Lauren Getz',
        documentPath: '/board-positions/honorary-advisor-position-description.docx',
        overview:
          'Offers historical perspective and leadership guidance, and represents the club at community events as a non-voting advisor.',
      },
    ],
  },
  {
    title: 'General Board',
    positions: [
      {
        role: 'Hospitality',
        email: clubContacts.hospitality.email,
        name: 'Sarah Hughes',
        documentPath: '/board-positions/hospitality-position-description.docx',
        overview:
          'Welcomes members and guests, helps newcomers feel included, and coordinates hospitality details for club events.',
      },
      {
        role: 'Member At Large',
        email: clubContacts.memberatlarge.email,
        name: 'Cleyardis McDonald-Amaker',
        documentPath: '/board-positions/member-at-large-position-description.docx',
        overview:
          'Brings member perspectives to the Executive Board and supports special projects, activity groups, and other board positions.',
      },
      {
        role: 'Membership',
        email: clubContacts.membership.email,
        name: 'Yasmin Hoffman',
        documentPath: '/board-positions/membership-position-description.docx',
        overview:
          'Welcomes and registers members, maintains membership records, and supports dues collection, event check-in, and member recognition.',
      },
      {
        role: 'Philanthropy',
        email: clubContacts.philanthropy.email,
        name: 'Thomasena Days',
        documentPath: '/board-positions/philanthropycharitable-chair-position-description.docx',
        overview:
          'Reviews charitable requests, coordinates approved giving, and leads the annual Cookie Drive with the community.',
      },
      {
        role: 'Publicity / Public Relations',
        email: clubContacts.publicrelations.email,
        name: 'Cristi Ryan',
        documentPath: '/board-positions/public-relations-position-description.docx',
        overview:
          'Maintains the club’s visual identity and creates event promotions, newsletters, and communications materials.',
      },
      {
        role: 'Retiree Liaison',
        email: clubContacts.retireeliaison.email,
        name: 'Alysha Gilbert',
        documentPath: '/board-positions/retiree-liaison-position-description.docx',
        overview:
          'Builds connections with retired military spouses and veteran families, encourages their involvement, and shares relevant resources.',
      },
      {
        role: 'Social Events',
        email: clubContacts.socialevents.email,
        name: 'Eleana Lynch',
        documentPath: '/board-positions/socials-position-description.docx',
        overview:
          'Plans and hosts monthly membership meetings and social events, coordinating schedules, venues, programs, and event details.',
      },
      {
        role: 'Social Media Manager',
        name: 'Open',
        documentPath: '/board-positions/social-media-manager-position-description.docx',
        overview:
          'Maintains the club website and social media channels and coordinates timely posts and event promotions with the board.',
      },
      {
        role: 'Special Activities Coordinator',
        email: clubContacts.specialactivities.email,
        name: 'Eboni Montilus',
        documentPath: '/board-positions/special-activities-coordinator-position-description.docx',
        overview:
          'Starts and supports member-led interest groups, helps recruit participants, and guides groups toward self-sufficiency.',
      },
    ],
  },
  {
    title: 'Standing Committees',
    positions: [
      {
        role: 'Auction Chair',
        email: clubContacts.auction.email,
        name: 'April Johns',
        documentPath: '/board-positions/auction-position-description.docx',
        overview:
          'Leads planning for the annual Charity Auction, including event logistics, volunteers, promotion, sponsors, and donated items.',
      },
      {
        role: 'Cookie Drive Chair',
        email: clubContacts.cookiedrive.email,
        name: 'Angela Menghini',
        documentPath: '/board-positions/cookie-drive-chair-position-description.docx',
        overview:
          'Organizes the annual Cookie Drive with the board and community, coordinating collections, volunteers, packaging, and distribution.',
      },
      {
        role: 'Golf Tournament Chair',
        name: 'Open',
        documentPath: '/board-positions/golf-tournament-chair-position-description.docx',
        overview:
          'Leads planning for the annual Golf Tournament, including event logistics, volunteers, promotion, sponsors, and donated prizes.',
      },
      {
        role: 'Scholarship',
        email: clubContacts.scholarships.email,
        name: 'Cristi Ryan',
        documentPath: '/board-positions/scholarship-chair-position-description.docx',
        overview:
          'Leads scholarship outreach, application and review coordination, and the recognition of scholarship recipients.',
      },
      {
        role: 'Ways and Means',
        email: clubContacts.waysandmeans.email,
        name: 'Open',
        documentPath: '/board-positions/ways-and-means-position-description.docx',
        overview:
          'Coordinates non-charitable fundraising, including merchandise and membership-meeting activities, and reports sales and inventory.',
      },
    ],
  },
]
