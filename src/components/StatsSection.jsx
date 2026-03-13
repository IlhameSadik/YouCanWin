import { Users, QrCode, Globe, Image, Cloud } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: <Users className="w-6 h-6 text-green-600" />,
      title: "Utilisateurs",
      desc: "De 1k à illimité",
    },
    {
      icon: <QrCode className="w-6 h-6 text-green-600" />,
      title: "QR Codes",
      desc: "Volume adapté",
    },
    {
      icon: <Globe className="w-6 h-6 text-green-600" />,
      title: "Couverture",
      desc: "Local à mondial",
    },
    {
      icon: <Image className="w-6 h-6 text-green-600" />,
      title: "Albums",
      desc: "Standard ou custom",
    },
    {
      icon: <Cloud className="w-6 h-6 text-green-600" />,
      title: "Infrastructure",
      desc: "Cloud ou On-Premise",
    },
  ];

  return (
    <section className=" py-16 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              
              <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-lg mb-3">
                {item.icon}
              </div>

              <h3 className="font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500">
                {item.desc}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}