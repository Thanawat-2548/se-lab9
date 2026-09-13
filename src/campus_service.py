def is_valid_university_email(email: str) -> bool:
    # ตรวจสอบว่าเป็นอีเมลของมหาวิทยาลัยหรือไม่
    return email.endswith("@up.ac.th")