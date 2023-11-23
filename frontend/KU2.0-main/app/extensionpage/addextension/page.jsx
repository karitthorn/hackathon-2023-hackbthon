//เพิ่ม extension ลงใน เเอป
"use client";
import { useEffect, useState } from "react";
import Navbar from "@/app/components/navbar";
import Feanav from "@/app/components/feanav";
import FileBase64 from "react-file-base64";

export default function FormInfoPage() {
  const [fileBase, setFileBase] = useState("");
  const [fileBase2, setFileBase2] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [showerror, setShowerror] = useState(false);
  const [url, setUrl] = useState("");

  //เมื่อ submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(fileBase);
    console.log(fileBase2);
    console.log(url);
    console.log(name);
    console.log(code);
    // Collect data and perform necessary actions
    postData();
  };
  const handleFileInputChange = (e) => {
    if (e.target.files) {
      setFileBase(e.target.files[0]);
    }
  };
  const handleFileInputChange2 = (e) => {
    if (e.target.files) {
      setFileBase2(e.target.files[0]);
    }
  };

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
  };

  //ส่ง extension ไปใน database
  async function postData() {
    try {
      const formdata1 = new FormData();
      formdata1.append("file", fileBase);
      const formdata2 = new FormData();
      formdata2.append("file", fileBase2);
      const formData = new FormData();
      formData.append("logo", formdata1.get("file"));
      formData.append("image", formdata2.get("file"));
      formData.append("name", name);
      formData.append("creator", code);
      formData.append("url", url);

      const response = await fetch(
        `https://api-c3vk.onrender.com/post_extension2`,
        {
          method: "POST",
          body: formData,
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      alert("ส่งสำเร็จ");

      // if (data[0].image != null) {
      //   console.log(data);
      //   setImageUrls([data[0].image, data[1].image]);
      // } else {
      // }

      return data;
    } catch (error) {
      alert(" API ไม่ตอบสนอง ");
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
              <label className="mb-2">Logo</label>
              <div>
                <input type="file" onChange={handleFileInputChange} />
              </div>
            </div>
            <div className="mb-6">
              <label className="mb-2">ฺBanner 358x166</label>
              <div>
                <input type="file" onChange={handleFileInputChange2} />
              </div>
            </div>
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
                value={url}
                onChange={(e) => setUrl(e.target.value)}
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
                type="text"
                id="code"
                placeholder="นายตัวอย่าง"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
              {showerror && (
                <>
                  <p className="text-xs text-red-600">กรอกอย่างน้อย 10 ตัว</p>
                </>
              )}
            </div>
            {/* -------------- */}
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
