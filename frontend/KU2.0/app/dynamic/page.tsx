
//หน้านี้ไม่เกี่ยวกับเเอป เพียงทดลอง  run html ลงใน ไฟล์
"use client";
import { useState, useEffect } from "react";

function YourComponent() {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    setHtmlContent(
      "<h1  style='font-size: 1.5rem; color: rgb(249 115 22); '>Hello world</h1>"
    );
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}

export default YourComponent;
