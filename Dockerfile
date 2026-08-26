# Stage 1: builder (สำหรับสร้าง virtual environment และติดตั้ง dependencies)
FROM python:3.11-slim AS builder

WORKDIR /app

# ตั้งค่าไม่ให้สร้างไฟล์ .pyc และให้ output ออกทาง terminal ทันที
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

# สร้าง virtual environment
RUN python -m venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"

COPY services/stats-service/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt


# Stage 2: runtime (คัดลอกเฉพาะ venv และโค้ดของ service มาใช้)
FROM python:3.11-slim AS runner

WORKDIR /app

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PATH="/opt/venv/bin:$PATH"

# ดึงเฉพาะ virtual environment จาก Stage builder
COPY --from=builder /opt/venv /opt/venv

# คัดลอกเฉพาะซอร์สโค้ดในโฟลเดอร์ stats-service มาไว้ที่ /app โดยตรง
COPY services/stats-service/ .

# สร้างและเปลี่ยนไปใช้ Non-root User เพื่อความปลอดภัย
RUN adduser --disabled-password --gecos "" appuser && chown -R appuser:appuser /app
USER appuser

EXPOSE 8000

CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]