// Report Vin เมื่อไม่พบผู้ใช้ vin ในระบบ
"use client";
import { useEffect, useState } from "react";
import Navbar from "@/app/components/navbar";
import Feanav from "@/app/components/feanav";
import { useRouter } from 'next/navigation'
import Link from "next/link";

export default function FormInfoPage() {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [dics,setDics] = useState("");
  const [vinname,setVinname] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(dics)
    console.log(code);
    getData();
  };

  useEffect(() => {
    let params = new URLSearchParams(document.location.search);
    let pdfurl = params.get("vinname");
    console.log(pdfurl);
    if (pdfurl != null) {
      setVinname(pdfurl)
    }
  }, []);
//ส่งข้อมูลอาทิเช่น เลขทะเบียน,หัวข้อ,... ไปใน line
  async function getData() {
    try {
      const response = await fetch(
        `https://api-c3vk.onrender.com/vin_line?input_text=${''},${name},${dics},${code}`, {method: "POST"}
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      if (data == true) {
        alert("ส่งสำเร็จ")
        console.log(data);
        // setImageUrls(data.map((item) => item.image));
      } else {
        alert("รอ api")

      }

      return data;
    } catch (error) {
      console.error("An error occurred while fetching the data:", error);
      return null;
    }
  }

  return (
    <>
      <div className="md:w-[390px] rounded-sm bg-white p-4">
        <Feanav />
        <section className="mt-10">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                หัวข้อ
              </label>
              <input
                type="text"
                id="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="ถูกโกงราคา , คุกคาม"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="code"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
               คำอธิบาย
              </label>
              <input
                type="text"
                id="code"
                placeholder="โกงจากราคา ....,คุมคามโดย......"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
                value={dics}
                onChange={(e) => setDics(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="code"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                เลขทะเบียน
              </label>
              <input
                type="text"
                id="code"
                placeholder="โกงจากราคา ....,คุมคามโดย......"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              ยืนยัน
            </button>
          </form>
        </section>
      </div>
      <div className="fixed bottom-0 w-full">
        <Navbar />
      </div>
    </>
  );
}
