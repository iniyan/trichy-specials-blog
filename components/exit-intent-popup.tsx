"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { X } from "lucide-react"

export function ExitIntentPopup() {
  const [showPopup, setShowPopup] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  // Function to handle mouse leave event
  const handleExitIntent = useCallback(
    (e: MouseEvent) => {
      // Only trigger when mouse moves to the top of the page
      if (e.clientY <= 20 && !hasShown) {
        setShowPopup(true)
        setHasShown(true)
        // Store in session storage to prevent showing again in the same session
        sessionStorage.setItem("exitIntentShown", "true")
      }
    },
    [hasShown],
  )

  useEffect(() => {
    // Check if popup has already been shown in this session
    const exitIntentShown = sessionStorage.getItem("exitIntentShown") === "true"
    setHasShown(exitIntentShown)

    // Only add event listener if popup hasn't been shown yet
    if (!exitIntentShown) {
      document.addEventListener("mouseleave", handleExitIntent)
    }

    return () => {
      document.removeEventListener("mouseleave", handleExitIntent)
    }
  }, [handleExitIntent])

  if (!showPopup) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="relative max-h-[90vh] max-w-2xl overflow-auto rounded-lg bg-white p-6 shadow-xl">
        <button
          onClick={() => setShowPopup(false)}
          className="absolute right-4 top-4 rounded-full bg-white/80 p-2 text-gray-700 shadow-md transition hover:bg-white"
          aria-label="Close popup"
        >
          <X size={20} />
        </button>

        <div className="mb-4 text-center">
          <h2 className="mb-2 font-serif text-2xl font-bold text-gray-800">Before You Go!</h2>
        </div>

        {/* WhatsApp Ad - Now with fixed dimensions of 300x300px */}
        <div className="mx-auto my-6 w-[65%] overflow-hidden rounded-lg sm:w-full">
          <a
            href="https://2ly.link/26OWZ"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center"
            onClick={(e) => e.stopPropagation()} // Prevent the popup from closing when clicking the ad
          >
            <div className="mx-auto" style={{ width: "300px", height: "300px" }}>
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

        <div className="mt-4 text-center text-sm text-gray-600"></div>
      </div>
    </div>
  )
}
