export default function BoardPositionOverview({ overview }: { overview: string }) {
  return (
    <details className="mt-1 text-sm text-[#26394D]">
      <summary className="cursor-pointer font-semibold text-[#234F93]">Details</summary>
      <p className="mt-1 rounded-lg bg-[#F4F7FF] p-3 leading-6">{overview}</p>
    </details>
  )
}
