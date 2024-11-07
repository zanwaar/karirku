import React from 'react';
import { Compass } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Compass className="w-8 h-8 text-indigo-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">KarirKu</h1>
              <p className="text-sm text-gray-500">Temukan Masa Depanmu</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}