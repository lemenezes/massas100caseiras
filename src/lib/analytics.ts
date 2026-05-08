// ─── Tipagem mínima para gtag ──────────────────────────────────────────────
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
    clarity?: (method: string, ...args: unknown[]) => void
  }
}

// ─── Helper base ───────────────────────────────────────────────────────────
function gtag(...args: unknown[]) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag(...args)
  }
}

// ─── Evento genérico GA4 ───────────────────────────────────────────────────
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>,
) {
  gtag('event', eventName, params ?? {})
}

// ─── Eventos específicos ───────────────────────────────────────────────────

export function trackWhatsAppClick(source: string) {
  trackEvent('whatsapp_click', { source })
}

export function trackInstagramClick(source: string) {
  trackEvent('instagram_click', { source })
}

export function trackMenuOpen() {
  trackEvent('mobile_menu_open')
}

export function trackThemeChange(theme: 'dark' | 'light') {
  trackEvent('theme_change', { theme })
}

export function trackCardapioView() {
  trackEvent('cardapio_view')
}
