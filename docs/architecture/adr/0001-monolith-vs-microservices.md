# ADR 0001: เริ่มต้นด้วย Monolith Architecture และวางแผนแยก Service ในอนาคต

## Status
**Accepted** — 2026-08-19

## Context (บริบทและข้อจำกัด)
* **ขนาดทีมและระยะเวลา:** มีสมาชิกในทีมพัฒนาจำนวน 4 คน และมีระยะเวลาดำเนินการรวม 8 สัปดาห์
* **กลุ่มเป้าหมายและการรองรับ:** คาดการณ์ปริมาณผู้ใช้งานเริ่มต้นประมาณ 100 คนต่อวัน (Users/Day)
* **ข้อกำหนดการส่งมอบงาน:** จำเป็นต้องมีการ Demo ระบบแบบ End-to-End ให้เห็นผลลัพธ์ภายใน Sprint 2
* **ข้อจำกัดด้านบุคลากร:** ไม่มีวิศวกรดูแลระบบโครงสร้างพื้นฐาน (DevOps / Ops Engineer) โดยเฉพาะ
* **ความไม่แน่นอนของระบบ:** ขอบเขตความต้องการ (Requirements) ยังคงปรับเปลี่ยนได้ตามข้อเสนอแนะของผู้ใช้งาน (Early-stage Product)

## Decision (การตัดสินใจ)
เลือกเริ่มต้นพัฒนาสถาปัตยกรรมระบบในรูปแบบ **Modular Monolith** โดยใช้ **Node.js + Express** (หรือ Next.js Full-stack) และจัดกลุ่มฟีเจอร์แยกเป็น Module ภายในแอปพลิเคชันเดียวกัน

**เงื่อนไขในการปรับเปลี่ยน (Triggering Condition):**
เมื่อปริมาณผู้ใช้งานเพิ่มขึ้นมากกว่า 1,000 คนต่อวัน (1,000 Users/Day) หรือมีภาระงานประมวลผลหนัก (เช่น Matching Service / ML) จึงจะพิจารณาทำ Service Extraction แยกออกไป

## Consequences (ผลลัพธ์และการยอมรับ)

### ข้อดี (Positive Consequences)
* **✅ การปรับใช้ระบบง่าย (Simplified Deployment):** ส่งมอบและ Deploy เป็นแพ็กเกจเดียว (Single Unit) ลดความยุ่งยากในการจัดการ Infrastructure
* **✅ เพิ่มความเร็วในการพัฒนา (Faster Velocity):** ทีมงานทุกคนสามารถทำความเข้าใจโครงสร้างภาพรวมของระบบได้เร็ว และแชร์ Codebase ร่วมกันได้ง่าย
* **✅ ประสิทธิภาพเพียงพอ (Sufficient Performance):** ระบบแบบ Monolith ให้ latency ต่ำระหว่างส่วนประกอบ และรองรับจำนวนผู้ใช้ 100 คนต่อวันได้อย่างมีประสิทธิภาพ

### ข้อเสีย / สิ่งที่ต้องแลก (Negative Consequences)
* **❌ ข้อจำกัดด้านการขยายระบบ (Scalability Limit):** ไม่สามารถแยก Scale เฉพาะส่วนงานที่มีภาระงานสูงได้ทันที หากต้องการแยกในอนาคตจำเป็นต้องทำการ Refactor
* **❌ ข้อจำกัดด้านสแตกเทคโนโลยี (Single Tech Stack):** ถูกจำกัดด้วยนิเวศของภาษาเดียว หากต้องการนำ Python สำหรับงาน ML/Data Science มาใช้ จำเป็นต้องเชื่อมต่อผ่าน API ภายนอก

## Alternatives Considered (ทางเลือกอื่นที่ถูกพิจารณา)
1. **Microservices Architecture (แยก 3 Services):** 
   * *Rejected:* เกิด Operational Overhead ในการดูแลสูงเกินไป และทีมพัฒนายังไม่มีความพร้อมในการจัดการ Service Communication และ Distributed Systems
2. **Serverless Framework (เช่น AWS Lambda):** 
   * *Rejected:* มีปัญหา Cold Start Latency และมีค่าใช้จ่ายไม่คุ้มค่าสำหรับปริมาณ Traffic ระดับเริ่มต้นที่ยังต่ำ
3. **Separate Frontend + Backend (BFF Pattern):** 
   * *Deferred:* พักไว้พิจารณาในระยะถัดไป หากความซับซ้อนของส่วนหน้าบ้าน (Frontend) เพิ่มขึ้นอย่างมีนัยสำคัญ