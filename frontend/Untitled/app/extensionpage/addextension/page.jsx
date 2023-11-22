"use client";
import { useEffect, useState } from "react";
import Navbar from "@/app/components/navbar";
import Feanav from "@/app/components/feanav";

export default function FormInfoPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [showDownload, setShowDownload] = useState(false);
  const [pdf64,setPdf64] = useState("")
  const [showerror,setShowerror] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(code);
    console.log(selectedOption);
    // Collect data and perform necessary actions
    getData();
    
  };

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
  };

  async function getData() {
    try {
      const response = await fetch(
        `https://api-c3vk.onrender.com/write_pdf?input_text=${name},${code}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data)
      setPdf64(data)
      console.log(pdf64)
      alert("ส่งสำเร็จ");
      setShowDownload(true)


      // if (data[0].image != null) {
      //   console.log(data);
      //   setImageUrls([data[0].image, data[1].image]);
      // } else {
      // }

      return data;
    } catch (error) {
      alert("กรอกรหัสนิสิตไม่ครบ 10 ตัว หรือ API ไม่ตอบสนอง ");
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
                ชื่อ Extension
              </label>
              <input
                type="text"
                id="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="ระบบตรวจผลการเรียน...."
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                URL Extension
              </label>
              <input
                type="text"
                id="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="www.exslmple.com"
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
                ชื่อผู้จัดทำ
              </label>
              <input
                type="number"
                id="code"
                placeholder="66xxxxxxx"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
              {showerror && (<>
              <p className="text-xs text-red-600">กรอกอย่างน้อย 10 ตัว</p>
              </>)}
            </div>
            {/* -------------- */}
            <label
              htmlFor="code"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              url Type
            </label>
            <div>
              <select
                value={selectedOption}
                onChange={handleDropdownChange}
                className=" w-full p-2.5 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 h-11  mb-5"
                required
              >
                <option value="0">ความสะดวกสบาย</option>
                <option value="1">การเดินทาง</option>
                <option value="2">กิจกรรม</option>
                <option value="3">อื่นๆ</option>
              </select>
            </div>
            {/* --------------------- */}
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
