import {Outlet, useNavigate} from "react-router";
import {useEffect} from "react";

function App() {
  const navigate = useNavigate();
  console.log(1)
  useEffect(() => {
    navigate("/auth/login")
  }, [navigate]);
  
  return <Outlet/>
}

export default App
