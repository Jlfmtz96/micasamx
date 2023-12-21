import FaqClick from "./FaqClick";


export const Faq = () => {

    const { toggleAnswer, answersVisibility } = FaqClick();
    return (
        <section id="faq">
            <div className="mt-10 lg:mt-40 flex flex-col lg:flex-row mx-8 lg:mx-0">
                <div className="w-full lg:w-1/2 pr-10">
                    <h2 className="font-bold text-3xl">FAQ</h2>
                    <hr className='border-b-8 border-sky-700 w-80 mt-2'/>
                    <p className="mt-5 lg:text-lg">Aquí encontrarás respuestas a las consultas más comunes relacionadas con nuestros servicios. Si no encuentras lo que buscas, no dudes en ponerte en contacto con nosotros.</p>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="container mx-auto">
                        <div className="my-8">
                            <div className="border-b pb-2 cursor-pointer" onClick={() => toggleAnswer(1)}>
                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-medium cursor-pointer text-blue-500">
                                        ¿Cuántos años de experiencia tiene COMEBI?
                                    </h3>
                                    <svg className="w-4 h-4 transform rotate-90 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </div>
                                <p className={`text-gray-600 mt-4 ${answersVisibility[1] ? '' : 'hidden'}`} id="answer1">
                                    COMEBI es un grupo desarrollador de casas que tiene fraccionamientos en las ciudades de San Luis Potosí, Guanajuato, Aguascalientes, Irapuato y Salamanca, con más de 40 años de experiencia en el sector inmobiliario. Sabemos que para tí es importante beneficiar a los tuyos en México, así como buscar asegurar un patrimonio para el regreso a tu país y por ello ponemos a tu disposición diversas alternativas para que puedas hacer realidad ese sueño.
                                </p>
                            </div>
                        </div>

                        <div className="my-8">
                            <div className="border-b pb-2 cursor-pointer" onClick={() => toggleAnswer(2)}>
                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-medium cursor-pointer text-blue-500">
                                        Ventajas de comprar casa con pago de contado
                                    </h3>
                                    <svg className="w-4 h-4 transform rotate-90 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </div>
                                <p className={`text-gray-600 mt-4 ${answersVisibility[2] ? '' : 'hidden'}`} id="answer2">
                                    Sin duda elegir pagar de contado es la mejor opción, ya que te mejoramos el precio de acuerdo a la ubicación geográfica donde decidas comprar tu casa.
                                </p>
                            </div>
                        </div>

                        <div className="my-8">
                            <div className="border-b pb-2 cursor-pointer" onClick={() => toggleAnswer(3)}>
                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-medium cursor-pointer text-blue-500">
                                        ¿Cuál es la tasa de interés para crédito hipotecario?
                                    </h3>
                                    <svg className="w-4 h-4 transform rotate-90 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </div>
                                <p className={`text-gray-600 mt-4 ${answersVisibility[3] ? '' : 'hidden'}`} id="answer3">
                                    En caso de querer pagar a crédito, la tasa de interés es del 13.5%. De cualquier manera para más información puedes dejarnos tu datos y un ejecutivo te brindará toda la información que necesites.
                                </p>
                            </div>
                        </div>
                        
                        <div className="my-8">
                            <div className="border-b pb-2 cursor-pointer" onClick={() => toggleAnswer(4)}>
                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-medium cursor-pointer text-blue-500">
                                        ¿En cuánto tiempo terminaré de pagar mi casa a crédito?
                                    </h3>
                                    <svg className="w-4 h-4 transform rotate-90 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </div>
                                <p className={`text-gray-600 mt-4 ${answersVisibility[4] ? '' : 'hidden'}`} id="answer4">
                                    Es importante que nos proporciones tu datos para asesorarte en las opciones que tienes para pagar tu casa a crédito, ya que puede variar de 5 hasta 20 años el tiempo para pagarlo.
                                </p>
                            </div>
                        </div>
                
                    </div>
                </div>                    
            </div>
        </section>
    );
}