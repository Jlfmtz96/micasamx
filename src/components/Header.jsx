import { NavBar } from "./NavBar";
import Mapa from "../assets/214752-P0UNV7-89.png"
import { Link } from "react-scroll";

export const Header = () => {
  return (
    <header className="p-5 relative text-white" id="inicio">
        <NavBar />

        <div className="w-full h-screen bg-black absolute top-0 left-0 -z-30">
            <img src="https://comebi.mx/wp-content/uploads/2022/08/p1_1.webp" alt="" className="w-full h-full object-cover opacity-80" />
        </div>

        <div className="flex flex-col lg:flex-row container">
            <div className="w-full flex-grow basis-0 justify-start px-10">
                <h1 className="font-black text-2xl lg:text-6xl mt-10 text-shadow-lg">Compra tu casa en México desde USA</h1>
                <p className="text-sm lg:text-2xl mt-10 mb-16 text-shadow-sm">Sabemos que trabajas duro por tu familia. Por eso te ayudamos a asegurar tu patrimonio.</p>
               <Link
                to="contacto"
                spy={true}
                smooth={true}
                duration={1000}
                className="p-4 rounded-full bg-blue-900 font-semibold hover:bg-white hover:text-sky-700 box-shadow-md tracking-wider cursor-pointer"
                >
                Más Informes
                </Link>   
            </div>
            <div className="mt-10 lg:mt-0">
                    <img src={Mapa} alt="" />
            </div>
        </div>
        
    </header>
  );
}
