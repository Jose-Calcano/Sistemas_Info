import React from 'react'
import './HomePage.css'
import { CHAT_URL, HOME_URL, LOGIN_URL, SIGNIN_URL, CATALOGO_URL } from '../../constants/urls';
import { Link } from 'react-router-dom';
import comunidad from '../../../public/comunidad.png';
import basico from '../../../public/basico.png';
import face1 from '../../../public/face1.jpg';
import face2 from '../../../public/face2.jpg';
import medio from '../../../public/medio.png';
import portada from '../../../public/portada.jpg';
import premium from '../../../public/premium.png';
import icono1 from '../../../public/icono1.png';

export default function HomePage() {
    return (
        <>
            <header>
                <nav>

                    <Link to={SIGNIN_URL}><h3>Registrarse</h3></Link>
                    <Link to={LOGIN_URL}><h3>Iniciar Sesión</h3></Link>
                    <Link to={CHAT_URL}><h3>Chat</h3></Link>


                    <a href="#">Plan Mensual</a>
                    <a href="#">Nuestros clientes</a>
                    <a href="#">Contacto</a>
                </nav>
                <section className="textos-header">
                    <h1>MetroMED</h1>
                    <h2>Salud mental desde la comodidad de tu casa</h2>
                </section>

            </header>
            <main>
                <section className="contenedor sobre-nosotros">
                    <h2 className="titulo">Nuestro producto</h2>
                    <div className="contenedor-sobre-nosotros">
                        <img src={comunidad} className="imagen-about-us" />
                        <div className="contenido-textos">
                            <h3><span>1</span>¿Quiénes Somos?</h3>
                            <p>Somos un equipo de profesionales de salud mental que a través de Terapia Online realizamos tratamientos y terapias por telemedicina. </p>
                            <h3><span>2</span>Trabajamos por tu Bienestar</h3>
                            <p>Buscamos apoyar y ayudar, a distancia, las necesidades de cuidado y bienestar de las personas, acercando así las posibilidades de salud a todos con nuestro sistema de tratamiento psicológico online.</p>
                        </div>
                    </div>
                </section>
                <section className="Plan Mensual">
                    <div className="contenedor">
                        <h2 className="titulo">Planes de Pago</h2>
                        <div className="galeria-port">
                            <div className="imagen-port">
                                <img src={basico} />
                                <div className="hover-galeria">
                                    <img href="../../../../public/icono1.png" alt="" />
                                    <p>Plan Basico</p>
                                </div>
                            </div>
                            <div className="imagen-port">
                                <img src={medio}/>
                                <div className="hover-galeria">
                                    <img src={face1} />
                                    <p>Plan Medio</p>
                                </div>
                            </div>
                            <div className="imagen-port">
                                <img src={premium} />
                                <div className="hover-galeria">
                                    <img src={icono1} />
                                    <p>Plan Premium</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="clientes contenedor">
                    <h2 className="titulo">Nuestros clientes</h2>
                    <div className="cards">
                        <div className="card">
                            <img src={face1} />
                            <div className="contenido-texto-card">
                                <h4>Sofia Mendes</h4>
                                <p>"Le agradezco y le agradeceré siempre por la ayuda que me ha dado, pues he tenido
                                    una atención muy personalizada, lo que ha sido fundamental para mi evolución :)"</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={face2} />
                            <div className="contenido-texto-card">
                                <h4>Emilio Cortés</h4>
                                <p>"Excelente profesional, me ha ayudado mucho en mi proceso y los efectos
                                    ya son visibles en mi vida, por lo que estoy muy agradecido"</p>
                            </div>
                        </div>
                    </div>
                </section>
                <footer>
                    <div className="contenedor-footer">
                        <div className="content-foo">
                            <h4>Instagram</h4>
                            <p>@metromed</p>
                        </div>
                        <div className="content-foo">
                            <h4>Email</h4>
                            <p>metromed@gmail.com</p>
                        </div>
                        <div className="content-foo">
                            <h4>WhatsApp</h4>
                            <p>+584141152405</p>
                        </div>
                    </div>
                    <h2 className="titulo-final">&copy;Unimet Design</h2>
                </footer>
            </main>


        </>
    )
}
