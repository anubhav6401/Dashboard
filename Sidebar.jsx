import React from 'react'
export default function Sidebar(){
  const icons = ['🏠','📈','📦','🔍','⚡','⏱️','⚙️','❓','👤']
  return (
    <aside className="w-16 bg-orange-600 text-white flex flex-col items-center py-6 gap-6">
      {icons.map((i,idx)=>(
        <div key={idx} className="w-10 h-10 rounded-full bg-orange-700 flex items-center justify-center">{i}</div>
      ))}
    </aside>
  )
}
