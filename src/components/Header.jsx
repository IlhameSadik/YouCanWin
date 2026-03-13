import { FaTrophy } from 'react-icons/fa';
import { ChevronRight, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="font-poppins fixed shadow-md bg-white top-0 left-0 w-full z-50">
      <div className="mx-auto flex items-center justify-between h-18 p-4 max-w-[1280px]">

        {/* Logo + texte */}
        <div className="relative flex items-center gap-3">
          {/* Logo */}
          <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-green-600 to-green-800 text-white rounded-lg">
            <FaTrophy className="w-5 h-5" />
          </div>

          {/* Texte */}
          <div className="flex items-start gap-2">
            <span className="text-lg font-bold leading-none">
              <span className="text-red-700">You</span>
              <span className="text-black-600">can</span>
              <span className="text-green-600">win</span>
            </span>

            {/* Badge */}
            <span className="px-1.5 py-[1px] mt-2 font-bold bg-green-100 text-green-700 text-[10px] rounded-full">
              GAMES
            </span>
          </div>
        </div>

        {/* Desktop nav + bouton */}
        <div className="hidden md:flex items-center gap-4">
          {/* Navigation */}
          <nav className="flex items-center gap-8">
            <a href="#offres" className="rounded-md p-1 text-gray-800 hover:bg-gray-100 hover:text-green-800 transition">
              Nos offres
            </a>
            <a href="#jeux" className="rounded-md p-1 text-gray-800 hover:bg-gray-100 hover:text-green-800 transition">
              Nos jeux
            </a>
            <a href="#album" className="rounded-md p-1 text-gray-800 hover:bg-gray-100 hover:text-green-800 transition">
              Album 2025
            </a>
            <a href="#a-propos" className="rounded-md p-1 text-gray-800 hover:bg-gray-100 hover:text-green-800 transition">
              À propos
            </a>
          </nav>

          {/* Bouton */}
          <button className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-800 text-white px-5 py-2 rounded-lg hover:opacity-90 transition group">
            Demander une démo
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md w-full px-4 pb-4">
          <nav className="flex flex-col gap-3">
            <a href="#offres" className="p-2 rounded-md text-gray-800 hover:bg-gray-100 hover:text-green-800 transition">
              Nos offres
            </a>
            <a href="#jeux" className="p-2 rounded-md text-gray-800 hover:bg-gray-100 hover:text-green-800 transition">
              Nos jeux
            </a>
            <a href="#album" className="p-2 rounded-md text-gray-800 hover:bg-gray-100 hover:text-green-800 transition">
              Album 2025
            </a>
            <a href="#a-propos" className="p-2 rounded-md text-gray-800 hover:bg-gray-100 hover:text-green-800 transition">
              À propos
            </a>
            <button className="mt-2 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-800 text-white px-5 py-2 rounded-lg hover:opacity-90 transition group">
              Demander une démo
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}