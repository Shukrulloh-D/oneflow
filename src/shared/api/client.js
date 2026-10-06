// STUB: fake API client. Replace the body with a real fetch() later.
const FAKE_DELAY = 600

export async function apiRequest(endpoint, payload = {}) {
  await new Promise((resolve) => setTimeout(resolve, FAKE_DELAY))
  console.info('[api stub]', endpoint, payload)
  return { ok: true, data: payload }
}
