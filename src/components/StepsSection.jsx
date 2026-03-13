import { FaShoppingCart, FaQrcode, FaUnlock, FaPuzzlePiece, FaGift } from "react-icons/fa";

export default function StepsSection() {
  return (
    <section className="py-20  text-center">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900">
          Un parcours client simple et engageant
        </h2>

        <p className="text-gray-500 mt-3">
          De l'achat du produit à la récompense, en 5 étapes
        </p>

        {/* Steps */}
        <div className="grid md:grid-cols-5 gap-10 mt-12">

          {/* Step 1 */}
          <div className="space-y-3">
            <div className="relative flex justify-center">
              <div className="border-green-100 border text-green-600 p-4 rounded-xl">
                <FaShoppingCart size={22} />
              </div>
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-6 h-6 flex items-center justify-center rounded-full">
                1
              </span>
            </div>

            <h4 className="font-semibold">Achat produit</h4>
            <p className="text-sm text-gray-500">
              Le client achète votre produit en magasin
            </p>
          </div>

          {/* Step 2 */}
          <div className="space-y-3">
            <div className="relative flex justify-center">
              <div className="border-green-100 border text-green-600 p-4 rounded-xl">
                <FaQrcode size={22} />
              </div>
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-6 h-6 flex items-center justify-center rounded-full">
                2
              </span>
            </div>

            <h4 className="font-semibold">Scan QR Code</h4>
            <p className="text-sm text-gray-500">
              Il scanne le code sur l'emballage
            </p>
          </div>

          {/* Step 3 */}
          <div className="space-y-3">
            <div className="relative flex justify-center">
              <div className="border-green-100 border text-green-600 p-4 rounded-xl">
                <FaUnlock size={22} />
              </div>
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-6 h-6 flex items-center justify-center rounded-full">
                3
              </span>
            </div>

            <h4 className="font-semibold">Déblocage carte</h4>
            <p className="text-sm text-gray-500">
              Une carte digitale est débloquée
            </p>
          </div>

          {/* Step 4 */}
          <div className="space-y-3">
            <div className="relative flex justify-center">
              <div className="border-red-500 border text-red-500 p-4 rounded-xl">
                <FaPuzzlePiece size={22} />
              </div>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 flex items-center justify-center rounded-full">
                4
              </span>
            </div>

            <h4 className="font-semibold">Collection</h4>
            <p className="text-sm text-gray-500">
              Il complète sa collection
            </p>
          </div>

          {/* Step 5 */}
          <div className="space-y-3">
            <div className="relative flex justify-center">
              <div className="border-red-500 border text-red-500 p-4 rounded-xl">
                <FaGift size={22} />
              </div>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 flex items-center justify-center rounded-full">
                5
              </span>
            </div>

            <h4 className="font-semibold">Récompenses</h4>
            <p className="text-sm text-gray-500">
              Participe aux tirages
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}