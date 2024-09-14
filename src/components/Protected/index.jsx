import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

// Parent route'un elementi
const Protected = () => {
  const [isAuth, setIsAuth] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
   // Kullancının oturumunu izler ve oturumda bir değişiklik olduğunda callback function'nu tetikler
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuth(!!user);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (isAuth === false) {
      navigate("/");
    }
  }, [isAuth, navigate]);

  // Kimlik doğrulama durumu belirlenirken, bir yükleme göstergesi veya null gösterebilirsiniz
  if (isAuth === null) {
    return null; // veya bir yükleme döndürücüsü döndürebilirsiniz
  }

  return <Outlet />;
};

export default Protected;