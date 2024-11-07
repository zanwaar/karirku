import React from 'react';
import { Briefcase, TrendingUp, Users, GraduationCap } from 'lucide-react';

const careers = [
  {
    title: 'Teknik Informatika',
    description: 'Prospek karir di bidang pengembangan software, AI, dan cybersecurity.',
    salary: 'Rp 5-15 juta/bulan',
    growth: '25% per tahun',
    roles: ['Software Engineer', 'Data Scientist', 'Security Analyst'],
    icon: GraduationCap,
  },
  {
    title: 'Manajemen Bisnis',
    description: 'Peluang karir di bidang manajemen, konsultan, dan entrepreneurship.',
    salary: 'Rp 7-20 juta/bulan',
    growth: '15% per tahun',
    roles: ['Business Analyst', 'Project Manager', 'Consultant'],
    icon: Briefcase,
  },
  {
    title: 'Psikologi',
    description: 'Karir di bidang konseling, HR, dan pengembangan SDM.',
    salary: 'Rp 4-12 juta/bulan',
    growth: '18% per tahun',
    roles: ['HR Manager', 'Counselor', 'Research Psychologist'],
    icon: Users,
  },
];

export default function CareerInsights() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900">Wawasan Karir</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {careers.map((career, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <career.icon className="w-8 h-8 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{career.title}</h3>
            <p className="text-gray-600 mb-4">{career.description}</p>
            
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <TrendingUp className="w-4 h-4 text-green-500 mr-2" />
                <span className="text-gray-600">Pertumbuhan: {career.growth}</span>
              </div>
              <div className="flex items-center text-sm">
                <Briefcase className="w-4 h-4 text-indigo-500 mr-2" />
                <span className="text-gray-600">Gaji: {career.salary}</span>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Posisi yang Tersedia:</h4>
              <div className="flex flex-wrap gap-2">
                {career.roles.map((role, roleIndex) => (
                  <span
                    key={roleIndex}
                    className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm"
                  >
                    {role}
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