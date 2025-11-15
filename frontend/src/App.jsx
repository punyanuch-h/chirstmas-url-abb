import { useState } from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
`;

const InputRow = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const Input = styled.input`
  padding: 12px 16px;
  width: 360px;
  border-radius: 6px;
  border: 1px solid #aaa;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 12px 18px;
  border-radius: 6px;
  background: #0078ff;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background: #005fcc;
  }
`;

const Result = styled.div`
  margin-top: 16px;
  font-size: 16px;
  color: red;
`;

function App() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState("");

  const WORKER_API = import.meta.env.VITE_WORKER_API || "/shorten";

  const onShorten = async () => {
    if (!url.trim()) {
      setResult("กรุณากรอก URL ก่อน");
      return;
    }

    // 1) เช็ค localStorage ว่ามีลิงก์นี้หรือยัง
    const cached = localStorage.getItem("SHORT_" + url);
    if (cached) {
      setResult(cached);
      return;
    }

    try {
      // 2) ยิง API ไป Cloudflare Worker
      const res = await fetch(WORKER_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ longUrl: url }),
      });

      const data = await res.json();

      if (data.shortUrl) {
        // 3) เก็บใน localStorage
        localStorage.setItem("SHORT_" + url, data.shortUrl);

        // 4) แสดงผล
        setResult(data.shortUrl);
      } else {
        setResult("Error: ไม่สามารถย่อลิงก์ได้");
      }
    } catch {
      setResult("เกิดข้อผิดพลาด");
    }
  };

  return (
    <Container>
      <InputRow>
        <Input
          type="text"
          placeholder="ใส่ URL ที่ต้องการย่อ"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button onClick={onShorten}>Shorten</Button>
      </InputRow>

      <Result>{result}</Result>
    </Container>
  );
}

export default App;
