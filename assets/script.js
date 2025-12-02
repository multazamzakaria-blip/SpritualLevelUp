// === SCRIPT LOGIN & DASHBOARD ===

// Simpan user ke localStorage
export function loginUser(username, role) {
  const user = {
    username: username,
    role: role,
    loginTime: new Date().toISOString(),
  };
  localStorage.setItem("naikLevelUser", JSON.stringify(user));

  if (role === "supervisor") {
    window.location.href = "supervisor/dashboard.html";
  } else {
    window.location.href = "index.html";
  }
}

// Ambil user aktif
export function checkUser() {
  const data = localStorage.getItem("naikLevelUser");
  if (!data) {
    window.location.href = "login.html";
    return null;
  }
  return JSON.parse(data);
}
// ========================================
// 🔑 Supervisor Login & Proteksi
// ========================================
export function checkSupervisor(username, password) {
  // Data login supervisor — bisa ditambah jika ada banyak supervisor
  const validSupervisors = [
    { username: "mursyid", password: "naiklevel123" },
    { username: "pengasuh", password: "cahaya2025" },
  ];

  return validSupervisors.some(
    s => s.username === username && s.password === password
  );
}

export function protectSupervisorPage() {
  const data = localStorage.getItem("naikLevelSupervisor");
  if (!data) {
    window.location.href = "./login.html";
  }
  return JSON.parse(data);
}

export function logoutSupervisor() {
  localStorage.removeItem("naikLevelSupervisor");
  window.location.href = "./login.html";
}
// Ambil nama pengguna
export function getUserName() {
  const data = localStorage.getItem("naikLevelUser");
  if (!data) return "Pengguna";
  return JSON.parse(data).username;
}

// Logout
export function logoutUser() {
  localStorage.removeItem("naikLevelUser");
  window.location.href = "login.html";
}
