'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { FiChevronDown, FiMenu } from 'react-icons/fi'
import { LiaSearchSolid } from 'react-icons/lia'
import { RxCross2 } from 'react-icons/rx'
import { assetPath } from '@/lib/assetPath'
import { siteConfig } from '@/lib/site.config'
import GivingBackCards from '@/components/giving-back/GivingBackCards'
import GovernanceCards, { governancePages } from '@/components/site-pages/GovernanceCards'

interface MenuItem {
  label: string
  path: string
  children?: MenuItem[]
}

const GIVING_BACK_MENU_ITEMS: MenuItem[] = [
  { label: 'Fundraisers', path: '/giving-back/fundraisers' },
  { label: 'Charity Auction', path: '/giving-back/auction' },
  { label: 'Golf Tournament', path: '/giving-back/golf-tournament' },
  { label: 'Scholarships', path: '/giving-back/scholarships' },
  { label: 'Charitable Requests', path: '/giving-back/charitable-requests' },
  { label: 'Shower Shaw', path: '/giving-back/shower-shaw' },
]

const ALL_MENU_ITEMS: MenuItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Membership', path: '/membership' },
  { label: 'SSC Merch', path: '/ssc-merch' },
  { label: 'Socials', path: '/socials' },
  { label: 'Special Activities', path: '/special-activities' },
  { label: 'Giving Back', path: '/giving-back', children: GIVING_BACK_MENU_ITEMS },
  {
    label: 'Governance',
    path: '/governance',
    children: governancePages.map((page) => ({ label: page.title, path: page.href })),
  },
  { label: 'Contact Us', path: '/contact-us' },
]

const Header: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const menuItems = ALL_MENU_ITEMS

  const handleSearchToggle = () => setIsSearchOpen(!isSearchOpen)
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  const isActive = (item: MenuItem) =>
    pathname === item.path || Boolean(item.children?.some((child) => pathname === child.path))

  return (
    <header id="header" className="club-header sticky z-50 w-full bg-white shadow-sm">
      <Link
        href="/"
        onClick={handleLinkClick}
        aria-label={`${siteConfig.name} home`}
        className="club-banner absolute inset-x-0 top-0 block w-full"
      >
        <span className="absolute inset-0">
          <Image
            src={assetPath('/Images/shaw-spouses-club-banner.png')}
            alt="Shaw Spouses' Club banner"
            fill
            priority
            sizes="100vw"
            className="club-banner-image"
          />
        </span>
      </Link>

      <div className="absolute inset-x-0 bottom-0 h-[70px] w-full bg-white/95 shadow-sm">
        <div className="mx-auto flex h-full max-w-[1400px] items-center gap-6 px-5">
          <Link href="/" onClick={handleLinkClick} className="club-nav-brand">
            SHAW SPOUSES’ CLUB
            <span>COMMUNITY • CONNECTION • SERVICE</span>
          </Link>
          {/* Menu or Search */}
          {!isSearchOpen ? (
            <div className="flex h-full w-full items-center justify-end">
              {/* Desktop Menu */}
              <nav
                aria-label="Primary navigation"
                className="hidden h-full xl:block transition-all duration-300"
              >
                <ul className="flex h-full items-center space-x-[1px] font-navbar font-[600]">
                  {menuItems.map((item) => (
                    <li key={item.path} className="group flex h-full items-center">
                      <Link
                        href={item.path}
                        onClick={handleLinkClick}
                        aria-current={isActive(item) ? 'page' : undefined}
                        className={`flex items-center gap-1 whitespace-nowrap px-2 py-2 text-[12px] transition-colors duration-200 ${
                          isActive(item) ? 'text-[#234F93]' : 'text-gray-600 hover:text-gray-500'
                        }`}
                      >
                        {item.label}
                        {item.children && <FiChevronDown aria-hidden="true" className="h-4 w-4" />}
                      </Link>
                      {item.children && (
                        <div className="invisible pointer-events-none absolute left-1/2 top-full z-[60] w-[calc(100vw_-_32px)] max-w-[1100px] -translate-x-1/2 rounded-2xl bg-[#F4F7FF] p-4 opacity-0 shadow-xl ring-1 ring-[#D9E5FA] transition-opacity duration-200 group-hover:visible group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:visible group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                          {item.path === '/governance' ? (
                            <div role="group" aria-label="Governance pages">
                              <GovernanceCards onNavigate={handleLinkClick} />
                            </div>
                          ) : (
                            <div role="group" aria-label="Giving Back pages">
                              <GivingBackCards />
                              <Link
                                href="/giving-back/auction"
                                onClick={handleLinkClick}
                                className="mt-4 inline-block font-semibold text-[#234F93] underline"
                              >
                                Explore the Charity Auction
                              </Link>
                              <Link
                                href="/giving-back/golf-tournament"
                                onClick={handleLinkClick}
                                className="ml-6 mt-4 inline-block font-semibold text-[#234F93] underline"
                              >
                                Explore the Golf Tournament
                              </Link>
                            </div>
                          )}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Search Icon */}
              <div className="hidden xl:flex items-center">
                <button
                  onClick={handleSearchToggle}
                  className="p-2 text-gray-600 hover:text-[#234F93] transition-colors"
                  aria-label="Search"
                >
                  <LiaSearchSolid className="h-5 w-5 cursor-pointer" />
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="xl:hidden p-2 text-gray-600 hover:text-[#234F93]"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMobileMenuOpen ? (
                  <RxCross2 className="h-6 w-6" />
                ) : (
                  <FiMenu className="h-6 w-6" />
                )}
              </button>
            </div>
          ) : (
            // Search Input
            <div className="w-full max-w-[750px] ml-auto flex items-center justify-between transition-all duration-300">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 focus:outline-none"
                autoFocus
                aria-label="Search input"
              />
              <button
                onClick={handleSearchToggle}
                className="ml-2 p-2 text-gray-600"
                aria-label="Close search"
              >
                <RxCross2 className="cursor-pointer h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu — mounted only when open (so its links aren't focusable
          while collapsed) and animated in with a CSS entrance. */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="xl:hidden absolute left-0 top-full z-40 w-full animate-menuExpand overflow-hidden"
        >
          <div
            className={`max-w-[700px] mx-auto px-6 py-4 bg-white border-t-[3px] border-[#4F83E5] shadow-[0_2px_5px_rgba(0,0,0,0.1)] max-h-[80vh] overflow-auto`}
          >
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    onClick={handleLinkClick}
                    className={`block px-4 py-2 rounded-lg text-sm font-[600] ${
                      isActive(item)
                        ? 'bg-[#F4F7FF] text-[#234F93]'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="ml-5 space-y-1 border-l-2 border-[#4F83E5] pl-3">
                      {item.children.map((child) => (
                        <li key={child.path}>
                          <Link
                            href={child.path}
                            onClick={handleLinkClick}
                            aria-current={isActive(child) ? 'page' : undefined}
                            className={`block rounded-lg px-4 py-2 text-sm font-[600] ${
                              isActive(child)
                                ? 'bg-[#F4F7FF] text-[#234F93]'
                                : 'text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
