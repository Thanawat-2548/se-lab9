# AI Usage Documentation - CampusLink Project

ในโปรเจกต์ CampusLink มีการใช้งาน AI Assistants Gemini เพื่อช่วยเพิ่มประสิทธิภาพในกระบวนการพัฒนาซอฟต์แวร์ โดยยึดหลักการเป็น "เครื่องมือช่วยเหลือ" (Tool) ไม่ใช่ "ผู้เขียนโค้ดแทนทั้งหมด" (Replacement)

---

## Lab 1: System Design & Brainstorming (Use Cases)
* **การใช้งาน:** ใช้ AI ช่วยระดมความคิดเกี่ยวกับ Use Cases ที่เหมาะสมและฟีเจอร์หลักสำหรับแอปพลิเคชันภายในมหาวิทยาลัย
* **ตัวอย่าง Prompt:** 
  > "แนะนำ Use Cases ที่น่าสนใจสำหรับแอปพลิเคชันรวมกลุ่มและนัดหมายกิจกรรมสำหรับนักศึกษา"
* **การประยุกต์ใช้:** นำไอเดียที่ AI เสนอมาคัดกรอง เพื่อกำหนดขอบเขตโปรเจกต์และเลือกฟีเจอร์ที่ตอบโจทย์ผู้ใช้งานจริงมากที่สุด

---

## Lab 2: System Design & Brainstorming (Database Schema)
* **การใช้งาน:** ใช้ AI ช่วยร่างโครงสร้าง Database Schema เบื้องต้นเพื่อรองรับ Use Cases ที่ออกแบบไว้
* **ตัวอย่าง Prompt:** 
  > "แนะนำ Database Schema สำหรับระบบนัดหมายกิจกรรม โดยมี Entity หลักคือ User, Activity, และ Location"
* **การประยุกต์ใช้:** ทีมนำ Schema ที่ AI เสนอมาตรวจสอบและปรับปรุงให้เข้ากับ Business Logic ของระบบ พร้อมทั้งเลือกตัดฟิลด์ที่ไม่จำเป็นออก

---

## Lab 3: Code Generation & Boilerplate (UI Structure)
* **การใช้งาน:** ใช้ AI ช่วยสร้างโครงสร้าง HTML/CSS เบื้องต้นของ UI Components ทั่วไป เช่น Navbar และ Modal ฟอร์ม
* **ตัวอย่าง Prompt:** 
  > "เขียนโครงสร้าง HTML/CSS พื้นฐานสำหรับ Navbar และ Modal แบบ Responsive"
* **การประยุกต์ใช้:** นำโครงสร้างโค้ดมาปรับปรุง แก้ไขให้ถูกต้องตามหลัก Semantic HTML และจัดวางองค์ประกอบให้เข้ากับหน้าเว็บ

---

## Lab 4: Code Generation & Boilerplate (Specific Components)
* **การใช้งาน:** ใช้ AI สร้างโค้ดสำหรับ Component ที่มีความเฉพาะเจาะจง เช่น Card แสดงข้อมูลกิจกรรม
* **ตัวอย่าง Prompt:** 
  > "เขียน HTML/CSS สำหรับหน้า Card แสดงข้อมูลกิจกรรม ประกอบด้วย ไอคอนกีฬา, วันที่, เวลา, และปุ่ม Join Team"
* **การประยุกต์ใช้:** นำโค้ด Card มาปรับ Styling ต่อด้วยตนเอง เพื่อให้สีสันและรูปแบบสอดคล้องกับ Theme หลักของโปรเจกต์

---

## Lab 5: DevOps & Containerization (Docker)
* **การใช้งาน:** ใช้ AI ช่วยเขียนและตรวจสอบ Syntax สำหรับการสร้างไฟล์ `Dockerfile`
* **ตัวอย่าง Prompt:** 
  > "ช่วยเขียน Dockerfile สำหรับโปรเจกต์ Web Frontend ที่ใช้ Nginx เป็น Web Server"
* **การประยุกต์ใช้:** ทีมทำความเข้าใจการทำงานของแต่ละ Layer ในคำสั่งของ Dockerfile ก่อนนำมาใช้งาน และทดสอบ Build Image ด้วยตัวเอง

---

## Lab 6: DevOps & CI/CD Setup (Pipeline YAML)
* **การใช้งาน:** ใช้ AI ช่วยสร้างไฟล์ Configuration เบื้องต้นสำหรับ CI/CD Pipeline
* **ตัวอย่าง Prompt:** 
  > "ช่วยเขียน GitHub Actions YAML file สำหรับ build และทดสอบโปรเจกต์ Web Frontend"
* **การประยุกต์ใช้:** นำไฟล์ YAML มาปรับแก้ไขตัวแปรและขั้นตอนให้ตรงกับ Environment ของโปรเจกต์ และทดสอบรัน Pipeline เพื่อดูผลลัพธ์

---

## Lab 7: Refactoring & Code Quality
* **การใช้งาน:** ใช้ AI เป็น Code Reviewer เพื่อค้นหา Code Smells และเสนอแนวทางการทำ Refactor โค้ดที่ซ้ำซ้อน
* **ตัวอย่าง Prompt:** 
  > "อ่านโค้ดโปรเจกต์นี้ แล้ว list code smells ที่เจอบ่อยที่สุด พร้อมระบุไฟล์และเสนอวิธีแก้ปัญหา Duplicated Code"
* **การประยุกต์ใช้:** AI เสนอให้ปรับโครงสร้าง HTML Card ที่ซ้ำซ้อนโดยการดึงข้อมูลออกเป็น Array (Mock Data) จากนั้นทีมจึงลงมือเขียน JavaScript `renderActivityCards()` ด้วยตนเองเพื่อทำ Dynamic Rendering และทดสอบ Manual Smoke Test

---