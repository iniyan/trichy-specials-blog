"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X } from "lucide-react"

interface PopupSquareAdProps {
  delay?: number // Delay in milliseconds before showing the popup
  scrollThreshold?: number // Percentage of page scrolled before showing
}

export function PopupSquareAd({ delay = 5000, scrollThreshold = 30 }: PopupSquareAdProps) {
  const [showPopup, setShowPopup] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    // Check if popup has already been shown in this session
    const popupShown = sessionStorage.getItem("popupSquareAdShown") === "true"
    setHasShown(popupShown)

    if (popupShown) return

    // Function to handle scroll event
    const handleScroll = () => {
      if (hasShown) return

      const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      if (scrolled >= scrollThreshold) {
        setTimeout(() => {
          setShowPopup(true)
          setHasShown(true)
          sessionStorage.setItem("popupSquareAdShown", "true")
        }, delay)
        window.removeEventListener("scroll", handleScroll)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [delay, scrollThreshold, hasShown])

  if (!showPopup) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-xs animate-fade-in">
      <div className="relative overflow-hidden rounded-lg bg-white p-2 shadow-xl">
        <button
          onClick={() => setShowPopup(false)}
          className="absolute right-2 top-2 rounded-full bg-white/80 p-1 text-gray-700 shadow-md transition hover:bg-white"
          aria-label="Close popup"
        >
          <X size={16} />
        </button>

        <a
          href="https://2ly.link/26OWZ"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-[300px] h-[300px]">
            <Image
              src="/anbil-mahesh-whatsapp-popup-ad.jpeg"
              alt="Join Anbil Mahesh WhatsApp Channel"
              width={300}
              height={300}
              className="h-[300px] w-[300px] object-contain"
            />
          </div>
        </a>
      </div>
    </div>
  )
}

// Add a fade-in animation
const styles = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}
`

// Add the styles to the document
if (typeof document !== "undefined") {
  const styleElement = document.createElement("style")
  styleElement.innerHTML = styles
  document.head.appendChild(styleElement)
}
