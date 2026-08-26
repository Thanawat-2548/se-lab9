# Stage 1: builder (สร้าง virtual environment และติดตั้ง dependencies)
FROM python:3.11-slim AS builder

WORKDIR /app

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

RUN python -m venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"

COPY services/stats-service/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt


# Stage 2: runner (คัดลอกเฉพาะ venv และซอร์สโค้ดมารัน)
FROM python:3.11-slim AS runner

WORKDIR /app

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PATH="/opt/venv/bin:$PATH"

# ดึงเฉพาะ virtual environment จาก Stage builder
COPY --from=builder /opt/venv /opt/venv

# คัดลอกซอร์สโค้ดของ stats-service
COPY services/stats-service/ .

# สร้างและเปลี่ยนไปใช้ Non-root User เพื่อ Security
RUN adduser --disabled-password --gecos "" appuser && chown -R appuser:appuser /app
USER appuser

EXPOSE 8000

CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]