'use client'
import { usePathname, useRouter } from 'next/navigation'
import React, { ReactNode, useEffect } from 'react'

export default function AuthProvider({ children } : { children : ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

 

  useEffect(() => {
    const isLoggedIng = localStorage.getItem('auth_token');
    if (!isLoggedIng) {
      router.push('/login');
    }
  }, [pathname, router]);

  return (
    <>
      {children}
    </>
  )
}
