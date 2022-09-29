import "./MainPage.css";
import Zoom from "react-reveal/Zoom";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Mousewheel,
  Keyboard,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import {
  FiTwitter,
  FiInstagram,
  FiFacebook,
  FiYoutube,
  FiMonitor,
  FiMail,
  FiPhone,
} from "react-icons/fi";
import { BiJoystickAlt, BiJoystickButton, BiUpArrowAlt } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";

export const MainPage = () => {
  return (
    <>
      <main>
        <Zoom>
          <section className="section" id="home">
            <div className="container grid">
              <div className="image">
                <img
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
                  alt="Imagem de um homem sentando em uma cadeira gamer com um ambiente de campeonato de jogos"
                />
              </div>
              <div className="text">
                <h2 className="title">Omni um aplicativo inovador.</h2>
                <p>
                  Este é o site onde você pode jogar o jogo que nossa empresa desenvolveu e 
                  tambem seus dados ficaram guardados para que no futuro você receba o jogo completo,
                  porem não somente isso você tambem poderá acessar o chat e conversar com outros
                  jogadores e os desenvolvedores.
                </p>
                <h3>
                  Para que você acesse nossas funcionalidades tem que logar no site, na parte superior direita!
                </h3>
              </div>
            </div>
          </section>
        </Zoom>
        <div className="divider-1"></div>
        <Zoom>
          <section className="section" id="about">
            <div className="container grid">
              <div className="image">
                <img
                  src="https://images.unsplash.com/photo-1606167668584-78701c57f13d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2FtZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
                  alt="Uma imagem de um jogo de tabuleiro com um fundo preto"
                />
              </div>
              <div className="text">
                <h2 className="title">Sobre nós</h2>
                <p>
                  A nossa empresa
                  <strong>OmniDevelopment</strong> Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Curabitur blandit faucibus
                  mollis. Praesent ultrices vehicula hendrerit. Maecenas ut ante
                  ut magna viverra consequat. Sed pretium viverra quam non
                  blandit. Nullam bibendum odio non posuere venenatis. Aliquam a
                  quam non velit pharetra convallis. Duis lorem libero, vehicula
                  fermentum elementum vel, finibus at purus. Curabitur feugiat
                  felis a dolor ultricies interdum. Pellentesque habitant morbi
                  tristique senectus et netus et malesuada fames ac turpis
                  egestas. Cras sit amet sem interdum, lacinia nulla ac,
                  tincidunt odio.
                </p>
                <br />
                <p>
                  A nossa empresa
                  <strong>OmniDevelopment</strong> Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Curabitur blandit faucibus
                  mollis. Praesent ultrices vehicula hendrerit. Maecenas ut ante
                  ut magna viverra consequat. Sed pretium viverra quam non
                  blandit. Nullam bibendum odio non posuere venenatis. Aliquam a
                  quam non velit pharetra convallis. Duis lorem libero, vehicula
                  fermentum elementum vel, finibus at purus. Curabitur feugiat
                  felis a dolor ultricies interdum. Pellentesque habitant morbi
                  tristique senectus et netus et malesuada fames ac turpis
                  egestas. Cras sit amet sem interdum, lacinia nulla ac,
                  tincidunt odio.
                </p>
                <br />
              </div>
            </div>
          </section>
        </Zoom>
        <div className="divider-2"></div>
        <Zoom>
          <section className="section" id="services">
            <div className="container grid">
              <header>
                <h2 className="title">Fundamentos do nosso projeto</h2>
                <p className="subtitle">
                  A nossa empresa
                  <strong>OmniDevelopment</strong> Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Curabitur blandit faucibus
                  mollis. Praesent ultrices vehicula hendrerit. Maecenas ut ante
                  ut magna viverra consequat. Sed pretium viverra quam non
                  blandit. Nullam bibendum odio non posuere venenatis. Aliquam a
                  quam non velit pharetra convallis. Duis lorem libero, vehicula
                  fermentum elementum vel, finibus at purus. Curabitur feugiat
                  felis a dolor ultricies interdum. Pellentesque habitant morbi
                  tristique senectus et netus et malesuada fames ac turpis
                  egestas. Cras sit amet sem interdum, lacinia nulla ac,
                  tincidunt odio.
                </p>
              </header>
              <div className="cards grid">
                <div className="card">
                  <i className="icon-shopping-cart">
                    {" "}
                    <BiJoystickButton />{" "}
                  </i>
                  <h3 className="title">Jogabilidade</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur blandit faucibus mollis. Praesent ultrices
                    vehicula hendrerit. Maecenas ut ante ut magna viverra
                    consequat. Sed pretium viverra quam non blandit. Nullam
                    bibendum odio non posuere venenatis. Aliquam a quam non
                    velit pharetra convallis. Duis lorem libero, vehicula
                    fermentum elementum vel, finibus at purus. Curabitur feugiat
                    felis a dolor ultricies interdum. Pellentesque habitant
                    morbi tristique senectus et netus et malesuada fames ac
                    turpis egestas. Cras sit amet sem interdum, lacinia nulla
                    ac, tincidunt odio.
                  </p>
                </div>
                <div className="card">
                  <i className="icon-blade">
                    {" "}
                    <BiJoystickAlt />{" "}
                  </i>
                  <h3 className="title">Graficos Retro</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur blandit faucibus mollis. Praesent ultrices
                    vehicula hendrerit. Maecenas ut ante ut magna viverra
                    consequat. Sed pretium viverra quam non blandit. Nullam
                    bibendum odio non posuere venenatis. Aliquam a quam non
                    velit pharetra convallis. Duis lorem libero, vehicula
                    fermentum elementum vel, finibus at purus. Curabitur feugiat
                    felis a dolor ultricies interdum. Pellentesque habitant
                    morbi tristique senectus et netus et malesuada fames ac
                    turpis egestas. Cras sit amet sem interdum, lacinia nulla
                    ac, tincidunt odio.
                  </p>
                </div>
                <div className="card">
                  <i className="icon-scissors">
                    {" "}
                    <FiMonitor />{" "}
                  </i>
                  <h3 className="title">imersão</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur blandit faucibus mollis. Praesent ultrices
                    vehicula hendrerit. Maecenas ut ante ut magna viverra
                    consequat. Sed pretium viverra quam non blandit. Nullam
                    bibendum odio non posuere venenatis. Aliquam a quam non
                    velit pharetra convallis. Duis lorem libero, vehicula
                    fermentum elementum vel, finibus at purus. Curabitur feugiat
                    felis a dolor ultricies interdum. Pellentesque habitant
                    morbi tristique senectus et netus et malesuada fames ac
                    turpis egestas. Cras sit amet sem interdum, lacinia nulla
                    ac, tincidunt odio.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </Zoom>
        <div className="divider-1"></div>
        <Zoom>
          <section className="section" id="testimonial">
            <div className="container">
              <header>
                <h2 className="title">
                  Depoimentos de quem ja passou por aqui
                </h2>
              </header>
              <div className="testimonials">
                <Swiper
                  modules={[
                    Navigation,
                    Pagination,
                    Scrollbar,
                    A11y,
                    Mousewheel,
                    Keyboard,
                  ]}
                  spaceBetween={50}
                  slidesPerView={1}
                  navigation
                  pagination={{
                    clickable: true,
                    el: ".swiper-pagination",
                    type: "bullets",
                  }}
                  scrollbar={{ draggable: true }}
                  mousewheel={{
                    invert: true,
                    eventsTarget: "container",
                    sensitivity: 2,
                  }}
                  keyboard={{
                    enabled: true,
                    onlyInViewport: false,
                  }}
                >
                  <SwiperSlide className="testimonial">
                    <blockquote>
                      <p>
                        <span>&ldquo;</span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quae ut eligendi ab? Tempore ipsa earum.
                      </p>
                      <cite>
                        <img
                          src="https://randomuser.me/api/portraits/women/17.jpg"
                          alt="Foto de Perfil de Wanessa Souza"
                        />
                        Wanessa Souza
                      </cite>
                    </blockquote>
                  </SwiperSlide>
                  <SwiperSlide className="testimonial">
                    <blockquote>
                      <p>
                        <span>&ldquo;</span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quae ut eligendi ab? Tempore ipsa earum.
                      </p>
                      <cite>
                        <img
                          src="https://randomuser.me/api/portraits/men/34.jpg"
                          alt="Foto de perfil de Paulo da Silva"
                        />
                        Paulo da Silva
                      </cite>
                    </blockquote>
                  </SwiperSlide>
                  <SwiperSlide className="testimonial">
                    <blockquote>
                      <p>
                        <span>&ldquo;</span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quae ut eligendi ab? Tempore ipsa earum.
                      </p>
                      <cite>
                        <img
                          src="https://randomuser.me/api/portraits/women/84.jpg"
                          alt="Foto de Perfil de Franciele Pereira"
                        />
                        Franciele Pereira
                      </cite>
                    </blockquote>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </section>
        </Zoom>
        <div className="divider-2"></div>
        <Zoom>
          <section className="section" id="contact">
            <div className="container grid">
              <div className="text">
                <h2 className="title">Entre em contato conosco!</h2>
                <p>
                  Entre em contato com a OmniDevelopment, queremos tirar suas
                  duvidas e ouvir suas criticas e sugestões.
                </p>
                <a
                  href="https://api.whatsapp.com/send?phone=+5542999999999&text=Oi! Queria tirar uma duvida"
                  className="button"
                  target="_blank"
                >
                  <i className="icon-whatsapp">
                    {" "}
                    <BsWhatsapp />
                  </i>
                  Entrar em contato
                </a>
              </div>
              <div className="links">
                <ul className="grid">
                  <li>
                    <i className="icon-phone">
                      {" "}
                      <FiPhone />{" "}
                    </i>
                    42 99999-9999
                  </li>
                  <li>
                    <i className="icon-mail">
                      {" "}
                      <FiMail />{" "}
                    </i>
                    5702074000@unicentro.edu.br
                  </li>
                </ul>
                <a className="button" href="#">
                  Avalie o nosso Site!
                </a>
              </div>
            </div>
          </section>
        </Zoom>
        <div className="divider-1"></div>
      </main>
      <Zoom>
        <footer className="section">
          <div className="container grid">
            <div className="brand">
              <a className="logo logo-alt" href="#home">
                Omni<span>Development.</span>
              </a>
              <p>2022 OmniDevelopment</p>
              <p>©Todos os direitos reservados</p>
            </div>
            <div className="social grid">
              <a href="https://instagram.com" target="_blank">
                <i className="icon-instagram">
                  <FiInstagram />
                </i>
              </a>
              <a href="https://facebook.com" target="_blank">
                <i className="icon-facebook">
                  <FiFacebook />
                </i>
              </a>
              <a href="https://youtube.com" target="_blank">
                <i className="icon-youtube">
                  <FiYoutube />
                </i>
              </a>
              <a href="https://twitter.com" target="_blank">
                <i className="icon-youtube">
                  <FiTwitter />
                </i>
              </a>
            </div>
          </div>
        </footer>
      </Zoom>
    </>
  );
};

export default MainPage;
