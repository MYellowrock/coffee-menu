import "../styles/main.css";
import backgroundImage from "../images/main/mainTheme.jpg";

function Main() {
  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    width: "100vw",
  };

  return (
    <div>
      <div className="container1" style={backgroundImageStyle}>
        <div className="box-1">
            <h1 className="font-5xl font-bold">COFFEE NAME</h1>
        </div>
      </div>
    </div>
  );
}

export default Main;
