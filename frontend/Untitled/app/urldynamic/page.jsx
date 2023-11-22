"use client";
import React, { useEffect ,useState} from "react";
import Feanav from "../components/feanav";
import { useRouter, useSearchParams } from "next/navigation";

export default function App() {
  const [url, setUrl] = useState(
    "https://verify.ink/assets/documents/electronic_records_and_signatures_in_commerce.pdf"
  );
  const router = useRouter();
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
