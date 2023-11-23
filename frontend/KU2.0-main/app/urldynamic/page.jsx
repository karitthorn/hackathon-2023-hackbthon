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

  // ส่ง session ไปที่ website เพื่อไม่ต้อง login ใหม่
  function handleAuth(website) {
    const sendData = async () => {
      try {
        const dataToSend = {
          timestamp: new Date().toISOString(),
          session: "9i4903249jejjexxxxxxxx",
          /* Your data to send */
        };
        const response = await fetch(website, {
          method: "POST",
          headers: {
            Auth: "AppNisitkuAuth",
            // Add any additional headers as needed
          },
          body: JSON.stringify(dataToSend),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        // Handle the response as needed
      } catch (error) {
        console.error("Error sending data:", error);
      }
    };

    // This will trigger the data sending when the component is mounted
    sendData();
  } // Add any dependencies if needed



  useEffect(() => {
    let params = new URLSearchParams(document.location.search);
    let pdfurl = params.get("pdfurl");
    console.log(pdfurl);
    if (pdfurl != null) {
      setUrl(pdfurl);
      handleAuth(pdfurl)
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
