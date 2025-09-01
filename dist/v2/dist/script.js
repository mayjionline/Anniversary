// ---------- 1) สร้าง QR ภายในกรอบหัวใจ ----------
const qrBox = document.getElementById("qr-container");
new QRCode(qrBox, {
  text: "https://example.com/our-anniversary", // ลิงก์ปลายทางเมื่อสแกน
  width: 220,
  height: 220,
  colorDark: "#000000",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.H,
});

// ---------- 2) เตรียมเวทีและลำดับเหตุการณ์หลังสแกน ----------
const startBtn = document.getElementById("startBtn");
const qrSection = document.getElementById("qr-section");
const stage = document.getElementById("stage");
const pigWrap = document.getElementById("pig-wrap");
const message = document.getElementById("message");

// คลิกที่ QR ก็เริ่มได้ (จำลองว่า "สแกนแล้ว")
qrBox.addEventListener("click", startSequence);
startBtn.addEventListener("click", startSequence);

function startSequence() {
  // ซ่อนส่วน QR, โชว์เวที
  qrSection.style.display = "none";
  stage.style.display = "block";
  stage.setAttribute("aria-hidden", "false");

  // เริ่มให้หมูเดิน
  pigWrap.classList.add("walk");

  // เมื่อหมูเดินเสร็จ → แสดงข้อความ + เปิดฝนตัวอักษร
  pigWrap.addEventListener("animationend", () => {
    message.classList.add("show");
    stage.classList.add("rain-on");
  }, { once: true });
}

// ---------- 3) สร้างพื้นหลังตัวอักษร "Happy Anniversary" ไหลตก ----------
const rain = document.getElementById("rain");
const TEXT = "H\na\np\np\ny\n \nA\nn\nn\ni\nv\ne\nr\ns\na\nr\ny";
const COLS = 9; // จำนวนเส้น/คอลัมน์
for (let i = 0; i < COLS; i++) {
  const d = document.createElement("div");
  d.className = "drop";
  d.textContent = TEXT;   // มี \n อยู่แล้ว → แสดงแนวตั้ง
  d.style.left = `${(i + .5) * (100 / COLS)}%`;
  d.style.transform = "translateX(-50%)";
  d.style.setProperty("--dur", `${7 + Math.random() * 4}s`);
  d.style.setProperty("--delay", `${Math.random() * 2}s`);
  rain.appendChild(d);
}

// เคล็ดเล็ก ๆ: ให้คอลัมน์ดูห่าง ๆ ไม่รกเกินไป
// คุณสามารถลด/เพิ่ม COLS หรือปรับสี/ความทึบได้ตามชอบ