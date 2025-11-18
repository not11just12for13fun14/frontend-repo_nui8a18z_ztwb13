import { Link } from 'react-router-dom'

export default function Hero({ lang }) {
  const t = {
    en: {
      h: 'Find the right career for you.',
      s: 'Explore all careers or take a quick interest test.',
      explore: 'Explore Careers',
      test: 'Take Career Test'
    },
    te: {
      h: 'మీకు సరైన కెరీర్‌ను కనుగొనండి.',
      s: 'అన్ని కెరీయర్స్‌ను చూడండి లేదా చిన్న టెస్ట్ రాయండి.',
      explore: 'కెరీయర్స్ చూడండి',
      test: 'కెరీయర్ టెస్ట్'
    }
  }[lang]

  return (
    <section className="max-w-6xl mx-auto px-4 pt-10 pb-8">
      <div className="rounded-3xl bg-[#F9F7F3] border border-[#27634C]/15 p-8 md:p-12 shadow-sm">
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#27634C] mb-3">{t.h}</h1>
        <p className="text-[#27634C]/80 text-lg mb-6">{t.s}</p>
        <div className="flex flex-wrap gap-3">
          <Link to="/explore" className="px-5 py-3 rounded-full bg-[#27634C] text-white hover:brightness-110 transition">{t.explore}</Link>
          <Link to="/test" className="px-5 py-3 rounded-full bg-[#F5C844] text-[#27634C] hover:brightness-110 transition">{t.test}</Link>
        </div>
      </div>
    </section>
  )
}
