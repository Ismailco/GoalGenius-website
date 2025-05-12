export const dynamic = 'force-static'
export const revalidate = 86400 // revalidate every 24 hours

export default function DonateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}
