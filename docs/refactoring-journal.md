# Refactoring Journal

## 1. Code Smell ที่พบ
* **Smell:** Duplicated Code (โครงสร้าง UI ซ้ำซ้อน) และ High Coupling (Data ผูกติดกับ View)
* **Location:** `index.html` (บรรทัดที่ 39 - 88)
* **Reason:** มีการเขียนโครงสร้าง HTML `<div class="card">` ซ้ำกัน 3 ครั้ง เปลี่ยนเฉพาะข้อความด้านใน ทำให้โค้ดซ้ำซ้อน Maintenance ยาก หากมีการปรับดีไซน์ ต้องแก้ไขทีละจุด และไม่สามารถรองรับ Dynamic Data จาก API ได้

## 2. AI Usage Workflow
* **Prompt ที่ใช้:** "อ่านโค้ดโปรเจกต์นี้ แล้ว list 5 code smells ที่เจอบ่อยที่สุด พร้อมระบุไฟล์/บรรทัด และเหตุผลที่ถือว่าเป็น smell" และ "ขอวิธีแก้ Duplicated Code ของ Card พร้อมคำแนะนำในการนำไป Apply และ Test"
* **AI Output / Suggestion:** AI เสนอให้อย่างเป็นระบบ (Explain -> Propose -> Apply -> Test) โดยลบ HTML Card ซ้ำซ้อนออก เหลือเฉพาะ Container Tag แล้วแยก Data ไปไว้ใน JavaScript Array of Objects (Mock Data) จากนั้นสร้างฟังก์ชัน `renderActivityCards()` วนลูปสร้าง HTML Dynamic เข้าไปแทน
* **ส่วนที่ทีมดำเนินการเอง:** ทีมปรับโครงสร้าง HTML เพิ่ม `id="activities-container"`, ทบทวนลอจิกตามที่ AI เสนอ, เขียนฟังก์ชัน `renderActivityCards()` ใน `phuettiphorn_post_script.js`, และทำการ Manual Smoke Test / Edge Case Test

## 3. Before & After
* **Before:** โค้ด HTML ยาวและซ้ำซ้อนกว่า 50 บรรทัด ข้อมูล Hardcoded อยู่ใน View แก้ไขดีไซน์หรือเพิ่มกิจกรรมได้ลำบาก
* **After:** HTML เหลือเพียง Container Element สั้นกระชับ, ข้อมูลแยกออกจาก View ชัดเจน (Separation of Concerns), โครงสร้างยืดหยุ่น รองรับการเชื่อมต่อ API ในอนาคต และเขียน Test ได้ง่ายขึ้น

## 4. Lessons Learned
* การทำ Refactoring ด้วย AI ช่วยประหยัดเวลา แต่ทีมต้องปฏิบัติตาม Deliberate Programming (PP Tip 62) โดยต้องเข้าใจลอจิกก่อนนำมาใช้
* การแยก Data ออกจาก View ทำให้ระบบมี Testability ดีขึ้น และเปลี่ยนโครงสร้างจากการทำงานแบบ Static เป็น Dynamic Component อย่างแท้จริง