// ---------- สร้าง QR ภายในกรอบหัวใจ ----------
const qrBox = document.getElementById("qr-container");
new QRCode(qrBox, {
  text: "https://example.com/our-anniversary", // เปลี่ยนลิงก์ได้ตามต้องการ
  width: 220,
  height: 220,
  colorDark: "#000000",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.H,
});

// ---------- ลำดับเหตุการณ์ ----------
const startBtn  = document.getElementById("startBtn");
const qrSection = document.getElementById("qr-section");
const stage     = document.getElementById("stage");
const pigWrap   = document.getElementById("pig-wrap");
const message   = document.getElementById("message");

// คลิกคิวอาร์หรือปุ่มเพื่อเริ่ม (จำลอง "สแกนแล้ว")
qrBox.addEventListener("click", startSequence);
startBtn.addEventListener("click", startSequence);

function startSequence(){
  // ซ่อนส่วน QR → โชว์เวที
  qrSection.style.display = "none";
  stage.style.display = "block";
  stage.setAttribute("aria-hidden", "false");

  // ข้อความขึ้นทันที + เปิดฝนตัวอักษร
  message.classList.add("show");
  stage.classList.add("rain-on");

  // เริ่มให้หมูเดิน
  pigWrap.classList.add("walk");
}

// ---------- สร้างพื้นหลังตัวอักษร "Happy Anniversary" ไหลตก ----------
const rain = document.getElementById("rain");
const TEXT = "H\na\np\np\ny\n \nA\nn\nn\ni\nv\ne\nr\ns\na\nr\ny";
const COLS = 9;

for (let i = 0; i < COLS; i++) {
  const d = document.createElement("div");
  d.className = "drop";
  d.textContent = TEXT;
  d.style.left = `${(i + 0.5) * (100 / COLS)}%`;
  d.style.transform = "translateX(-50%)";
  d.style.setProperty("--dur", `${7 + Math.random() * 4}s`);
  d.style.setProperty("--delay", `${Math.random() * 2}s`);
  rain.appendChild(d);
}
