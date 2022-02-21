import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import mZAR from "../images/mZAR-coin.png";
import Creative from "../images/mesh-creative.png";
import mZARLogo from "../images/mzar-logo.png";
import meshLogo from "../images/mesh-logo.png"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mesh mZAR</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Poppins:wght@400;700&family=Roboto:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* MOBILE */}

      <nav className="sticky flex flex-wrap justify-between px-8 py-4 bg-transparent">
        <div className="">
          <Image src={mZARLogo} alt={"Mesh mZAR token icon"} priority></Image>
        </div>
        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          
        </div>
      </nav>

      <main>
        <div className="grid h-screen place-content-center">
          <div className="absolute inset-0 w-screen h-screen overflow-hidden ">
            <div className="absolute top-0 h-screen mesh-gradient -left-36 -z-10 w-overflow"></div>

            {/* <div className="absolute -rotate-180 translate-x-1.5 -translate-y-96 scale-175 top-full">
              <Image
                src={Creative}
                alt={"Mesh mZAR token icon"}
                
                priority
                // width={100}
                // height={100}
              ></Image>
            </div> */}

            <div className="absolute scale-150 -rotate-180 -translate-y-1/2 translate-x-1/4 top-full">
              <Image
                src={Creative}
                alt={"Mesh mZAR token icon"}
                className={"rotate-12 scale-150"}
                priority
                // width={100}
                // height={100}
              ></Image>
            </div>

          </div>

          <div className="z-40 grid gap-12 px-10 tracking-wide">
            <div>
              <h1
                className={
                  " text-center font-poppins text-4xl font-bold text-white"
                }
              >
                <a href="https://mesh.trade">Meet mZAR.</a>
              </h1>
              <p className="text-xl font-normal text-center text-white">
                A stablecoin to bridge the gap between TradFi and Defi.
              </p>
            </div>
            <div className="grid place-content-center ">
              <Image
                src={mZAR}
                alt={"Mesh mZAR token icon"}
                priority
                width={150}
                height={150}
              ></Image>
            </div>
            <div>
              <p className="z-50 font-normal text-center text-gray-300/70 text-l">
                Individuals, institutions, wallets, exchanges, crypto hodlrs,
                and market makers can now access the speed, transparency, and
                trust of mZAR. Everyone is invited.
              </p>
            </div>
            <div className="z-50 grid place-content-center">
              <button className="grid h-11 place-content-center rounded-md bg-[#30B0B0] px-10 font-poppins text-white shadow-xl">
                Buy mZAR NOW
              </button>
            </div>
          </div>
        </div>
        <div className="grid bg-red-400 place-content-center"> 
        <p className="text-center font-poppins text-[#171433]">Trusted by:</p>
        <Image
                src={meshLogo}
                alt={"Mesh mZAR token icon"}
                priority
       className="border-b-2"
              ></Image>  
        </div>
      </main>

      <footer className={"bg-primary"}>
        <a href="https://mesh.trade" target="_blank" rel="noopener noreferrer">
          Powered by{" "}
          <span className={""}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
