"use client"

import { useEffect, useState } from "react"

const ONLINE_ENDPOINT = "/api/live-visitors"
const SESSION_STORAGE_KEY = "otaner-live-session-id"
const VISITOR_BADGE_SRC =
  "https://hits.sh/otanertransportadora.site.svg?label=visitantes&color=C9A227&labelColor=242B3B"

type OnlineResponse = {
  online: number
}

function getSessionId() {
  const storedId = window.sessionStorage.getItem(SESSION_STORAGE_KEY)

  if (storedId) {
    return storedId
  }

  const newSessionId = window.crypto.randomUUID()
  window.sessionStorage.setItem(SESSION_STORAGE_KEY, newSessionId)
  return newSessionId
}

export function SiteTraffic() {
  const [onlineVisitors, setOnlineVisitors] = useState<number | null>(null)

  useEffect(() => {
    const sessionId = getSessionId()

    const sendHeartbeat = async () => {
      try {
        const response = await fetch(ONLINE_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ sessionId }),
          cache: "no-store",
        })

        if (!response.ok) {
          return
        }

        const data = (await response.json()) as OnlineResponse
        setOnlineVisitors(data.online)
      } catch {
        setOnlineVisitors(null)
      }
    }

    const sendOfflineSignal = () => {
      const payload = JSON.stringify({ sessionId, offline: true })
      navigator.sendBeacon(
        ONLINE_ENDPOINT,
        new Blob([payload], { type: "application/json" })
      )
    }

    const handlePageHide = () => {
      sendOfflineSignal()
    }

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        void sendHeartbeat()
      }
    }

    void sendHeartbeat()

    const intervalId = window.setInterval(() => {
      if (document.visibilityState === "visible") {
        void sendHeartbeat()
      }
    }, 30000)

    window.addEventListener("pagehide", handlePageHide)
    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      window.clearInterval(intervalId)
      window.removeEventListener("pagehide", handlePageHide)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
      sendOfflineSignal()
    }
  }, [])

  return (
    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-primary-foreground/55 md:justify-end">
      <span className="inline-flex items-center gap-2 whitespace-nowrap">
        <span className="h-2 w-2 rounded-full bg-emerald-400/80 animate-pulse" />
        <span>{onlineVisitors ?? "--"} online agora</span>
      </span>

      <img
        src={VISITOR_BADGE_SRC}
        alt="Total de visitantes do site"
        className="h-5 w-auto opacity-80"
        loading="lazy"
      />
    </div>
  )
}