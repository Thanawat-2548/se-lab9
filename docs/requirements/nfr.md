nfr_content = """# Non-Functional Requirements (nfr.md)
 
## Overview
เอกสารนี้กำหนดข้อกำหนดด้านคุณภาพของระบบ (Non-Functional Requirements: NFRs) สำหรับ **Campus Event & Community Platform** โดยมุ่งเน้นความสามารถในการวัดผลได้จริงด้วยตัวเลข (Measurable Metrics) และครอบคลุมมากกว่า 4 หมวดหมู่หลักตามมาตรฐานวิศวกรรมซอฟต์แวร์
 
---
 
## Summary Table
 
| Category | NFR ID | Requirement Title | Measurable Metric / KPI |
|---|---|---|---|
| **Performance** | NFR-01 | API & Page Response Time | Response Time ≤ 200 ms (p95) / Page Load ≤ 1.5s |
| **Scalability & Reliability** | NFR-02 | Concurrent Registration Peak | Support ≥ 2,000 concurrent users with 99.9% success rate |
| **Security** | NFR-03 | Data Encryption & Authentication | OTP validity 3 mins, TLS 1.3, Argon2id hashing |
| **Security** | NFR-04 | API Rate Limiting & Protection | Max 100 requests/min/IP (Public), Max 5 OTP/hour |
| **Usability** | NFR-05 | Task Completion & Accessibility | Registration completion ≤ 3 clicks / WCAG 2.1 AA (Contrast ≥ 4.5:1) |
| **Maintainability** | NFR-06 | Code Coverage & CI/CD Pipeline | Unit Test Coverage ≥ 80%, Automated Build & Test ≤ 8 mins |
| **Availability** | NFR-07 | System Uptime & Disaster Recovery | System Uptime ≥ 99.9%/month, RTO ≤ 15 mins, RPO ≤ 5 mins |
 
---
 
## Detailed Non-Functional Requirements
 
### Category 1: Performance (สมรรถนะของระบบ)
 
#### NFR-01: API & Page Response Time
* **Description:** ระบบต้องประมวลผลคำขอและตอบสนองได้อย่างรวดเร็วเพื่อประสบการณ์การใช้งานที่ราบรื่นบนสมาร์ทโฟน
* **Measurable Metrics:**
  * **API Response Time:** 95% ของการส่งคำขอ API (Percentile 95 - p95) ต้องใช้เวลาตอบสนองไม่เกิน **200 มิลลิวินาที (ms)** ภายใต้สภาวะโหลดปกติ
  * **Page Load Time:** หน้า Home Feed และหน้ารายละเอียดกิจกรรมต้องโหลดแสดงผลเสร็จสิ้น (First Contentful Paint) ภายใน **1.5 วินาที** บนเครือข่าย 4G/5G
  * **Notification Latency:** ระบบ Broadcast Notification ต้องส่ง Push Notification ไปยังอุปกรณ์เป้าหมาย 1,000 เครื่องสำเร็จภายใน **5 วินาที**
 
#### NFR-02: Concurrent Registration Peak Load & Scalability
* **Description:** ระบบต้องรองรับปริมาณการใช้งานพร้อมกันจำนวนมากในช่วงเวลาที่มีการเปิดรับสมัครกิจกรรมยอดนิยม
* **Measurable Metrics:**
  * **Concurrent Users:** รองรับผู้ใช้งานที่เข้ามากดลงทะเบียนพร้อมกันได้ไม่น้อยกว่า **2,000 รายพร้อมกัน (Concurrent Users)** โดยระบบไม่ล่ม
  * **Transaction Success Rate:** อัตราการทำรายการลงทะเบียนสำเร็จต้องไม่ต่ำกว่า **99.9%** โดยไม่มีข้อมูลการลงทะเบียนสูญหายหรือเกิด Race Condition (การลงทะเบียนเกินจำนวนที่กำหนด)
 
---
 
### Category 2: Security (ความปลอดภัยและ privacy)
 
#### NFR-03: Data Encryption & Authentication Security
* **Description:** ปกป้องข้อมูลส่วนบุคคลของนักศึกษาและป้องกันการแอบอ้างสิทธิ์
* **Measurable Metrics:**
  * **Data in Transit:** ข้อมูลทั้งหมดที่รับ-ส่งผ่านเครือข่ายต้องเข้ารหัสด้วยโปรโตคอล **HTTPS / TLS 1.3**
  * **Data at Rest:** รหัสผ่านต้องได้รับการแฮชด้วย อัลกอริทึม **Argon2id** หรือ **bcrypt (Work Factor ≥ 12)** และข้อมูลส่วนตัว (เช่น รหัสนักศึกษา/อีเมล) ต้องเข้ารหัสด้วย **AES-256**
  * **OTP Validity:** รหัส OTP สำหรับยืนยันตัวตน Student Email ต้องมีอายุการใช้งานไม่เกิน **3 นาที (180 วินาที)** และประกอบด้วยตัวเลขอย่างน้อย **6 หลัก**
 
#### NFR-04: API Rate Limiting & Anti-Abuse Protection
* **Description:** ป้องกันการโจมตีระบบแบบ Brute Force, Denial of Service (DoS) และการสแครปข้อมูล
* **Measurable Metrics:**
  * **General Rate Limit:** จำกัดคำขอ API ทั่วไปไม่เกิน **100 คำขอต่อนาที ต่อ 1 IP Address** (หากเกินระบบจะตอบกลับ HTTP Status 429 Too Many Requests)
  * **OTP Request Limit:** จำกัดการส่งขอ OTP ไม่เกิน **5 ครั้งต่อชั่วโมง ต่อ 1 บัญชีอีเมล**
  * **Failed Login Lockout:** หากป้อนรหัสผ่านผิดติดต่อกัน **5 ครั้ง** บัญชีจะถูกระงับการเข้าสู่ระบบชั่วคราวเป็นเวลา **15 นาที**
 
---
 
### Category 3: Usability & Accessibility (การใช้งานง่ายและการเข้าถึง)
 
#### NFR-05: Task Completion & Accessibility Compliance
* **Description:** ระบบต้องใช้งานง่าย ไม่ซับซ้อน และรองรับผู้ใช้งานทุกกลุ่ม รวมถึงผู้พิการทางการมองเห็น
* **Measurable Metrics:**
  * **Click Depth:** ผู้ใช้งานทั่วไป (เช่น นิว) ต้องสามารถกดลงทะเบียนกิจกรรมที่สนใจสำเร็จได้ภายในไม่เกิน **3 คลิก/แตะ** นับจากหน้า Home Feed
  * **Task Completion Time:** ผู้ใช้งานใหม่ 90% ต้องสามารถลงประกาศขายสินค้าใน Marketplace ได้สำเร็จภายในเวลาไม่เกิน **60 วินาที**
  * **Accessibility Standard:** ส่วนเชื่อมต่อผู้ใช้งาน (UI) ต้องผ่านเกณฑ์มาตรฐาน **WCAG 2.1 Level AA** โดยมี อัตราส่วนความต่างสี (Color Contrast Ratio) ระหว่างตัวอักษรและพื้นหลังไม่ต่ำกว่า **4.5:1** สำหรับข้อความขนาดปกติ
 
---
 
### Category 4: Maintainability (ความง่ายในการบำรุงรักษา)
 
#### NFR-06: Code Coverage & Automated Deployment Pipeline
* **Description:** ซอร์สโค้ดของระบบต้องได้รับการทดสอบอย่างครอบคลุม และสามารถปรับปรุงแก้ไขได้รวดเร็วโดยไม่กระทบส่วนอื่น
* **Measurable Metrics:**
  * **Unit Test Coverage:** ซอร์สโค้ดฝั่ง Backend และ Frontend ต้องมี Automated Unit Test Coverage ไม่น้อยกว่า **80%** ของบรรทัดโค้ดทั้งหมด
  * **CI/CD Pipeline Speed:** กระบวนการตรวจเช็กโค้ด รันการทดสอบ (Automated Testing) และสร้าง Build Artifact ผ่าน CI/CD Pipeline ต้องเสร็จสิ้นภายในเวลาไม่เกิน **8 นาที**
  * **Code Quality Standard:** ไม่มีข้อผิดพลาดระดับ Critical หรือ Major จากการสแกนด้วยเครื่องมือ Static Code Analysis (เช่น SonarQube)
 
---
 
### Category 5: Availability & Reliability (ความพร้อมใช้งานและความเสถียร)
 
#### NFR-07: System Uptime & Disaster Recovery
* **Description:** ระบบต้องมีความพร้อมใช้งานสูง และสามารถกู้คืนระบบได้รวดเร็วเมื่อเกิดเหตุขัดข้อง
* **Measurable Metrics:**
  * **Service Availability:** ระบบต้องมีค่า Uptime ไม่น้อยกว่า **99.9% ต่อเดือน** (อนุญาตให้ระบบหยุดทำงานโดยไม่วางแผนได้ไม่เกิน **43.8 นาทีต่อเดือน**)
  * **Recovery Time Objective (RTO):** ในกรณีที่ระบบเซิร์ฟเวอร์หลักล่ม ระบบสำรองต้องกู้คืนกลับมาพร้อมใช้งานได้ภายใน **15 นาที**
  * **Recovery Point Objective (RPO):** ระบบต้องทำการสำรองข้อมูล (Backup) ฐานข้อมูลแบบ Real-time/Continuous โดยยอมให้ข้อมูลสูญหายย้อนหลังได้ไม่เกิน **5 นาที**
"""
 
with open("nfr.md", "w", encoding="utf-8") as f:
    f.write(nfr_content)
 
print("Created nfr.md successfully.")