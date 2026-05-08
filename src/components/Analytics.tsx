import { useEffect } from 'react'

const GA4_ID = import.meta.env.VITE_GA4_ID as string | undefined
const CLARITY_ID = import.meta.env.VITE_CLARITY_ID as string | undefined

export default function Analytics() {
  useEffect(() => {
    // ── Google Analytics 4 ──────────────────────────────────────────────
    if (GA4_ID) {
      const script1 = document.createElement('script')
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`
      script1.async = true
      document.head.appendChild(script1)

      window.dataLayer = window.dataLayer ?? []
      window.gtag = function (...args: unknown[]) {
        window.dataLayer!.push(args)
      }
      window.gtag('js', new Date())
      window.gtag('config', GA4_ID)
    }

    // ── Microsoft Clarity ───────────────────────────────────────────────
    if (CLARITY_ID) {
      const script2 = document.createElement('script')
      script2.type = 'text/javascript'
      script2.innerHTML = `
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${CLARITY_ID}");
      `
      document.head.appendChild(script2)
    }
  }, [])

  // ── Scroll depth ────────────────────────────────────────────────────────
  useEffect(() => {
    if (!GA4_ID) return

    const thresholds = new Set([25, 50, 75, 90])
    const reported = new Set<number>()

    const handleScroll = () => {
      const scrolled =
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100

      for (const t of thresholds) {
        if (scrolled >= t && !reported.has(t)) {
          reported.add(t)
          window.gtag?.('event', 'scroll_depth', { percent: t })
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return null
}
