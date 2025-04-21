"use client"

import { Facebook, Twitter, Linkedin, Link2 } from "lucide-react"
import { useState } from "react"

interface ShareButtonsProps {
  title: string
  url: string
}

export function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)

  const encodedTitle = encodeURIComponent(title)
  const encodedUrl = encodeURIComponent(url)

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="fixed right-4 top-1/3 z-40 flex flex-col gap-3">
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-blue-600 shadow-lg transition-all hover:bg-blue-600 hover:text-white hover:shadow-xl"
        aria-label="Share on Facebook"
      >
        <Facebook size={18} />
      </a>

      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sky-500 shadow-lg transition-all hover:bg-sky-500 hover:text-white hover:shadow-xl"
        aria-label="Share on Twitter"
      >
        <Twitter size={18} />
      </a>

      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-blue-700 shadow-lg transition-all hover:bg-blue-700 hover:text-white hover:shadow-xl"
        aria-label="Share on LinkedIn"
      >
        <Linkedin size={18} />
      </a>

      <button
        onClick={handleCopyLink}
        className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-600 shadow-lg transition-all hover:bg-gray-600 hover:text-white hover:shadow-xl"
        aria-label="Copy link"
      >
        <Link2 size={18} />

        {copied && (
          <span className="absolute -right-20 top-1/2 -translate-y-1/2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white">
            Copied!
          </span>
        )}
      </button>
    </div>
  )
}
