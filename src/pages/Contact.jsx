import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Contact(){
  const [lang, setLang] = useState('en')
  const [list, setList] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [sent, setSent] = useState(false)

  useEffect(()=>{ fetch(`${API}/api/counselors`).then(r=>r.json()).then(setList) },[])

  const submit = async ()=>{
    await fetch(`${API}/api/contact`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ name, email, message: msg }) })
    setSent(true)
  }

  return (
    <div className="min-h-screen bg-[#F9F7F3]">
      <Header lang={lang} setLang={setLang}/>
      <section className="max-w-5xl mx-auto px-4 py-6 grid md:grid-cols-2 gap-6">
        <div className="rounded-3xl bg-white border border-[#27634C]/15 p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-[#27634C] mb-3">{lang==='en'? 'Counselor Directory':'కౌన్సిలర్ డైరెక్టరీ'}</h3>
          <ul className="space-y-2">
            {list.map((c,i)=> (
              <li key={i} className="rounded-xl bg-[#F9F7F3] p-3 flex justify-between text-[#27634C]"><span>{c.name} — {c.district}</span><span>{c.phone}</span></li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl bg-white border border-[#27634C]/15 p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-[#27634C] mb-3">{lang==='en'? 'Contact Form':'కాంటాక్ట్ ఫారం'}</h3>
          {!sent ? (
            <div className="grid gap-3">
              <input value={name} onChange={e=>setName(e.target.value)} placeholder={lang==='en'? 'Name':'పేరు'} className="px-3 py-2 rounded-xl bg-[#F9F7F3] border border-[#27634C]/20"/>
              <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="px-3 py-2 rounded-xl bg-[#F9F7F3] border border-[#27634C]/20"/>
              <textarea value={msg} onChange={e=>setMsg(e.target.value)} rows={4} placeholder={lang==='en'? 'Message':'మెసేజ్'} className="px-3 py-2 rounded-xl bg-[#F9F7F3] border border-[#27634C]/20"/>
              <button onClick={submit} className="px-4 py-2 rounded-full bg-[#27634C] text-white">{lang==='en'? 'Send':'పంపు'}</button>
            </div>
          ) : (
            <p className="text-[#27634C]">{lang==='en'? 'Thank you! We will reach out soon.':'ధన్యవాదాలు! త్వరలో సంప్రదిస్తాము.'}</p>
          )}

          <div className="mt-6">
            <h4 className="font-semibold text-[#27634C] mb-2">FAQ</h4>
            <ul className="text-[#27634C]/80 list-disc list-inside space-y-1">
              <li>Is login required? — No, you can continue as guest.</li>
              <li>How long is the test? — About 5 minutes.</li>
              <li>Is my data safe? — Yes, you control your data.</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer lang={lang}/>
    </div>
  )
}
