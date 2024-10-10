import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#000");
  const [tipoDeColor, setTipoDeColor] = useState("rgb");
  const generarColorRGB = () => {
    const r = (Math.random() * 255).toFixed();
    const g = (Math.random() * 255).toFixed();
    const b = (Math.random() * 255).toFixed();
    setColor(`rgb(${r}, ${g}, ${b})`);
  };
  const generarColorHEX = () => {
    const valoresHexadecimales = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let colorHex = "#";

    for (let i = 0; i < 6; i++) {
      let valorRandom = (
        Math.random() *
        (valoresHexadecimales.length - 1) *
        1
      ).toFixed();
      colorHex += valoresHexadecimales[valorRandom];
    }
    setColor(colorHex);
  };
  return (
    <>
      <div className="contenedor-color" style={{ backgroundColor: color }}>
        <div className="botones">
          <button onClick={() => setTipoDeColor("rgb")}>RGB</button>
          <button onClick={() => setTipoDeColor("hex")}>HEX</button>
          <button
            onClick={tipoDeColor === "rgb" ? generarColorRGB : generarColorHEX}
          >
            Generar Color Aleatorio
          </button>
        </div>
        <h1 className="seleccionado">{color}</h1>
      </div>
    </>
  );
}

export default App;
