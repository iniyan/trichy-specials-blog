"use client"

import { usePageViewTracking } from "@/hooks/use-analytics"
import { SiteHeader } from "@/components/site-header"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar, Thermometer, MapPin, Droplets } from "lucide-react"
import { ExitIntentPopup } from "@/components/exit-intent-popup"
import { ClapsButton } from "@/components/claps-button"
import { ShareButtons } from "@/components/share-buttons"
import { ReadingProgressBar } from "@/components/reading-progress-bar"
import { BookmarkButton } from "@/components/bookmark-button"
import { ReadingTime } from "@/components/reading-time"

// The full content of the article for reading time calculation
const fullArticleContent = `
Are you wondering what to do in Trichy this summer without melting in the heat?
Summer in Trichy (Tiruchirappalli) is a vibrant blend of ancient heritage, natural beauty, and delightful experiences. Despite the soaring temperatures, this historic city offers a plethora of activities to keep you engaged and refreshed. Here's your ultimate guide to making the most of Trichy during the summer months.
🌞 Embrace the Summer Vibes in Trichy
1. Ascend the Iconic Rock Fort Temple
Begin your day early with a visit to the Ucchi Pillayar Temple atop the Rock Fort. This 7th-century temple dedicated to Lord Ganesha offers panoramic views of the city and the Kaveri River. The climb is invigorating, and the morning breeze provides a pleasant respite from the heat.
2. Explore the Majestic Sri Ranganathaswamy Temple
Located in Srirangam, this temple is one of the largest functioning Hindu temples in the world. Its intricate Dravidian architecture and serene ambiance make it a must-visit. The temple's cool stone corridors offer a welcome escape from the sun.
3. Relax at Kallanai (Grand Anicut)
Take a leisurely drive to the ancient Kallanai Dam, built over 2,000 years ago across the Kaveri River. The surrounding areas are perfect for picnics, and the gentle flow of water provides a soothing backdrop.
4. Discover the Tropical Butterfly Conservatory
Located in Srirangam, this conservatory is the largest butterfly park in Asia. Stroll through lush gardens teeming with vibrant butterflies, and enjoy the shaded walkways and water features that make for a refreshing afternoon.
5. Cool Off at Puliyancholai Waterfalls
Nestled at the foothills of the Kolli Hills, Puliyancholai is a serene spot with natural springs and waterfalls. The cool waters and shaded groves make it an ideal location for a day trip.
6. Visit the Anna Science Centre Planetarium
Engage in interactive exhibits and enjoy immersive shows at this educational center. The air-conditioned halls provide a comfortable environment to learn and explore.
7. Indulge in Trichy's Street Food Delights
As the sun sets, the city's streets come alive with food stalls offering local delicacies. Don't miss out on trying Atho noodles, a Burmese-inspired dish that's become a Trichy favorite.
🌡️ Summer Weather Snapshot
Trichy experiences high temperatures during summer, often reaching up to 39°C (102°F). It's advisable to plan outdoor activities during the early morning or late evening hours. Stay hydrated, wear light clothing, and always carry sunscreen to protect against the sun.
🏨 Stay Cool and Comfortable
Consider accommodations that offer amenities like swimming pools or are located near riverside areas to enjoy cooler evenings. Many hotels in Trichy provide comfortable stays with modern facilities to ensure a pleasant summer visit.
Whether you're a history enthusiast, nature lover, or a foodie, Trichy has something special for you this summer. Embrace the warmth, explore the city's rich tapestry, and create unforgettable memories.
`

// Ad component to be placed between sections
function InlineAd({ imageIndex = 0 }: { imageIndex?: number }) {
  // Rotate between different ad images
  const adImages = ["/anbil-mahesh-whatsapp-ad.jpeg", "/anbil-mahesh-instagram-ad.jpeg", "/anbil-mahesh-x-ad.jpeg"]

  const adImage = adImages[imageIndex % adImages.length]

  return (
    <div className="my-12 overflow-hidden rounded-lg border border-gray-200 shadow-md transition-transform hover:scale-[1.01]">
      <a href="https://2ly.link/26OWZ" target="_blank" rel="noopener noreferrer" className="block w-full">
        <div className="w-full">
          <Image
            src={adImage || "/placeholder.svg"}
            alt="Join Anbil Mahesh Social Media"
            width={1200}
            height={200}
            className="w-full h-auto"
            style={{ objectFit: "contain" }}
          />
        </div>
      </a>
    </div>
  )
}

export default function SummerGuidePage() {
  // Track page views
  usePageViewTracking()

  // Get current URL for sharing
  const pageUrl = typeof window !== "undefined" ? window.location.href : ""

  return (
    <div className="min-h-screen bg-white">
      {/* Reading Progress Bar */}
      <ReadingProgressBar />

      {/* Site Header */}
      <SiteHeader />

      {/* Exit Intent Popup */}
      <ExitIntentPopup />

      {/* Engagement Features */}
      <ClapsButton postId="trichy-summer-guide" />
      <ShareButtons title="Summer Guide: What to Do in Trichy Without Melting in the Heat" url={pageUrl} />
      <BookmarkButton
        postId="trichy-summer-guide"
        title="Summer Guide: What to Do in Trichy Without Melting in the Heat"
      />

      {/* Hero Section */}
      <header className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="/trichy-temple-night-aerial.png"
          alt="Aerial view of illuminated Trichy temples at night"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="mb-4 font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl">
            Summer Guide: What to Do in Trichy Without Melting in the Heat
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-3xl px-4 py-12">
        {/* Back to Home Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-8 text-orange-600 hover:text-orange-700 transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>

        {/* Article Meta */}
        <div className="mb-8 flex flex-wrap items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>April 30, 2025</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <ReadingTime content={fullArticleContent} />
          </div>
          <div className="flex items-center gap-1">
            <Thermometer size={14} />
            <span>Summer Guide</span>
          </div>
        </div>

        {/* Introduction */}
        <div className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            Summer in Trichy (Tiruchirappalli) is a vibrant blend of ancient heritage, natural beauty, and delightful
            experiences. Despite the soaring temperatures, this historic city offers a plethora of activities to keep
            you engaged and refreshed. Here's your ultimate guide to making the most of Trichy during the summer months.
          </p>
        </div>

        {/* Weather Snapshot */}
        <div className="mb-12 p-6 bg-orange-50 rounded-lg">
          <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Thermometer size={24} className="text-orange-600" />
            Summer Weather Snapshot
          </h2>
          <p className="text-gray-700 mb-4">
            Trichy experiences high temperatures during summer, often reaching up to 39°C (102°F). It's advisable to
            plan outdoor activities during the early morning or late evening hours.
          </p>
          <div className="flex flex-col gap-2 text-gray-700">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-orange-500"></span>
              <span>Stay hydrated throughout the day</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-orange-500"></span>
              <span>Wear light, breathable clothing</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-orange-500"></span>
              <span>Always carry sunscreen to protect against the sun</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-orange-500"></span>
              <span>Consider carrying an umbrella for shade</span>
            </div>
          </div>
        </div>

        {/* Summer Activities List */}
        <div className="mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-800 mb-8 text-center">
            🌞 Embrace the Summer Vibes in Trichy
          </h2>

          {/* Activity 1 */}
          <div className="mb-16">
            <div className="relative h-64 w-full overflow-hidden rounded-lg mb-6">
              <Image
                src="/rockfort-temple.jpeg"
                alt="Rock Fort Temple in Trichy illuminated by golden sunlight against a stormy sky"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-serif text-2xl font-bold text-white">1. Ascend the Iconic Rock Fort Temple</h3>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700">
                Begin your day early with a visit to the Ucchi Pillayar Temple atop the Rock Fort. This 7th-century
                temple dedicated to Lord Ganesha offers panoramic views of the city and the Kaveri River. The climb is
                invigorating, and the morning breeze provides a pleasant respite from the heat.
              </p>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Clock size={14} className="text-orange-500" />
                  <span>Best time: 6:00 AM - 9:00 AM</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={14} className="text-orange-500" />
                  <span>Central Trichy</span>
                </div>
              </div>
            </div>
          </div>

          {/* Activity 2 */}
          <div className="mb-16">
            <div className="relative h-64 w-full overflow-hidden rounded-lg mb-6">
              <Image
                src="/srirangam-temple.jpeg"
                alt="Colorful and intricately carved Srirangam temple gopuram with detailed sculptures"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-serif text-2xl font-bold text-white">
                  2. Explore the Majestic Sri Ranganathaswamy Temple
                </h3>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700">
                Located in Srirangam, this temple is one of the largest functioning Hindu temples in the world. Its
                intricate Dravidian architecture and serene ambiance make it a must-visit. The temple's cool stone
                corridors offer a welcome escape from the sun.
              </p>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Clock size={14} className="text-orange-500" />
                  <span>Best time: 9:00 AM - 12:00 PM or 4:00 PM - 7:00 PM</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={14} className="text-orange-500" />
                  <span>Srirangam</span>
                </div>
              </div>
            </div>
          </div>

          {/* Ad after activity 2 */}
          <InlineAd imageIndex={0} />

          {/* Activity 3 */}
          <div className="mb-16">
            <div className="relative h-64 w-full overflow-hidden rounded-lg mb-6">
              <Image
                src="/kallanai.jpeg"
                alt="The ancient Kallanai Dam (Grand Anicut) with water flowing through its arches"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-serif text-2xl font-bold text-white">3. Relax at Kallanai (Grand Anicut)</h3>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700">
                Take a leisurely drive to the ancient Kallanai Dam, built over 2,000 years ago across the Kaveri River.
                The surrounding areas are perfect for picnics, and the gentle flow of water provides a soothing
                backdrop.
              </p>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Clock size={14} className="text-orange-500" />
                  <span>Best time: 4:00 PM - 6:00 PM</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={14} className="text-orange-500" />
                  <span>30 km from Trichy</span>
                </div>
                <div className="flex items-center gap-1">
                  <Droplets size={14} className="text-orange-500" />
                  <span>Water body</span>
                </div>
              </div>
            </div>
          </div>

          {/* Activity 4 */}
          <div className="mb-16">
            <div className="relative h-64 w-full overflow-hidden rounded-lg mb-6">
              <Image
                src="/butterfly-park.jpeg"
                alt="Entrance to the Tropical Butterfly Conservatory in Srirangam with decorative rock formations"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-serif text-2xl font-bold text-white">
                  4. Discover the Tropical Butterfly Conservatory
                </h3>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700">
                Located in Srirangam, this conservatory is the largest butterfly park in Asia. Stroll through lush
                gardens teeming with vibrant butterflies, and enjoy the shaded walkways and water features that make for
                a refreshing afternoon.
              </p>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Clock size={14} className="text-orange-500" />
                  <span>Best time: 9:00 AM - 11:00 AM</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={14} className="text-orange-500" />
                  <span>Srirangam</span>
                </div>
              </div>
            </div>
          </div>

          {/* Ad after activity 4 */}
          <InlineAd imageIndex={1} />

          {/* Activity 5 */}
          <div className="mb-16">
            <div className="relative h-64 w-full overflow-hidden rounded-lg mb-6">
              <Image
                src="/waterfalls.jpeg"
                alt="Puliyancholai Waterfalls with multiple cascades flowing over rocky terrain"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-serif text-2xl font-bold text-white">5. Cool Off at Puliyancholai Waterfalls</h3>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700">
                Nestled at the foothills of the Kolli Hills, Puliyancholai is a serene spot with natural springs and
                waterfalls. The cool waters and shaded groves make it an ideal location for a day trip.
              </p>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Clock size={14} className="text-orange-500" />
                  <span>Best time: Full day (start early)</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={14} className="text-orange-500" />
                  <span>85 km from Trichy</span>
                </div>
                <div className="flex items-center gap-1">
                  <Droplets size={14} className="text-orange-500" />
                  <span>Waterfall</span>
                </div>
              </div>
            </div>
          </div>

          {/* Activity 6 */}
          <div className="mb-16">
            <div className="relative h-64 w-full overflow-hidden rounded-lg mb-6">
              <Image
                src="/anna-planetarium.webp"
                alt="Anna Science Centre Planetarium with audience under the night sky"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-serif text-2xl font-bold text-white">
                  6. Visit the Anna Science Centre Planetarium
                </h3>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700">
                Engage in interactive exhibits and enjoy immersive shows at this educational center. The air-conditioned
                halls provide a comfortable environment to learn and explore.
              </p>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Clock size={14} className="text-orange-500" />
                  <span>Best time: 10:00 AM - 5:00 PM</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={14} className="text-orange-500" />
                  <span>Central Trichy</span>
                </div>
              </div>
            </div>
          </div>

          {/* Ad after activity 6 */}
          <InlineAd imageIndex={2} />

          {/* Activity 7 */}
          <div className="mb-16">
            <div className="relative h-64 w-full overflow-hidden rounded-lg mb-6">
              <Image
                src="/trichy-street-foods.png"
                alt="Street food vendors selling traditional Tamil snacks with illuminated Rockfort Temple in background"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-serif text-2xl font-bold text-white">
                  7. Indulge in Trichy's Street Food Delights
                </h3>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700">
                As the sun sets, the city's streets come alive with food stalls offering local delicacies. Don't miss
                out on trying Atho noodles, a Burmese-inspired dish that's become a Trichy favorite.
              </p>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Clock size={14} className="text-orange-500" />
                  <span>Best time: 6:00 PM - 10:00 PM</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={14} className="text-orange-500" />
                  <span>Various locations in Trichy</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stay Cool and Comfortable */}
        <div className="mb-16 p-6 bg-blue-50 rounded-lg">
          <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">🏨 Stay Cool and Comfortable</h2>
          <p className="text-gray-700 mb-4">
            Consider accommodations that offer amenities like swimming pools or are located near riverside areas to
            enjoy cooler evenings. Many hotels in Trichy provide comfortable stays with modern facilities to ensure a
            pleasant summer visit.
          </p>
          <div className="flex flex-col gap-2 text-gray-700">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-blue-500"></span>
              <span>Look for hotels with air conditioning and swimming pools</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-blue-500"></span>
              <span>Properties near the Kaveri River often enjoy cooler breezes</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-blue-500"></span>
              <span>Book accommodations with in-house restaurants to avoid traveling in peak heat</span>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="mb-16">
          <p className="text-lg text-gray-700 leading-relaxed">
            Whether you're a history enthusiast, nature lover, or a foodie, Trichy has something special for you this
            summer. Embrace the warmth, explore the city's rich tapestry, and create unforgettable memories.
          </p>
        </div>

        {/* Final Ad Banner */}
        <div className="mt-12 overflow-hidden rounded-lg">
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

        {/* Related Articles */}
        <div className="mt-16">
          <h3 className="mb-6 text-2xl font-serif font-bold text-gray-800">Explore More of Trichy</h3>
          <div className="grid gap-6 sm:grid-cols-2">
            <Link
              href="/temples"
              className="group block overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/srirangam-temple-gopuram.png"
                  alt="Srirangam Temple"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h4 className="mb-2 font-serif text-lg font-semibold text-gray-800 group-hover:text-orange-600">
                  Sacred Temples of Trichy
                </h4>
                <p className="text-sm text-gray-600 line-clamp-2">
                  Exploring the spiritual heart of Tamil Nadu through its ancient temples
                </p>
              </div>
            </Link>
            <Link
              href="/food"
              className="group block overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/trichy-food-banner.jpeg"
                  alt="Trichy Food"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h4 className="mb-2 font-serif text-lg font-semibold text-gray-800 group-hover:text-orange-600">
                  Tastes of Trichy: A Culinary Trail
                </h4>
                <p className="text-sm text-gray-600 line-clamp-2">
                  From temple offerings to street food specialties, discover the authentic flavors of Trichy
                </p>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
