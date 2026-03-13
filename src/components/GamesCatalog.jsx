import {ArrowRight} from "lucide-react";
import game1Img from "../assets/game1.jpg"; // Assure-toi que ces fichiers existent
import game2Img from "../assets/game2.png";
import game3Img from "../assets/game3.png";
import game4Img from "../assets/game4.png";

export default function GamesCatalog() {
    const games = [
        {
            title: "Album Digital 2025",
            description: "Collection de cartes avec échanges et défis.",
            image: game1Img,
            badge: "STAR",
            badgeColor: "bg-green-600"
        }, {
            title: "Quiz Football",
            description: "Questions sur l'actualité et l'histoire du foot.",
            image: game2Img,
            badge: "BIENTÔT",
            badgeColor: "bg-gray-700"
        }, {
            title: "Tombola digitale",
            description: "Tirages au sort avec lots sponsorisés.",
            image: game3Img
        }, {
            title: "Pronostics",
            description: "Prédictions de matchs et classements.",
            image: game4Img
        }
    ];

    return (
        <section className="bg-gray-100 py-16 px-6">
            {/* Titre */}
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">Catalogue de jeux</h2>
                <p className="text-gray-500 mt-2">
                    Des mécaniques éprouvées pour engager vos audiences
                </p>
            </div>

            {/* Grille */}
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {
                    games.map((game, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300">
                            {/* Image + badge */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={game.image}
                                    alt={game.title}
                                    className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-110"/> {
                                    game.badge && (
                                        <span
                                            className={`absolute top-3 right-3 text-xs text-white px-2 py-1 rounded ${game.badgeColor}`}>
                                            {game.badge}
                                        </span>
                                    )
                                }
                            </div>

                            {/* Contenu */}
                            <div className="p-5">
                                <h3 className="font-semibold text-gray-900">{game.title}</h3>
                                <p className="text-gray-500 text-sm mt-2">{game.description}</p>

                                {/* Bouton pour le premier jeu */}
                                {
                                    index === 0 && (
                                        <button
                                            className="flex items-center gap-1 text-green-600 text-sm mt-4 font-medium hover:underline">
                                            Découvrir
                                            <ArrowRight size={16}/>
                                        </button>
                                    )
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}