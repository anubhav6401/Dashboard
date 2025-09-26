import React from 'react'
import { useSelector } from 'react-redux'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js'
import Table from './Table'


import { WorldMap } from 'react-svg-worldmap'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend)

export default function Overview() {
  const trends = useSelector((s) => s.analytics.trends)
  const topList = useSelector((s) => s.analytics.topList)

  const data = {
    labels: trends.labels,
    datasets: [
      {
        label: 'Spend',
        data: trends.data,
        fill: true,
        tension: 0.4,
        borderWidth: 2,
        borderColor: '#f97316', // orange
        backgroundColor: 'rgba(249,115,22,0.1)',
      },
    ],
  }
  const options = { responsive: true, plugins: { legend: { display: false } } }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <header className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Overview dashboard</h1>
          <p className="text-gray-500">
            A consolidated view of your app efficiency by storefronts and key metrics.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <select className="border rounded px-3 py-2">
            <option>Pdf Name</option>
          </select>
          <div className="border rounded px-3 py-2">Jul 5 - Jul 11, 2025</div>
        </div>
      </header>

      {/* Main content */}
      <section className="p-6 rounded-lg">
        {/* Total Summary */}
        <div className="grid grid-cols-7 gap-4 mb-6">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="bg-white rounded shadow p-4">
              <div className="text-sm text-gray-500">Conversions ROAS:</div>
              <div className="font-bold text-lg mt-2">
                {i === 1 ? '$6,109.89' : '0.00%'}
              </div>
              <div className="text-xs text-green-500 mt-1">+27.42%</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-6">
 {/* Storefronts */}
<div className="bg-white rounded shadow p-4">
  <h3 className="font-semibold mb-3">Storefronts</h3>
  <div className="h-72 relative overflow-hidden flex items-center justify-center">
    <div className="w-full h-full">
      <WorldMap
        color="#f97316" // orange theme
        size="responsive"
        data={[
          { country: "in", value: 6111 }, // India sabse dark
          { country: "us", value: 4000 },
          { country: "gb", value: 2500 },
          { country: "de", value: 2000 },
          { country: "fr", value: 1500 },
          { country: "au", value: 1000 },
          { country: "ca", value: 500 },
        ]}
        valueSuffix=" USD"
        style={{
          borderRadius: "0.5rem",
          backgroundColor: "#fff",
        }}
      />
    </div>
  </div>
</div>





          {/* Trends */}
          <div className="bg-white rounded shadow p-4">
            {/* Header with legend + icons */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-orange-500 inline-block rounded-sm"></span>
                <span className="font-medium text-sm">Spend</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <button>📈</button>
                <button>📊</button>
                <button>⛶</button>
                <button>⚙️</button>
              </div>
            </div>

            {/* Chart */}
            <div className="h-64">
              <Line
                data={{
                  labels: ['5 July', '5 July', '5 July', '5 July', '5 July', '5 July'],
                  datasets: [
                    {
                      label: 'Spend',
                      data: [0, 20, 60, 40, 25, 15, 35], // sample values
                      borderColor: '#f97316',
                      backgroundColor: 'rgba(249,115,22,0.1)',
                      borderWidth: 2,
                      tension: 0.4,
                      fill: true,
                      pointRadius: 0,
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: { display: false },
                  },
                  scales: {
                    x: {
                      grid: { display: false },
                      ticks: { color: '#6b7280' },
                    },
                    y: {
                      grid: { color: '#f3f4f6' },
                      ticks: {
                        callback: () => '$27.42%',
                        color: '#f97316',
                      },
                    },
                  },
                }}
              />
            </div>

            {/* Footer section */}
            <div className="flex items-center justify-between border-t pt-3 mt-3 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-orange-500 inline-block rounded-sm"></span>
                <span>India</span>
              </div>
              <button className="text-gray-400">ℹ️</button>
            </div>
          </div>

          {/* Top List */}
          <div className="bg-white rounded shadow p-4 col-span-1">
            <h3 className="font-semibold mb-3">Top List</h3>
            <Table rows={topList} />
          </div>

          {/* Biggest Changes */}
          <div className="bg-white rounded shadow p-4">
            <h3 className="font-semibold mb-3">Biggest Changes</h3>

            {/* Tabs */}
            <div className="flex gap-6 border-b text-sm font-medium mb-4">
              <button className="text-black border-b-2 border-orange-500 pb-2">
                Campaigns
              </button>
              <button className="text-gray-500 pb-2 hover:text-black">
                Ad Groups
              </button>
              <button className="text-gray-500 pb-2 hover:text-black">
                Keywords
              </button>
              <button className="text-gray-500 pb-2 hover:text-black">Ads</button>
            </div>

            {/* Table-like rows */}
            <div className="divide-y">
              {topList.map((r, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between py-3 text-sm"
                >
                  {/* Left side: Campaign */}
                  <div className="flex items-center gap-2 w-1/3">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                    <div>
                      <div className="font-medium">{r.name} (LOC)</div>
                      <div className="text-xs text-gray-500">India</div>
                    </div>
                  </div>

                  {/* Middle: Spend bar */}
                  <div className="flex-1 px-4">
                    <div className="bg-gray-100 h-3 rounded relative">
                      <div
                        className={`absolute left-0 top-0 h-3 rounded ${
                          idx % 2 === 0 ? 'bg-orange-500' : 'bg-yellow-400'
                        }`}
                        style={{ width: `${20 + idx * 15}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Right side: Values */}
                  <div className="text-right w-24">
                    <div className="font-semibold">
                      ${r.spend.toLocaleString()}
                    </div>
                    <div className="text-xs text-green-500">+27.42%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
