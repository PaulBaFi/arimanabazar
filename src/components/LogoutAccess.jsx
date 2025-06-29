import { useEffect } from "react";
import Swal from "sweetalert2";

export default function LogoutAccess() {
  useEffect(() => {
    const logoutBtn = document.getElementById("cerrarSesion");

    logoutBtn?.addEventListener("click", function () {
      Swal.fire({
        title: "¿Estás seguro?",
        text: "Se cerrará tu sesión.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Cerrar sesión",
        cancelButtonText: "Cancelar",
        confirmButtonColor: "#fb2c36",
        cancelButtonColor: "#737373",
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem("isLoggedIn");

          Swal.fire({
            icon: "info",
            title: "Sesión cerrada",
            timer: 1500,
            showConfirmButton: false,
          }).then(() => {
            window.location.href = "/";
          });
        }
      });
    });
  }, []);

  return null;
}
