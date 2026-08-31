// -----------------------------------------
// 1. ส่วน Data และการ Render Cards (Refactor)
// -----------------------------------------

// Mock Data: ข้อมูลกิจกรรมที่แยกออกมาจาก HTML
const activitiesData = [
    {
        title: "เตะบอลหลังเลิกเรียน",
        host: "User123",
        icon: "fa-futbol",
        location: "สนามฟุตบอล มหาวิทยาลัย",
        date: "25 ก.ค. 2026",
        time: "17:00 น.",
        required: 5
    },
    {
        title: "บาสเกตบอล 3v3",
        host: "Student_A",
        icon: "fa-basketball",
        location: "โรงยิมเนเซียม 2",
        date: "26 ก.ค. 2026",
        time: "18:30 น.",
        required: 2
    },
    {
        title: "กลุ่มติวเตรียมสอบ",
        host: "NerdBoy",
        icon: "fa-book",
        location: "ห้องสมุดกลาง ชั้น 3",
        date: "28 ก.ค. 2026",
        time: "13:00 น.",
        required: 3
    }
];

// ฟังก์ชันสร้างและ Render Card ลงใน HTML
function renderActivityCards() {
    const container = document.getElementById('activities-container');
    if (!container) return; 

    let cardsHTML = '';

    activitiesData.forEach(activity => {
        cardsHTML += `
            <div class="card">
                <div class="card-header">
                    <div class="card-icon"><i class="fa-solid ${activity.icon}"></i></div>
                    <div>
                        <div class="card-title">${activity.title}</div>
                        <div class="card-host">โดย ${activity.host}</div>
                    </div>
                </div>
                <div class="card-details">
                    <div><i class="fa-solid fa-location-dot"></i> ${activity.location}</div>
                    <div><i class="fa-regular fa-calendar"></i> ${activity.date}</div>
                    <div><i class="fa-regular fa-clock"></i> ${activity.time}</div>
                    <div><i class="fa-solid fa-users"></i> ต้องการ ${activity.required} คน</div>
                </div>
                <button class="action-btn">Join Team</button>
            </div>
        `;
    });

    container.innerHTML = cardsHTML;
}

// สั่งให้ render ทันทีที่โหลดหน้าเว็บเสร็จ
document.addEventListener('DOMContentLoaded', renderActivityCards);


// -----------------------------------------
// 2. ส่วน UI Interactions (โค้ดเดิมของคุณ)
// -----------------------------------------

// Modal Toggle Logic
function toggleModal(show) {
    const modal = document.getElementById('createModal');
    if (show) {
        modal.classList.add('active');
    } else {
        modal.classList.remove('active');
    }
}

// Stepper Logic
let personCount = 1;
function updatePerson(change) {
    const countDisplay = document.getElementById('person-count');
    personCount += change;
    
    // ป้องกันไม่ให้ค่าน้อยกว่า 1
    if (personCount < 1) {
        personCount = 1;
    }
    
    countDisplay.innerText = personCount;
}

// ปิด Modal เมื่อคลิกพื้นที่ว่างข้างนอก
window.onclick = function(event) {
    const modal = document.getElementById('createModal');
    if (event.target === modal) {
        toggleModal(false);
    }
}