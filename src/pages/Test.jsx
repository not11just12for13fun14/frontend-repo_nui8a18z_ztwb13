import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function TestPage(){
  const [lang, setLang] = useState('en')
  const [questions, setQuestions] = useState([])
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [result, setResult] = useState(null)

  useEffect(()=>{ fetch(`${API}/api/test/questions`).then(r=>r.json()).then(setQuestions) },[])

  const select = (key)=>{
    const s = {...answers, [questions[step].step]: key}
    setAnswers(s)
  }

  const next = async ()=>{
    if(step < questions.length-1){ setStep(step+1) }
    else {
      const ordered = questions.map(q=> answers[q.step])
      const res = await fetch(`${API}/api/test/submit`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ answers: ordered }) })
      const data = await res.json()
      setResult(data)
    }
  }

  const prev = ()=> setStep(Math.max(0, step-1))

  return (
    <div className="min-h-screen bg-[#F9F7F3]">
      <Header lang={lang} setLang={setLang}/>
      <section className="max-w-3xl mx-auto px-4 py-6">
        {!result && questions[step] && (
          <div className="rounded-3xl bg-white border border-[#27634C]/15 p-6 shadow-sm">
            <div className="h-2 bg-[#27634C]/10 rounded-full overflow-hidden">
              <div className="h-full bg-[#27634C] transition-all" style={{width: `${((step+1)/questions.length)*100}%`}}/>
            </div>
            <h2 className="mt-4 text-2xl font-bold text-[#27634C]">{questions[step].question_en}</h2>
            <p className="text-[#27634C]/70">{questions[step].question_te}</p>
            <div className="grid sm:grid-cols-2 gap-3 mt-5">
              {questions[step].options.map(o=> {
                const active = answers[questions[step].step]===o.key
                return (
                  <button key={o.key} onClick={()=>select(o.key)} className={`text-left rounded-2xl px-4 py-3 border transition ${active? 'bg-[#F5C844] border-[#F5C844]':'bg-[#F9F7F3] border-[#27634C]/20 hover:border-[#27634C]/40'}`}>{lang==='en'? o.label_en : o.label_te}</button>
                )
              })}
            </div>
            <div className="mt-5 flex justify-between">
              <button onClick={prev} className="px-4 py-2 rounded-full bg-[#F9F7F3] text-[#27634C] border border-[#27634C]/20">Back</button>
              <button onClick={next} className="px-4 py-2 rounded-full bg-[#27634C] text-white">Next</button>
            </div>
          </div>
        )}

        {result && (
          <div className="rounded-3xl bg-white border border-[#27634C]/15 p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-[#27634C]">Your Best Career Matches</h2>
            <p className="text-[#27634C]/70">Top recommendations for you</p>
            <div className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {(result.recommended_ids||[]).map(id=> (
                <a key={id} href={`/careers/${id}`} className="rounded-2xl bg-[#F9F7F3] p-4 hover:bg-white border border-[#27634C]/10 transition block">View Details</a>
              ))}
            </div>
            <div className="mt-5 flex gap-3">
              <button className="px-4 py-2 rounded-full bg-[#F5C844] text-[#27634C]">Save Results</button>
              <button onClick={()=>{ setResult(null); setStep(0); setAnswers({}) }} className="px-4 py-2 rounded-full bg-[#F9F7F3] text-[#27634C] border border-[#27634C]/20">Retake Test</button>
            </div>
          </div>
        )}
      </section>
      <Footer lang={lang}/>
    </div>
  )
}
