import React, { useState } from 'react';
import { OpenAI } from 'openai';
import { Brain, Loader, BookOpen, TrendingUp, Briefcase } from 'lucide-react';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

const initialQuestions = [
  {
    id: 1,
    text: 'Ceritakan tentang hobi dan kegiatan yang Anda sukai.',
    placeholder: 'Contoh: Saya suka membaca, coding, bermain musik...'
  },
  {
    id: 2,
    text: 'Apa mata pelajaran favorit Anda di sekolah dan mengapa?',
    placeholder: 'Contoh: Saya suka matematika karena...'
  },
  {
    id: 3,
    text: 'Bagaimana Anda membayangkan pekerjaan ideal Anda di masa depan?',
    placeholder: 'Contoh: Saya ingin pekerjaan yang...'
  },
  {
    id: 4,
    text: 'Apa kelebihan dan kelemahan utama Anda?',
    placeholder: 'Contoh: Kelebihan saya adalah... Kelemahan saya adalah...'
  },
  {
    id: 5,
    text: 'Apa yang membuat Anda tertarik dengan suatu bidang atau aktivitas?',
    placeholder: 'Contoh: Saya tertarik dengan teknologi karena...'
  }
];

export default function CareerTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [textInput, setTextInput] = useState('');

  const analyzeResponses = async (responses: string[]) => {
    setIsAnalyzing(true);
    try {
      const prompt = `Berdasarkan jawaban berikut dari pengguna, berikan analisis mendalam tentang minat, bakat, dan rekomendasi karir yang sesuai. Format jawaban dalam JSON dengan struktur berikut:
{
  "personality": "Analisis kepribadian",
  "strengths": ["Kekuatan 1", "Kekuatan 2", "Kekuatan 3"],
  "improvements": ["Area pengembangan 1", "Area pengembangan 2"],
  "recommendations": [
    {
      "major": "Nama jurusan",
      "description": "Deskripsi singkat",
      "relevance": "Mengapa sesuai dengan profil",
      "careers": ["Karir 1", "Karir 2", "Karir 3"],
      "skills": ["Skill 1", "Skill 2", "Skill 3"]
    }
  ],
  "development": ["Saran pengembangan 1", "Saran pengembangan 2"]
}

Jawaban pengguna:
${responses.map((response, index) => `${initialQuestions[index].text}
Jawaban: ${response}`).join('\n\n')}`;

      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "Kamu adalah seorang ahli psikologi karir dan konselor pendidikan yang berpengalaman dalam memberikan saran karir kepada siswa."
          },
          {
            role: "user",
            content: prompt
          }
        ],
      });

      const content = response.choices[0].message.content || '';
      setResult(JSON.parse(content));
    } catch (error) {
      console.error('Error:', error);
      setResult(null);
    }
    setIsAnalyzing(false);
  };

  const handleNext = () => {
    if (textInput.trim()) {
      const newAnswers = [...answers, textInput];
      setAnswers(newAnswers);
      setTextInput('');

      if (currentQuestion < initialQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        analyzeResponses(newAnswers);
      }
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
    setTextInput('');
  };

  if (isAnalyzing) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 p-8">
        <Loader className="w-12 h-12 text-indigo-600 animate-spin" />
        <p className="text-lg text-gray-700">Menganalisis jawaban Anda...</p>
        <p className="text-sm text-gray-500">Mohon tunggu sebentar</p>
      </div>
    );
  }

  if (result) {
    return (
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Hasil Analisis AI</h2>
          <button
            onClick={handleRestart}
            className="px-4 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Mulai Ulang Tes
          </button>
        </div>

        <div className="grid gap-6">
          {/* Personality Analysis */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Analisis Kepribadian</h3>
            <p className="text-gray-700">{result.personality}</p>
          </div>

          {/* Strengths & Improvements */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Kekuatan Utama</h3>
              <ul className="space-y-2">
                {result.strengths.map((strength: string, index: number) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    {strength}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Area Pengembangan</h3>
              <ul className="space-y-2">
                {result.improvements.map((improvement: string, index: number) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                    {improvement}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Major Recommendations */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Rekomendasi Jurusan</h3>
            <div className="space-y-6">
              {result.recommendations.map((rec: any, index: number) => (
                <div key={index} className="border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">{rec.major}</h4>
                      <p className="text-gray-600 mt-1">{rec.description}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <div className="flex items-center mb-2">
                        <Briefcase className="w-4 h-4 text-indigo-600 mr-2" />
                        <span className="text-sm font-medium text-gray-700">Prospek Karir</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {rec.careers.map((career: string, careerIndex: number) => (
                          <span
                            key={careerIndex}
                            className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm"
                          >
                            {career}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center mb-2">
                        <BookOpen className="w-4 h-4 text-indigo-600 mr-2" />
                        <span className="text-sm font-medium text-gray-700">Skills yang Diperlukan</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {rec.skills.map((skill: string, skillIndex: number) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center mb-2">
                      <TrendingUp className="w-4 h-4 text-indigo-600 mr-2" />
                      <span className="text-sm font-medium text-gray-700">Mengapa Sesuai</span>
                    </div>
                    <p className="text-gray-600">{rec.relevance}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Development Suggestions */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Saran Pengembangan Diri</h3>
            <ul className="space-y-3">
              {result.development.map((suggestion: string, index: number) => (
                <li key={index} className="flex items-start text-gray-700">
                  <span className="w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    {index + 1}
                  </span>
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between ">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">Tes Minat Karir AI</h2>
        <span className="text-sm text-gray-500">
          Pertanyaan {currentQuestion + 1} dari {initialQuestions.length}
        </span>
      </div>

      <div className="bg-white rounded-xl shadow-sm ">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Brain className="w-6 h-6 text-indigo-600" />
            <h3 className="text-xl font-medium text-gray-900">
              {initialQuestions[currentQuestion].text}
            </h3>
          </div>

          <textarea
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            placeholder={initialQuestions[currentQuestion].placeholder}
            className="w-full h-32 p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
          />

          <button
            onClick={handleNext}
            disabled={!textInput.trim()}
            className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {currentQuestion < initialQuestions.length - 1 ? 'Lanjut' : 'Analisis'}
          </button>
        </div>
      </div>
    </div>
  );
}