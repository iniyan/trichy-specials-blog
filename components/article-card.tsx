import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ArticleCardProps {
  title: string
  description: string
  image: string
  slug: string
  imageAlt: string
}

export function ArticleCard({ title, description, image, slug, imageAlt }: ArticleCardProps) {
  return (
    <Link href={slug} className="block group">
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:border-orange-200 group-hover:-translate-y-1">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
        <div className="p-5">
          <h3 className="mb-2 font-serif text-xl font-semibold text-gray-800 transition-colors duration-300 group-hover:text-orange-600">
            {title}
          </h3>
          <p className="mb-4 text-sm text-gray-600 line-clamp-2">{description}</p>
          <div className="flex items-center gap-1 text-sm font-medium text-orange-600 transition-all duration-300 group-hover:text-orange-700 group-hover:gap-2">
            <span>Read more</span>
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  )
}
