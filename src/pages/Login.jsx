import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function Login(){
  const [lang, setLang] = useState('en')
  return (
    <div className="min-h-screen bg-[#F9F7F3]">
      <Header lang={lang} setLang={setLang}/>
      <section className="max-w-md mx-auto px-4 py-10">
        <div className="rounded-3xl bg-white border border-[#27634C]/15 p-6 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#27634C] mb-4">{lang==='en'?'Login or Register':'లాగిన్ లేదా రిజిస్టర్'}</h2>
          <div className="grid gap-3">
            <input placeholder={lang==='en'? 'Email or School ID':'ఇమెయిల్ లేదా స్కూల్ ID'} className="px-3 py-2 rounded-xl bg-[#F9F7F3] border border-[#27634C]/20"/>
            <input type="password" placeholder={lang==='en'? 'Password':'పాస్‌వర్డ్'} className="px-3 py-2 rounded-xl bg-[#F9F7F3] border border-[#27634C]/20"/>
            <button className="px-4 py-2 rounded-full bg-[#27634C] text-white">{lang==='en'?'Login':'లాగిన్'}</button>
            <button className="px-4 py-2 rounded-full bg-[#F9F7F3] text-[#27634C] border border-[#27634C]/20">{lang==='en'?'Register':'రిజిస్టర్'}</button>
            <a href="/" className="text-center text-[#27634C] underline">{lang==='en'?'Continue as Guest':'గెస్ట్‌గా కొనసాగండి'}</a>
          </div>
        </div>
      </section>
      <Footer lang={lang}/>
    </div>
  )
}
