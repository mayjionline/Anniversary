// 1) สร้าง QR (อย่าลืมว่าต้องโหลด qrcode.min.js มาก่อน script นี้เสมอ)
const qrBox = document.getElementById("qr-container");
new QRCode(qrBox, {
  text: "https://example.com/our-anniversary",
  width: 220,
  height: 220,
  colorDark: "#000000",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.H,
});

// 2) ลำดับเหตุการณ์
const startBtn = document.getElementById("startBtn");
const qrSection = document.getElementById("qr-section");
const stage = document.getElementById("stage");
const pigWrap = document.getElementById("pig-wrap");
const message = document.getElementById("message");

qrBox.addEventListener("click", startSequence);
startBtn.addEventListener("click", startSequence);

function startSequence() {
  qrSection.style.display = "none";
  stage.style.display = "block";
  stage.setAttribute("aria-hidden", "false");

  // โชว์ข้อความ + เปิดฝนทันทีตอนหมูเริ่มเดิน
  message.classList.add("show");
  stage.classList.add("rain-on");

  pigWrap.classList.add("walk");
}

// 3) สร้างฝนตัวอักษร
const rain = document.getElementById("rain");
const TEXT = "H\na\np\np\ny\n \nA\nn\nn\ni\nv\ne\nr\ns\na\nr\ny";
const COLS = 9;
for (let i = 0; i < COLS; i++) {
  const d = document.createElement("div");
  d.className = "drop";
  d.textContent = TEXT;
  d.style.left = `${(i + .5) * (100 / COLS)}%`;
  d.style.transform = "translateX(-50%)";
  d.style.setProperty("--dur", `${7 + Math.random() * 4}s`);
  d.style.setProperty("--delay", `${Math.random() * 2}s`);
  rain.appendChild(d);
}
