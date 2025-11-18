import { Link } from 'react-router-dom'
import { Timer } from 'lucide-react'

export default function TestBanner({ lang }) {
  const t = {
    en: { title: 'Not sure what to choose? Take a 5-minute test.', cta: 'Start the Test' },
    te: { title: 'ఏది ఎంచుకోవాలో తెలియదా? 5 నిమిషాల టెస్ట్ రాయండి.', cta: 'టెస్ట్ ప్రారంభించండి' }
  }[lang]

  return (
    <section className="max-w-6xl mx-auto px-4 pb-8">
      <div className="rounded-3xl border border-[#27634C]/15 bg-white p-6 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3 text-[#27634C]">
          <Timer/>
          <p className="font-medium">{t.title}</p>
        </div>
        <Link to="/test" className="px-4 py-2 rounded-full bg-[#F5C844] text-[#27634C] font-semibold hover:brightness-110">{t.cta}</Link>
      </div>
    </section>
  )
}
