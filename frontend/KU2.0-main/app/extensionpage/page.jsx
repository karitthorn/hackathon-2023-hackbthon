//หน้า Show extension ทั้งหมดภายในเเอป
"use client";
import { useEffect, useState } from "react";
import Navbar from "@/app/components/navbar";
import Link from "next/link";
import Feanav from "../components/feanav";
import ExNavbar from "../components/exNavber"

export default function Home() {
  const [imageUrls, setImageUrls] = useState([
    "https://via.placeholder.com/358x166",
    "https://via.placeholder.com/358x166",
    "https://via.placeholder.com/358x166",
  ]);
  const [datarun, setDatarun] = useState([]);

  //รับ data extension ทั้งหมด
  async function getData() {
    try {
      const response = await fetch(`https://api-c3vk.onrender.com/extension`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      if (data[0].image != null) {
        console.log(data);
        // setImageUrls(data.map((item) => item.image));
        setDatarun(data);
      } else {
      }

      return data;
    } catch (error) {
      console.error("An error occurred while fetching the data:", error);
      return null;
    }
  }


  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <ExNavbar />
      <div className="flex flex-col justify-center items-center mt-5 m-4">
        {datarun.map((data, index) => (
          <>
            <div
              key={index}
              className="flex flex-col max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 mb-2  w-full "
            >
              <img
                className="w-[358px] h-[166px] rounded-lg mr-2  mb-3"
                src={data.image}
                alt=""
                width={358}
                height={166}
              />
              <div className="flex  w-full justify-between ">
                <div className="flex flex-row">
                  <img
                    className="   shadow-lg  w-10 h-10 mt-2 mr-2 rounded-full"
                    src={data.image}
                    alt=""
                    width={50}
                    height={50}
                  />

                  <div className=" flex flex-col mt-2">
                    <h5 className="  font-bold tracking-tight text-gray-900 leading-5">
                      {data.name}
                      <br />
                      <span className="font-normal text-gray-700  ">
                        by{" "}
                        <span className=" underline-offset-2">
                          {data.creator}
                        </span>
                      </span>
                    </h5>
                  </div>
                </div>

                <div className=" flex justify-start mt-3">
                  <Link href={data.url}>
                    <button
                      type="button"
                      className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 "
                    >
                      ใช้งาน
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </>
        ))}

        <Link
          className=" text-gray-500 underline-offset-2"
          href="/extensionpage/addextension"
        >
          เพิ่ม Extension ของคุณ
        </Link>
        <div className="h-40"></div>
        <div className="fixed bottom-0 ">
          <Navbar />
        </div>
      </div>
    </>
  );
}
