import { useEffect } from "react";
import Swal from "sweetalert2";

export default function LoginAccess() {
  useEffect(() => {
    const loginBtn = document.getElementById("iniciarSesion");
    const mail = "admin@gmail.com";
    const pass = "123";

    loginBtn?.addEventListener("click", function () {
      const correo = document.getElementsByName("correo")[0].value.trim();
      const clave = document.getElementsByName("clave")[0].value.trim();

      if (correo === "" || clave === "") {
        Swal.fire({ icon: "info", title: "Campos incompletos" });
        return;
      }

      if (correo === mail && clave === pass) {
        localStorage.setItem("isLoggedIn", "true");

        Swal.fire({
          icon: "success",
          title: "Bienvenido",
          timer: 1500,
          showConfirmButton: false,
        }).then(() => {
          window.location.href = "/panel";
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Credenciales incorrectas",
        });
      }
    });
  }, []);

  return null;
}
