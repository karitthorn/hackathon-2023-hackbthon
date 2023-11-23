// navbar ล่างสุดของเเอป
import Image from "next/image";
import home from "@/public/img/home.png";
import camera from "@/public/img/Camera.png";
import card from "@/public/img/card.png";
import menu from "@/public/img/menu.png";
import user from "@/public/img/user.jpg";
import Link from "next/link";
import takky from "@/public/img/takky.jpg";
export default function Navbar() {
  return (
    <>
      <div className="flex items-center justify-center  w-full">
        <div className="">
          {/* <div className="w-full max-w-md px-7 py-10 mx-auto  shadow-xl"> */}
          {/* Navigation Bar */}
          <div className="px-5 pt-2 bg-white   pb-0 h-16">
            <div className="flex flex-row space-x-3">
              {/* Item #1 */}
              <div className="flex group">
                <Link
                  href="/"
                  className="p-3 text-gray-400 hover:text-green-500"
                >
                  <span className="flex flex-col items-center">
                    {/* Icon */}
                    <Image src={home} alt="home" className="w-4 h-5" />
                    {/* Text */}
                    <span className="text-xs mb-2 transition-all duration-200">
                      Home
                    </span>
                    {/* Focus Dot */}
                    <span className="h-2 w-2 rounded-full group-hover:bg-green-500 transition-all duration-150 delay-100"></span>
                  </span>
                </Link>
              </div>
              <div className="flex group">
                <a href="#" className="p-3 text-gray-400 hover:text-green-500">
                  <span className="flex flex-col items-center">
                    {/* <!-- Icon --> */}
                    <Image src={menu} alt="home" className="w-5 h-5" />
                    {/* <!-- Text --> */}
                    <span className="text-xs mb-2 transition-all duration-200">
                      Menu
                    </span>
                    {/* <!-- Focus Dot --> */}
                    <span
                      className="h-2 w-2 rounded-full group-hover:bg-green-500
									transition-all duration-150 delay-100"
                    ></span>
                  </span>
                </a>
              </div>
              <div className="flex group">
                <a href="#" className="p-3 text-green-500 hover:text-green-500">
                  <span className="flex flex-col items-center">
                    {/* <!-- Icon --> */}
                    <Image className=" w-16 h-16  rounded-full shadow-xl relative  bottom-12 object-none " src={takky} width={64} height={64} alt=""></Image>
                    {/* <!-- Text --> */}
                    <span className="text-xs mb-2 transition-all duration-200"></span>
                    {/* <!-- Focus Dot --> */}
                  </span>
                </a>
              </div>
              <div className="flex group">
                <a href="#" className="p-3 text-gray-400 hover:text-green-500">
                  <span className="flex flex-col items-center">
                    {/* <!-- Icon --> */}
                    <Image className="w-6 h-5 " alt="" src={card} />
                    {/* <!-- Text --> */}
                    <span className="text-xs mb-2 transition-all duration-200">
                      Card
                    </span>
                    {/* <!-- Focus Dot --> */}
                    <span
                      className="h-2 w-2 rounded-full group-hover:bg-green-500
									transition-all duration-150 delay-100"
                    ></span>
                  </span>
                </a>
              </div>
              <div className="flex group">
                <Link
                  href="/scan"
                  className="p-3 text-gray-400 hover:text-green-500"
                >
                  <span className="flex flex-col items-center">
                    {/* <!-- Icon --> */}
                    <Image className="w-5 h-5" alt="" src={camera} />
                    {/* <!-- Text --> */}
                    <span className="text-xs mb-2 transition-all duration-200">
                      Scan
                    </span>
                    {/* <!-- Focus Dot --> */}
                    <span
                      className="h-2 w-2 rounded-full group-hover:bg-green-500
									transition-all duration-150 delay-100"
                    ></span>
                  </span>
                </Link>
              </div>
              {/* ... Other items follow similarly */}
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
