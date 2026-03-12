import { useEffect, useState } from "react";

function SplashScreen() {

  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="splash-container">

      {/* floating circles */}
      <div className="circle circle1"></div>
      <div className="circle circle2"></div>
      <div className="circle circle3"></div>

      <div className={show ? "splash-content show" : "splash-content"}>

        <img src="/logo.png" className="logo" alt="Microsoft Club Logo" />

        <h1 className="title">
          Microsoft Club
        </h1>

      </div>

    </div>
  );
}

export default SplashScreen;
