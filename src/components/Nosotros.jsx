import About from "../assets/Contactanos 620 x 570.png"

export const Nosotros = () => {
  return (
    <section id="nosotros">
        <div className="flex flex-col lg:flex-row mt-10 lg:mt-40 mx-8 lg:mx-0">
            <div className="lg:w-1/2 pr-10">
                <h2 className="font-bold text-3xl lg:text-5xl">Diseños vanguardistas, espacios abiertos, equilibrio arquitectónico y exclusividad.</h2>
                <hr className='border-b-8 border-sky-700 w-80 mt-2'/>
                <p className="mt-5 lg:text-lg">Grupo COMEBI es una empresa 100% Mexicana con oficinas centrales en la ciudad de San Luis Potosí, dedicada al desarrollo de conjuntos habitacionales; los cuales se encuentran dotados de áreas verdes para convivencia y esparcimiento familiar, accesos con casetas de vigilancia que operan las 24 horas del día, brindando la seguridad que toda familia busca. Las áreas comerciales en el entorno son habilitadas para facilitar la vida cotidiana.</p>
                <p className="mt-5 lg:text-lg">La cobertura regional ha consolidado a Comebi como un grupo desarrollador de vivienda confiable y de permanencia indiscutible en los estados de San Luis Potosí, Querétaro, Aguascalientes, Guanajuato, Salamanca, Irapuato.</p>
            </div>
            <div className="lg:w-1/2 mt-5 lg:mt-0">
                <img src={About} alt="" className="w-full h-auto" />
            </div>
        </div>
    </section>
  );
}