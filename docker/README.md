# Container Documentation - Lab 6: First Container

## 1. Image Information
* **Image Name:** `67026089/se-sec2-team-10-api`
* **Tag:** `v0.1.0`
* **Full Image Reference:** `67026089/se-sec2-team-10-api:v0.1.0`
* **Base Image:** `python:3.11-slim`
* **Image Size:** `~160 MB` *(ตรวจสอบขนาดจริงในเครื่องด้วยคำสั่ง `docker images`)*

---

## 2. How to Build
รันคำสั่งนี้ที่ Root Directory ของโปรเจกต์เพื่อสร้าง Docker Image:

```bash
docker build -t 67026089/se-sec2-team-10-api:v0.1.0 .

# How to Run & Environment Variables

## Command to Run

### 1. รัน Container แบบ Interactive Mode

ใช้สำหรับรัน Container และดู Log ที่แสดงใน Terminal

```bash
docker run -p 8000:8000 67026089/se-sec2-team-10-api:v0.1.0
```

หลังจากรันแล้ว สามารถเข้าใช้งาน API ผ่าน Browser ได้ที่:

* http://localhost:8000
* http://localhost:8000/docs

---

### 2. รัน Container แบบ Background Mode (Detached)

ใช้สำหรับรัน Container แบบ Background โดยไม่ต้องเปิด Terminal ค้างไว้

```bash
docker run -d -p 8000:8000 --name stats-api 67026089/se-sec2-team-10-api:v0.1.0
```

ตรวจสอบ Container ที่กำลังทำงาน:

```bash
docker ps
```

ดู Log ของ Container:

```bash
docker logs stats-api
```

หยุด Container:

```bash
docker stop stats-api
```

ลบ Container:

```bash
docker rm stats-api
```

---

## Environment Variables

สามารถส่งค่าตัวแปรสภาพแวดล้อมขณะรัน Container ด้วยพารามิเตอร์ `-e`

ตัวอย่าง:

```bash
docker run -d -p 8000:8000 \
  -e PORT=8000 \
  -e ENVIRONMENT=production \
  67026089/se-sec2-team-10-api:v0.1.0
```

### 3. Environment Variables ที่ใช้

| Variable      | Example      | Description               |
| ------------- | ------------ | ------------------------- |
| `PORT`        | `8000`       | Port ที่ใช้สำหรับรัน API  |
| `ENVIRONMENT` | `production` | กำหนด Environment ของระบบ |

---

## API Documentation

เมื่อ Container ทำงานแล้ว สามารถเข้าดู API Documentation ผ่าน Swagger UI ได้ที่:

```text
http://localhost:8000/docs
```

หรือเข้าหน้า API หลักได้ที่:

```text
http://localhost:8000
```

---

# 4. Architectural Decisions

## ทำไมเลือกใช้ Container

การเลือกใช้ Container อ้างอิงแนวคิดจาก **ESP §5.4**

### Resource Efficiency & Speed

Container ทำงานผ่าน **OS-level virtualization** โดยใช้ Kernel ร่วมกับ Host Machine ทำให้ใช้ CPU และ Memory น้อยกว่า Virtual Machine

นอกจากนี้ Container สามารถเริ่มต้นการทำงานได้ภายในไม่กี่วินาที เนื่องจากไม่จำเป็นต้อง Boot Operating System ใหม่ทั้งหมด

### Environment Consistency

Container ช่วยแก้ไขปัญหา **"It works on my machine"**

โดยสามารถแพ็กสิ่งที่จำเป็นต่อการทำงานของ Application เช่น:

* Python Runtime
* Dependencies
* System Libraries
* Application Code

ไว้ภายใน Image เดียวกัน ทำให้ Application สามารถทำงานได้อย่างสม่ำเสมอในแต่ละ Environment

### Immutability & Portability

Container สอดคล้องกับแนวคิดการออกแบบระบบแบบ **Cloud-Native**

โดยสามารถแยก Application ออกเป็นบริการย่อย เช่น Microservices และสามารถนำไปใช้งานร่วมกับ:

* CI/CD Pipeline
* Container Registry
* Cloud Platform
* Docker Environment

ได้อย่างสะดวก

---

## ทำไมไม่ใช้ Virtual Machine (VM)

### High Overhead

Virtual Machine จำเป็นต้องสร้าง **Guest Operating System** เต็มรูปแบบสำหรับแต่ละ Instance ทำให้มีการใช้ CPU และ Memory เพิ่มขึ้นจากส่วนของ Operating System

ในขณะที่ Container สามารถใช้ Kernel ร่วมกับ Host Machine ได้

### Slow Startup Time

Virtual Machine ต้องใช้เวลาในการ Boot Operating System ก่อนเริ่ม Application ทำให้ใช้เวลาเริ่มต้นนานกว่า Container

ในทางตรงกันข้าม Container สามารถเริ่มต้น Application ได้อย่างรวดเร็ว

### Large Footprint

Virtual Machine Image โดยทั่วไปมีขนาดใหญ่ เนื่องจากต้องรวม Operating System เข้าไปด้วย ซึ่งอาจมีขนาดหลาย Gigabytes

ส่วน Container Image สามารถมีขนาดเล็กกว่า ทำให้:

* จัดเก็บได้ง่ายกว่า
* ส่งผ่าน Network ได้เร็วกว่า
* Deploy ได้รวดเร็วกว่า
* ใช้พื้นที่ Storage น้อยกว่า

---

# 5. ขั้นตอนส่งงาน (PR + Review + Merge)

## 5.1 Push Image ขึ้น Docker Hub

หลังจาก Build Docker Image แล้ว ให้ Push Image ขึ้น Docker Hub ด้วยคำสั่ง:

```powershell
docker push 67026089/se-sec2-team-10-api:v0.1.0
```

ตรวจสอบ Image ที่มีอยู่ในเครื่อง:

```powershell
docker images
```

ตรวจสอบว่า Image สามารถรันได้:

```powershell
docker run -p 8000:8000 67026089/se-sec2-team-10-api:v0.1.0
```

---

## 5.2 ตรวจสอบการทำงานของ API

เปิด Browser แล้วเข้า:

```text
http://localhost:8000
```

สำหรับดู Swagger API Documentation:

```text
http://localhost:8000/docs
```

หากสามารถเข้าหน้า API และ `/docs` ได้ แสดงว่า Container สามารถทำงานได้ตามปกติ

---

## 5.3 สรุปขั้นตอนการทำงาน

ลำดับการทำงานโดยรวม:

```text
Source Code
    ↓
Build Docker Image
    ↓
Test Container
    ↓
Push Image to Docker Hub
    ↓
Create Pull Request (PR)
    ↓
Code Review
    ↓
Merge
```

Docker Image ที่ใช้ในโปรเจกต์:

```text
67026089/se-sec2-team-10-api:v0.1.0
```

## Docker Image

```text
Repository: 67026089/se-sec2-team-10-api
Version: v0.1.0
Port: 8000
```
