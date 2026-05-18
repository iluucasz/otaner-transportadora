const ACTIVE_WINDOW_MS = 90000

const activeSessions = new Map<string, number>()

function pruneExpiredSessions(now: number) {
  for (const [sessionId, lastSeenAt] of activeSessions.entries()) {
    if (now - lastSeenAt > ACTIVE_WINDOW_MS) {
      activeSessions.delete(sessionId)
    }
  }
}

type PresencePayload = {
  sessionId?: string
  offline?: boolean
}

export const dynamic = "force-dynamic"
export const revalidate = 0

async function readPayload(request: Request): Promise<PresencePayload> {
  try {
    return (await request.json()) as PresencePayload
  } catch {
    return {}
  }
}

function getOnlineCount(now: number) {
  pruneExpiredSessions(now)
  return activeSessions.size
}

export async function GET() {
  return Response.json({ online: getOnlineCount(Date.now()) })
}

export async function POST(request: Request) {
  const payload = await readPayload(request)
  const now = Date.now()

  pruneExpiredSessions(now)

  if (payload.sessionId) {
    if (payload.offline) {
      activeSessions.delete(payload.sessionId)
    } else {
      activeSessions.set(payload.sessionId, now)
    }
  }

  return Response.json({ online: activeSessions.size })
}