import React, { useEffect, useRef, useState } from "react";
import {
  Link as Links,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

import Header from "./Header/Header";
import People from "../../assets/People";
import VankLogo from "../../assets/VankLogo";
import SignsTwo from "../../assets/SignsTwo";
import WalletFund from "../../assets/WalletFund";

import Arrow from "../../assets/Arrow";
import Money from "../../assets/Money";
import Wallet from "../../assets/Wallet";
import Tether from "../../assets/Tether";

import VankMundo from "../../assets/vank-mundo-.gif";
import M from "../../assets/80M.gif";
import IndicadorTwo from "../../assets/IndicadorTwo";
import HandOne from "../../assets/HandOne";
import HandFound from "../../assets/HandFound";
import HandTwo from "../../assets/HandTwo";
import IconCardOne from "../../assets/IconCardOne";
import IconCardTwo from "../../assets/IconCardTwo";
import IconCardThree from "../../assets/IconCardThree";
import HomeCard from "../../assets/HomeCard.jpg";
import standardCard from "../../assets/standardCard.png";
import PremiumCard from "../../assets/PremiumCard.png";
import EliteCard from "../../assets/EliteCard.png";
import SignatureBlack from "../../assets/SignatureBlack.png";
import Coffe from "../../assets/Coffe.png";
import Cintas from "../../assets/cintas.gif";
import Insta from "../../assets/Insta.svg";
import Link from "../../assets/Link.svg";
import animation from "../../assets/v-vank-logo-animation 2.png";
import Whatsapp from "../../assets/Whatsapp";
import Vank_Short from "../../assets/video-banner-vank.mp4";
import LogoAnimation from "../../assets/v-vank-logo-animation.gif";

import "./Home.css";

const Home = () => {
  const [activeSection, setActiveSection] = useState("section0");

  // useEffect(() => {
  //   Events.scrollEvent.register("begin", function () {
  //     console.log("begin", arguments);
  //   });

  //   Events.scrollEvent.register("end", function () {
  //     console.log("end", arguments);
  //   });

  //   return () => {
  //     Events.scrollEvent.remove("begin");
  //     Events.scrollEvent.remove("end");
  //   };
  // }, []);

  const handleSetActive = (to) => {
    setActiveSection(to);
  };
  
  return (
    <div className="w-full h-full">
      <Header handleSetActive={handleSetActive} activeSection={activeSection} />
      <div
        className="w-full h-full lg:h-[91vh] 2xl:h-screen mt-14 2xl:mt-0"
        name="section0"
      >
        <video
          autoPlay
          src={Vank_Short}
          loop
          // muted={activeSection !== 'section0' ? true : false}
          className="w-[100%] h-[100%] object-cover -z-10"
          // controls
        />
      </div>

      <div
        className="w-full lg:max-w-[996px] p-12  lg:pt-20 pb-2 lg:pb-16 mx-auto flex sm:flex-row flex-col justify-center items-center bg-[#FFFFFF] relative"
        name="section1"
      >
        <div className="lg:w-1/2 flex flex-col justify-center items-start ">
          <div className="relative flex items-center mb-8 xl:w-[385px] xl:h-[378px] md:w-[300px] md:h-[200px] w-[300px] h-[200px] ">
            <Wallet className="z-20 w-full h-full object-cover" />
            <WalletFund className="absolute xl:-bottom-[50px] -bottom-[50px] left-[46px] xl:-left-1 w-[203px] h-[250px] xl:w-[385px] xl:h-[378px]  object-cover" />
          </div>
        </div>
        <div className="lg:w-1/2 flex flex-col justify-center items-end mt-8 lg:mt-0">
          <div className="flex flex-col justify-center items-center gap-y-2 lg:gap-y-5">
            <h2 className="text-3xl sm:text-[30px] lg:text-[58px] font-bold text-[#000000] ">
              Nuestra misión
            </h2>
            <div className="flex flex-col justify-center items-center leading-8 lg:leading-none ">
              <p className="text-lg sm:text-[24px] lg:text-[30px] font-bold text-[#000000]">
                Eliminar barreras
              </p>
              <p className="text-lg sm:text-[18px] lg:text-[30px] font-bold text-center text-[#000000]">
                Simplificar procesos financieros
              </p>
              <p className="text-lg sm:text-[18px] lg:text-[30px] font-bold text-[#000000]">
                Recortar distancias
              </p>
            </div>
            <div className="flex justify-center items-center gap-4 px-2">
              <SignsTwo />
              <div className="text-center leading-none">
                <p className="text-lg sm:text-[18px] lg:text-[33px] font-normal text-[#000000]">
                  Brindamos soluciones
                </p>
                <p className="text-lg sm:text-[18px] lg:text-[33px] font-bold text-[#000000]">
                  financieras accesibles
                </p>
              </div>
              <SignsTwo />
            </div>
          </div>
        </div>
        <div className="w-[133px] border border-[#EDEDED] absolute bottom-0" />
      </div>

      <div
        className="w-[95%] hidden md:w-full lg:max-w-[996px] p-12  lg:pt-20 pb-0 lg:pb-16 mx-auto sm:flex  justify-center bg-transparent relative "
        name="section2"
      >
        <div className="md:ml-12 lg:ml-0 lg:w-[211px] lg:h-[260px] md:w-[111px]  md:h-[160px]  w-[90px]  h-[110px] flex flex-col  justify-center items-center absolute left-0 ">
          <Arrow className="absolute -right-[30px] sm:-right-[170px] md:-right-[180px] lg:-right-[99px] lg:top-12 top-0 z-10 w-[40px] sm:w-[230px] h-[20px] md:h-[30px] lg:w-[106px] " />
          <Tether className="z-10 " />
        </div>

        <div className="flex flex-col justify-center items-center">
          <VankLogo className="lg:w-[387.83px] lg:h-[132.73px] sm:w-full sm:h-[59px] mb-3 sm:mb-6" />
          <p className="text-[13px] sm:text-[28px] text-[#000000] mb-1 sm:mb-1">
            Recibiendo tus <span className="font-bold">USDT</span> para
          </p>
          <p className="text-[13px] sm:text-[28px] text-[#000000]">
            hacerlas llegar en <span className="font-bold">USD</span>
          </p>
        </div>

        <div className="md:mr-12 lg:mr-0 lg:w-[211px] lg:h-[260px] md:w-[111px]  md:h-[160px] w-[90px]  h-[110px] absolute right-0 flex justify-center items-center ">
          <Arrow className="absolute -left-[30px] sm:-left-[149px] md:-left-[160px] lg:-left-[99px] md:top-2 lg:top-14 top-0 w-[40px] sm:w-[200px] h-[20px] md:h-[30px] lg:w-[106px] rotate-[18deg] md:rotate-[20deg] z-10" />
          <Money className="z-10" />
        </div>
      </div>

      <div
        className="w-[95%] md:w-full lg:max-w-[996px]  lg:pt-20 pb-0 pt-10 lg:pb-16 mx-auto flex gap-4 justify-center items-center sm:hidden bg-transparent relative"
        name="section2"
      >
        <div className="flex flex-col justify-center items-center w-full h-full ">
          <VankLogo className="lg:w-[387.83px] lg:h-[132.73px] sm:w-full sm:h-[59px] mb-3 sm:mb-6" />
          <p className="text-[13px] sm:text-[28px] text-center text-[#000000] mb-1 sm:mb-1">
            Recibiendo tus <span className="font-bold">USDT</span> para
          </p>
          <p className="text-[13px] sm:text-[28px] text-center text-[#000000]">
            hacerlas llegar en <span className="font-bold">USD</span>
          </p>
        </div>
        <div className="w-full h-full flex justify-center items-center gap-2">
          <Tether className="z-10 w-full h-full" />
          <Arrow className="" />
          <Money className="z-10 w-full h-full" />
        </div>
      </div>

      <div
        className="w-[95%] md:w-full lg:max-w-[996px] pt-12 lg:pt-20 pb-2 mx-auto flex justify-center items-center"
        name="section3"
      >
        <div className="w-1/2 h-full flex flex-col justify-center items-center space-y-6">
          <p className="max-w-[386px] text-base sm:text-[20px] lg:text-[27px] text-center 2xl:leading-8">
            Hacemos llegar tus pagos a{" "}
            <span className="font-bold">cualquier parte del mundo</span>
          </p>
          <div className="lg:w-[385px] lg:h-[80.21px]">
            <img src={M} className="w-full h-full" alt="" />
          </div>
        </div>
        <div className="w-1/2 h-full flex justify-center items-center">
          <img
            src={VankMundo}
            alt=""
            className="lg:w-[588px] sm:w-[260px] w-full"
          />
        </div>
      </div>

      <div
        className="w-[95%] md:w-full lg:max-w-[996px] pt-8 pb-14 mx-auto flex sm:flex-row flex-col gap-y-5 md:gap-y-0 justify-center items-center"
        name="section4"
      >
        <div className="w-full sm:w-1/2 h-full flex flex-col justify-center items-center ">
          <div className="relative  leading-none">
            <p className="text-[25px] sm:text-[30px] md:text-[35px] 2xl:text-[40px] text-left mb-1 sm:mb-2 md:mb-4 2xl:mb-7">
              Aquí todo es
            </p>
            <div className="relative">
              <p className="text-[23px] sm:text-[35px] md:text-[43px] 2xl:text-[55px] font-bold relative z-10 mb-1 sm:mb-2 md:mb-4 2xl:mb-7">
                tan facil y rápido
              </p>
              <div className="absolute 2xl:w-[221px] md:w-[160px] sm:w-[135px] w-[90px] -bottom-[2px] ">
                <IndicadorTwo className="w-full h-full" />
              </div>
            </div>
            <p className="text-[23px] sm:text-[35px] md:text-[43px] 2xl:text-[55px] font-bold">
              como textear
            </p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 h-full flex justify-center items-center gap-3">
          <div className="w-[150px] h-[190px] sm:w-[230px] sm:h-[200px] md:w-[230px] md:h-[231.24px] rounded-[8px] bg-[#EDEDED] flex flex-col justify-center items-center gap-y-2">
            <p className="w-[139px] p-1 text-base md:text-lg text-center leading-none">
              Regístrate y crea tu cuenta
            </p>
            <div className="relative flex justify-center items-center">
              <HandOne className="z-10" />
              <HandFound className="absolute" />
            </div>
          </div>
          <div className="w-[150px] h-[190px]  sm:w-[230px] sm:h-[200px] md:w-[230px] md:h-[231.24px] rounded-[8px] bg-[#EDEDED] flex flex-col justify-center items-center gap-y-2">
            <p className="w-[139px] p-1 text-base md:text-lg text-center leading-none">
              Recarga y disfruta
            </p>
            <div className="relative flex justify-center items-center">
              <HandTwo className="z-10" />
              <HandFound className="absolute" />
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-[95%] lg:w-full xl:max-w-[996px]  lg:pt-20 pb-10 pt-10 lg:pb-16 mx-auto flex flex-col justify-center items-center gap-y-7 xl:gap-y-12 "
        name="section5"
      >
        <div className="relative max-w-full xl:w-[540px]">
          <div className="font-bold text-[28px] md:text-[38px] 2xl:text-[48px] text-center  leading-none z-10">
            Una app con una tasa alta en{" "}
            <span className="relative inline-block w-min ">
              bienestar
              <IndicadorTwo className="absolute md:-bottom-[6px] -bottom-1 w-full h-auto" />
            </span>
          </div>
        </div>
        <p className=" w-full md:w-[590px] h-[46px] text-lg text-center text-[#4C4C4C] leading-6 mb-4">
          Una plataforma muy intuitiva que te ayudará a ahorrar tiempo y decirle
          adiós al estrés de los bancos covencionales
        </p>
        <div className="w-full lg:max-w-[996px] grid grid-cols-2  md:flex justify-center items-center gap-7 lg:gap-[72px] group">
          <div className="w-full h-auto py-6 p-2 lg:w-[285px] lg:h-[324px] duration-500 hover:scale-[1.18] hover:ml-5 md:hover:ml-0 bg-[#FFED00] rounded-[8px] shadow-lg flex flex-col justify-center items-center gap-y-4 cursor-pointer">
            <IconCardOne />
            <div className=" lg:w-[189px] flex flex-col justify-center items-center">
              <p className="text-base  md:text-lg font-bold leading-none">
                Procesos{" "}
              </p>
              <p className="text-base md:text-lg font-bold leading-none">
                Simplificado
              </p>
            </div>
            <p className="text-sm md:text-base text-[#000000]">
              Sí, muy, muy fácil
            </p>
          </div>

          <div className="w-full h-auto py-6 p-2 lg:w-[285px] lg:h-[324px] duration-500 hover:scale-[1.18] hover:mr-5 md:hover:mr-0 bg-[#FFFFFF] rounded-[8px] shadow-lg flex flex-col justify-center items-center gap-y-4 cursor-pointer">
            <IconCardTwo />
            <div className="md:w-[189px] flex flex-col justify-center items-center">
              <p className="text-sm md:text-lg font-bold leading-none">
                Plataforma a prueba{" "}
              </p>
              <p className="text-sm md:text-lg font-bold leading-none">
                de mapaches
              </p>
            </div>
            <p className="text-sm md:text-base text-[#000000] max-w-[60%] text-center leading-none">
              Más seguridad en las transacciones
            </p>
          </div>

          <div className="w-full h-auto py-6 p-2 lg:w-[285px] lg:h-[324px] duration-500 hover:scale-[1.18] hover:ml-5 md:hover:ml-0 bg-[#FFED00] rounded-[8px] shadow-lg flex flex-col justify-center items-center gap-y-4 cursor-pointer">
            <IconCardThree />
            <p className="text-sm md:text-lg font-bold leading-none">
              Bienvenido al futuro
            </p>
            <p className="text-sm md:text-base text-[#000000] md:max-w-[60%] text-center font-normal leading-none">
              Aqui hacemos los cambios de divisas que otros no
            </p>
          </div>
        </div>
      </div>

      <div
        className="w-full  sm:h-[350px] md:h-[500px]  pt-32 bg-[#EDEDED] flex flex-col  lg:mb-28 mt-12"
        name="section6"
      >
        <div className="max-w-[999px] mx-auto flex justify-center md:gap-[20px] -translate-y-[48%] ">
          <div className="w-1/2 h-full flex justify-center items-center ">
            <img
              src={HomeCard}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-1/2 h-full md:min-h-[262px] flex flex-col justify-center lg:mt-20 gap-y-[10px] md:gap-y-[20px]  px-2  overflow-hidden">
            <div className="relative w-full ">
              <span className="text-2xl md:text-[48px] lg:text-[58px] text-[#000000] font-bold z-10 relative ">
                Vank Card
                <IndicadorTwo className="absolute md:-bottom-[2px] -bottom-1 w-full h-auto" />
              </span>
            </div>
            <p className="max-w-[460px] text-xs sm:text-base md:text-lg text-[#4C4C4C] md:leading-6 line-clamp-5">
              Descubre nuevas maneras de ahorrar y pagar con tu tarjeta Vank,
              controla tu seguridad, accede a pagos rápidos con Apple Pay o
              Google Pay y paga en divisas con extraordinarios tipos de cambio.
            </p>
            <button className="w-[95px] h-[28px] md:w-[120px] md:h-[32px] bg-[#000000] text-[#FFFFFF] hover:text-[#FFED00] rounded-[24px] text-xs md:text-base font-bold">
              Suscríbete
            </button>
          </div>
        </div>
        <div className="w-full sm:w-[90%] lg:w-[799px] lg:min-w-[999px] mx-auto flex justify-center items-center relative">
          <div className="absolute w-[28%] left-[4%]">
            <img
              src={standardCard}
              className="object-contain  z-20 hover:scale-[1.18] hover:rotate-[10deg] hover:relative hover:transition-all hover:duration-300 duration-500 cursor-pointer "
              alt=""
            />
            <p className="absolute -bottom-[45 %] sm:-bottom-[17%] md:-bottom-[15%] left-[10%] text-xs w-min sm:w-max lg:text-base font-bold">
              Tarjeta Vank
            </p>
          </div>
          <div className="w-[28%]  absolute left-[27%]">
            <img
              src={PremiumCard}
              className="object-contain z-20  hover:scale-[1.18] hover:rotate-[10deg] hover:relative hover:transition-all hover:duration-300 duration-500 cursor-pointer "
              alt=""
            />
            <p className="absolute -bottom-[45%] sm:-bottom-[17%] md:-bottom-[15%] left-[10%] text-xs w-min sm:w-max lg:text-base font-bold">
              Premium Card
            </p>
          </div>
          <div className="w-[28%] absolute left-[49.5%] ">
            <img
              src={EliteCard}
              className="object-contain z-20 hover:scale-[1.18] hover:rotate-[10deg] hover:relative hover:transition-all hover:duration-300 duration-500 cursor-pointer "
              alt=""
            />
            <p className="absolute -bottom-[45%] sm:-bottom-[17%] md:-bottom-[15%] left-[10%] text-xs w-min sm:w-max lg:text-base font-bold">
              Elite Card
            </p>
          </div>
          <div className="w-[28%]  absolute left-[72.5%] z-10">
            <img
              src={SignatureBlack}
              className="object-contain hover:scale-[1.18] hover:rotate-[10deg] hover:relative hover:transition-all hover:duration-300 duration-500 cursor-pointer "
              alt=""
            />
            <p className="absolute -bottom-[45%] sm:-bottom-[17%] md:-bottom-[15%] left-[10%] text-xs w-min sm:w-max lg:text-base font-bold">
              Signature Black
            </p>
          </div>
        </div>
      </div>

      <div
        className=" w-[90%] lg:max-w-[999px] pt-28 sm:pt-32 pb-24 sm:pb-36 md:pb-44 lg:pb-32 mx-auto flex justify-center items-center gap-10"
        name="section7"
      >
        <img
          src={Coffe}
          className="hidden md:flex md:w-[35%] md:h-[35%] lg:w-[370px] lg:h-[370px] object-contain"
        />
        <div className="w-full lg:w-[691px] h-full md:inline-block flex flex-col  bg-[#FFED00] p-[20px] rounded-[24px]">
          <div className="w-full  grid sm:grid-cols-2 grid-cols-1 gap-x-5 gap-y-3">
            <div className="mb:mb-4">
              <label className="ml-4 text-sm lg:text-base" htmlFor="">
                Nombre Completo
              </label>
              <input
                type="text"
                name=""
                className="rounded-[16px] h-[32px] w-full focus:outline-none px-3"
              />
            </div>
            <div className="mb:mb-4">
              <label className="ml-4 text-sm lg:text-base" htmlFor="">
                Correo Electronico*
              </label>
              <input
                type="text"
                name=""
                className="rounded-[16px] h-[32px] w-full focus:outline-none px-3"
              />
            </div>
            <div className="mb:mb-4">
              <label className="ml-4 text-sm lg:text-base" htmlFor="">
                Número de contacto *
              </label>
              <input
                type="text"
                name=""
                className="rounded-[16px] h-[32px] w-full focus:outline-none px-3"
              />
            </div>
            <div className="mb:mb-4">
              <label className="ml-4 text-sm lg:text-base" htmlFor="">
                Horario disponible
              </label>
              <input
                type="text"
                name=""
                className="rounded-[16px] h-[32px] w-full focus:outline-none px-3"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="ml-4 text-sm lg:text-base" htmlFor="">
              Comentario
            </label>
            <textarea
              name=""
              cols="30"
              rows="auto"
              className="rounded-[16px] h-[75px] w-full focus:outline-none p-2"
            ></textarea>
          </div>
          <button className="min-w-[183px] h-[37px] text-sm lg:text-base font-bold rounded-[24px] bg-[#000000] text-[#FFFFFF] ">
            Enviar ahora
          </button>
        </div>
      </div>

      <footer className="w-full h-[205px] md:h-[275px] bg-[#000000] relative flex justify-center items-center">
        <img
          src={Cintas}
          alt=""
          className="absolute -top-10 sm:-top-16 md:-top-16 lg:-top-32"
        />
        <div className="w-[590px] h-[92.87px]">
          <img
            src={LogoAnimation}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full flex justify-center items-center gap-5 absolute bottom-6 left-1/2 -translate-x-1/2 ">
          <p className="text-sm md:text-base font-normal text-[#FFED00]">
            contacto@thisisvank.com
          </p>
          <p className="text-xs md:text-base font-normal text-[#FFED00]">
            Copyright © 2024
          </p>
        </div>
      </footer>

      <div className="fixed right-7 bottom-7 z-50">
        <section className="flex justify-center items-center">
          <button
            href="/"
            className="group flex justify-center p-4 rounded-full drop-shadow-xl bg-[#25d366] from-gray-800 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
          >
            <Whatsapp className="w-[30px] h-[30px] md:w-[42px] md:h-[42px]" />
            <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-[#000000] bg-white p-1 md:p-2 group-hover:text-base md:group-hover:text-xl group-hover:-translate-y-16 rounded-lg duration-700">
              Whatsapp
            </span>
          </button>
        </section>
      </div>

      <div className="fixed px-2 py-2 sm:px-3 sm:py-2 left-7 bottom-7 z-50 flex gap-4 bg-[#000000] rounded-[30px]">
        <img src={Insta} alt="" className="" />
        <img src={Link} alt="" className="" />
      </div>
    </div>
  );
};

export default Home;
