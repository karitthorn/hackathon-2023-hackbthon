"use client";
import { useEffect, useState } from "react";
import Navbar from "@/app/components/navbar";
import { useRouter, useSearchParams } from "next/navigation";
import kuonline from "@/public/img/kuonline.jpg";
import Image from "next/image";
import camphone from "@/public/img/forsendedoc/camphone.png";
import l from "@/public/img/forsendedoc/l.jpg";
import r from "@/public/img/forsendedoc/r.jpg";
import m from "@/public/img/forsendedoc/m.png";
import Feanav from "../components/feanav";
import req from "@/public/img/req.png"
import Link from "next/link";

export default function ScanPage() {
  return (
    <>
      <div className="md:w-[390px] rounded-sm bg-white">
        <Feanav />
        <div className="flex  flex-col">
          <section className="w-full h-[59px] bg-gradient-to-b from-emerald-300 to-teal-50">
            <div className="w-[411px] text-center text-neutral-600 text-xl font-semibold ">
              เอกสารสำคัญทางการศึกษาแบบ online{" "}
            </div>
            <div className="w-[411px] text-center text-teal-600 text-xl font-semibold ">
              Edoc
            </div>
          </section>
          <div className="w-full h-[42px] text-center text-neutral-600 text-[10px] font-normal  mb-4 mt-3">
            มหาวิทยาลัยเกษตรศาสตร์ เปิดให้บริการยื่นขอ , รับรอง
            <br />
            และตรวจสอบเอกสารสำคัญทางการศึกษาในช่องทางออนไลน์ทั้งหมด ( Transcript
            )
            <br />
            และใบรับรองต่างๆ{" "}
          </div>
          <div className="flex ">
            <Image
              width={200}
              height={200}
              className="w-[150px] h-[118px] mr-10"
              src={camphone}
              alt=""
            />
            <section className="flex flex-col justify-center">
              <div className="w-[185px] h-[29px] bg-orange-400 rounded-[15px] shadow">
                <div className="w-[180.03px]  text-center text-white text-sm font-semibold items-center pt-1">
                  สำหรับนิสิตไทย
                </div>
              </div>
              <div className="w-[185px] h-[29px] bg-emerald-200 rounded-[15px] shadow mt-2">
                <div className=" text-center text-gray-700 text-xs font-semibold pt-2">
                  For Foreign Student Only
                </div>
              </div>
            </section>
          </div>
          <section>
            <div className="flex flex-row w-full  h-[23px] text-center text-neutral-400 text-[10px] font-normal justify-end pr-8 mt-6">
              รายการที่ต้องการเลือก
            </div>
            <div className="flex flex-row w-full   mt-2 mb-1">
              <Link href="/sendedoc/01">
            <Image
                className="w-[148px] h-[119px]"
                src={req}
                width={356}
                height={356}
                alt=""
              />
              </Link>
            </div>
          </section>
          <section>
            <div className=" h-[23px] text-center w-full justify-center">
              <span className="text-neutral-600 text-[10px] font-bold ">
                หมายเหตุ :
              </span>
              <span className="text-neutral-400 text-[10px] font-normal ">
                {" "}
              </span>
              <span className="text-neutral-600 text-[10px] font-normal ">
                การยื่นขอสำหรับวิทยาเขตอื่นๆ ให้ดูรายละเอียดเพิ่มเติม
              </span>
            </div>
            <div className="flex justify-center pt-3">
              <Image
                className="w-[356px] h-[91px]"
                src={kuonline}
                width={356}
                height={91}
                alt=""
              />
            </div>
          </section>
          <div className="w-full h-[23px] text-center text-neutral-600 text-[15px] font-bold font-['Poppins'] mt-5">
            ตัวอย่างเอกสาร
          </div>
          <section className="flex justify-center flex-row mt-5">
            <div className="flex justify-between">
              <Image
                className="w-[123px] h-[174px] mr-1"
                src={l}
                width={123}
                height={174}
                alt=""
              />
              <Image
                className="w-[121.19px] h-[174px] mr-1"
                src={m}
                width={121.19}
                height={174}
                alt=""
              />
              <Image
                className="w-[121.19px] h-[174px]"
                src={r}
                width={121.91}
                height={174}
                alt=""
              />
            </div>
          </section>
        </div>
        <div className="fixed bottom-0 w-full">
          <Navbar />
        </div>
      </div>
    </>
  );
}
