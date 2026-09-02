# ใช้ Python 3.11 รุ่น slim
FROM python:3.11-slim

# กำหนดโฟลเดอร์ทำงานหลัก
WORKDIR /app

# คัดลอกไฟล์ทั้งหมดจากโฟลเดอร์ prototypes/sprint1 เข้ามาใน Container
COPY prototypes/sprint1/ .

# สร้างและเปลี่ยนไปใช้ Non-root User เพื่อความปลอดภัย
RUN adduser --disabled-password --gecos "" appuser && chown -R appuser:appuser /app
USER appuser

# แจ้งว่า Container นี้จะใช้พอร์ต 8000
EXPOSE 8000

# ใช้คำสั่ง HTTP Server พื้นฐานของ Python เพื่อให้บริการหน้าเว็บ
CMD ["python", "-m", "http.server", "8000"]