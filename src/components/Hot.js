import "../styles/hot.css";
import cupOfTea from "../images/hot/cupoftea.png";
import herbalTea from "../images/hot/herbaltea.png";
import { useState } from "react";

function Hot() {
  const imageProperty = {
    border: "4px solid black",
    height: "300px",
    borderRadius: "1rem",
  };

  const [herbal, setHerbal] = useState(true);

  function herbalHandler() {
    setHerbal(!herbal);
  }

  return (
    <div className="white-color">
      <h1 className="text-center text-3xl py-6 px-2 decoration-2 font-extrabold brown-background rounded-2xl">
        SICAK İÇECEKLER
      </h1>
      <div
        className="grid grid-cols-3 gap-4 my-4 brown-background rounded-2xl"
        id="hot-products"
      >
        <button
          onClick={herbalHandler}
          className="box-border p-4 border-4 border-black rounded-2xl m-3 change-text-bg"
        >
            {herbal ? (
              <div>
                <h2>Bitki Çayı</h2>
                <img
                  className="hot-image-class"
                  src={herbalTea}
                  alt="tea"
                  style={imageProperty}
                />
              </div>
            ) : (
              <div>
                <h2>Bitki Çayı</h2>
                <p>
                  Ürün Detayı ... Ürün Detayı ... Ürün Detayı ... Ürün Detayı
                  ... Ürün Detayı ... Ürün Detayı ... Ürün Detayı ... Ürün
                  Detayı ... Ürün Detayı ...{" "}
                </p>
              </div>
            )}
        </button>

        <div className="box-border p-4 border-4 border-black rounded-2xl m-3 change-text-bg md:border-t-4">
          <h2>Çay ( Kupa )</h2>
          <img
            className="hot-image-class"
            src={cupOfTea}
            alt="tea"
            style={imageProperty}
          />
        </div>

        <div className="box-border p-4 border-4 border-black rounded-2xl m-3 change-text-bg">
          <h2>Product</h2>
          {/* className="hot-image-class" <img src={tea} alt="tea" style={imageProperty}/> */}
        </div>

        <div className="box-border p-4 border-4 border-black rounded-2xl m-3 change-text-bg">
          <h2>Product</h2>
          {/* className="hot-image-class" <img src={tea} alt="tea" style={imageProperty}/> */}
        </div>

        <div className="box-border p-4 border-4 border-black rounded-2xl m-3 change-text-bg">
          <h2>Product</h2>
          {/* className="hot-image-class" <img src={tea} alt="tea" style={imageProperty}/> */}
        </div>

        <div className="box-border p-4 border-4 border-black rounded-2xl m-3 change-text-bg">
          <h2>Product</h2>
          {/* className="hot-image-class" <img src={tea} alt="tea" style={imageProperty}/> */}
        </div>

        <div className="box-border p-4 border-4 border-black rounded-2xl m-3 change-text-bg">
          <h2>Product</h2>
          {/* className="hot-image-class" <img src={tea} alt="tea" style={imageProperty}/> */}
        </div>
      </div>
    </div>
  );
}

export default Hot;
