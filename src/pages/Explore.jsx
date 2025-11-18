import { useEffect, useMemo, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CareerCard from '../components/CareerCard'
import { Search, SlidersHorizontal } from 'lucide-react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Explore(){
  const [lang, setLang] = useState('en')
  const [q, setQ] = useState('')
  const [field, setField] = useState('')
  const [edu, setEdu] = useState('')
  const [items, setItems] = useState([])

  const fetchData = async ()=>{
    const p = new URLSearchParams()
    if(q) p.set('q', q)
    if(field) p.set('field', field)
    if(edu) p.set('edu', edu)
    const res = await fetch(`${API}/api/careers?${p.toString()}`)
    const data = await res.json()
    setItems(data)
  }

  useEffect(()=>{ fetchData() },[]) // initial

  const fields = useMemo(()=> Array.from(new Set(items.map(i=>i.field))).filter(Boolean), [items])

  return (
    <div className="min-h-screen bg-[#F9F7F3]">
      <Header lang={lang} setLang={setLang}/>
      <section className="max-w-6xl mx-auto px-4 py-6">
        <div className="rounded-2xl bg-white border border-[#27634C]/15 p-4 shadow-sm">
          <div className="flex flex-col md:flex-row gap-3 items-stretch">
            <div className="flex-1 flex items-center gap-2 bg-[#F9F7F3] rounded-xl px-3">
              <Search className="text-[#27634C]"/>
              <input value={q} onChange={e=>setQ(e.target.value)} placeholder={lang==='en'? 'Search careers' : 'కెరీయర్స్ శోధించండి'} className="flex-1 bg-transparent py-2 outline-none"/>
            </div>
            <select value={field} onChange={e=>setField(e.target.value)} className="bg-[#F9F7F3] rounded-xl px-3 py-2">
              <option value="">{lang==='en'?'All Fields':'అన్ని రంగాలు'}</option>
              {fields.map(f=> <option key={f} value={f}>{f}</option>)}
            </select>
            <input value={edu} onChange={e=>setEdu(e.target.value)} placeholder={lang==='en'? 'Education' : 'విద్య'} className="bg-[#F9F7F3] rounded-xl px-3 py-2"/>
            <button onClick={fetchData} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#27634C] text-white"><SlidersHorizontal size={16}/>Filter</button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map(c=> <CareerCard key={c.id} c={c} lang={lang}/>) }
        </div>
      </section>
      <Footer lang={lang}/>
    </div>
  )
}
