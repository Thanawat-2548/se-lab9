from src.campus_service import is_valid_university_email


def test_valid_university_email():
    # กรณีอีเมลมหาวิทยาลัยที่ถูกต้อง
    assert is_valid_university_email("student@up.ac.th") == True


def test_invalid_email_domain():
    # กรณีโดเมนไม่ใช่ของมหาวิทยาลัย
    assert is_valid_university_email("user@gmail.com") == False


def test_invalid_email_without_domain():
    # กรณีไม่มีโดเมน
    assert is_valid_university_email("student") == False


def test_invalid_email_empty():
    # กรณีอีเมลว่าง
    assert is_valid_university_email("") == False


def test_valid_email_with_name():
    # กรณีอีเมลมหาวิทยาลัยที่มีชื่อผู้ใช้
    assert is_valid_university_email("thanawat@up.ac.th") == True