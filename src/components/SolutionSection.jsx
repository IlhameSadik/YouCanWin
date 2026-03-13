import { FaMobileAlt, FaGift, FaCheckCircle, FaBriefcase } from "react-icons/fa";
import { MdCollections } from "react-icons/md";
import { HiChartBar } from "react-icons/hi";
import img from "../assets/football.jpg";

export default function SolutionSection() {
  return (
    <section className="bg-gray-50 pt-20">
      <div className="max-w-8xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div className="w-full sm:w-[592px] h-auto sm:h-[597px] px-6 sm:px-[72px]">
          <img src={img} alt="Football" className="rounded-2xl shadow-lg w-full h-full object-cover" />
        </div>

        {/* Content */}
        <div className="space-y-6">

          {/* Badge */}
          <span className="bg-green-100 text-green-700 px-3 py-1 font-bold rounded-full text-sm flex items-center gap-2 w-fit">
            <FaCheckCircle className="text-green-600 text-xs" />
            Solution complète
          </span>

          {/* Title */}
          <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl leading-8 sm:leading-9 md:leading-10 text-gray-900">
            Le terrain de jeu digital de votre marque
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-[18px] leading-6 sm:leading-7 text-gray-600">
            YouCanWin transforme vos produits en expériences interactives. Chaque achat devient une opportunité d’engagement avec vos consommateurs.
          </p>

          {/* Features */}
          <div className="space-y-4">

            {/* Activation */}
            <div className="flex gap-4 items-start">
              <div className="bg-green-100 p-3 rounded-lg text-green-600">
                <FaMobileAlt />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Activation instantanée</h4>
                <p className="text-gray-500 text-sm">QR codes uniques sur chaque produit</p>
              </div>
            </div>

            {/* Collection */}
            <div className="flex gap-4 items-start">
              <div className="bg-green-100 p-3 rounded-lg text-green-600">
                <MdCollections />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Collection digitale</h4>
                <p className="text-gray-500 text-sm">Cartes de joueurs, raretés, échanges</p>
              </div>
            </div>

            {/* Récompenses */}
            <div className="flex gap-4 items-start">
              <div className="bg-green-100 p-3 rounded-lg text-green-600">
                <FaGift />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Récompenses exclusives</h4>
                <p className="text-gray-500 text-sm">Tirages au sort, lots partenaires, expériences VIP</p>
              </div>
            </div>

            {/* Analytics */}
            <div className="flex gap-4 items-start">
              <div className="bg-green-100 p-3 rounded-lg text-green-600">
                <HiChartBar />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Analytics avancés</h4>
                <p className="text-gray-500 text-sm">Dashboard temps réel, insights consommateurs</p>
              </div>
            </div>

          </div>

          {/* Button */}
          <button
            type="button"
            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-800 transition flex items-center gap-2"
          >
            Planifier une démo <FaBriefcase className="text-sm" />
          </button>

        </div>
      </div>
    </section>
  );
}