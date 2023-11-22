"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Edocpage() {
  const [succeed, setSucceed] = useState(false);
  const [url, setUrl] = useState(
    "https://verify.ink/assets/documents/electronic_records_and_signatures_in_commerce.pdf"
  );
  const router = useRouter();
  useEffect(() => {
    if (succeed) {
      router.push("/succeed");
    }
  }, [succeed]);
  
  useEffect(() => {
    let params = new URLSearchParams(document.location.search);
    let pdfurl = params.get("pdfurl");
    console.log(pdfurl);
    if (pdfurl != null) {
      setUrl(pdfurl);
    }
  }, []);

  return (
    <>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-green-200 ">
        <div className="flex-grow   items-center w-full flex flex-col p-2 justify-center">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">
              🌟E-DOC
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 ">
              ระบบดำเนินการเอกสาร
            </p>
            {/* ---------------------------------------------------------------- */}
            {/* Dropdown and Search Input */}

            <iframe
              width="100%"
              height="600px"
              title="myFrame"
              src={`https://verify.ink/viewer?url=${url}&show-signature-if-present=true&notify-if-not-signed=true&sign=true&download=true&app-host=https://app.hancock.ink&api-host=https://api.hancock.ink`}
            ></iframe>
            <p className="mt-8 mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 ">
              --หรือ--
            </p>
            {/* ----------------------------- */}
            <div className="block w-full p-2 bg-white border border-gray-200 rounded-lg shadow mt-6 mb-6 pt-7 pb-7">
              <div>
                <a
                  href={url}
                  download
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-6"
                >
                  โหลดไฟล์ (จากนิสิต)
                </a>
              </div>
            </div>

            {/* ------------------------------------- */}
            <div className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow ">
              <h5 className="mb-6 text-2xl font-bold tracking-tight text-gray-900">
                ส่งเอกสาร
              </h5>

              <form>
                <input
                  aria-label="uploadfile"
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none mb-5"
                  id="file_input"
                  type="file"
                  required
                />
                <button
                  type="submit"
                  className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                >
                  ส่งเอกสาร
                </button>
              </form>
            </div>
            <div className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow mt-6 ">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                <span className="text-red-500">ปฎิเสธ</span>คำขอ
              </h5>
              <form>
                <div>
                  <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="เหตุผลที่ปฎิเสธคำขอ"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  mt-6"
                >
                  ปฎิเสธ
                </button>
              </form>
            </div>

            {/* ---------------------------------------------------------------- */}
          </div>

          {/* ---------------------------------------------------------------- */}
        </div>
      </div>
    </>
  );
}

