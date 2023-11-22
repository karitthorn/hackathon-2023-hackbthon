import Image from "next/image";
import book from "@/public/img/homepage/book.png";
import camera from "@/public/img/Camera.png";
import gps from "@/public/img/homepage/gps.png";
import school from "@/public/img/homepage/school.png";
import nav from "@/public/img/homepage/nav.png";
import cal from "@/public/img/homepage/cal.png";
import more from "@/public/img/more.png";
import edoc from "@/public/img/homepage/edoc.png";
import g from "@/public/img/homepage/g.png"
import Link from "next/link";
export default function Qmenu() {
  return (
    <>
      <section className="flex p-4 flex-col">
        <h1 className="text-slate-900 text-xl font-bold  mb-4">Main menu</h1>
        <div className=" grid grid-cols-4 gap-4 justify-between">
          <a className="flex justify-center flex-col items-center">
            <div className="w-[77px] h-[77px] relative mb-2">
              <div className="w-[77px] h-[77px] left-0 top-0 absolute rounded-[20px] shadow-lg" />
              <div className="w-[68px] h-[62px] px-[8.84px] pt-[3.10px] pb-[3.72px] justify-center items-center inline-flex m-1">
                <Image
                  className="w-9   items-center"
                  src={gps}
                  width={200}
                  height={200}
                  alt="calendar"
                />
              </div>
            </div>
            <span className=" mb-2 transition-all duration-200 text-sm text-gray-500">
              Check in
            </span>
          </a>
          <a className="flex justify-center flex-col items-center">
            <div className="w-[77px] h-[77px] relative mb-2">
              <div className="w-[77px] h-[77px] left-0 top-0 absolute  rounded-[20px] shadow-lg" />
              <div className="w-[68px] h-[62px] px-[8.84px] pt-[3.10px] pb-[3.72px] justify-center items-center inline-flex m-1">
                <Image
                  className="w-10   items-center"
                  src={school}
                  width={200}
                  height={200}
                  alt="calendar"
                />
              </div>
            </div>
            <span className=" mb-2 transition-all duration-200 text-sm text-gray-500">
              About KU
            </span>
          </a>
          <Link
            className="flex justify-center flex-col items-center"
            href="#"
          >
            <div className="w-[77px] h-[77px] relative mb-2">
              <div className="w-[77px] h-[77px] left-0 top-0 absolute  rounded-[20px] shadow-lg" />
              <div className="w-[68px] h-[62px] px-[8.84px] pt-[3.10px] pb-[3.72px] justify-center items-center inline-flex m-1">
                <Image
                  className="w-12   items-center"
                  src={nav}
                  width={200}
                  height={200}
                  alt="calendar"
                />
              </div>
            </div>
            <span className=" mb-2 transition-all duration-200 text-sm text-gray-500">
              Quick link
            </span>
          </Link>
          <a className="flex justify-center flex-col items-center">
            <div className="w-[77px] h-[77px] relative mb-2">
              <div className="w-[77px] h-[77px] left-0 top-0 absolute  rounded-[20px] shadow-lg bg-gradient-to-b from-teal-600 to-teal-500"  />
              <div className="w-[68px] h-[62px] px-[8.84px] pt-[3.10px] pb-[3.72px] justify-center items-center inline-flex m-0.5  ">
                <Image
                  className="w-12   items-center z-10"
                  src={cal}
                  width={200}
                  height={200}
                  alt="calendar"
                />
              </div>
            </div>
            <span className=" mb-2 transition-all duration-200 text-sm text-gray-500">
              KU Event
            </span>
          </a>
          <a className="flex justify-center flex-col items-center">
            <div className="w-[77px] h-[77px] relative mb-2">
              <div className="w-[77px] h-[77px] left-0 top-0 absolute  rounded-[20px] shadow-lg" />
              <div className="w-[68px] h-[62px] px-[8.84px] pt-[3.10px] pb-[3.72px] justify-center items-center inline-flex m-1">
                <Image
                  className="w-12   items-center mt-1"
                  src={g}
                  width={200}
                  height={200}
                  alt="calendar"
                />
              </div>
            </div>
            <span className=" mb-2 transition-all duration-200 text-sm text-gray-500">
              Grade
            </span>
          </a>
          <Link
            className="flex justify-center flex-col items-center"
            href="/sendedoc"
          >
            <div className="w-[77px] h-[77px] relative mb-2">
              <div className="w-[77px] h-[77px] left-0 top-0 absolute  rounded-[20px] shadow-lg" />
              <div className="w-[68px] h-[62px] px-[8.84px] pt-[3.10px] pb-[3.72px] justify-center items-center inline-flex m-0.5">
                <Image
                  className="w-12   items-center pt-2"
                  src={edoc}
                  width={200}
                  height={200}
                  alt="calendar"
                />
              </div>
            </div>
            <span className=" mb-2 transition-all duration-200 text-sm text-gray-500">
              Edoc
            </span>
          </Link>

          <a className="flex justify-center flex-col items-center">
            <div className="w-[77px] h-[77px] relative mb-2">
              <div className="w-[77px] h-[77px] left-0 top-0 absolute  rounded-[20px] shadow-lg" />
              <div className="w-[68px] h-[62px] px-[8.84px] pt-[3.10px] pb-[3.72px] justify-center items-center inline-flex m-1">
                <Image
                  className="w-12   items-center mt-1"
                  src={book}
                  width={200}
                  height={200}
                  alt="calendar"
                />
              </div>
            </div>
            <span className=" mb-2 transition-all duration-200 text-sm text-gray-500">
              Libary
            </span>
          </a>
          <a className="flex justify-center flex-col items-center">
            <div className="w-[77px] h-[77px] relative mb-2">
              <div className="w-[77px] h-[77px] left-0 top-0 absolute  rounded-[20px] shadow-lg" />
              <div className="w-[68px] h-[62px] px-[8.84px] pt-[3.10px] pb-[3.72px] justify-center items-center inline-flex m-1">
                <Image
                  className="w-12   items-center mt-1"
                  src={more}
                  width={200}
                  height={200}
                  alt="calendar"
                />
              </div>
            </div>
            <span className=" mb-2 transition-all duration-200 text-sm text-gray-500">
              More
            </span>
          </a>
        </div>
      </section>
    </>
  );
}
