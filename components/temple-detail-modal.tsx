"use client"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { X } from "lucide-react"

interface TempleDetailModalProps {
  isOpen: boolean
  onClose: () => void
  temple: {
    name: string
    image: string
    description: string
    fullDescription: string
    location: string
  } | null
}

export function TempleDetailModal({ isOpen, onClose, temple }: TempleDetailModalProps) {
  if (!temple) return null

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto p-0 sm:rounded-lg">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-white/80 p-2 text-gray-700 shadow-md transition hover:bg-white"
        >
          <X size={20} />
        </button>

        <div className="relative h-64 w-full sm:h-80">
          <Image src={temple.image || "/placeholder.svg"} alt={temple.name} fill className="object-cover" />
        </div>

        {/* Ad Slot in Modal - WhatsApp Channel - Now with fixed dimensions of 300x300px */}
        <div className="mx-auto my-6 w-[65%] overflow-hidden rounded-lg sm:w-full">
          <a
            href="https://2ly.link/26OWZ"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center"
            onClick={(e) => e.stopPropagation()} // Prevent the modal from closing when clicking the ad
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

        <div className="p-6">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl font-bold text-gray-800">{temple.name}</DialogTitle>
          </DialogHeader>

          <div className="mt-4 space-y-4 text-gray-700">
            <p>{temple.fullDescription}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
