import {
    QrCode,
    Users,
    SlidersHorizontal,
    BarChart3,
    Gift,
    Bell,
    Download,
    Settings,
    Layers,
    ChevronRight
} from "lucide-react";

export default function BackofficeSection() {
    const features = [
        {
            icon: <QrCode className="w-5 h-5 text-green-600"/>,
            title: "Générateur QR Codes",
            desc: "Créez et téléchargez vos QR codes uniques en masse"
        }, {
            icon: <Users className="w-5 h-5 text-green-600"/>,
            title: "CRM Participants",
            desc: "Collectez et gérez vos participants avec segmentation avancée"
        }, {
            icon: <SlidersHorizontal className="w-5 h-5 text-green-600"/>,
            title: "Configuration jeux",
            desc: "Paramétrez entièrement vos jeux : règles, lots, durée, visuels"
        }, {
            icon: <BarChart3 className="w-5 h-5 text-green-600"/>,
            title: "Analytics temps réel",
            desc: "Suivez vos KPIs : scans, conversions, engagement, ROI"
        }, {
            icon: <Gift className="w-5 h-5 text-green-600"/>,
            title: "Gestion des lots",
            desc: "Définissez vos récompenses et gérez les tirages au sort"
        }, {
            icon: <Bell className="w-5 h-5 text-green-600"/>,
            title: "Notifications",
            desc: "Envoyez des push, emails et SMS à vos participants"
        }, {
            icon: <Download className="w-5 h-5 text-green-600"/>,
            title: "Export données",
            desc: "Téléchargez vos données en CSV, Excel ou via API"
        }, {
            icon: <Layers className="w-5 h-5 text-green-600"/>,
            title: "Multi-campagnes",
            desc: "Gérez plusieurs campagnes simultanément"
        }
    ];

    return (
        <section className="bg-gray-50 py-24 px-6">
            <div className="max-w-7xl mx-auto text-center">

                {/* Badge */}
                <div
                    className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium mb-6">
                    <Settings size={16}/>
                    Backoffice tout-en-un
                </div>

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Gérez tout depuis une interface unique
                </h2>

                {/* Subtitle */}
                <p className="text-gray-500 max-w-2xl mx-auto mb-16">
                    Notre backoffice intuitif vous permet de créer, configurer et piloter vos
                    campagnes en toute autonomie
                </p>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {
                        features.map((feature, i) => (
                            <div
                                key={i}
                                className="bg-white border border-gray-200 rounded-xl p-6 text-left hover:shadow-md transition">
                                <div
                                    className="w-10 h-10 flex items-center justify-center bg-green-100 rounded-lg mb-4">
                                    {feature.icon}
                                </div>

                                <h3 className="font-semibold text-gray-900 mb-2">
                                    {feature.title}
                                </h3>

                                <p className="text-sm text-gray-500">{feature.desc}</p>
                            </div>
                        ))
                    }
                </div>

                {/* CTA */}
                <button
                    className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition">
                    Demander un accès au backoffice
                    <ChevronRight className="w-4 h-4"/>
                </button>

            </div>
        </section>
    );
}