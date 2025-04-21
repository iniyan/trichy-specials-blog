interface ReadingTimeProps {
  content: string
}

export function ReadingTime({ content }: ReadingTimeProps) {
  // Calculate reading time based on average reading speed of 200 words per minute
  const words = content.trim().split(/\s+/).length
  const readingTime = Math.max(1, Math.ceil(words / 200))

  return (
    <div className="flex items-center gap-1 text-sm text-gray-500">
      <span className="inline-block h-1 w-1 rounded-full bg-gray-500"></span>
      <span>{readingTime} min read</span>
    </div>
  )
}
