import { Link, NavLink } from 'react-router-dom'
import { Globe, LogIn, Menu } from 'lucide-react'
import { useState } from 'react'

export default function Header({ lang, setLang }) {
  const [open, setOpen] = useState(false)
  const t = {
    en: { home: 'Home', explore: 'Explore Careers', test: 'Take Test', saved: 'Saved Careers', settings: 'Settings', login: 'Login', title: 'CareerPath' },
    te: { home: 'హోమ్', explore: 'కెరీయర్స్', test: 'టెస్ట్', saved: 'సేవ్ చేసినవి', settings: 'సెట్టింగ్స్', login: 'లాగిన్', title: 'కెరీర్‌పాత్' }
  }[lang]

  return (
    <header className="bg-[#F9F7F3]/90 backdrop-blur sticky top-0 z-40 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-[#27634C] font-extrabold text-xl">
          <span>CareerPath 🌿</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-[#27634C]">
          <NavLink to="/" className={({isActive})=>isActive? 'font-semibold' : ''}>{t.home}</NavLink>
          <NavLink to="/explore" className={({isActive})=>isActive? 'font-semibold' : ''}>{t.explore}</NavLink>
          <NavLink to="/test" className={({isActive})=>isActive? 'font-semibold' : ''}>{t.test}</NavLink>
          <NavLink to="/saved" className={({isActive})=>isActive? 'font-semibold' : ''}>{t.saved}</NavLink>
          <NavLink to="/settings" className={({isActive})=>isActive? 'font-semibold' : ''}>{t.settings}</NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <button onClick={()=> setLang(lang==='en'?'te':'en')} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#27634C]/30 text-[#27634C] hover:bg-[#27634C]/10 transition">
            <Globe size={18}/>
            <span>{lang==='en'?'తెలుగు':'EN'}</span>
          </button>
          <Link to="/login" className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#27634C] text-white hover:brightness-110 transition">
            <LogIn size={18}/>
            <span>{t.login}</span>
          </Link>
          <button className="md:hidden" onClick={()=> setOpen(!open)}><Menu/></button>
        </div>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-[#27634C]">
          <NavLink to="/" onClick={()=>setOpen(false)} className="block">{t.home}</NavLink>
          <NavLink to="/explore" onClick={()=>setOpen(false)} className="block">{t.explore}</NavLink>
          <NavLink to="/test" onClick={()=>setOpen(false)} className="block">{t.test}</NavLink>
          <NavLink to="/saved" onClick={()=>setOpen(false)} className="block">{t.saved}</NavLink>
          <NavLink to="/settings" onClick={()=>setOpen(false)} className="block">{t.settings}</NavLink>
          <Link to="/login" onClick={()=>setOpen(false)} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#27634C] text-white mt-2">
            <LogIn size={18}/><span>{t.login}</span>
          </Link>
        </div>
      )}
    </header>
  )
}
