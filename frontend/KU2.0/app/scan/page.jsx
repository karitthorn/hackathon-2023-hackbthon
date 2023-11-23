//ระบบ scan Qr code ภายในเเอป
"use client";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";
import Navbar from "@/app/components/navbar";
import { useRouter, useSearchParams } from "next/navigation";
import Feanav from "../components/feanav";
import Link from "next/link";

export default function ScanPage() {
  const [scanReult, setScanReult] = useState("");
  const [verify, setVerify] = useState(true);
  const [name, setName] = useState("");
  const [carnumber, setCarnumber] = useState("");
  const [urlimg, setUrlimg] = useState("");
  const router = useRouter();
  async function getData(result) {
    try {
      const response = await fetch(
        `https://api-c3vk.onrender.com/vincheck?input_text=${result}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(scanReult);
      console.log(data);
      if (data.name != null) {
        setName(data.name);
        setCarnumber(data.carnumber);
        setUrlimg(data.image_url);
      } else {
        setVerify(false);
      }

      return data;
    } catch (error) {
      console.error("An error occurred while fetching the data:", error);
      return null;
    }
  }
  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 200,
        height: 200,
      },
      fps: 5,
    });

    scanner.render(success, error);

    function success(result) {
      scanner.clear();
      setScanReult(result);
      getData(result);
    }

    function error(err) {
      console.warn(err);
    }
  }, []);
  useEffect(() => {
    if (!verify) {
      router.push("/scan/idk");
    }
  }, [verify]);

  return (
    <>
      <div className="md:w-[390px] rounded-sm bg-white ">
        {scanReult ? (
          <>
            <Feanav />
            <div className=" m-4">
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                <div className="flex justify-end px-4 pt-4">
                  {/* <!-- Dropdown menu --> */}
                </div>
                <div className="flex flex-col items-center pb-10">
                  <img
                    className="w-24 h-24 mb-3 rounded-full shadow-lg"
                    src={urlimg}
                    alt="image"
                  />
                  <h5 className=" text-xl font-medium text-gray-900">{name}</h5>
                  <span className="text-sm text-gray-500 mb-1">
                    {carnumber}
                  </span>
                  <span className="text-sm text-gray-500">
                    วินมอไซต์ลงทะเบียนเเล้ว
                  </span>

                  <div className="flex mt-4 md:mt-6">
                    <a
                      href="tel:0-2942-8222"
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
                    >
                      Call Sos
                    </a>
                    <Link
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 ms-3"
                      href= {`/reportpage?vinname=${name}`}
                    >
                      Report
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="fixed bottom-0 w-full">
              <Navbar />
            </div>
          </>
        ) : (
          <>
            <div id="reader"></div>
            <div className="fixed bottom-0 w-full">
              <Navbar />
            </div>
          </>
        )}
      </div>
    </>
  );
}
