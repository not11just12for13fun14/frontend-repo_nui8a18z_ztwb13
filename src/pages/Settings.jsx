import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Settings(){
  const [lang, setLang] = useState('en')

  return (
    <div className="min-h-screen bg-[#F9F7F3]">
      <Header lang={lang} setLang={setLang}/>
      <section className="max-w-4xl mx-auto px-4 py-6">
        <div className="space-y-4">
          <Card title={lang==='en'? 'Language & Accessibility':'భాష & యాక్సెసిబిలిటీ'}>
            <div className="flex flex-wrap gap-3">
              <Toggle label="తెలుగు / English"/>
              <Select label="Text size" options={['S','M','L']}/>
              <Toggle label="Dark mode"/>
              <Toggle label="Audio assistance"/>
            </div>
          </Card>
          <Card title={lang==='en'? 'Profile & Privacy':'ప్రొఫైల్ & ప్రైవసీ'}>
            <div className="grid sm:grid-cols-2 gap-3">
              <Input label="Name"/>
              <Input label="School"/>
              <Input label="Email"/>
            </div>
            <div className="flex gap-3 mt-3">
              <button className="px-4 py-2 rounded-full bg-[#F9F7F3] text-[#27634C] border border-[#27634C]/20">View/Delete saved careers</button>
              <Toggle label="Share data with counselor"/>
              <button className="px-4 py-2 rounded-full bg-red-100 text-red-700 border border-red-200">Delete My Data</button>
            </div>
          </Card>
          <Card title={lang==='en'? 'Notifications & Alerts':'అలర్ట్స్'}>
            <div className="flex flex-wrap gap-3">
              <Toggle label="Email notifications"/>
              <Toggle label="Test reminders"/>
              <Toggle label="Workshop alerts"/>
            </div>
          </Card>
          <Card title={lang==='en'? 'Display Preferences':'డిస్ప్లే ప్రిఫరెన్సెస్'}>
            <div className="flex flex-wrap gap-3">
              <Select label="Accent color" options={['Green','Yellow','Blue']}/>
              <Select label="Layout" options={['Grid','List']}/>
              <Select label="Animation" options={['Smooth','Minimal']}/>
            </div>
          </Card>
          <Card title={lang==='en'? 'Test Preferences':'టెస్ట్ ప్రిఫరెన్సెస్'}>
            <div className="flex flex-wrap gap-3">
              <Select label="Test language" options={['Telugu','English','Bilingual']}/>
              <Toggle label="Save progress"/>
              <Toggle label="Suggest similar careers"/>
              <Select label="Detail level" options={['Basic','Standard','Detailed']}/>
            </div>
          </Card>
          <Card title={lang==='en'? 'Support & Help':'సపోర్ట్ & సహాయం'}>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 rounded-full bg-[#27634C] text-white">Contact a Counselor</button>
              <button className="px-4 py-2 rounded-full bg-[#F9F7F3] text-[#27634C] border border-[#27634C]/20">Feedback</button>
              <button className="px-4 py-2 rounded-full bg-[#F9F7F3] text-[#27634C] border border-[#27634C]/20">FAQ</button>
              <button className="px-4 py-2 rounded-full bg-[#F9F7F3] text-[#27634C] border border-[#27634C]/20">Report a problem</button>
            </div>
          </Card>
          <Card title={lang==='en'? 'System & Logout':'సిస్టమ్ & లాగ్‌ఔట్'}>
            <div className="flex flex-wrap gap-3 items-center">
              <button className="px-4 py-2 rounded-full bg-[#F9F7F3] text-[#27634C] border border-[#27634C]/20">Check for updates</button>
              <button className="px-4 py-2 rounded-full bg-[#F9F7F3] text-[#27634C] border border-[#27634C]/20">Clear cache</button>
              <div className="flex-1"/>
              <button className="px-6 py-2 rounded-full bg-red-500 text-white mx-auto">Logout</button>
            </div>
            <p className="text-[#27634C]/60 mt-2">CareerPath v1.0 — Designed for Anantapur Schools.</p>
          </Card>
        </div>
      </section>
      <Footer lang={lang}/>
    </div>
  )
}

function Card({ title, children }){
  return (
    <div className="rounded-3xl bg-white border border-[#27634C]/15 p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-[#27634C] mb-3">{title}</h3>
      {children}
    </div>
  )
}

function Toggle({ label }){
  const [on, setOn] = useState(false)
  return (
    <button onClick={()=> setOn(!on)} className={`px-4 py-2 rounded-full border ${on? 'bg-[#27634C] text-white border-[#27634C]':'bg-[#F9F7F3] text-[#27634C] border-[#27634C]/20'}`}>{label}</button>
  )
}

function Select({ label, options=[] }){
  return (
    <label className="inline-flex items-center gap-2 bg-[#F9F7F3] text-[#27634C] px-3 py-2 rounded-full border border-[#27634C]/20">
      <span>{label}:</span>
      <select className="bg-transparent outline-none">
        {options.map(o=> <option key={o}>{o}</option>)}
      </select>
    </label>
  )
}

function Input({ label }){
  return (
    <label className="block">
      <span className="text-sm text-[#27634C]">{label}</span>
      <input className="block w-full mt-1 px-3 py-2 rounded-xl bg-[#F9F7F3] border border-[#27634C]/20"/>
    </label>
  )
}
