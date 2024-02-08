import React from "react";
import Header from "./Header/Header";
import People from "../../assets/People";
import Arrow from "../../assets/Arrow";
import Money from "../../assets/Money";
import VankLogo from "../../assets/VankLogo";
import SignsTwo from "../../assets/SignsTwo";
import WalletFund from "../../assets/WalletFund";
import Wallet from "../../assets/Wallet";
import Tether from "../../assets/Tether";

import VankMundo from "../../assets/vank-mundo-.gif";
import M from "../../assets/80M.gif";
import IndicadorTwo from "../../assets/IndicadorTwo";
import HandOne from "../../assets/HandOne";
import HandFound from "../../assets/HandFound";
import HandTwo from "../../assets/HandTwo";
import Whatsapp from "../../assets/whatsapp";
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

const Home = () => {
  return (
    <div>
      <Header />
      <div className="w-full min-h-[620px] mx-auto text-center flex justify-center">
        <div className="w-1/2 bg-[#EDEDED] flex justify-center items-center">
          <div className="w-[488px] h-[415.55px] flex flex-col justify-center mt-6">
            <h2 className="text-[46px] font-bold text-left ml-8">This is</h2>
            <VankLogo className='w-[488px] h-[167px] mb-3' />
            <p className="text-lg text-[#000000] mb-10">Gestion tu dinero de forma sencilla y segura</p>
            <div className="flex justify-center items-center gap-3">
              <button className="py-[6px] px-6 bg-[#FFED00] text-[#000000] font-bold rounded-[24px]">Iniciar sesión</button>
              <button className="py-[6px] px-6  text-[#000000] font-bold">Regístrate</button>
            </div>
          </div>
        </div>
        <div className="w-1/2 bg-[#FFED00] flex justify-center items-center">
          <People />
        </div>
      </div>

      <div className="container max-w-[996px] pt-20 pb-16 mx-auto flex justify-center items-center bg-[#FFFFFF] relative">
        <div className="w-1/2 flex flex-col justify-center items-start relative">
          <div className="relative flex justify-center items-center">
            <Wallet className="z-20" />
            <WalletFund className="absolute -bottom-[38px] -left-1 " />
          </div>
        </div>
        <div className="w-1/2  flex flex-col justify-center items-end ">
          <div className="flex flex-col  gap-y-4">
            <h2 className="text-[58px] font-bold text-[#000000] ">
              Nuestra misión
            </h2>
            <div className="flex flex-col justify-center items-center leading-none ">
              <p className="text-[30px] font-bold text-[#000000]">
                Eliminar barreras
              </p>
              <p className="text-[30px] font-bold text-[#000000]">
                Simplificar procesos financieros
              </p>
              <p className="text-[30px] font-bold text-[#000000]">
                Recortar distancias
              </p>
            </div>
            <div className="flex justify-center items-center gap-4">
              <SignsTwo />
              <div className="text-center leading-none">
                <p className="text-[33px] font-normal text-[#000000]">
                  Brindamos soluciones
                </p>
                <p className="text-[33px] font-bold text-[#000000]">
                  financieras accesibles
                </p>
              </div>
              <SignsTwo />
            </div>
          </div>
        </div>
        <div className="w-[133px] border border-[#EDEDED] absolute bottom-0" />
      </div>

      <div className="max-w-[999px] pt-8 pb-14 mx-auto flex justify-center bg-transparent relative">
        <div className="w-[211px] h-[260px] flex absolute left-0">
          <Arrow className="absolute -right-[99px] top-12 z-10" />
          <Tether className="z-10" />
          <div className="w-[210px] h-[234px]  absolute bottom-[6px]  bg-[#8BE593] rounded-full rotate-[40deg]" />
        </div>

        <div className="flex flex-col justify-center items-center">
          <VankLogo className="w-[387.83px] h-[132.73px] mb-8" />
          <p className="text-[32px] text-[#000000]">
            Recibiendo tus <span className="font-bold">USDT</span> para
          </p>
          <p className="text-[32px] text-[#000000]">
            hacerlas llegar en <span className="font-bold">USD</span>
          </p>
        </div>

        <div className="w-[211px] h-[260px] absolute right-0 flex justify-center items-center">
          <Money className="z-10" />
          <Arrow className="absolute -left-[99px] top-14 rotate-[18deg] z-10" />
          <div className="w-[220.25px] h-[243.73px]  absolute flex -left-1 p-1">
            <div className="w-full h-full rounded-full bg-[#FFED00]" />
          </div>
        </div>
      </div>

      <div className="max-w-[999px] pt-2 pb-2 mx-auto flex justify-center items-center">
        <div className="w-1/2 h-full flex flex-col justify-center items-center space-y-6">
          <p className="max-w-[386px] text-[27px] text-center leading-8">
            Hacemos llegar tus pagos a{" "}
            <span className="font-bold">cualquier parte del mundo</span>
          </p>
          <div className="w-[385px] h-[80.21px]">
            <img src={M} className="w-full h-full" alt="" />
          </div>
        </div>
        <div className="w-1/2 h-full flex justify-center items-center">
          <img src={VankMundo} alt="" className="w-[588px]" />
        </div>
      </div>

      <div className="max-w-[999px] pt-8 pb-14 mx-auto flex justify-center items-center">
        <div className="w-1/2 h-full flex flex-col justify-center items-center">
          <div className="relative  leading-none">
            <p className="text-[40px] text-left">Aquí todo es</p>
            <p className="text-[55px] font-bold relative z-10">tan facil y rápido</p>
            <div className="absolute w-[221px] bottom-[33%]">
              <IndicadorTwo className="w-full h-full" />
            </div>
            <p className="text-[55px] font-bold">como textear</p>
          </div>
        </div>
        <div className="w-1/2 h-full flex justify-center items-center gap-3">
          {/* <img src={VankMundo} alt="" className="w-[588px]" /> */}
          <div className="w-[230px] h-[231.24px] rounded-[8px] bg-[#EDEDED] flex flex-col justify-center items-center gap-y-2">
            <p className="w-[139px] p-1 text-lg text-center leading-none">
              Regístrate y crea tu cuenta
            </p>
            <div className="relative flex justify-center items-center">
              <HandOne className="z-10" />
              <HandFound className="absolute" />
            </div>
          </div>
          <div className="w-[230px] h-[231.24px] rounded-[8px] bg-[#EDEDED] flex flex-col justify-center items-center gap-y-2">
            <p className="w-[139px] p-2 text-lg text-center leading-none">
              Recarga y disfruta
            </p>
            <div className="relative flex justify-center items-center">
              <HandTwo className="z-10" />
              <HandFound className="absolute" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[999px] pt-8 pb-32 mx-auto flex flex-col justify-center items-center gap-y-14 ">
        <div className="relative w-[540px]">
          <h2 className="font-bold text-[48px] text-center leading-none relative z-10">
            Una app con una tasa alta en{" "}
            <span className="font-extrabold">bienestar</span>
          </h2>
          <div className="absolute w-[283px] -bottom-[11px] right-16">
            <IndicadorTwo className="w-full h-full" />
          </div>
        </div>
        <p className="w-[590px] h-[46px] text-lg text-center text-[#4C4C4C] leading-6 mb-4">
          Una plataforma muy intuitiva que te ayudará a ahorrar tiempo y decirle
          adiós al estrés de los bancos covencionales
        </p>
        <div className="max-w-[996px] flex justify-center items-center gap-[72px] group">
          <div className="w-[285px] h-[324px] duration-500 hover:scale-[1.18] bg-[#FFED00] rounded-[8px] shadow-lg flex flex-col justify-center items-center gap-y-4 cursor-pointer">
            <IconCardOne />
            <div className="w-[189px] flex flex-col justify-center items-center">
              <p className="text-lg font-bold leading-none">Procesos </p>
              <p className="text-lg font-bold leading-none">Simplificado</p>
            </div>
            <p className="text-base text-[#000000]">Sí, muy, muy fácil</p>
          </div>

          <div className="w-[285px] h-[324px] duration-500 hover:scale-[1.18] bg-[#FFFFFF] rounded-[8px] shadow-lg flex flex-col justify-center items-center gap-y-4 cursor-pointer">
            <IconCardTwo />
            <div className="w-[189px] flex flex-col justify-center items-center">
              <p className="text-lg font-bold leading-none">
                Plataforma a prueba{" "}
              </p>
              <p className="text-lg font-bold leading-none">de mapaches</p>
            </div>
            <p className="text-base text-[#000000] max-w-[60%] text-center leading-none">
              Más seguridad en las transacciones
            </p>
          </div>

          <div className="w-[285px] h-[324px] duration-500 hover:scale-[1.18] bg-[#FFED00] rounded-[8px] shadow-lg flex flex-col justify-center items-center gap-y-4 cursor-pointer">
            <IconCardThree />
            <p className="text-lg font-bold leading-none">
              Bienvenido al futuro
            </p>
            <p className="text-base text-[#000000] max-w-[60%] text-center font-normal leading-none">
              Aqui hacemos los cambios de divisas que otros no
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-full h-[500px] pt-32 bg-[#EDEDED] flex justify-center items-center pb-32">
        <div className="max-w-[999px] mx-auto flex justify-center gap-[20px] absolute -top-12">
          <div className="w-1/2 flex justify-center items-center ">
            <img src={HomeCard} alt="" className="w-full h-full " />
          </div>
          <div className="w-1/2 min-h-[262px]  flex flex-col justify-center gap-y-[20px] px-2">
            <div className="relative w-full ">
              <h2 className="text-[58px] text-[#000000] font-bold z-10 relative">
                Vank Card
              </h2>
              <div className="absolute w-[283px] bottom-2 ">
                <IndicadorTwo className="w-full h-full " />
              </div>
            </div>
            <p className="max-w-[460px] text-lg text-[#4C4C4C] leading-6">
              Descubre nuevas maneras de ahorrar y pagar con tu tarjeta Vank,
              controla tu seguridad, accede a pagos rápidos con Apple Pay o
              Google Pay y paga en divisas con extraordinarios tipos de cambio.
            </p>
            <button className="w-[120px] h-[32px] bg-[#000000] text-[#FFFFFF] hover:text-[#FFED00] rounded-[24px] text-base font-bold">
              Suscríbete
            </button>
          </div>
        </div>
        <div className="min-w-[999px] h-full mx-auto flex justify-center items-center -bottom-48 relative">
          <div className="w-[35%] h-[100%]  absolute left-[4%]">
            <img
              src={PremiumCard}
              className="object-contain z-20 hover:scale-[1.18] hover:rotate-[10deg] hover:relative hover:transition-all hover:duration-500 duration-500 cursor-pointer "
              alt=""
            />
            <p className="absolute bottom-[9%] left-[23%] text-[16px] font-bold">Premium Card</p>
          </div>
          <div className="w-[35%] h-[100%] absolute left-[24.3%] ">
            <img
              src={EliteCard}
              className="object-contain z-20 hover:scale-[1.18] hover:rotate-[10deg] hover:relative hover:transition-all hover:duration-500 duration-500 cursor-pointer "
              alt=""
            />
            <p className="absolute bottom-[9%] left-[23%] text-[16px] font-bold">Elite Card</p>
          </div>
          <div className="w-[35%] h-[100%] absolute left-[44.3%] ">
            <img
              src={SignatureBlack}
              className="object-contain z-50 hover:scale-[1.18] hover:rotate-[10deg] hover:relative hover:transition-all hover:duration-500 duration-500 cursor-pointer "
              alt=""
            />
            <p className="absolute bottom-[9%] left-[23%] text-[16px] font-bold">Signature Black</p>
          </div>
          <div className="w-[35%] h-[100%] absolute left-[64.3%] z-10">
            <img
              src={standardCard}
              className="object-contain hover:scale-[1.18] hover:rotate-[10deg] hover:relative hover:transition-all hover:duration-500 duration-500 cursor-pointer "
              alt=""
            />
            <p className="absolute bottom-[9%] left-[23%] text-[16px] font-bold">Tarjeta Vank</p>
          </div>
        </div>
      </div>

      <div className="max-w-[999px] pt-32 pb-32 mx-auto flex justify-center items-center gap-5 ">
        <img src={Coffe} alt="" />
        <div className="w-[691px] h-full bg-[#FFED00] p-[20px] rounded-[24px]">
          <div className="w-full  grid grid-cols-2 gap-x-5 gap-y-3">
            <div className="mb-4">
              <label className="ml-4" htmlFor="">
                Nombre Completo
              </label>
              <input
                type="text"
                id=""
                className="rounded-[16px] h-[32px] w-full focus:outline-none px-3"
              />
            </div>
            <div className="mb-4">
              <label className="ml-4" htmlFor="">
                Correo Electronico*
              </label>
              <input
                type="text"
                id=""
                className="rounded-[16px] h-[32px] w-full focus:outline-none px-3"
              />
            </div>
            <div className="mb-4">
              <label className="ml-4" htmlFor="">
                Número de contacto *
              </label>
              <input
                type="text"
                id=""
                className="rounded-[16px] h-[32px] w-full focus:outline-none px-3"
              />
            </div>
            <div className="mb-4">
              <label className="ml-4" htmlFor="">
                Horario disponible
              </label>
              <input
                type="text"
                id=""
                className="rounded-[16px] h-[32px] w-full focus:outline-none px-3"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="ml-4" htmlFor="">
              Comentario
            </label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="auto"
              className="rounded-[16px] h-[75px] w-full focus:outline-none p-2"
            ></textarea>
          </div>
          <button className="min-w-[183px] h-[37px] font-bold rounded-[24px] bg-[#000000] text-[#FFFFFF] ">
            Enviar ahora
          </button>
        </div>
      </div>

      <footer className="w-full h-[275px] bg-[#000000] relative flex justify-center items-center">
        <img src={Cintas} alt="" className="absolute -top-20" />
        <img src={animation} alt="" className="" />
        <div className="flex justify-center items-center gap-5 absolute bottom-6 left-1/2 -translate-x-1/2 ">
          <p className="text-base font-normal text-[#FFED00]">
            contacto@thisisvank.com
          </p>
          <p className="text-base font-normal text-[#FFED00]">
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
            <Whatsapp className="w-[42px] h-[42px]" />
            <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-[#000000] bg-white p-2 group-hover:text-xl group-hover:-translate-y-16 rounded-lg duration-700">
              Whatsapp
            </span>
          </button>
        </section>
      </div>
      <div className="fixed px-3 py-2 left-7 bottom-7 z-50 flex gap-4 bg-[#000000] rounded-[30px]">
        <img src={Insta} alt="" className="" />
        <img src={Link} alt="" className="" />
      </div>
    </div>
  );
};

export default Home;
