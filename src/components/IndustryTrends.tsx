import React from 'react';
import { TrendingUp, TrendingDown, AlertCircle } from 'lucide-react';

const trends = [
  {
    industry: 'Teknologi Informasi',
    trend: 'up',
    growth: '+25%',
    demand: 'Tinggi',
    skills: ['Cloud Computing', 'AI/ML', 'Cybersecurity'],
    description: 'Pertumbuhan pesat dalam digitalisasi dan transformasi digital perusahaan.',
  },
  {
    industry: 'Kesehatan Digital',
    trend: 'up',
    growth: '+20%',
    demand: 'Tinggi',
    skills: ['Telemedicine', 'Health Informatics', 'Digital Health'],
    description: 'Peningkatan adopsi teknologi dalam layanan kesehatan.',
  },
  {
    industry: 'Media Cetak',
    trend: 'down',
    growth: '-5%',
    demand: 'Rendah',
    skills: ['Digital Publishing', 'Content Marketing', 'Social Media'],
    description: 'Penurunan permintaan karena transformasi ke media digital.',
  },
];

export default function IndustryTrends() {
  return (
    <div className="space-y-8 px-4">
<div className="flex flex-col sm:flex-row items-start justify-between mb-4">
  <h2 className="text-2xl font-bold text-gray-900 mb-2 sm:mb-0">Tren Industri</h2>
  <div className="flex items-center space-x-2 text-sm text-gray-500">
    <AlertCircle className="w-4 h-4" />
    <span>Data diperbarui: Maret 2024</span>
  </div>
</div>


      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {trends.map((trend, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
           <div className="flex flex-col sm:flex-row items-start justify-between mb-4">
  <div className="flex flex-col sm:flex-row items-start">
    <h3 className="text-xl font-semibold text-gray-900">{trend.industry}</h3>
    <div className="flex items-center mt-2 sm:ml-4">
      {trend.trend === 'up' ? (
        <TrendingUp className="w-5 h-5 text-green-500 mr-2" />
      ) : (
        <TrendingDown className="w-5 h-5 text-red-500 mr-2" />
      )}
      <span className={`text-sm font-medium ${
        trend.trend === 'up' ? 'text-green-600' : 'text-red-600'
      }`}>
        Pertumbuhan {trend.growth}
      </span>
    </div>
  </div>
  
  <span className={`mt-2 sm:mt-0 px-4 py-1 rounded-full text-sm font-medium ${
    trend.demand === 'Tinggi'
      ? 'bg-green-100 text-green-800'
      : 'bg-red-100 text-red-800'
  }`}>
    Permintaan {trend.demand}
  </span>
</div>


            <p className="text-gray-600 mb-4">{trend.description}</p>

            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Keterampilan yang Dibutuhkan:</h4>
              <div className="flex flex-wrap gap-2">
                {trend.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
