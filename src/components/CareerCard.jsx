import { BookmarkPlus, IndianRupee, GraduationCap, ArrowRight } from 'lucide-react'

export default function CareerCard({ c, onSave, lang }) {
  const salary = `${c.salary_min?.toLocaleString?.('en-IN')} - ${c.salary_max?.toLocaleString?.('en-IN')}`
  return (
    <div className="group rounded-2xl bg-white border border-[#27634C]/10 shadow-sm overflow-hidden transition-all hover:shadow-md">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#27634C]/10 flex items-center justify-center text-[#27634C]">
              <span className="text-xl">🎓</span>
            </div>
            <div>
              <p className="font-semibold text-[#27634C]">{lang==='en'? c.name_en : c.name_te}</p>
              <p className="text-sm text-[#27634C]/70 line-clamp-1">{lang==='en'? c.short_desc_en : c.short_desc_te}</p>
            </div>
          </div>
          <button onClick={()=> onSave?.(c)} className="p-2 rounded-full hover:bg-[#27634C]/10 text-[#27634C]"><BookmarkPlus size={18}/></button>
        </div>

        <div className="mt-3 text-sm text-[#27634C] grid grid-cols-2 gap-2">
          <div className="inline-flex items-center gap-2"><IndianRupee size={16}/>{salary}</div>
          <div className="inline-flex items-center gap-2"><GraduationCap size={16}/><span className="line-clamp-1">{c.education}</span></div>
        </div>
      </div>
      <div className="px-4 pb-4 hidden group-hover:block animate-in">
        <a href={`/careers/${c.id}`} className="inline-flex items-center gap-2 text-[#27634C] font-medium hover:underline">
          View Details <ArrowRight size={16}/>
        </a>
      </div>
    </div>
  )
}
