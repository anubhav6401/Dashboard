import React from 'react'

export default function Table({ rows }) {
  return (
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="text-sm text-gray-500 border-b">
          <th className="py-2">Campaigns</th>
          <th className="text-right py-2">Spend</th>
          <th className="text-right py-2">Installs</th>
          <th className="text-right py-2">Conversion</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r, idx) => (
          <tr key={idx} className="border-t">
            {/* Campaign column with dot + name + location */}
            <td className="py-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                <div>
                  <div className="font-medium">{r.name}</div>
                  <div className="text-xs text-gray-500">India</div>
                </div>
              </div>
            </td>

            {/* Spend column with highlight */}
            <td className="py-3 text-right bg-yellow-100">
              <div className="font-semibold">${r.spend.toLocaleString()}</div>
              <div className="text-xs text-gray-500">+27.42%</div>
            </td>

            {/* Installs column */}
            <td className="py-3 text-right">
              <div className="font-semibold">${r.installs}</div>
              <div className="text-xs text-gray-500">+27.42%</div>
            </td>

            {/* Conversion column */}
            <td className="py-3 text-right">
              <div className="font-semibold">0.00%</div>
              <div className="text-xs text-gray-500">0</div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
