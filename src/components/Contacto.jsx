import Img1 from "../assets/ganancias.png"
import Img2 from "../assets/mexico.png"
import Img3 from "../assets/entrega.png"
import Img4 from "../assets/tarjeta-de-credito.png"

export const Contacto = () => {
  return (
    <section id="contacto">
      <div className="mt-10 lg:mt-40 text-center mx-8 lg:mx-0">
          <h2 className="font-bold text-3xl lg:text-5xl">Requisitos para comprar tu casa en México</h2>
          <hr className='border-b-8 border-sky-700 w-80 lg:w-96 mx-auto mt-2'/>
          <p className="mt-3 lg:text-xl">Deja tus datos y nos comunicaremos para brindarte la mejor opción</p>
      </div>

      <div className="border rounded-3xl mt-8 lg:mt-20 flex flex-col lg:flex-row p-2 mx-8 lg:mx-0">
          <div className="lg:w-1/2 grid grid-cols-2 p-2 border rounded-2xl bg-gray-50">
              <div className="p-4 text-center rounded-2xl hover:bg-white">
                  <img src={Img1} alt="" className="mx-auto h-20 lg:h-28" />
                  <p className="font-bold mt-2 text-sm lg:text-lg">Tener forma de comprobar ingresos en USA</p>
              </div>
              <div className="p-4 text-center rounded-2xl hover:bg-white">
                  <img src={Img2} alt="" className="mx-auto h-20 lg:h-28" />
                  <p className="font-bold mt-2 text-sm lg:text-lg">Ser Mexicano</p>
              </div>
              <div className="p-4 text-center rounded-2xl hover:bg-white">
                  <img src={Img3} alt="" className="mx-auto h-20 lg:h-28" />
                  <p className="font-bold mt-2 text-sm lg:text-lg">Comprobante de domicilio en USA mínimo 6 meses</p>
              </div>
              <div className="p-4 text-center rounded-2xl hover:bg-white">
                  <img src={Img4} alt="" className="mx-auto h-20 lg:h-28" />
                  <p className="font-bold mt-2 text-sm lg:text-lg">Tener buró de crédito en USA o México</p>
              </div>
          </div>

          <div className="lg:w-1/2 bg-white p-6">
              <form method="POST" novalidate>
                  <div className="mb-3 lg:mb-5">
                      <input id="name" name="name" type="text" placeholder="Tu nombre" className="border-b border-gray-300 p-2 w-full" />
                  </div>
                  <div className="mb-3 lg:mb-5">
                      <input id="lastname" name="lastname" type="text" placeholder="Tu apellido" className="border-b border-gray-300 p-2 w-full" />
                  </div>
                  <div className="mb-3 lg:mb-5">
                      <input id="telefono" name="telefono" type="tel" placeholder="Teléfono" className="border-b border-gray-300 p-2 w-full" />
                  </div>
                  <div className="mb-3 lg:mb-5">
                      <input id="email" name="email" type="email" placeholder="Email de registro" className="border-b border-gray-300 p-2 w-full" />
                  </div>
                  <div className="mb-3 lg:mb-5">
                      <select id="ingresos" name="ingresos" required className="border-b border-gray-300 p-2 w-full">
                          <option value="" disabled selected>Ingresos mensuales comprobables</option>
                          <option value="700-1000">$700 USD - $1,000 USD</option>
                          <option value="1000-1500">$1,000 USD - $1,500 USD</option>
                          <option value="2500-3500">$2,500 USD - $3,500 USD</option>
                          <option value="3500-4500">$3,500 USD - $4,500 USD</option>
                          <option value="mas">Más de $4,500U SD</option>
                      </select>
                  </div>
                  <div className="mb-3 lg:mb-5">
                      <select id="ciudad" name="ciudad" required className="border-b border-gray-300 p-2 w-full">
                          <option value="" disabled selected>Ciudad de Interés</option>
                          <option value="aguascalientes">Aguascalientes, Ags</option>
                          <option value="guanajuato">Guanajuato, Gto</option>
                          <option value="irapuato">Irapuato, Gto</option>
                          <option value="salamanca">Salamanca, Gto</option>
                          <option value="queretaro">Querétaro, Qro</option>
                          <option value="slp">San Luis Potosí, SLP</option>
                      </select>
                  </div>
                  <div className="mb-3 lg:mb-5">
                      <input type="checkbox" name="remember" /> <label className="text-gray-500 text-sm">Acepto las políticas del <a href="#" className="font-black">Aviso de privacidad</a></label>
                  </div>
                  <input type="submit" value="Quiero más informes" className="bg-blue-900 hover:bg-sky-700 transition-colors cursor-pointer uppercase font-bold p-3 w-full text-white rounded-lg" />
              </form>
          </div>
      </div>
    </section>
  );
}