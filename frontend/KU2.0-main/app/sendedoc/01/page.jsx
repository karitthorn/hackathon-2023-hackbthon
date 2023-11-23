//ตรวจสอบ Trcking เอกสาร
"use client";
import { useEffect, useState } from "react";
import Navbar from "@/app/components/navbar";
import Image from "next/image";
import Feanav from "@/app/components/feanav";
import down from "@/public/svg/down.svg";
import Link from "next/link";

// https://api-c3vk.onrender.com/pdf_check?input_text=6610702993

export default function ScanPage() {
  const [persent, setPersent] = useState("");
  const [step1, setStep1] = useState("ยังไม่ได้ดำเนินการ");
  const [step2, setStep2] = useState("ยังไม่ได้ดำเนินการ");
  const [step3, setStep3] = useState("ยังไม่ได้ดำเนินการ");
  const [step4, setStep4] = useState("ยังไม่ได้ดำเนินการ");

  //รับ data มาจาก api ตาม step ของเอกสาร
  useEffect(() => {
    fetch("https://api-c3vk.onrender.com/pdf_check?input_text=6610702993")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPersent((data / 4) * 100);
        if (data == "1") {
          setStep1("ดำเนินการเเล้ว");
        }
        if (data == "2") {
          setStep1("ดำเนินการเเล้ว");
          setStep2("ดำเนินการเเล้ว");
        }
        if (data == "3") {
          setStep1("ดำเนินการเเล้ว");
          setStep2("ดำเนินการเเล้ว");
          setStep3("ดำเนินการเเล้ว");
        }
        if (data == "4") {
          setStep1("ดำเนินการเเล้ว");
          setStep2("ดำเนินการเเล้ว");
          setStep3("ดำเนินการเเล้ว");
          setStep4("ดำเนินการเเล้ว");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="md:w-[390px] rounded-sm bg-white p-4">
        <Feanav />
        <section className="mt-10">
          <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 mb-2">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              เอกสารใบคำร้องทั่วไป
            </h5>
            <div class="mb-1 text-base font-medium text-gray-500 ">สถานะ</div>
            <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 ">
              <div
                class="bg-green-600 h-2.5 rounded-full 0"
                style={{ width: persent }}
              ></div>
            </div>
          </div>
          <hr class="w-48 h-1 mx-auto my-4 bg-gray-200 border-0 rounded md:my-10 " />
          <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 mb-2">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Step 1
            </h5>
            <p className="font-normal text-gray-700">
              อาจารย์ที่ปรึกษารับเรื่อง
            </p>
            <div className=" flex justify-start mt-3">
              <button
                type="button"
                class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200  focus:z-10 focus:ring-4 focus:ring-gray-200  "
              >
                สถานะ : <span className=" text-yellow-600">{step1}</span>
              </button>
            </div>
          </div>
          {/* --------- */}
          <div className="flex w-full justify-center items-center mt-3 mb-3 ">
            <Image width={30} height={30} src={down} alt="" className="" />
          </div>
          {/* ---------------- */}
          <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 mb-2">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Step 2
            </h5>
            <p className="font-normal text-gray-700">หัวหน้าภาควิชารับเรื่อง</p>
            <div className=" flex justify-start mt-3">
              <button
                type="button"
                class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200  focus:z-10 focus:ring-4 focus:ring-gray-200  "
              >
                สถานะ :{" "}
                <span className=" text-yellow-600">{step2}</span>
              </button>
            </div>
          </div>
          {/* --------- */}
          <div className="flex w-full justify-center items-center mt-3 mb-3 ">
            <Image width={30} height={30} src={down} alt="" className="" />
          </div>
          {/* ---------------- */}
          <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 mb-2">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Step 3
            </h5>
            <p className="font-normal text-gray-700">
              หัวหน้าฝ่ายบริหารรับเรื้่อง
            </p>
            <div className=" flex justify-start mt-3">
              <button
                type="button"
                class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200  focus:z-10 focus:ring-4 focus:ring-gray-200  "
              >
                สถานะ :{" "}
                <span className=" text-yellow-600">{step3}</span>
              </button>
            </div>
          </div>
          {/* --------- */}
          <div className="flex w-full justify-center items-center mt-3 mb-3 ">
            <Image width={30} height={30} src={down} alt="" className="" />
          </div>
          {/* ---------------- */}
          <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 mb-2">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Step 4
            </h5>
            <p className="font-normal text-gray-700">เอกสารสำเร็จ</p>
            <div className=" flex justify-start mt-3">
              <button
                type="button"
                class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200  focus:z-10 focus:ring-4 focus:ring-gray-200  "
              >
                สถานะ :{" "}
                <span className=" text-yellow-600">{step4}</span>
              </button>
            </div>
          </div>
        </section>
        <div className="h-16"></div>
      </div>
      <div className="fixed bottom-0 w-full">
        <Navbar />
      </div>
    </>
  );
}
