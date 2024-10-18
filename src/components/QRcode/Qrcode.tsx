import { useState } from "react";
import QRCode from "react-qr-code";

export default function Qrcode() {
  const [input, setInput] = useState<string>("");
  const [qrcode, setQrcode] = useState<string>("");

  function handleGenerate() {
    setQrcode(input);
  }

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h1>QR Code Generator</h1>
      <input
        placeholder="Enter text to generate QR"
        title="QR data"
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button onClick={handleGenerate}>Generate QR</button>
      <div
        style={{
          margin: "20px",
        }}
      >
        <QRCode value={qrcode} size={300} />
      </div>
    </div>
  );
}
