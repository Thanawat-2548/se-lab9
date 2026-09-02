# Project: [CampusLink แพลตฟอร์มชุมชนออนไลน์]
<div align="center">
  <img src="images/ChatGPT Image 1 ก.ค. 2569 11_21_51.png" alt="ภาพสกรีนช็อต" width="400">
</div>
_CampusLink คือแพลตฟอร์มชุมชนออนไลน์ที่ถูกออกแบบมาเพื่อนักศึกษามหาวิทยาลัยโดยเฉพาะ ช่วยรวมทุกสิ่งที่นักศึกษาต้องการไว้ในที่เดียว ไม่ว่าจะเป็นการติดตามประกาศข่าวสาร การสร้างและเข้าร่วมกิจกรรม การนัดรวมทีมเล่นกีฬา และการซื้อขายแลกเปลี่ยนสินค้ามือสองระหว่างนักศึกษา โดยทุกบัญชีผ่านการยืนยันตัวตนด้วยอีเมลมหาวิทยาลัย เพื่อให้ชุมชนปลอดภัยและน่าเชื่อถือสำหรับทุกคนในรั้วมหาวิทยาลัย_

## Team: [campora]
- [67021028 นายธนวัฒน์ แสนว่าง], GitHub: `[@Thanawat-2548]`
- [67026089 นายพฤทธิพร เถื่อนคุ้ม], GitHub: `[@phuettiporn38-coder]`
- [67024762 นายธนพัฒน์ สีทา], GitHub: `[@RawrMeatt]`
- [67021343 อนวัช เคนวงศ์ษา], GitHub: `[@anawatowen1-alt]`


---

## 🏛️ Architecture & Design

Key architectural decisions and diagrams are documented in the `/docs/architecture` directory.

- **[C4 Models & Tech Stack](./docs/architecture/README.md)**
- **[Architectural Decision Records (ADRs)](./docs/architecture/adr/)**

## 👥 Requirements

User personas and key scenarios that drive our development are located in the `/docs/requirements` directory.

- **[User Personas](./docs/requirements/personas/)**
- **[Main User Scenario](./docs/requirements/main_scenario.md)**

# Ways of Working: CampusLink Project

## 1. Meeting Cadence (ตารางการประชุม)
ตารางเรียนและเวลาว่างของแต่ละคนมักจะไม่ค่อยตรงกัน เราจึงเน้นการประชุมแบบซิงโครนัส (Sync) เฉพาะตอนที่จำเป็นจริงๆ และพึ่งพาการอัปเดตแบบอะซิงโครนัส (Async) เป็นหลัก

* **Sprint Cycle:** 2 สัปดาห์ (การใช้ Sprint 1 สัปดาห์มักจะสั้นและตึงเครียดเกินไปเมื่อต้องชนกับตารางเรียน)
* **Sprint Planning (Sync):** 45–60 นาที, ทุกวันจันทร์เว้นจันทร์ เป้าหมาย: ทบทวน Backlog เลือกฟีเจอร์ที่สำคัญที่สุดสำหรับ CampusLink ในรอบนั้น และแบ่งหน้าที่รับผิดชอบให้ชัดเจน
* **Stand-ups (Async & Sync):**
    * **Async (จันทร์/พุธ/ศุกร์):** อัปเดตสั้นๆ ในห้องแชทของทีมภายในเวลา 12:00 น. โดยตอบ 3 คำถาม: 1. ทำอะไรไปแล้ว 2. กำลังจะทำอะไร 3. ติดปัญหา (Blocker) อะไรอยู่ไหม
    * **Sync (อังคาร/พฤหัสบดี):** คอลสั้นๆ 15 นาที ใช้สำหรับช่วยกันแก้ปัญหา (Unblock) หรือทำ Paired Debugging เท่านั้น ไม่ใช่การมานั่งอ่านรายงานความคืบหน้า
* **Retrospective & Demo (Sync):** 30–45 นาทีในวันสุดท้ายของ Sprint นำซอฟต์แวร์ที่ทำงานได้จริงมา Demo ให้ทีมดู จากนั้นคุยกันว่าอะไรทำได้ดี อะไรพลาดไป และเลือก 1 ข้อ ที่จะนำไปปรับปรุงกระบวนการทำงานใน Sprint ถัดไป

## 2. Communication Rules (กฎการสื่อสาร)
ความโปร่งใสช่วยป้องกันการทำงานซ้ำซ้อนและการติดปัญหาอยู่คนเดียวเงียบๆ

* **Default to Public:** การพูดคุยเรื่องเทคนิค การถกเถียงเรื่อง Database Schema หรือการช่วยกันแก้บั๊ก ควรเกิดขึ้นในแชนเนลรวม (Public channels) เสมอ สงวนการส่งข้อความส่วนตัว (DMs) ไว้สำหรับเรื่องส่วนตัวจริงๆ เท่านั้น
* **Response Time Expectations:** พยายามรับทราบข้อความภายใน 12–24 ชั่วโมง การกดรีแอคชันด้วยอีโมจิ "👀" ก็เพียงพอที่จะบอกให้ทีมรู้ว่าคุณเห็นข้อความแล้ว
* **Capacity Transparency:** หากสัปดาห์ไหนมีสอบหรือโปรเจกต์ของทางมหาวิทยาลัยพะเยารุมเร้า ให้แจ้งทีมล่วงหน้าตั้งแต่ต้นสัปดาห์ ไม่มีใครถูกตำหนิที่มีงานยุ่ง แต่จะเกิดปัญหาถ้าหายตัวไปเฉยๆ
* **Thread Discipline:** พยายามรักษาความสะอาดของแชนเนลหลัก หากการคุยเรื่องใดเรื่องหนึ่งมีการโต้ตอบกันเกิน 3 ข้อความ ให้แยกไปคุยต่อใน Thread

## 3. Git Workflow & Code Review (ระบบ Git และการรีวิวโค้ด)
เราจะรักษา Codebase ให้สะอาดและเสถียรโดยไม่ทำให้การทำงานสะดุด Branch หลักต้องพร้อม Deploy เสมอ

* **Branching Strategy:** เราใช้ Feature Branch Workflow แบบเรียบง่าย
    * **main:** เป็น Branch สำหรับ Production ที่รันโค้ดได้อย่างสมบูรณ์ (พร้อม Auto-deploy ขึ้นโฮสติ้ง)
    * **รูปแบบการตั้งชื่อ Branch:** `type/short-description` (เช่น `feat/forum-feed`, `fix/auth-routing`, `chore/prisma-schema-update`)
* **Commit Messages:** ใช้มาตรฐาน Conventional Commits เพื่อให้ประวัติการทำงานอ่านง่าย
    * **รูปแบบ:** `type: description` (เช่น `feat: add Tailwind styling to user profile`, `fix: resolve Next.js suspense rendering issue`)
* **Pull Request (PR) Rules:**
    * **Size:** พยายามให้ PR มีขนาดเล็กและโฟกัสไปที่ฟีเจอร์หรือการแก้บั๊กเพียงเรื่องเดียว
    * **Approvals:** ต้องมีสมาชิกในทีมอย่างน้อย 1 คน มารีวิวและกด Approve PR ก่อนจึงจะ Merge เข้า main ได้
    * **Pre-flight Checks:** ก่อนขอให้เพื่อนมารีวิว ผู้เขียนโค้ดต้องทดสอบรันโปรเจกต์ในเครื่องตัวเองให้ผ่าน และตรวจสอบว่า Database Migrations รันได้สำเร็จ หากใช้ Preview Deployments (เช่น บน Vercel) ให้เช็คด้วยว่าลิงก์ใช้งานได้จริง
    * **Merging:** ใช้ฟังก์ชัน "Squash and Merge" เพื่อรวม Commit ย่อยๆ เป็นอันเดียว ช่วยให้ประวัติใน Branch main ดูสะอาดและอ่านง่าย

## 4. Decision Making (การตัดสินใจ)
การเถียงกันเรื่องโครงสร้างนานเกินไปจะทำให้โปรเจกต์หยุดชะงัก เราให้ความสำคัญกับการเดินหน้าลงมือทำ มากกว่าความสมบูรณ์แบบทางทฤษฎี

* **Timeboxed Debates:** การถกเถียงเรื่องเทคนิค (เช่น จะจัดการ State อย่างไร, วางโครงสร้าง Database Relations แบบไหน, หรือจัด Layout UI อย่างไรดี) จะถูกจำกัดเวลาไว้ที่ 15 นาที
* **Data Over Opinions:** หากต้องเลือกระหว่าง 2 แนวทาง คนที่เสนอแนวทางที่ซับซ้อนกว่า จะต้องชี้แจงด้วยเอกสารอ้างอิง (Documentation) หรือเขียนโค้ดต้นแบบ (Prototype) สั้นๆ มาให้ดู
* **Disagree and Commit:** เราพยายามหาข้อตกลงร่วมกัน แต่ถ้าหมดเวลาแล้วยังตกลงกันไม่ได้ ให้ Technical Lead เป็นผู้ฟันธงตัดสินใจเป็นคนสุดท้าย และสมาชิกในทีมทุกคนต้องยอมรับและเดินหน้าทำตามการตัดสินใจนั้นอย่างเต็มที่