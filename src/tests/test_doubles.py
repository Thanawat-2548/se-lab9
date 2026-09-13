from unittest.mock import Mock
from src.campus_service import send_university_email


def test_send_university_email_with_mock():
    email_service = Mock()
    email_service.send.return_value = True

    result = send_university_email("student@up.ac.th", email_service)

    assert result is True
    email_service.send.assert_called_once_with("student@up.ac.th")