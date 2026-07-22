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