import {Outlet, useNavigate} from "react-router";
import {useEffect} from "react";
import {jwtDecode} from "jwt-decode";

/** TODO:
 * 1. Добавить проверку истечение аксес токена
 * 2. Если запрос на рефреш с ошибкой, то навигейт на логин
 */
function App() {
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");

  useEffect(() => {
    if(!token) {
      navigate("/auth/login")
    }
    const decoded = jwtDecode(token)
    const currentTime = Date.now() / 1000;


    console.log(decoded)
  }, [navigate, token]);
  
  return <Outlet/>
}

export default App
