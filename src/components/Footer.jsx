export default function Footer({ lang }) {
  const t = {
    en: {
      contact: 'Contact: careerpath@school.org',
      helpline: 'Helpline: 1800-000-111',
      note: 'Designed as an Interaction Design Thesis Project'
    },
    te: {
      contact: 'సంప్రదించండి: careerpath@school.org',
      helpline: 'హెల్ప్‌లైన్: 1800-000-111',
      note: 'ఇంటరాక్షన్ డిజైన్ థీసిస్ ప్రాజెక్ట్'
    }
  }[lang]

  return (
    <footer className="bg-[#F9F7F3] border-t border-[#27634C]/10 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8 text-[#27634C] text-sm grid gap-2 md:grid-cols-3">
        <p>{t.contact}</p>
        <p>{t.helpline}</p>
        <p className="md:text-right">{t.note}</p>
      </div>
    </footer>
  )
}
