import { Zap, Heart, Share2 } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "Engagement immédiat",
      description: "Chaque produit devient une opportunité de jeu",
    },
    {
      icon: <Heart className="w-6 h-6 text-white" />,
      title: "Fidélisation naturelle",
      description: "Les clients reviennent pour compléter leur collection",
    },
    {
      icon: <Share2 className="w-6 h-6 text-white" />,
      title: "Viralité organique",
      description: "Les fans partagent et échangent entre eux",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Transformez vos ventes en expérience mémorable
        </h2>

        {/* Subtitle */}
        <p className="text-green-100 max-w-2xl mx-auto mb-12">
          YouCanWin offre à vos clients plus qu'un produit : une expérience
          interactive complète autour du football
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-green-600/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:scale-105 transition"
            >
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-green-500 rounded-lg">
                {feature.icon}
              </div>

              <h3 className="text-white text-lg font-semibold mb-2">
                {feature.title}
              </h3>

              <p className="text-green-100 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}