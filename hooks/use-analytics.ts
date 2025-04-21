"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export function usePageViewTracking() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!pathname) return // Skip if pathname is not available yet

    // This is a simple page view tracking function
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "")

    // Track page view
    const trackPageView = () => {
      // This will be automatically picked up by Vercel Analytics
      console.log(`Page view: ${url}`)

      // You can also implement custom tracking here if needed
      // For example, you could send data to your own endpoint
    }

    trackPageView()
  }, [pathname, searchParams])
}
