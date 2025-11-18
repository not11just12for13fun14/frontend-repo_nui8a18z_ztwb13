import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CareerCard from '../components/CareerCard'
import { Trash2 } from 'lucide-react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Saved(){
  const [lang, setLang] = useState('en')
  const [items, setItems] = useState([])
  const user = localStorage.getItem('cp_user') || 'guest'

  const load = async ()=>{
    const res = await fetch(`${API}/api/saved/${user}`)
    const data = await res.json()
    setItems(data)
  }

  useEffect(()=>{ load() },[])

  const del = async (id)=>{
    await fetch(`${API}/api/saved/${user}/${id}`, { method:'DELETE' })
    load()
  }

  return (
    <div className="min-h-screen bg-[#F9F7F3]">
      <Header lang={lang} setLang={setLang}/>
      <section className="max-w-6xl mx-auto px-4 py-6">
        {items.length===0 ? (
          <div className="rounded-3xl bg-white border border-[#27634C]/15 p-8 text-center text-[#27634C]">No saved careers yet</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {items.map(it=> (
              <div key={it.id} className="relative">
                <button onClick={()=>del(it.id)} className="absolute right-2 top-2 p-1.5 rounded-full bg-white/80 text-red-600 hover:bg-white shadow"><Trash2 size={16}/></button>
                <CareerCard c={{...it, id: it.career_id}} lang={lang}/>
              </div>
            ))}
          </div>
        )}
      </section>
      <Footer lang={lang}/>
    </div>
  )
}
