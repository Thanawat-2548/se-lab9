// ฟังก์ชันสำหรับสลับหน้าจอตาม ID ที่ส่งเข้ามา
function switchScreen(screenId) {
    // ซ่อนทั้ง 2 หน้าก่อน
    document.getElementById('screen1').classList.add('hidden');
    document.getElementById('screen2').classList.add('hidden');
    
    // แสดงเฉพาะหน้าที่เราต้องการ
    document.getElementById(screenId).classList.remove('hidden');
}

// ฟังก์ชันเพิ่ม/ลดจำนวนคน
let currentPersonCount = 1; // จำนวนคนเริ่มต้นที่ 1

function updatePerson(change) {
    currentPersonCount = currentPersonCount + change;
    
    // ป้องกันไม่ให้จำนวนคนติดลบ (ให้น้อยสุดคือ 1 คน)
    if (currentPersonCount < 1) {
        currentPersonCount = 1;
    }

    // นำค่าไปอัปเดตแสดงผลบนหน้าจอ
    document.getElementById('person-count').innerText = currentPersonCount;
}