import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { GraduationCap, IndianRupee, UserCog, Building2, ChevronLeft, ArrowRight } from 'lucide-react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function CareerDetails(){
  const { id } = useParams()
  const [lang, setLang] = useState('en')
  const [c, setC] = useState(null)

  useEffect(()=>{ fetch(`${API}/api/careers/${id}`).then(r=>r.json()).then(setC) },[id])

  if(!c) return null

  return (
    <div className="min-h-screen bg-[#F9F7F3]">
      <Header lang={lang} setLang={setLang}/>
      <section className="max-w-5xl mx-auto px-4 py-6">
        <div className="rounded-3xl bg-white border border-[#27634C]/15 p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-[#27634C]/10 flex items-center justify-center text-3xl">🌿</div>
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#27634C]">{lang==='en'? c.name_en : c.name_te}</h2>
              <p className="text-[#27634C]/70">{lang==='en'? c.short_desc_en : c.short_desc_te}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="rounded-2xl bg-[#F9F7F3] p-4">
              <div className="flex items-center gap-2 text-[#27634C]"><IndianRupee/><span className="font-semibold">{lang==='en'? 'Salary Range':'జీతం'}</span></div>
              <p className="mt-1 text-[#27634C]">{c.salary_min?.toLocaleString?.('en-IN')} - {c.salary_max?.toLocaleString?.('en-IN')}</p>
            </div>
            <div className="rounded-2xl bg-[#F9F7F3] p-4">
              <div className="flex items-center gap-2 text-[#27634C]"><GraduationCap/><span className="font-semibold">{lang==='en'? 'Education Required':'విద్య అవసరం'}</span></div>
              <p className="mt-1 text-[#27634C]">{c.education}</p>
            </div>
            <div className="rounded-2xl bg-[#F9F7F3] p-4">
              <div className="flex items-center gap-2 text-[#27634C]"><UserCog/><span className="font-semibold">{lang==='en'? 'Skills Needed':'నైపుణ్యాలు'}</span></div>
              <p className="mt-1 text-[#27634C]">{(c.skills||[]).join(', ')}</p>
            </div>
            <div className="rounded-2xl bg-[#F9F7F3] p-4">
              <div className="flex items-center gap-2 text-[#27634C]"><Building2/><span className="font-semibold">{lang==='en'? 'Work Type':'పని రకం'}</span></div>
              <p className="mt-1 text-[#27634C]">{c.job_type}</p>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-[#27634C] font-semibold mb-2">{lang==='en'? 'Career Growth Path':'కెరీర్ గ్రోత్ పాథ్'}</p>
            <div className="flex items-center gap-3 flex-wrap">
              {(lang==='en'? c.growth_path_en : c.growth_path_te).map((g,i)=> (
                <div key={i} className="px-3 py-2 rounded-full bg-[#27634C]/10 text-[#27634C]">{g}</div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex gap-3">
            <Link to="/explore" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F9F7F3] text-[#27634C] border border-[#27634C]/20"><ChevronLeft size={18}/>Back to Careers</Link>
            <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#27634C] text-white"><ArrowRight size={18}/>Save Career</a>
          </div>
        </div>
      </section>
      <Footer lang={lang}/>
    </div>
  )
}
