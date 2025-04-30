import Link from "next/link"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-serif font-bold text-gray-900 transition-colors hover:text-orange-600">
          Trichy Specials
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/temples" className="text-gray-700 transition-colors hover:text-orange-600 relative group">
            <span>Temples</span>
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/celebrities" className="text-gray-700 transition-colors hover:text-orange-600 relative group">
            <span>Celebrities</span>
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/food" className="text-gray-700 transition-colors hover:text-orange-600 relative group">
            <span>Food</span>
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/summer-guide" className="text-gray-700 transition-colors hover:text-orange-600 relative group">
            <span>Summer Guide</span>
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>
      </div>
    </header>
  )
}
