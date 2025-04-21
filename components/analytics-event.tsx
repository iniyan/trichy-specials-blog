"use client"

import type React from "react"

type AnalyticsEventProps = {
  eventName: string
  eventData?: Record<string, any>
  children: React.ReactNode
  onClick?: () => void
}

export function AnalyticsEvent({ eventName, eventData = {}, children, onClick }: AnalyticsEventProps) {
  const handleClick = () => {
    // Track the event
    console.log(`Event: ${eventName}`, eventData)

    // You can implement custom tracking here
    // For example, you could send data to your own endpoint or use a third-party service

    // Call the original onClick handler if provided
    if (onClick) {
      onClick()
    }
  }

  return <span onClick={handleClick}>{children}</span>
}
