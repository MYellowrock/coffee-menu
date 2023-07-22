import "../styles/cold.css";
import cocaCola from "../images/cold/cola.png";
import iceTea from "../images/cold/iceTea.png";
import { useState } from "react";

function Cold() {
  const imageProperty = {
    border: "4px solid black",
    height: "300px",
    borderRadius: "1rem",
  };

  const [cola, setCola] = useState(true);

  function colaHandler() {
    setCola(!cola);
  }

  return (
    <div className="white-color">
      <h1 className="text-center text-3xl py-6 px-2 decoration-2 font-extrabold blue-background rounded-2xl">
        SOĞUK İÇECEKLER
      </h1>
      <div
        className="grid grid-cols-3 gap-4 my-4 blue-background rounded-2xl"
        id="hot-products"
      >
        <button
          onClick={colaHandler}
          className="box-border p-4 border-4 border-black rounded-2xl m-3 change-text-bg-blue"
        >
          {cola ? (
            <div>
              <h2>Coca Cola</h2>
              <img
                className="hot-image-class"
                src={cocaCola}
                alt="cola"
                style={imageProperty}
              />
            </div>
          ) : (
            <div>
              <h2>Coca Cola</h2>
              <p>
                Ürün Detayı ... Ürün Detayı ... Ürün Detayı ... Ürün Detayı ...
                Ürün Detayı ... Ürün Detayı ... Ürün Detayı ... Ürün Detayı ...
                Ürün Detayı ...{" "}
              </p>
            </div>
          )}
        </button>

        <div className="box-border p-4 border-4 border-black rounded-2xl m-3 change-text-bg-blue">
          <h2>Ice Tea</h2>
          <img
            className="hot-image-class"
            src={iceTea}
            alt="iceTea"
            style={imageProperty}
          />
        </div>

        <div className="box-border p-4 border-4 border-black rounded-2xl m-3 change-text-bg-blue">
          <h2>Product</h2>
          {/* className="hot-image-class" <img src={tea} alt="tea" style={imageProperty}/> */}
        </div>

        <div className="box-border p-4 border-4 border-black rounded-2xl m-3 change-text-bg-blue">
          <h2>Product</h2>
          {/* className="hot-image-class" <img src={tea} alt="tea" style={imageProperty}/> */}
        </div>

        <div className="box-border p-4 border-4 border-black rounded-2xl m-3 change-text-bg-blue">
          <h2>Product</h2>
          {/* className="hot-image-class" <img src={tea} alt="tea" style={imageProperty}/> */}
        </div>

        <div className="box-border p-4 border-4 border-black rounded-2xl m-3 change-text-bg-blue">
          <h2>Product</h2>
          {/* className="hot-image-class" <img src={tea} alt="tea" style={imageProperty}/> */}
        </div>

        <div className="box-border p-4 border-4 border-black rounded-2xl m-3 change-text-bg-blue">
          <h2>Product</h2>
          {/* className="hot-image-class" <img src={tea} alt="tea" style={imageProperty}/> */}
        </div>
      </div>
    </div>
  );
}

export default Cold;
