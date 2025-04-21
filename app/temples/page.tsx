"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { TempleDetailModal } from "@/components/temple-detail-modal"
import { ExitIntentPopup } from "@/components/exit-intent-popup"
import { usePageViewTracking } from "@/hooks/use-analytics"

// Temple data for the popup content
const otherTemples = [
  {
    id: "anbil",
    name: "Anbil Sathyavaheesvarar Temple",
    image: "/anbil-sathyavaheesvarar-temple-gopuram.jpeg",
    description:
      "A sacred 7th-century shrine dedicated to Lord Shiva, worshipped here as Sathyavaheesvarar, and Goddess Parvati as Soundaranayagi.",
    fullDescription:
      "Anbil Sathyavaheesvarar Temple in Tamil Nadu is a sacred 7th-century shrine dedicated to Lord Shiva, worshipped here as Sathyavaheesvarar, and Goddess Parvati as Soundaranayagi. Located on the banks of the Kollidam River near Trichy, it's revered in the Tamil Saiva canon, the Tevaram, making it a Paadal Petra Sthalam. The temple was built during the Chola period and showcases classic Dravidian architecture with its pristine white gopuram adorned with intricate carvings. Rich in legend, it's believed that sage Parasara worshipped Shiva here. The temple is especially vibrant during Masi Magam, attracting devotees seeking blessings for truth, wisdom, and peace. It's a serene blend of faith, art, and history, nestled among coconut palms and lush greenery.",
    location: "Anbil, Lalgudi, Tiruchirappalli, Tamil Nadu",
  },
  {
    id: "vayalur",
    name: "Vayalur Murugan Temple",
    image: "/vayalur-murugan-temple.jpeg",
    description:
      "A serene temple nestled in a lush setting, Vayalur is dedicated to Lord Muruga (Kartikeya) and associated with the poet Arunagirinathar.",
    fullDescription:
      "Vayalur Murugan Temple is a serene shrine dedicated to Lord Muruga (Kartikeya). This temple is closely associated with Arunagirinathar, the great Tamil saint-poet who composed many of his Tiruppugazh hymns here. Dating back over 1200 years, the temple showcases distinctive architecture with its multi-tiered, colorfully painted shrine adorned with numerous sculptures depicting deities and mythological scenes. Each tier of the temple features intricately carved and painted figures, creating a visually stunning sacred space. The temple is particularly famous for its spiritual significance and the peaceful atmosphere that surrounds it. Devotees believe that prayers offered here for education and knowledge are especially powerful. The annual Skanda Sashti festival attracts thousands of pilgrims from across the region.",
    location: "Vayalur, Tiruchirappalli, Tamil Nadu",
  },
  {
    id: "samayapuram",
    name: "Samayapuram Mariamman Temple",
    image: "/samayapuram-mariamman-temple.jpeg",
    description:
      "One of the most visited shrines in Tamil Nadu, revered for its folk deity, Mariamman—considered a goddess of rain, health, and prosperity.",
    fullDescription:
      "Samayapuram Mariamman Temple is one of the most visited shrines in Tamil Nadu, revered for its folk deity, Mariamman—considered a goddess of rain, health, and prosperity. The temple attracts millions, especially during Thai Poosam and Panguni Uthiram, when rituals like fire-walking and neem leaf offerings are performed. Though the current temple was built during the 17th century, the worship of Mariamman is rooted in pre-Vedic folk traditions. The main deity is made of sand and clay and is believed to be growing in size over the years. The temple is known for its healing powers, and many devotees offer prayers here seeking relief from diseases and for good health. The temple's gopuram (tower) is a stunning example of Dravidian architecture, adorned with hundreds of colorful sculptures depicting various deities and mythological scenes.",
    location: "Samayapuram, Tiruchirappalli, Tamil Nadu",
  },
]

export default function TemplesPage() {
  // Track page views
  usePageViewTracking()

  const [selectedTemple, setSelectedTemple] = useState<(typeof otherTemples)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openTempleModal = (temple: (typeof otherTemples)[0]) => {
    setSelectedTemple(temple)
    setIsModalOpen(true)
  }

  const closeTempleModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Site Header */}
      <SiteHeader />

      {/* Exit Intent Popup */}
      <ExitIntentPopup />

      {/* Header */}
      <header className="relative h-[70vh] w-full overflow-hidden">
        <Image
          src="/trichy-temple-night-aerial.png"
          alt="Illuminated temple gopuram of Trichy at night with city lights below"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="mb-4 font-serif text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            Sacred Temples of Trichy
          </h1>
          <p className="max-w-2xl text-lg font-medium leading-relaxed sm:text-xl">
            Exploring the spiritual heart of Tamil Nadu through its ancient temples
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-5xl px-4 py-12">
        {/* Navigation Links */}
        <div className="mb-8 flex flex-wrap gap-4">
          <Link
            href="/celebrities"
            className="inline-flex items-center gap-2 rounded-md bg-orange-100 px-4 py-2 text-orange-800 transition-colors hover:bg-orange-200"
          >
            <span>திருச்சியின் சினிமா நட்சத்திரங்கள்</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Introduction */}
        <section className="mb-16">
          <p className="mb-8 font-serif text-xl leading-relaxed text-gray-700">
            Tiruchirappalli, fondly known as Trichy, is not just a bustling city in the heart of Tamil Nadu; it is a
            sacred geography shaped by millennia of devotion, dynasties, and Dravidian architecture. Known as one of the
            spiritual capitals of South India, Trichy's landscape is dotted with temples that whisper tales of gods,
            kings, poets, and pilgrims.
          </p>

          {/* Ad Slot 1 - Anbil Mahesh WhatsApp Channel */}
          <div className="my-12 overflow-hidden rounded-lg">
            <a href="https://2ly.link/26OWZ" target="_blank" rel="noopener noreferrer" className="block w-full">
              <div className="w-full">
                <Image
                  src="/anbil-mahesh-whatsapp-ad.jpeg"
                  alt="Join Anbil Mahesh WhatsApp Channel"
                  width={1200}
                  height={200}
                  className="w-full h-auto"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </a>
          </div>
        </section>

        {/* Srirangam Temple */}
        <section className="mb-16">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-12 w-1 rounded-full bg-orange-500"></div>
            <h2 className="font-serif text-3xl font-bold text-gray-800">Srirangam Sri Ranganathaswamy Temple</h2>
          </div>

          <div className="mb-8 grid gap-8 md:grid-cols-2">
            <div className="relative h-80 overflow-hidden rounded-lg">
              <Image
                src="/srirangam-temple-gopuram.png"
                alt="Srirangam Sri Ranganathaswamy Temple with colorful gopurams"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="mb-3 font-serif text-xl font-semibold text-gray-800">
                The Heartbeat of Vaishnavism in Trichy
              </h3>
              <p className="mb-4 text-gray-600">
                Arguably the crown jewel of Trichy, Srirangam Temple is not just a temple but a city within a temple.
                Dedicated to Lord Ranganatha (a reclining form of Vishnu), it is the largest functioning Hindu temple
                complex in the world.
              </p>
              <div className="space-y-2 text-gray-600">
                <p>
                  <strong>Historical Roots:</strong> The temple finds mention in Sangam literature (1st–4th century CE),
                  and the present structure was expanded by the Cholas, Pandyas, Hoysalas, and Vijayanagar kings.
                </p>
                <p>
                  <strong>Cultural Significance:</strong> It is the first and foremost among the 108 Divya Desams
                  (sacred abodes of Vishnu). The famed Vaishnava saint Ramanuja lived here and his tomb is enshrined
                  within the temple.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ad Slot 2 - Join X */}
        <div className="my-12 overflow-hidden rounded-lg">
          <a href="https://2ly.link/26OWs" target="_blank" rel="noopener noreferrer" className="block w-full">
            <div className="w-full">
              <Image
                src="/anbil-mahesh-x-ad.jpeg"
                alt="Join X with Anbil Mahesh"
                width={1200}
                height={200}
                className="w-full h-auto"
                style={{ objectFit: "contain" }}
              />
            </div>
          </a>
        </div>

        {/* Rockfort Temple */}
        <section className="mb-16">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-12 w-1 rounded-full bg-orange-500"></div>
            <h2 className="font-serif text-3xl font-bold text-gray-800">Rockfort Temple</h2>
          </div>

          <div className="mb-8 grid gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center md:order-2">
              <h3 className="mb-3 font-serif text-xl font-semibold text-gray-800">
                The Monument that Touches the Sky in Trichy
              </h3>
              <p className="mb-4 text-gray-600">
                Perched atop a 273-foot high rock, the Ucchi Pillayar Temple (dedicated to Lord Ganesha) and the
                Thayumanavar Temple (Shiva) within the Rockfort complex are not only religious centres but also
                archaeological marvels.
              </p>
              <div className="space-y-2 text-gray-600">
                <p>
                  <strong>Geological Wonder:</strong> The rock is believed to be over 3.8 billion years old—older than
                  the Himalayas!
                </p>
                <p>
                  <strong>Historic Role:</strong> The fort was of military significance during the Carnatic wars, and
                  the temple structure dates back to the Pallava period (7th century CE), with further contributions
                  from the Nayaks.
                </p>
              </div>
            </div>
            <div className="relative h-80 overflow-hidden rounded-lg md:order-1">
              <Image
                src="/rockfort-temple-trichy-view.png"
                alt="Rockfort Temple"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* Ad Slot 3 - Join Instagram */}
        <div className="my-12 overflow-hidden rounded-lg">
          <a href="https://2ly.link/26OWx" target="_blank" rel="noopener noreferrer" className="block w-full">
            <div className="w-full">
              <Image
                src="/anbil-mahesh-instagram-ad.jpeg"
                alt="Join Instagram with Anbil Mahesh"
                width={1200}
                height={200}
                className="w-full h-auto"
                style={{ objectFit: "contain" }}
              />
            </div>
          </a>
        </div>

        {/* Jambukeswarar Temple */}
        <section className="mb-16">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-12 w-1 rounded-full bg-orange-500"></div>
            <h2 className="font-serif text-3xl font-bold text-gray-800">Jambukeswarar Temple</h2>
          </div>

          <div className="mb-8 grid gap-8 md:grid-cols-2">
            <div className="relative h-80 overflow-hidden rounded-lg">
              <Image
                src="/jambukeswarar-temple-gopuram.png"
                alt="Colorful gopuram of Jambukeswarar Temple in Thiruvanaikaval"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="mb-3 font-serif text-xl font-semibold text-gray-800">A Temple of Water and Wisdom</h3>
              <p className="mb-4 text-gray-600">
                Located in Thiruvanaikaval, this Shaivite temple is dedicated to Lord Shiva in the form of Jambukeswarar
                and Goddess Akilandeswari.
              </p>
              <div className="space-y-2 text-gray-600">
                <p>
                  <strong>Pancha Bhoota Sthalam:</strong> This temple represents the 'water' element among the five
                  elemental temples of Lord Shiva.
                </p>
                <p>
                  <strong>Architectural Heritage:</strong> Built by the Cholas in the 2nd century CE, the temple's
                  water-fed sanctum has a spring that never dries, symbolising its elemental power.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ad Slot 4 - Repeat of Ad Slot 1 (WhatsApp) */}
        <div className="my-12 overflow-hidden rounded-lg">
          <a href="https://2ly.link/26OWZ" target="_blank" rel="noopener noreferrer" className="block w-full">
            <div className="w-full">
              <Image
                src="/anbil-mahesh-whatsapp-ad.jpeg"
                alt="Join Anbil Mahesh WhatsApp Channel"
                width={1200}
                height={200}
                className="w-full h-auto"
                style={{ objectFit: "contain" }}
              />
            </div>
          </a>
        </div>

        {/* Other Temples */}
        <section className="mb-16">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-12 w-1 rounded-full bg-orange-500"></div>
            <h2 className="font-serif text-3xl font-bold text-gray-800">Other Notable Temples</h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {otherTemples.map((temple) => (
              <div
                key={temple.id}
                onClick={() => openTempleModal(temple)}
                className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md cursor-pointer"
              >
                <div className="relative h-48">
                  <Image src={temple.image || "/placeholder.svg"} alt={temple.name} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="mb-2 font-serif text-lg font-semibold text-gray-800">{temple.name}</h3>
                  <p className="mb-3 text-sm text-gray-600">{temple.description}</p>
                  <div className="flex items-center gap-1 text-sm font-medium text-orange-600 hover:text-orange-700">
                    <span>Read more</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Ad Slot 5 - Repeat of Ad Slot 2 (X) */}
        <div className="my-12 overflow-hidden rounded-lg">
          <a href="https://2ly.link/26OWs" target="_blank" rel="noopener noreferrer" className="block w-full">
            <div className="w-full">
              <Image
                src="/anbil-mahesh-x-ad.jpeg"
                alt="Join X with Anbil Mahesh"
                width={1200}
                height={200}
                className="w-full h-auto"
                style={{ objectFit: "contain" }}
              />
            </div>
          </a>
        </div>

        {/* Conclusion */}
        <section className="mb-16">
          <div className="rounded-lg bg-orange-50 p-8">
            <h2 className="mb-4 font-serif text-2xl font-bold text-gray-800">
              Trichy: A Living Confluence of Faith and Architecture
            </h2>
            <p className="mb-4 text-gray-700">
              What makes Trichy's temples unique is not just their antiquity but their active role in modern
              spirituality. These are not relics of a bygone era—they are vibrant with rituals, festivals, and the daily
              rhythm of devotion.
            </p>
            <p className="text-gray-700">
              They stand as a testament to Tamil culture, Dravidian architectural finesse, and the fusion of Bhakti and
              history. Whether you're a pilgrim, a historian, or a curious traveller, Trichy offers an unforgettable
              journey through sacred time.
            </p>
          </div>
        </section>
      </main>

      {/* Temple Detail Modal */}
      <TempleDetailModal isOpen={isModalOpen} onClose={closeTempleModal} temple={selectedTemple} />
    </div>
  )
}
