import {
    TrendingUp,
    Users,
    Star,
    LifeBuoy,
    Calendar,
    Mail
} from "lucide-react";

export default function StatsAndCTA() {
    const stats = [
        {
            icon: <TrendingUp className="w-6 h-6 text-green-600"/>,
            value: "500K+",
            label: "Interactions mensuelles"
        }, {
            icon: <Users className="w-6 h-6 text-green-600"/>,
            value: "50+",
            label: "Marques partenaires"
        }, {
            icon: <Star className="w-6 h-6 text-green-600"/>,
            value: "98%",
            label: "Taux de satisfaction"
        }, {
            icon: <LifeBuoy className="w-6 h-6 text-green-600"/>,
            value: "24/7",
            label: "Support technique"
        }
    ];

    return (
        <div>

            {/* Section statistiques */}
            <section className=" py-10">
                <div
                    className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {
                        stats.map((item, index) => (
                            <div key={index} className="flex flex-col items-center gap-2">
                                {item.icon}
                                <h3 className="text-2xl font-bold text-gray-900">
                                    {item.value}
                                </h3>
                                <p className="text-sm text-gray-500">{item.label}</p>
                            </div>
                        ))
                    }
                </div>
            </section>

            {/* Section CTA rouge */}
            <section
                className="bg-gradient-to-r from-red-600 to-red-800 py-20 text-white text-center">
                <div className="max-w-3xl mx-auto px-6">

                    <h2 className="text-3xl md:text-4xl font-bold">
                        Prêt à transformer votre marketing ?
                    </h2>

                    <p className="mt-4 text-red-100">
                        Rejoignez les marques qui engagent leurs fans avec YouCanWin
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">

                        <button
                            className="flex items-center justify-center gap-2 bg-white text-red-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
                            <Calendar size={18}/>
                            Planifier une démo gratuite
                        </button>

                        <button
                            className="flex items-center justify-center gap-2 border border-white px-6 py-3 rounded-lg hover:bg-red-700 transition">
                            <Mail size={18}/>
                            Nous contacter
                        </button>

                    </div>
                </div>
            </section>

        </div>
    );
}