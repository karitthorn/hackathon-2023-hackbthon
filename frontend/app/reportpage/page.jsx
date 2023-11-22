"use client";
import { useEffect, useState } from "react";
import Navbar from "@/app/components/navbar";
import Feanav from "@/app/components/feanav";


export default function FormInfoPage() {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name)
    console.log(code)
    const refresh = () => window.location.reload(true)
    refresh()
    // Collect data and perform necessary actions
  };

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
                หัวข้อร้องเรียน
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
