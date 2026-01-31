'use client'

import { useState, useEffect } from 'react'

export default function CurrentYear() {
  const [year, setYear] = useState(2026)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setYear(new Date().getFullYear())
  }, [])

  // Return static value during SSR to avoid prerender errors
  if (!mounted) {
    return <span>2026</span>
  }

  return <span>{year}</span>
}
