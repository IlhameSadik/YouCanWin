import { Zap, TrendingUp, Globe, Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      subtitle: "Campagne locale",
      description: "Idéal pour tester sur un marché",
      icon: (
        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-green-100">
          <Zap className="w-5 h-5 text-green-600" />
        </div>
      ),
      features: [
        "Jusqu'à 1 000 utilisateurs",
        "Jusqu'à 10K QR codes",
        "1 pays / région",
        "Album standard (équipe nationale)",
        "Hébergement Cloud sécurisé",
        "Backoffice simplifié",
        "Support par email",
        "1 marque",
      ],
      button: "Demander un devis",
      highlight: false,
    },
    {
      name: "Scale",
      subtitle: "Expansion nationale",
      description: "Pour des campagnes d'envergure",
      icon: (
        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-red-100">
          <TrendingUp className="w-5 h-5 text-red-500" />
        </div>
      ),
      features: [
        "Jusqu'à 50 000 utilisateurs",
        "QR codes illimités",
        "Multi-pays (jusqu'à 5)",
        "Album complet (toutes les équipes)",
        "Cloud ou On-Premise",
        "Backoffice avancé avec analytics",
        "Support prioritaire 24/7",
        "Jusqu'à 3 marques",
        "API REST disponible",
      ],
      button: "Planifier une démo",
      highlight: true,
    },
    {
      name: "Enterprise",
      subtitle: "Solution globale",
      description: "Pour les groupes internationaux",
      icon: (
        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-green-100">
          <Globe className="w-5 h-5 text-green-600" />
        </div>
      ),
      features: [
        "Utilisateurs illimités",
        "QR codes illimités",
        "Déploiement mondial",
        "Albums personnalisés par région",
        "Infrastructure dédiée (On-Premise)",
        "Multi-marques illimité",
        "Développements sur-mesure",
        "Account manager dédié",
        "SLA garanti 99.9%",
        "Formation et onboarding complet",
      ],
      button: "Contactez-nous",
      highlight: false,
    },
  ];

  return (
    <section className=" py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold">
          Des formules adaptées à votre échelle
        </h2>
        <p className="text-gray-500 mt-2">
          Choisissez la solution qui correspond à vos besoins et votre ambition
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-xl border p-8 bg-white shadow-sm flex flex-col justify-between ${
              plan.highlight
                ? "border-red-500 scale-105 shadow-lg relative"
                : "border-gray-200"
            }`}
          >
            {plan.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-600 to-[#B01219] text-white text-xs px-3 py-1 rounded-full">
                POPULAIRE
              </span>
            )}

            <div>
              <div className="mb-4">{plan.icon}</div>

              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p className="text-green-600 text-sm">{plan.subtitle}</p>
              <p className="text-gray-500 mt-2 text-sm">{plan.description}</p>

              <ul className="mt-6 space-y-3 text-sm text-gray-600">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <button
              className={`mt-8 w-full py-3 rounded-lg font-medium transition ${
                plan.highlight
                  ? "bg-red-500 text-white hover:bg-red-600"
                  : "border border-gray-300 hover:bg-gray-100"
              }`}
            >
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}