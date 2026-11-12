'use client'

import { useEffect, useState } from 'react'

export default function BoardPositionOverview({ id, overview }: { id: string; overview: string }) {
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const profile = document.getElementById(id)?.closest('li')
    if (!profile) return

    function dismiss(event: KeyboardEvent) {
      if (event.key === 'Escape' && profile?.matches(':hover, :focus-within')) {
        setDismissed(true)
      }
    }

    function reset() {
      requestAnimationFrame(() => {
        if (!profile?.matches(':hover, :focus-within')) setDismissed(false)
      })
    }

    document.addEventListener('keydown', dismiss)
    profile.addEventListener('pointerleave', reset)
    profile.addEventListener('focusout', reset)
    return () => {
      document.removeEventListener('keydown', dismiss)
      profile.removeEventListener('pointerleave', reset)
      profile.removeEventListener('focusout', reset)
    }
  }, [id])

  return (
    <>
      <div
        id={id}
        role="tooltip"
        className={`invisible absolute left-0 top-full z-10 w-full max-w-md rounded-lg border border-[#D9E5FA] bg-white p-3 text-sm leading-6 text-[#26394D] shadow-lg ${dismissed ? '' : '[@media(hover:hover)]:group-hover:visible group-has-[h4_a:focus-visible]:visible group-has-[details[open]]:!invisible'}`}
      >
        {overview}
      </div>
      <details className="mt-1 text-sm text-[#26394D]">
        <summary className="cursor-pointer font-semibold text-[#234F93]">Details</summary>
        <p className="mt-1 rounded-lg bg-[#F4F7FF] p-3 leading-6">{overview}</p>
      </details>
    </>
  )
}
