"use client"

import { useState, useEffect } from "react"

export function ReadingProgressBar() {
  const [readingProgress, setReadingProgress] = useState(0)

  useEffect(() => {
    const updateReadingProgress = () => {
      const currentProgress = window.scrollY
      const scrollHeight = document.body.scrollHeight - window.innerHeight

      if (scrollHeight) {
        setReadingProgress(Number((currentProgress / scrollHeight).toFixed(2)) * 100)
      }
    }

    window.addEventListener("scroll", updateReadingProgress)

    return () => {
      window.removeEventListener("scroll", updateReadingProgress)
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 z-50 h-1 w-full bg-gray-200">
      <div className="h-1 bg-orange-500 transition-all duration-100" style={{ width: `${readingProgress}%` }} />
    </div>
  )
}
