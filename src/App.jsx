import { RouterProvider } from "react-router"
import { router } from "./routes"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    Aos.refresh();
  }, []);
  return (
    <>
      <RouterProvider router={router} />  
    </>
  )
}

export default App
