"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { ExitIntentPopup } from "@/components/exit-intent-popup"
import { usePageViewTracking } from "@/hooks/use-analytics"
import { ArticleCard } from "@/components/article-card"

export default function HomePage() {
  // Track page views
  usePageViewTracking()

  return (
    <div className="min-h-screen bg-white">
      {/* Site Header */}
      <SiteHeader />

      {/* Exit Intent Popup */}
      <ExitIntentPopup />

      {/* Hero Section */}
      <header className="relative h-[80vh] w-full overflow-hidden">
        <Image
          src="/srirangam-aerial-view.png"
          alt="Aerial view of Srirangam Temple complex with its magnificent gopurams"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="mb-4 font-serif text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">Trichy Specials</h1>
          <p className="max-w-2xl text-lg font-medium leading-relaxed sm:text-xl">
            Discover the temples, celebrities, and culinary delights of Tiruchirappalli
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/temples"
              className="rounded-md bg-orange-600 px-6 py-3 text-lg font-medium text-white shadow-lg transition-all hover:bg-orange-700 hover:shadow-xl"
            >
              Explore Temples
            </Link>
            <Link
              href="/celebrities"
              className="rounded-md bg-white px-6 py-3 text-lg font-medium text-orange-600 shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl"
            >
              Meet Celebrities
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-12">
        {/* Featured Sections */}
        <section className="mb-20">
          <h2 className="mb-12 text-center font-serif text-4xl font-bold text-gray-800">Featured Highlights</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Temples Card */}
            <div className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
              <Link href="/temples" className="block">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src="/srirangam-temple-complex.png"
                    alt="Srirangam Temple Complex"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="font-serif text-2xl font-bold text-white">Sacred Temples</h3>
                    <p className="mt-2 text-gray-200">
                      Explore the spiritual heart of Tamil Nadu through its ancient temples
                    </p>
                  </div>
                </div>
              </Link>
              <div className="p-6">
                <p className="mb-4 text-gray-600">
                  Discover the magnificent temples of Trichy, including Srirangam, Rockfort, and Jambukeswarar temples,
                  each with its unique architecture and spiritual significance.
                </p>
                <Link
                  href="/temples"
                  className="inline-flex items-center gap-2 text-orange-600 transition-colors hover:text-orange-700"
                >
                  <span>Explore temples</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Celebrities Card */}
            <div className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
              <Link href="/celebrities" className="block">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src="/trichy-cinema-stars.jpg"
                    alt="Famous personalities from Trichy"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="font-serif text-2xl font-bold text-white">Famous Personalities</h3>
                    <p className="mt-2 text-gray-200">
                      Meet the stars who rose from Trichy to national and international fame
                    </p>
                  </div>
                </div>
              </Link>
              <div className="p-6">
                <p className="mb-4 text-gray-600">
                  From cinema icons to literary giants, discover the famous personalities who hail from Trichy and have
                  made their mark in various fields.
                </p>
                <Link
                  href="/celebrities"
                  className="inline-flex items-center gap-2 text-orange-600 transition-colors hover:text-orange-700"
                >
                  <span>Meet celebrities</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Food Card */}
            <div className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
              <Link href="/food" className="block">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src="/trichy-food-banner.jpeg"
                    alt="Traditional South Indian food from Trichy"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="font-serif text-2xl font-bold text-white">Culinary Delights</h3>
                    <p className="mt-2 text-gray-200">Taste the authentic flavors of Trichy's traditional cuisine</p>
                  </div>
                </div>
              </Link>
              <div className="p-6">
                <p className="mb-4 text-gray-600">
                  Explore the rich culinary heritage of Trichy, from temple prasadams to street food specialties that
                  will tantalize your taste buds.
                </p>
                <Link
                  href="/food"
                  className="inline-flex items-center gap-2 text-orange-600 transition-colors hover:text-orange-700"
                >
                  <span>Discover food</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Ad Banner */}
        <section className="mb-20">
          <div className="overflow-hidden rounded-lg">
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

        {/* Latest Articles */}
        <section className="mb-20">
          <h2 className="mb-12 text-center font-serif text-4xl font-bold text-gray-800">Latest Articles</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <ArticleCard
              title="The Architectural Marvel of Srirangam Temple"
              description="Explore the intricate design and spiritual significance of the largest functioning Hindu temple complex in the world."
              image="/srirangam-temple-gopuram.png"
              slug="/temples"
              imageAlt="Srirangam Temple Gopuram"
            />
            <ArticleCard
              title="Kamal Haasan: Trichy's Pride"
              description="The journey of the versatile actor, director, and now politician who spent his formative years in Trichy."
              image="/kamal-haasan.jpeg"
              slug="/celebrities"
              imageAlt="Kamal Haasan"
            />
            <ArticleCard
              title="Tastes of Trichy: A Culinary Trail"
              description="From temple offerings to street food specialties, discover the authentic flavors of Trichy's traditional cuisine."
              image="/trichy-food-banner.jpeg"
              slug="/food"
              imageAlt="Traditional South Indian food from Trichy"
            />
          </div>
        </section>

        {/* Second Ad Banner */}
        <section className="mb-20">
          <div className="overflow-hidden rounded-lg">
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
        </section>

        {/* Newsletter Signup */}
        <section className="mb-20">
          <div className="rounded-lg bg-orange-50 p-8 md:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold text-gray-800">Stay Updated with Trichy Specials</h2>
              <p className="mb-8 text-lg text-gray-600">
                Subscribe to our newsletter to receive the latest updates on Trichy's temples, celebrities, and culinary
                delights.
              </p>
              <form className="flex flex-col items-center gap-4 sm:flex-row">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full flex-1 rounded-md border border-gray-300 px-4 py-3 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
                <button
                  type="submit"
                  className="w-full rounded-md bg-orange-600 px-6 py-3 font-medium text-white shadow-md transition-colors hover:bg-orange-700 sm:w-auto"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-gray-300">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 font-serif text-xl font-bold text-white">Trichy Specials</h3>
              <p className="mb-4">
                Discover the temples, celebrities, and culinary delights of Tiruchirappalli, Tamil Nadu.
              </p>
            </div>
            <div>
              <h3 className="mb-4 font-serif text-xl font-bold text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/temples" className="transition-colors hover:text-white">
                    Temples
                  </Link>
                </li>
                <li>
                  <Link href="/celebrities" className="transition-colors hover:text-white">
                    Celebrities
                  </Link>
                </li>
                <li>
                  <Link href="/food" className="transition-colors hover:text-white">
                    Food
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-serif text-xl font-bold text-white">Connect With Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://2ly.link/26OWZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  WhatsApp
                </a>
                <a
                  href="https://2ly.link/26OWs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  X
                </a>
                <a
                  href="https://2ly.link/26OWx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Trichy Specials. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
