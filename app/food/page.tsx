"use client"

import { usePageViewTracking } from "@/hooks/use-analytics"
import { SiteHeader } from "@/components/site-header"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar } from "lucide-react"
import { ExitIntentPopup } from "@/components/exit-intent-popup"
import { PopupSquareAd } from "@/components/popup-square-ad"
import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { ClapsButton } from "@/components/claps-button"
import { ShareButtons } from "@/components/share-buttons"
import { ReadingProgressBar } from "@/components/reading-progress-bar"
import { BookmarkButton } from "@/components/bookmark-button"
import { ReadingTime } from "@/components/reading-time"

// The full content of the article for reading time calculation
const fullArticleContent = `
Tastes of Trichy: A Culinary Trail Through Tamil Nadu's Historic City
Nestled on the banks of the river Cauvery, Tiruchirappalli (affectionately called Trichy) is a city that echoes with history, culture, and irresistible food. Beyond the towering Rockfort and the majestic temples, Trichy offers a feast for the senses with its rich and flavourful cuisine. Whether you're a local or a traveller, here's a list of must-try delicacies that define Trichy's culinary identity.
1. Srirangam Puliyodarai (Tamarind Rice)
No visit to Trichy is complete without tasting the legendary Puliyodarai offered at the Ranganathaswamy Temple in Srirangam. The tangy, spicy tamarind rice mixed with ground spices and sesame oil is temple food at its divine best.
2. Manapparai Murukku
A crunchy, spiral-shaped snack that has earned a GI tag, Manapparai Murukku is synonymous with Trichy. Originating from the small town of Manapparai near Trichy, this savoury treat is a staple in every local household and makes the perfect travel snack.
3. Jigarthanda
Though more associated with Madurai, Trichy has its own fans for this chilled drink. Made from milk, almond gum, sarsaparilla syrup, and ice cream, Jigarthanda is the ideal coolant during hot summer days in Trichy.
4. Banana Leaf Meals at Sangeetha or Vasantha Bhavan
Trichy's banana leaf meals are a wholesome affair — rice served with a range of side dishes, sambar, rasam, kootu, poriyal, appalam, pickle, and payasam. The experience is both satisfying and deeply rooted in Tamil tradition.
5. Kari Dosa & Idiyappam with Paaya
Local eateries in Trichy, especially near Big Bazaar Street and Cantonment, serve unique non-vegetarian delights like Kari Dosa (a dosa topped with spicy mutton curry) and Idiyappam with mutton or chicken paaya — a comforting, mildly spicy stew.
6. Kollu Rasam
A hidden gem in home kitchens, Kollu (horse gram) rasam is a Trichy favourite, often consumed for its taste and health benefits. It's especially popular during the monsoon or cooler months.
7. Kuzhi Paniyaram
This fluffy, bite-sized snack made from fermented batter is a staple in Trichy homes. Both sweet and savoury versions exist, often served with chutneys and piping hot filter coffee.
8. Filter Coffee
Speaking of coffee — Trichy boasts some of the most aromatic South Indian filter coffee, served in traditional stainless steel tumblers. Popular coffee joints like Krishna Bhavan or street-side kiosks ensure you get your caffeine fix in true Tamil style.
9. Muttai Kalakki (Egg Kalakki)
A street food special, Muttai Kalakki is a semi-scrambled egg dish often served with parotta. Simple yet packed with flavour, it's a go-to for locals during evening snack hours.
10. Trichy Biryani
While not as widely famed as Dindigul or Ambur, Trichy's take on biryani is equally mouth-watering — mildly spiced, fragrant with jeeraga samba rice, and served with boiled eggs or meat curry.
Final Bite
Trichy is more than just a spiritual and cultural hub — it's a food lover's paradise. From temple offerings to spicy street eats and traditional home-cooked wonders, the city's cuisine is a harmonious blend of taste, heritage, and heart. So, the next time you're in Trichy, go beyond the tourist checklist and take a delicious detour into its bustling kitchens and roadside stalls — your taste buds will thank you!
`

// Ad component to be placed between food items
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

// Square ad component
function SquareAd({ imageIndex = 0 }: { imageIndex?: number }) {
  const adImages = [
    "/anbil-mahesh-whatsapp-popup-ad.jpeg",
    "/anbil-mahesh-instagram-ad.jpeg",
    "/anbil-mahesh-x-ad.jpeg",
  ]

  const adImage = adImages[imageIndex % adImages.length]

  return (
    <div className="my-8 mx-auto w-[300px] h-[300px] overflow-hidden rounded-lg border border-gray-200 shadow-md">
      <a href="https://2ly.link/26OWZ" target="_blank" rel="noopener noreferrer" className="block">
        <Image
          src={adImage || "/placeholder.svg"}
          alt="Join Anbil Mahesh Social Media"
          width={300}
          height={300}
          className="w-[300px] h-[300px] object-contain"
        />
      </a>
    </div>
  )
}

export default function FoodPage() {
  // Track page views
  usePageViewTracking()

  // State for random popup ads
  const [showRandomAd, setShowRandomAd] = useState(false)
  const [randomAdPosition, setRandomAdPosition] = useState({ top: "50%", left: "50%" })

  // Show random popup ad after some time
  useEffect(() => {
    const timer = setTimeout(() => {
      // Only show if not shown before in this session
      if (sessionStorage.getItem("randomAdShown") !== "true") {
        setRandomAdPosition({
          top: `${Math.floor(Math.random() * 60) + 20}%`,
          left: `${Math.floor(Math.random() * 60) + 20}%`,
        })
        setShowRandomAd(true)
        sessionStorage.setItem("randomAdShown", "true")
      }
    }, 15000) // 15 seconds

    return () => clearTimeout(timer)
  }, [])

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

      {/* Popup Square Ad that appears after scrolling */}
      <PopupSquareAd delay={8000} scrollThreshold={20} />

      {/* Engagement Features */}
      <ClapsButton postId="trichy-food" />
      <ShareButtons title="Tastes of Trichy: A Culinary Trail Through Tamil Nadu's Historic City" url={pageUrl} />
      <BookmarkButton
        postId="trichy-food"
        title="Tastes of Trichy: A Culinary Trail Through Tamil Nadu's Historic City"
      />

      {/* Hero Section */}
      <header className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="/trichy-food-banner.jpeg"
          alt="Traditional South Indian food served on banana leaf including murukku, tamarind rice, idiyappam, and filter coffee"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="mb-4 font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl">
            Tastes of Trichy: A Culinary Trail Through Tamil Nadu's Historic City
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
            <span>April 21, 2025</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <ReadingTime content={fullArticleContent} />
          </div>
        </div>

        {/* Introduction */}
        <div className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            Nestled on the banks of the river Cauvery, Tiruchirappalli (affectionately called Trichy) is a city that
            echoes with history, culture, and irresistible food. Beyond the towering Rockfort and the majestic temples,
            Trichy offers a feast for the senses with its rich and flavourful cuisine. Whether you're a local or a
            traveller, here's a list of must-try delicacies that define Trichy's culinary identity.
          </p>
        </div>

        {/* Food Items List */}
        <div className="space-y-16">
          {/* Item 1 */}
          <div className="relative">
            <div className="absolute -left-4 md:-left-16 top-0 font-serif text-8xl md:text-9xl font-bold text-orange-100 select-none">
              1
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl font-serif font-bold text-gray-800 mb-3">
                Srirangam Puliyodarai (Tamarind Rice)
              </h2>
              <p className="text-gray-700">
                No visit to Trichy is complete without tasting the legendary Puliyodarai offered at the Ranganathaswamy
                Temple in Srirangam. The tangy, spicy tamarind rice mixed with ground spices and sesame oil is temple
                food at its divine best.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="relative">
            <div className="absolute -left-4 md:-left-16 top-0 font-serif text-8xl md:text-9xl font-bold text-orange-100 select-none">
              2
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl font-serif font-bold text-gray-800 mb-3">Manapparai Murukku</h2>
              <p className="text-gray-700">
                A crunchy, spiral-shaped snack that has earned a GI tag, Manapparai Murukku is synonymous with Trichy.
                Originating from the small town of Manapparai near Trichy, this savoury treat is a staple in every local
                household and makes the perfect travel snack.
              </p>
            </div>
          </div>

          {/* Ad after item 2 */}
          <InlineAd imageIndex={0} />

          {/* Item 3 */}
          <div className="relative">
            <div className="absolute -left-4 md:-left-16 top-0 font-serif text-8xl md:text-9xl font-bold text-orange-100 select-none">
              3
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl font-serif font-bold text-gray-800 mb-3">Jigarthanda</h2>
              <p className="text-gray-700">
                Though more associated with Madurai, Trichy has its own fans for this chilled drink. Made from milk,
                almond gum, sarsaparilla syrup, and ice cream, Jigarthanda is the ideal coolant during hot summer days
                in Trichy.
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="relative">
            <div className="absolute -left-4 md:-left-16 top-0 font-serif text-8xl md:text-9xl font-bold text-orange-100 select-none">
              4
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl font-serif font-bold text-gray-800 mb-3">
                Banana Leaf Meals at Sangeetha or Vasantha Bhavan
              </h2>
              <p className="text-gray-700">
                Trichy's banana leaf meals are a wholesome affair — rice served with a range of side dishes, sambar,
                rasam, kootu, poriyal, appalam, pickle, and payasam. The experience is both satisfying and deeply rooted
                in Tamil tradition.
              </p>
            </div>
          </div>

          {/* Ad after item 4 */}
          <InlineAd imageIndex={1} />

          {/* Item 5 */}
          <div className="relative">
            <div className="absolute -left-4 md:-left-16 top-0 font-serif text-8xl md:text-9xl font-bold text-orange-100 select-none">
              5
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl font-serif font-bold text-gray-800 mb-3">Kari Dosa & Idiyappam with Paaya</h2>
              <p className="text-gray-700">
                Local eateries in Trichy, especially near Big Bazaar Street and Cantonment, serve unique non-vegetarian
                delights like Kari Dosa (a dosa topped with spicy mutton curry) and Idiyappam with mutton or chicken
                paaya — a comforting, mildly spicy stew.
              </p>
            </div>
          </div>

          {/* Square Ad after item 5 */}
          <SquareAd imageIndex={1} />

          {/* Item 6 */}
          <div className="relative">
            <div className="absolute -left-4 md:-left-16 top-0 font-serif text-8xl md:text-9xl font-bold text-orange-100 select-none">
              6
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl font-serif font-bold text-gray-800 mb-3">Kollu Rasam</h2>
              <p className="text-gray-700">
                A hidden gem in home kitchens, Kollu (horse gram) rasam is a Trichy favourite, often consumed for its
                taste and health benefits. It's especially popular during the monsoon or cooler months.
              </p>
            </div>
          </div>

          {/* Ad after item 6 */}
          <InlineAd imageIndex={2} />

          {/* Item 7 */}
          <div className="relative">
            <div className="absolute -left-4 md:-left-16 top-0 font-serif text-8xl md:text-9xl font-bold text-orange-100 select-none">
              7
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl font-serif font-bold text-gray-800 mb-3">Kuzhi Paniyaram</h2>
              <p className="text-gray-700">
                This fluffy, bite-sized snack made from fermented batter is a staple in Trichy homes. Both sweet and
                savoury versions exist, often served with chutneys and piping hot filter coffee.
              </p>
            </div>
          </div>

          {/* Item 8 */}
          <div className="relative">
            <div className="absolute -left-4 md:-left-16 top-0 font-serif text-8xl md:text-9xl font-bold text-orange-100 select-none">
              8
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl font-serif font-bold text-gray-800 mb-3">Filter Coffee</h2>
              <p className="text-gray-700">
                Speaking of coffee — Trichy boasts some of the most aromatic South Indian filter coffee, served in
                traditional stainless steel tumblers. Popular coffee joints like Krishna Bhavan or street-side kiosks
                ensure you get your caffeine fix in true Tamil style.
              </p>
            </div>
          </div>

          {/* Ad after item 8 */}
          <InlineAd imageIndex={0} />

          {/* Item 9 */}
          <div className="relative">
            <div className="absolute -left-4 md:-left-16 top-0 font-serif text-8xl md:text-9xl font-bold text-orange-100 select-none">
              9
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl font-serif font-bold text-gray-800 mb-3">Muttai Kalakki (Egg Kalakki)</h2>
              <p className="text-gray-700">
                A street food special, Muttai Kalakki is a semi-scrambled egg dish often served with parotta. Simple yet
                packed with flavour, it's a go-to for locals during evening snack hours.
              </p>
            </div>
          </div>

          {/* Square Ad after item 9 */}
          <SquareAd imageIndex={2} />

          {/* Item 10 */}
          <div className="relative">
            <div className="absolute -left-4 md:-left-16 top-0 font-serif text-8xl md:text-9xl font-bold text-orange-100 select-none">
              10
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl font-serif font-bold text-gray-800 mb-3">Trichy Biryani</h2>
              <p className="text-gray-700">
                While not as widely famed as Dindigul or Ambur, Trichy's take on biryani is equally mouth-watering —
                mildly spiced, fragrant with jeeraga samba rice, and served with boiled eggs or meat curry.
              </p>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="mt-16 p-6 bg-orange-50 rounded-lg">
          <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">Final Bite</h2>
          <p className="text-gray-700">
            Trichy is more than just a spiritual and cultural hub — it's a food lover's paradise. From temple offerings
            to spicy street eats and traditional home-cooked wonders, the city's cuisine is a harmonious blend of taste,
            heritage, and heart. So, the next time you're in Trichy, go beyond the tourist checklist and take a
            delicious detour into its bustling kitchens and roadside stalls — your taste buds will thank you!
          </p>
        </div>

        {/* Related Articles */}
        <div className="mt-16">
          <h3 className="mb-6 text-2xl font-serif font-bold text-gray-800">Related Articles</h3>
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
              href="/celebrities"
              className="group block overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/trichy-cinema-banner.png"
                  alt="Trichy Cinema Stars"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h4 className="mb-2 font-serif text-lg font-semibold text-gray-800 group-hover:text-orange-600">
                  திருச்சியிலிருந்து சினிமாவில் வெற்றி பெற்ற நட்சத்திரங்கள்
                </h4>
                <p className="text-sm text-gray-600 line-clamp-2">யார் தெரியுமா?</p>
              </div>
            </Link>
          </div>
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
      </main>

      {/* Random popup ad */}
      {showRandomAd && (
        <div
          className="fixed z-50 w-[300px] h-[300px] animate-fade-in"
          style={{
            top: randomAdPosition.top,
            left: randomAdPosition.left,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="relative bg-white p-2 rounded-lg shadow-2xl">
            <button
              onClick={() => setShowRandomAd(false)}
              className="absolute -right-2 -top-2 rounded-full bg-white p-1 text-gray-700 shadow-md transition hover:bg-white z-10"
              aria-label="Close popup"
            >
              <X size={16} />
            </button>
            <a href="https://2ly.link/26OWZ" target="_blank" rel="noopener noreferrer" className="block">
              <Image
                src="/anbil-mahesh-whatsapp-popup-ad.jpeg"
                alt="Join Anbil Mahesh WhatsApp Channel"
                width={300}
                height={300}
                className="rounded-md"
              />
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
