import React from 'react';
import { BookOpen, Clock, Award } from 'lucide-react';

const courses = [
  {
    major: 'Teknik Informatika',
    description: 'Program studi yang fokus pada pengembangan software dan sistem komputer.',
    duration: '4 tahun',
    subjects: [
      'Algoritma & Pemrograman',
      'Struktur Data',
      'Basis Data',
      'Jaringan Komputer',
      'Kecerdasan Buatan',
      'Pengembangan Web',
    ],
    skills: [
      'Problem Solving',
      'Coding',
      'System Design',
      'Database Management',
    ],
  },
  {
    major: 'Manajemen Bisnis',
    description: 'Program studi yang mempersiapkan mahasiswa untuk dunia bisnis dan entrepreneurship.',
    duration: '4 tahun',
    subjects: [
      'Manajemen Strategis',
      'Pemasaran',
      'Keuangan',
      'Manajemen SDM',
      'Ekonomi',
      'Kewirausahaan',
    ],
    skills: [
      'Leadership',
      'Strategic Planning',
      'Financial Analysis',
      'Marketing Strategy',
    ],
  },
];

export default function CourseOverview() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900">Gambaran Mata Kuliah</h2>

      <div className="grid gap-8">
        {courses.map((course, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.major}</h3>
              <p className="text-gray-600">{course.description}</p>
              
              <div className="flex items-center mt-4 text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-2" />
                <span>Durasi: {course.duration}</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <BookOpen className="w-5 h-5 text-indigo-600 mr-2" />
                  <h4 className="font-medium text-gray-900">Mata Kuliah Utama</h4>
                </div>
                <ul className="space-y-2">
                  {course.subjects.map((subject, subjectIndex) => (
                    <li key={subjectIndex} className="text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                      {subject}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Award className="w-5 h-5 text-indigo-600 mr-2" />
                  <h4 className="font-medium text-gray-900">Keterampilan yang Dipelajari</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {course.skills.map((skill, skillIndex) => (
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
          </div>
        ))}
      </div>
    </div>
  );
}