import {
    FaTrophy,
    FaShieldAlt,
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn
} from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="max-w-[1240px] mx-auto px-4 py-12 flex flex-col gap-8">

            {/* Top footer */}
            <div className="grid md:grid-cols-6 gap-8">

                {/* Logo + description */}
                <div className="md:col-span-3 space-y-3">

                    <div className="flex items-center gap-3">

                        <div
                            className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-green-600 to-green-800 text-white rounded-lg">
                            <FaTrophy className="w-5 h-5"/>
                        </div>

                        <span className="text-lg font-semibold">
                            <span className="text-red-500">You</span>
                            <span className="text-blue-600">can</span>
                            <span className="text-green-600">win</span>
                        </span>

                    </div>

                    <p className="text-gray-600 text-sm">
                        Plateforme de jeux digitaux pour engager vos communautés autour du football. Un
                        service d'Agency.Africa.
                    </p>

                    <div className="flex gap-3">
                        <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center hover:bg-gray-300">
                            <FaFacebookF/>
                        </a>
                        <a
                            href="https://twitter.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center hover:bg-gray-300">
                            <FaTwitter/>
                        </a>
                        <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center hover:bg-gray-300">
                            <FaInstagram/>
                        </a>
                        <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center hover:bg-gray-300">
                            <FaLinkedinIn/>
                        </a>
                    </div>

                </div>

                {/* Liens rapides */}
                <div className="md:col-span-2 space-y-3">
                    <h3 className="font-semibold">Liens rapides</h3>
                    <ul className="space-y-2 text-gray-600 text-sm">
                        <li>
                            <a href="/offres" className="hover:text-green-600">Nos offres</a>
                        </li>
                        <li>
                            <a href="/jeux" className="hover:text-green-600">Nos jeux</a>
                        </li>
                        <li>
                            <a href="/album-2025" className="hover:text-green-600">Album 2025</a>
                        </li>
                        <li>
                            <a href="/a-propos" className="hover:text-green-600">À propos</a>
                        </li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="md:col-span-1 space-y-3">
                    <h3 className="font-semibold">Contact & Légal</h3>
                    <ul className="space-y-2 text-gray-600 text-sm">
                        <li>
                            <a href="mailto:games@agency.africa" className="hover:text-green-600">
                                games@agency.africa
                            </a>
                        </li>
                        <li>
                            <a href="/mentions-legales" className="hover:text-green-600">
                                Mentions légales
                            </a>
                        </li>
                        <li>
                            <a href="/protection-donnees" className="hover:text-green-600">
                                Protection des données (CNDP)
                            </a>
                        </li>
                        <li>
                            <a href="/conditions-utilisation" className="hover:text-green-600">
                                Conditions d'utilisation
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

            {/* Divider */}
            <div className="border-t border-gray-400"></div>

            {/* Bottom footer */}
            <div
                className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 gap-4">

                <p>© 2025 Youcanwin. Tous droits réservés.</p>

                <p>
                    Un service de
                    <span className="text-green-600">Agency.Africa</span>
                </p>

            </div>
            {/* Badge centré */}
            <div className="flex justify-center">
                <div
                    className="bg-[#F0FDF4] w-[252px] h-[38px] flex items-center justify-center gap-2 px-[17px] py-[9px] border border-green-300 rounded-[8px] text-green-600 text-sm">
                    <FaShieldAlt className="text-green-600 text-lg"/>
                    <span className="text-sm">Site conforme CNDP Maroc</span>
                </div>
            </div>
        </footer>
    );
}