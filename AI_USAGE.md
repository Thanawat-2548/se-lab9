# AI Usage Documentation

ในโปรเจกต์ CampusLink มีการใช้งาน AI Assistants (เช่น ChatGPT, Gemini, หรือ GitHub Copilot) เพื่อช่วยเพิ่มประสิทธิภาพในกระบวนการพัฒนาซอฟต์แวร์ โดยยึดหลักการเป็น "เครื่องมือช่วยเหลือ" (Tool) ไม่ใช่ "ผู้เขียนโค้ดแทนทั้งหมด" (Replacement)

## 1. System Design & Brainstorming (Lab 1 - 2)
* **การใช้งาน:** ใช้ AI ช่วยระดมความคิดเกี่ยวกับ Use Cases ที่เหมาะสมสำหรับแอปพลิเคชันภายในมหาวิทยาลัย และช่วยร่างโครงสร้าง Database Schema เบื้องต้น
* **ตัวอย่าง Prompt:** "แนะนำ Database Schema สำหรับระบบ E-Commerce หรือระบบนัดหมายกิจกรรมสำหรับนักศึกษา โดยมี Entity หลักคือ User, Activity, และ Location"
* **การประยุกต์ใช้:** ทีมนำ Schema ที่ AI เสนอมาปรับปรุงให้เข้ากับ Business Logic ของระบบ และเลือกตัดฟิลด์ที่ไม่จำเป็นออก

## 2. Code Generation & Boilerplate (Lab 3 - 4)
* **การใช้งาน:** ใช้ AI ช่วยสร้างโครงสร้าง HTML/CSS เบื้องต้นของ UI Components เช่น Navbar, Card กิจกรรม และ Modal ฟอร์ม
* **ตัวอย่าง Prompt:** "เขียน HTML/CSS สำหรับหน้า Card แสดงข้อมูลกิจกรรม ประกอบด้วย ไอคอนกีฬา, วันที่, เวลา, และปุ่ม Join Team"
* **การประยุกต์ใช้:** นำโค้ด UI มาปรับ Styling ให้เข้ากับ Theme ของโปรเจกต์ด้วยตัวเอง และแก้ไขโครงสร้างฟอร์มให้ถูกต้องตามหลัก Semantic HTML

## 3. DevOps & CI/CD Setup (Lab 5 - 6)
* **การใช้งาน:** ใช้ AI ช่วยตรวจสอบ Syntax และสร้างไฟล์ Configuration สำคัญ เช่น `Dockerfile` และ CI/CD Pipeline YAML
* **ตัวอย่าง Prompt:** "ช่วยเขียน Dockerfile สำหรับโปรเจกต์ Web Frontend ที่ใช้ Nginx เป็น Web Server"
* **การประยุกต์ใช้:** ทีมต้องทำความเข้าใจการทำงานของแต่ละ Layer ใน Dockerfile ก่อนนำมาใช้งานจริง และทดสอบ Build Image ด้วยตัวเอง

## 4. Refactoring & Code Quality (Lab 7)
* **การใช้งาน:** ใช้ AI เป็น Code Reviewer เพื่อค้นหา Code Smells และเสนอแนวทางการทำ Refactor
* **ตัวอย่าง Prompt:** "อ่านโค้ดโปรเจกต์นี้ แล้ว list code smells ที่เจอบ่อยที่สุด พร้อมระบุไฟล์และเสนอวิธีแก้ปัญหา Duplicated Code"
* **การประยุกต์ใช้:** AI เสนอให้ปรับโครงสร้าง HTML Card ที่ซ้ำซ้อนโดยการดึงข้อมูลออกเป็น Array (Mock Data) จากนั้นทีมเป็นผู้ลงมือเขียน JavaScript `renderActivityCards()` เพื่อทำ Dynamic Rendering และทดสอบ Manual Smoke Test ด้วยตนเอง

## 💡 สรุปปรัชญาการใช้ AI ของทีม
ทีมยึดหลัก **Explain -> Propose -> Apply -> Test** ตลอดการทำงาน เมื่อ AI เสนอโค้ดหรือวิธีการแก้ปัญหา ทีมจะต้องทำความเข้าใจเหตุผล (Explain/Propose) ก่อนเสมอ จึงจะนำมาประยุกต์ใช้ (Apply) และเขียน/รัน Test เพื่อยืนยันความถูกต้อง ซึ่งช่วยให้กระบวนการเรียนรู้และพัฒนาซอฟต์แวร์เป็นไปอย่างมีประสิทธิภาพ