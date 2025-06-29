import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { app } from "/services/firebase";

const auth = getAuth(app);

// เช็คสถานะผู้ใช้
onAuthStateChanged(auth, (user) => {
  const loginMenu = document.getElementById("loginMenu");
  const logoutMenu = document.getElementById("logoutMenu");

  if (user) {
    // เข้าสู่ระบบแล้ว
    loginMenu && (loginMenu.style.display = "none");
    logoutMenu && (logoutMenu.style.display = "inline-block");
  } else {
    // ยังไม่ได้เข้าสู่ระบบ
    loginMenu && (loginMenu.style.display = "inline-block");
    logoutMenu && (logoutMenu.style.display = "none");
  }
});

// จัดการปุ่ม logout
const logoutBtn = document.getElementById("logout");
if (logoutBtn) {
  logoutBtn.addEventListener("click", (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        localStorage.removeItem("loggedInUserId");
        window.location.href = "/login/Login.html";
      })
      .catch((err) => console.error("Sign out error", err));
  });
}