import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import CareerCard from '../components/CareerCard'
import TestBanner from '../components/TestBanner'
import Footer from '../components/Footer'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Home() {
  const [lang, setLang] = useState('en')
  const [careers, setCareers] = useState([])

  useEffect(()=>{ fetch(`${API}/api/careers`).then(r=>r.json()).then(setCareers).catch(()=>{}) },[])

  const save = async (c)=>{
    const user = localStorage.getItem('cp_user') || 'guest'
    await fetch(`${API}/api/save`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ user_id: user, career_id: c.id }) })
  }

  return (
    <div className="min-h-screen bg-[#F9F7F3]" style={{fontFamily: 'Inter, Noto Sans Telugu, system-ui'}}>
      <Header lang={lang} setLang={setLang}/>
      <Hero lang={lang}/>
      <section className="max-w-6xl mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {careers.slice(0,12).map(c=> (
            <CareerCard key={c.id} c={c} onSave={save} lang={lang}/>
          ))}
        </div>
      </section>
      <TestBanner lang={lang}/>
      <Footer lang={lang}/>
    </div>
  )
}
