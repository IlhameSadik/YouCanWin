import { FaQrcode, FaGift, FaLightbulb } from "react-icons/fa";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="top-8 mx-auto container grid md:grid-cols-2 gap-12 items-start p-6">

      {/* LEFT CONTENT */}
      <div className="space-y-6 md:space-y-8">

        <h1 className="font-bold text-4xl md:text-[72px] leading-snug md:leading-[72px] -tracking-[1.8px]">
          Transformez chaque{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#16A34A] to-[#0B6B3A] relative inline-block">
            produit
            <svg
              className="absolute left-0 -bottom-5 md:-bottom-9 w-full"
              viewBox="0 0 200 20"
              fill="none">
              <path
                d="M2 14 Q100 2 198 14"
                stroke="url(#gradient)"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="200" y2="0">
                  <stop offset="0%" stopColor="#0B6B3A" />
                  <stop offset="100%" stopColor="#16A34A" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <br />
          en expérience de jeu
        </h1>

        <p className="font-normal text-lg md:text-[24px] leading-7 md:leading-8 text-gray-600">
          YouCanWin connecte vos marques aux fans de football à travers des mécaniques de
          gamification innovantes.
          <span className="font-semibold text-gray-800">
            {" "}Codes QR, cartes digitales, défis et récompenses.
          </span>
        </p>

        {/* STATS */}
        <div className="flex flex-wrap gap-6 md:gap-10">
          <div>
            <p className="text-2xl md:text-3xl font-bold text-green-700">500K+</p>
            <p className="text-sm text-gray-500">Interactions/mois</p>
          </div>

          <div>
            <p className="text-2xl md:text-3xl font-bold text-red-600">50+</p>
            <p className="text-sm text-gray-500">Marques actives</p>
          </div>

          <div>
            <p className="text-2xl md:text-3xl font-bold text-green-700">x3.5</p>
            <p className="text-sm text-gray-500">ROI moyen</p>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-800 text-white px-5 py-2 rounded-lg hover:opacity-90 transition group">
            Voir la démo
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition flex items-center gap-2">
            <FaLightbulb />
            Comment ça marche
          </button>
        </div>

        {/* BRANDS */}
        <div className="pt-6 border-t border-gray-300">
          <p className="text-xs text-gray-400 mb-3">ILS NOUS FONT CONFIANCE</p>
          <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
            <span>Maroc Telecom</span>
            <span>Inwi</span>
            <span>Orange</span>
            <span>Carrefour</span>
          </div>
        </div>

      </div>

      {/* RIGHT PHONE MOCKUP */}
      <div className="flex justify-center mt-8 md:mt-0">
        <div className="relative">

          {/* QR CARD */}
          <div className="absolute -top-3 md:-top-5 right-[-50px] md:right-[-70px] bg-white shadow-lg rounded-xl px-3 py-2 flex items-center gap-2 border border-gray-300 text-xs md:text-sm">
            <div className="w-8 h-8 bg-green-100 rounded-md flex items-center justify-center">
              <FaQrcode className="text-green-600 text-sm md:text-base" />
            </div>
            <div>
              <p className="font-semibold text-gray-800">Scan QR Code</p>
              <p className="text-gray-500 text-xs">Débloquer une carte</p>
            </div>
          </div>

          {/* PHONE */}
          <div className="w-[300px] sm:w-[400px] md:w-[448px] h-[540px] sm:h-[700px] md:h-[796px] bg-white rounded-[30px] sm:rounded-[35px] md:rounded-[40px] border-[8px] sm:border-[10px] border-[#0f172a] overflow-hidden shadow-2xl">

            {/* HEADER */}
            <div className="bg-green-700 text-white px-4 sm:px-6 py-4 sm:py-6">
              <p className="text-xs opacity-80">ALBUM DIGITAL 2025</p>
              <h2 className="text-xl sm:text-2xl font-semibold mt-1">Ma Collection</h2>

              <div className="flex gap-4 sm:gap-8 mt-3 sm:mt-4">
                <div>
                  <p className="text-lg sm:text-xl font-bold">127</p>
                  <p className="text-xs opacity-80">Cartes</p>
                </div>

                <div>
                  <p className="text-lg sm:text-xl font-bold">76%</p>
                  <p className="text-xs opacity-80">Complet</p>
                </div>

                <div>
                  <p className="text-lg sm:text-xl font-bold">#12</p>
                  <p className="text-xs opacity-80">Rang</p>
                </div>
              </div>
            </div>

            {/* CARDS GRID */}
            <div className="p-3 sm:p-5 grid grid-cols-3 gap-3 sm:gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="h-[100px] sm:h-[140px] rounded-lg bg-gradient-to-br from-slate-100 to-slate-200"
                />
              ))}
            </div>

            {/* Bottom nav */}
            <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-300 px-4 sm:px-6 py-3 flex justify-between text-gray-500 text-xs sm:text-xs">
              <div className="flex flex-col items-center gap-1">
                <div className="w-5 h-5 bg-gray-300 rounded"></div>
                Scanner
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-5 h-5 bg-gray-300 rounded"></div>
                Échanges
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-5 h-5 bg-gray-300 rounded"></div>
                Profil
              </div>
            </div>

          </div>

          {/* REWARD CARD */}
          <div className="absolute bottom-[-15px] left-[-60px] md:bottom-[-20px] md:left-[-80px] bg-white shadow-xl rounded-xl px-3 py-2 flex items-center gap-2 border border-gray-300 text-xs md:text-sm">
            <div className="w-8 h-8 bg-red-100 rounded-md flex items-center justify-center">
              <FaGift className="text-red-500 text-sm md:text-base" />
            </div>
            <div>
              <p className="font-semibold text-gray-800">Récompense</p>
              <p className="text-gray-500 text-xs">Tirage hebdomadaire</p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}