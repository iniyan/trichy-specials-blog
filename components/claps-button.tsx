"use client"

import { useState, useEffect } from "react"
import { ThumbsUp } from "lucide-react"

interface ClapsButtonProps {
  postId: string
}

export function ClapsButton({ postId }: ClapsButtonProps) {
  const [claps, setClaps] = useState(0)
  const [hasClapped, setHasClapped] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([])

  // Load claps from localStorage on mount
  useEffect(() => {
    const savedClaps = localStorage.getItem(`post-claps-${postId}`)
    if (savedClaps) {
      setClaps(Number.parseInt(savedClaps, 10))
      setHasClapped(true)
    }
  }, [postId])

  const handleClap = () => {
    // Limit to 50 claps per post
    if (claps >= 50) return

    const newClaps = claps + 1
    setClaps(newClaps)
    setHasClapped(true)
    setIsAnimating(true)

    // Save to localStorage
    localStorage.setItem(`post-claps-${postId}`, newClaps.toString())

    // Create particles
    const newParticles = [...particles]
    for (let i = 0; i < 5; i++) {
      newParticles.push({
        id: Date.now() + i,
        x: Math.random() * 60 - 30,
        y: -(Math.random() * 60 + 20),
      })
    }
    setParticles(newParticles)

    // Remove animation class after animation completes
    setTimeout(() => {
      setIsAnimating(false)
      // Remove particles after they've animated
      setParticles((particles) => particles.filter((p) => p.id > Date.now() - 1000))
    }, 700)
  }

  return (
    <div className="fixed left-4 bottom-24 md:left-8 md:bottom-32 z-40">
      <div className="relative flex flex-col items-center">
        <button
          onClick={handleClap}
          className={`flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-all hover:shadow-xl ${
            isAnimating ? "scale-125" : ""
          } ${hasClapped ? "text-orange-500" : "text-gray-600"}`}
          aria-label="Clap for this post"
        >
          <ThumbsUp className={`h-6 w-6 ${isAnimating ? "animate-ping-once" : ""}`} />

          {/* Particles */}
          {particles.map((particle) => (
            <span
              key={particle.id}
              className="absolute text-orange-500 opacity-0 animate-float"
              style={{
                transform: `translate(${particle.x}px, ${particle.y}px)`,
              }}
            >
              +1
            </span>
          ))}
        </button>

        <span className="mt-2 text-sm font-medium text-gray-700 bg-white/80 px-2 py-1 rounded-full shadow-sm">
          {claps}
        </span>
      </div>
    </div>
  )
}

// Add animations to global CSS
const styles = `
@keyframes pingOnce {
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}

@keyframes float {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(-50px); opacity: 0; }
}

.animate-ping-once {
  animation: pingOnce 0.7s ease-out;
}

.animate-float {
  animation: float 1s ease-out forwards;
}
`

// Add the styles to the document
if (typeof document !== "undefined") {
  const styleElement = document.createElement("style")
  styleElement.innerHTML = styles
  document.head.appendChild(styleElement)
}
