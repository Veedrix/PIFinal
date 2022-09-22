//Importação módulos
import ChatApp from "./Chat/Chat";
import Board from "./Game/board";
import { MainPage } from "./MainPage/MainPage";
//Importação React components
import { useState } from "react";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
//Importação Firebase components
import { getAuth } from "firebase/auth";
//Importação Firebase Configuration
import { app } from "../services/firebaseConfig";
//Importação Style
import "./App.css";

import {
  FiMenu,
  FiX,
  FiHome,
  FiInfo,
  FiPhoneCall,
  FiUsers,
} from "react-icons/fi";
import {
  BiChat,
  BiJoystick,
  BiLogInCircle,
  BiLogOutCircle,
  BiRocket,
} from "react-icons/bi";

const auth = getAuth(app);

export const App = () => {
  const [pagina, setPagina] = useState("");
  const [show, setShow] = useState("");
  const [user] = useAuthState(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const LinkPagina = (page) => {
    setPagina(page);
  };
  const retornarPagina = () => {
    switch (pagina) {
      case "Chat":
        return (
          <>
            {user ? (
              <>
                {headerLogadoSair()} <ChatApp />
              </>
            ) : (
              <>
                {headerDeslogado()}
                <MainPage />
              </>
            )}
          </>
        );
      case "Game":
        return (
          <>
            {user ? (
              <>
                {headerLogadoSair()}
                <div>
                  <Board />
                </div>
              </>
            ) : (
              <>
                {headerDeslogado()}
                <MainPage />
              </>
            )}
          </>
        );
      default:
        return (
          <>
            {user ? (
              <>
                {headerLogado()}
                <MainPage />
              </>
            ) : (
              <>
                {headerDeslogado()}
                <MainPage />
              </>
            )}
          </>
        );
    }
  };
  const headerDeslogado = () => {
    return (
      <>
        <header id="header" className="scroll">
          <nav className="container">
            <a className="logo" href="#home">
              Omni<span>Development.</span>{" "}
            </a>
            <div className="menu">
              <ul className="grid">
                <li>
                  <a className="title" href="#home">
                    <FiHome />
                    Inicio
                  </a>
                </li>
                <li>
                  <a className="title" href="#about">
                    <FiInfo />
                    Sobre
                  </a>
                </li>
                <li>
                  <a className="title" href="#services">
                    <BiRocket />
                    Aplicativo
                  </a>
                </li>
                <li>
                  <a className="title" href="#testimonial">
                    <FiUsers />
                    Depoimentos
                  </a>
                </li>
                <li>
                  <a className="title" href="#contact">
                    <FiPhoneCall />
                    Contato
                  </a>
                </li>
                <li>
                  <a
                    type="button"
                    className="title"
                    onClick={() => signInWithGoogle()}
                  >
                    <BiLogInCircle />
                    Logar com Google
                  </a>
                </li>
              </ul>
            </div>
            <div className="toggle icon-menu">
              {" "}
              <FiMenu />{" "}
            </div>
            <div className="toggle icon-close">
              {" "}
              <FiX />{" "}
            </div>
          </nav>
        </header>
      </>
    );
  };
  const headerLogado = () => {
    return (
      <>
        <header id="header" className="scroll">
          <nav className={`container ${show}`}>
            <a className="logo" href="#home">
              Omni<span>Development.</span>{" "}
            </a>
            <div className="menu">
              <ul className="grid">
                <li>
                  <a className="title" href="#home">
                    <FiHome />
                    Inicio
                  </a>
                </li>
                <li>
                  <a className="title" href="#about">
                    <FiInfo />
                    Sobre
                  </a>
                </li>
                <li>
                  <a className="title" href="#services">
                    <BiRocket />
                    Aplicativo
                  </a>
                </li>
                <li>
                  <a className="title" href="#testimonial">
                    <FiUsers />
                    Depoimentos
                  </a>
                </li>
                <li>
                  <a className="title" href="#contact">
                    <FiPhoneCall />
                    Contato
                  </a>
                </li>
                <li>
                  <a
                    type="button"
                    className="title"
                    onClick={() => LinkPagina("Chat")}
                  >
                    <BiChat />
                    Chat
                  </a>
                </li>
                <li>
                  <a
                    type="button"
                    className="title"
                    onClick={() => LinkPagina("Game")}
                  >
                    <BiJoystick />
                    Jogar
                  </a>
                </li>
                <li>
                  <a
                    type="button"
                    className="title"
                    onClick={() => auth.signOut()}
                  >
                    <BiLogInCircle />
                    Sair
                  </a>
                </li>
              </ul>
            </div>
            <div className="toggle icon-menu" onClick={() => setShow("show")}>
              {" "}
              <FiMenu />{" "}
            </div>
            <div className="toggle icon-close" onClick={() => setShow("")}>
              {" "}
              <FiX />{" "}
            </div>
          </nav>
        </header>
      </>
    );
  };
  const headerLogadoSair = () => {
    return (
      <>
        <header id="header" className="scroll">
          <nav className="container">
            <a className="logo" href="#home">
              Omni<span>Development.</span>{" "}
            </a>
            <div className="menu">
              <ul className="grid">
                <li>
                  <a
                    type="button"
                    className="title"
                    onClick={() => {
                      LinkPagina("");
                    }}
                  >
                    <BiLogOutCircle />
                    Sair
                  </a>
                </li>
              </ul>
            </div>
            <div className="toggle icon-menu">
              {" "}
              <FiMenu />{" "}
            </div>
            <div className="toggle icon-close">
              {" "}
              <FiX />{" "}
            </div>
          </nav>
        </header>
      </>
    );
  };
  return <>{retornarPagina()}</>;
};
