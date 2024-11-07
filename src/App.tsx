import React, { useState } from 'react';
import { BookOpen, Briefcase, LineChart, Search, MessageCircle } from 'lucide-react';
import Header from './components/Header';
import CareerTest from './components/CareerTest';
import CareerInsights from './components/CareerInsights';
import IndustryTrends from './components/IndustryTrends';
import CourseOverview from './components/CourseOverview';
import AIAssistant from './components/AIAssistant';

function App() {
  const [activeTab, setActiveTab] = useState('test');

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          <button
            onClick={() => setActiveTab('test')}
            className={`p-4 rounded-xl transition-all ${
              activeTab === 'test'
                ? 'bg-indigo-600 text-white shadow-lg scale-105'
                : 'bg-white text-gray-600 hover:bg-indigo-50'
            }`}
          >
            <Search className="w-6 h-6 mx-auto mb-2" />
            <span className="block text-sm font-medium">Analisis Minat</span>
          </button>
          
          {/* <button
            onClick={() => setActiveTab('insights')}
            className={`p-4 rounded-xl transition-all ${
              activeTab === 'insights'
                ? 'bg-indigo-600 text-white shadow-lg scale-105'
                : 'bg-white text-gray-600 hover:bg-indigo-50'
            }`}
          >
            <Briefcase className="w-6 h-6 mx-auto mb-2" />
            <span className="block text-sm font-medium">Wawasan Karir</span>
          </button> */}
          
          {/* <button
            onClick={() => setActiveTab('trends')}
            className={`p-4 rounded-xl transition-all ${
              activeTab === 'trends'
                ? 'bg-indigo-600 text-white shadow-lg scale-105'
                : 'bg-white text-gray-600 hover:bg-indigo-50'
            }`}
          >
            <LineChart className="w-6 h-6 mx-auto mb-2" />
            <span className="block text-sm font-medium">Tren Industri</span>
          </button> */}
          
          {/* <button
            onClick={() => setActiveTab('courses')}
            className={`p-4 rounded-xl transition-all ${
              activeTab === 'courses'
                ? 'bg-indigo-600 text-white shadow-lg scale-105'
                : 'bg-white text-gray-600 hover:bg-indigo-50'
            }`}
          >
            <BookOpen className="w-6 h-6 mx-auto mb-2" />
            <span className="block text-sm font-medium">Mata Kuliah</span>
          </button> */}

          <button
            onClick={() => setActiveTab('assistant')}
            className={`p-4 rounded-xl transition-all ${
              activeTab === 'assistant'
                ? 'bg-indigo-600 text-white shadow-lg scale-105'
                : 'bg-white text-gray-600 hover:bg-indigo-50'
            }`}
          >
            <MessageCircle className="w-6 h-6 mx-auto mb-2" />
            <span className="block text-sm font-medium">Asisten AI</span>
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6">
          {activeTab === 'test' && <CareerTest />}
          {/* {activeTab === 'insights' && <CareerInsights />}
          {activeTab === 'trends' && <IndustryTrends />}
          {activeTab === 'courses' && <CourseOverview />} */}
          {activeTab === 'assistant' && <AIAssistant />}
        </div>
      </main>
    </div>
  );
}

export default App;