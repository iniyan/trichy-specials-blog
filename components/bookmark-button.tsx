"use client"

import { useState, useEffect } from "react"
import { Bookmark } from "lucide-react"

interface BookmarkButtonProps {
  postId: string
  title: string
}

export function BookmarkButton({ postId, title }: BookmarkButtonProps) {
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]")
    setIsBookmarked(bookmarks.some((bookmark: any) => bookmark.id === postId))
  }, [postId])

  const toggleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]")

    if (isBookmarked) {
      const updatedBookmarks = bookmarks.filter((bookmark: any) => bookmark.id !== postId)
      localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks))
      setIsBookmarked(false)
      setShowTooltip(true)
      setTimeout(() => setShowTooltip(false), 2000)
    } else {
      const updatedBookmarks = [...bookmarks, { id: postId, title, timestamp: Date.now() }]
      localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks))
      setIsBookmarked(true)
      setShowTooltip(true)
      setTimeout(() => setShowTooltip(false), 2000)
    }
  }

  return (
    <div className="fixed right-4 bottom-24 md:right-8 md:bottom-32 z-40">
      <div className="relative">
        <button
          onClick={toggleBookmark}
          className={`flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-all hover:shadow-xl ${
            isBookmarked ? "text-orange-500" : "text-gray-600"
          }`}
          aria-label={isBookmarked ? "Remove bookmark" : "Bookmark this post"}
        >
          <Bookmark className={`h-6 w-6 ${isBookmarked ? "fill-current" : ""}`} />
        </button>

        {showTooltip && (
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white">
            {isBookmarked ? "Bookmarked!" : "Removed!"}
          </span>
        )}
      </div>
    </div>
  )
}
