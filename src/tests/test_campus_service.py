from src.campus_service import is_valid_university_email

def test_valid_university_email():
    # ทดสอบอีเมลที่ถูกต้องตามโดเมนมหาวิทยาลัย
    assert is_valid_university_email("student@up.ac.th") == True

def test_invalid_email_domain():
    # ทดสอบอีเมลที่โดเมนไม่ถูกต้อง
    assert is_valid_university_email("user@gmail.com") == False