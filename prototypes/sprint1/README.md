# Sprint 1 Prototype: Negotiation Chat System
 
**Feature ที่อ้างอิง:** In-App Negotiation Chat & Price Offer System (ระบบแชทเจรจาราคาและยื่นข้อเสนอซื้อขาย)  
**ประเภทงาน:** **UI Prototype** (เน้นการจำลอง Layout, User Interface และ Visual Flow ของการแชทและการยื่นข้อเสนอราคา ยังไม่ใช่ Tracer Bullet เนื่องจากไม่มีการเชื่อมต่อกับ Real-time WebSocket Engine, API หรือ Backend Database จริง)
 
---
 
## 1. Referenced User Story
 
### US-02: In-App Negotiation Chat & Price Offer System
* **User Story:**
  * **As a** ผู้ซื้อ / ผู้ขาย (นักศึกษา)
  * **I want** ระบบแชทพูดคุยเจรจาราคา พร้อมปุ่มยื่นข้อเสนอซื้อขาย (Price Offer / Counter Offer) ภายในแอปพลิเคชัน
  * **So that** สามารถตกลงราคาสินค้าได้สะดวก รวดเร็ว และปลอดภัยโดยไม่ต้องเปิดเผยข้อมูลติดต่อส่วนตัวภายนอก
* **Priority (MoSCoW):** Must Have
* **Estimate:** L
* **Acceptance Criteria (AC):**
  * **Given** ผู้ซื้อเข้าชมรายละเอียดสินค้าหนังสือเรียน (ราคาตั้งขาย 1,500 บาท)
  * **When** ผู้ซื้อกดปุ่ม "💬 เจรจาราคา" และระบุราคาที่ต้องการเสนอ (เช่น 1,200 บาท)
  * **Then** ระบบจะแสดงการ์ดข้อเสนอราคา (Price Offer Card) ในช่องแชท พร้อมปุ่มสำหรับผู้ขายในการกด Accept, Decline หรือ Counter Offer
  * **Given** ผู้ขายได้รับการ์ดเสนอราคาจากผู้ซื้อ
  * **When** ผู้ขายพิจารณาและพิมพ์ข้อความตอบรับหรือยื่นข้อเสนอใหม่ (Counter Offer)
  * **Then** ระบบแสดงข้อความและการอัปเดตสถานะการเจรจาในห้องแชททันที
  * **Given** ผู้ใช้งานเปิดเข้ามาในห้องแชท
  * **When** ผู้ใช้งานมองที่ส่วนหัวของกล่องแชท (Chat Header)
  * **Then** ระบบแสดงข้อความเตือนความปลอดภัย "🔒 Communication Safe: ห้ามแชร์ข้อมูลติดต่อส่วนตัว"
 
---
 
## 2. สิ่งที่ทำได้ (Current Scope)
1. **Product & Chat Layout Visualization:** แสดงผลการ์ดรายละเอียดสินค้า (หนังสือเรียนเศรษฐศาสตร์ ราคา ฿1,500) ควบคู่กับอินเทอร์เฟซกล่องแชทได้อย่างสวยงามเป็นสัดส่วน
2. **Interactive Offer UI:** มีโครงสร้างแสดงการ์ดเสนอราคา (Price Offer Card) พร้อมปุ่มปฏิสัมพันธ์จำลอง ได้แก่ `✔ Accept`, `✖ Decline`, และ `🔄 Counter Offer`
3. **Safety Notice Display:** แสดงข้อความเตือนความปลอดภัย "🔒 Communication Safe - ห้ามแชร์ข้อมูลติดต่อส่วนตัว" บนส่วนหัวของแชทเพื่อรณรงค์ความปลอดภัย
 
---
 
## 3. สิ่งที่ไม่ได้ทำ (Deliberately Omitted)
* **Real-time Messaging & Backend Services:** ไม่มีการเชื่อมต่อ WebSocket หรือ Socket.io ข้อความยังเป็น Static HTML Mockup ยังไม่สามารถรับ-ส่งข้อความจริงได้
* **Database & Data Persistence:** ไม่มีการเชื่อมต่อฐานข้อมูลเพื่อเก็บบันทึกประวัติการสนทนา หรืออัปเดตสถานะของ Offer ลงใน Database
* **Security & Moderation Filter:** ยังไม่มีระบบกรองข้อความอัตโนมัติ (Automated Content Moderation) เพื่อตรวจจับการส่งเบอร์โทรศัพท์ ไอดีไลน์ หรือลิงก์ภายนอก
* **Dynamic Action Handlers:** ปุ่มส่งข้อความ ปุ่มตอบรับ/ปฏิเสธข้อเสนอ ยังไม่มีการเขียน JavaScript เพื่อเปลี่ยน State ของหน้าจอแบบ Dynamic
 
---
 
## 4. Next Step (Sprint 2)
* **Integrate Real-time Chat (WebSocket / Socket.io):** เชื่อมต่อระบบสื่อสาร Real-time เพื่อให้ผู้ใช้ 2 ฝั่งรับ-ส่งข้อความและข้อเสนอราคาได้ทันที
* **Dynamic Offer & Order Connection:** เขียน JavaScript logic และ API ให้กด Accept แล้วนำราคาสรุป (เช่น 1,300 บาท) ไปสร้าง Order ในระบบชำระเงินต่อได้ทันที
* **Content Moderation & Security:** เพิ่มระบบ Regex / Filter ตรวจจับและแจ้งเตือนเมื่อผู้ใช้งานพิมพ์ข้อมูลติดต่อส่วนตัวลงในช่องแชท