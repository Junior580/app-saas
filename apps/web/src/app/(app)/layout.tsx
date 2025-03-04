// import { redirect } from 'next/navigation'
//
// import { isAuthenticated } from '@/auth/auth'
//
// export default async function AppLayout({
//   children,
//   sheet,
// }: Readonly<{
//   children: React.ReactNode
//   sheet: React.ReactNode
// }>) {
//   if (!(await isAuthenticated())) {
//     redirect('/auth/sign-in')
//   }
//
//   return (
//     <>
//       {children}
//       {sheet}
//     </>
//   )
// }
'use client' // Marca o componente como cliente

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import { isAuthenticated } from '@/auth/auth'

export default function AppLayout({
  children,
  sheet,
}: {
  children: React.ReactNode
  sheet: React.ReactNode
}) {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    isAuthenticated().then((auth) => {
      if (!auth) {
        router.push('/auth/sign-in')
      } else {
        setLoading(false)
      }
    })
  }, [])

  if (loading) return <p>Loading...</p> // Ou um skeleton

  return (
    <>
      {children}
      {sheet}
    </>
  )
}
