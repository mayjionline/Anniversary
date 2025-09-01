// ทำให้แน่ใจว่าโดมโหลดเสร็จก่อนค่อยจับ element
document.addEventListener("DOMContentLoaded", () => {
  const startBtn  = document.getElementById("startBtn");
  const qrSection = document.getElementById("qr-section");
  const stage     = document.getElementById("stage");
  const pigWrap   = document.getElementById("pig-wrap");
  const message   = document.getElementById("message");
  const rain      = document.getElementById("rain");

  // ป้องกันกรณีหา element ไม่เจอ
  if (!startBtn || !qrSection || !stage || !pigWrap || !message || !rain) {
    console.error("บาง element ไม่พบ ตรวจ id ใน HTML ให้ตรงกับ script.js");
    return;
  }

  // เริ่มเมื่อกดปุ่ม
  startBtn.addEventListener("click", startSequence);

  function startSequence() {
    // ซ่อนหน้าแรก โชว์เวที
    qrSection.style.display = "none";
    stage.style.display = "block";
    stage.setAttribute("aria-hidden", "false");

    // ให้หมูเดินก่อน
    pigWrap.classList.add("walk");

    // รอหมูเดินเสร็จค่อยโชว์ข้อความ + เปิดฝน
    pigWrap.addEventListener(
      "animationend",
      () => {
        message.classList.add("show");
        stage.classList.add("rain-on");
      },
      { once: true }
    );
  }

  // สร้างฝนตัวอักษร
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

  // log ช่วยดีบัก
  console.log("✅ script.js loaded and ready");
});
