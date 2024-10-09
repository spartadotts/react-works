import { useEffect, useState } from "react";

export default function Randomgen() {
  const [typeofColor, setTypeofColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomGenerator(length: number) {
    return Math.floor(Math.random() * length);
  }

  function generateRandomHEX() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomGenerator(hex.length)];
    }

    setColor(hexColor);
  }

  function generateRandomRGB() {
    const r = randomGenerator(256);
    const g = randomGenerator(256);
    const b = randomGenerator(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    if (typeofColor === "rgb") generateRandomRGB();
    else generateRandomHEX();
  }, [typeofColor]);
  return (
    <div
      className="container"
      style={{ background: color, width: "100vw", height: "80vh" }}
    >
      <div className="buttons" style={{ textAlign: "center" }}>
        <button onClick={() => setTypeofColor("hex")}>
          Generate HEX color
        </button>
        <button onClick={() => setTypeofColor("rgb")}>
          Generate RGB color
        </button>
        <button
          onClick={
            typeofColor === "hex" ? generateRandomHEX : generateRandomRGB
          }
        >
          Generate Random color
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          margin: "40px",
          flexDirection: "column"
        }}
      >
        <h3>{typeofColor === "rgb" ? "RGB Color " : "Hex Color "}</h3>
        <h2>{color}</h2>
      </div>
    </div>
  );
}
