//ใช้ เเสดงผล url ใน extension
"use client";
import React, { useEffect ,useState} from "react";
import Feanav from "../components/feanav";
import { useRouter, useSearchParams } from "next/navigation";

export default function App() {
  const [url, setUrl] = useState(
    ""
  );
  const router = useRouter();
// ตัวอย่างการส่ง
//   http://localhost:3000/urldynamic?pdfurl=https%3A%2F%2Fku-nav.vercel.app%2F


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
      <Feanav />
      <div>
        <iframe
          className=" w-full  h-screen mb-2"
          src={url}
          title="Iframe Example"
        ></iframe>
      </div>
    </>
  );
}
