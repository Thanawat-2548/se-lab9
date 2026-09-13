def is_valid_university_email(email: str) -> bool:
    # ตรวจสอบว่าเป็นอีเมลของมหาวิทยาลัยหรือไม่
    return email.endswith("@up.ac.th")

def send_university_email(email: str, email_service) -> bool:
    return email_service.send(email)