export const validateGmail = (email) => {
  const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  if (email.trim() === "") {
    return "Это поле обязательно к заполнению";
  }

  if (!gmailRegex.test(email)) {
    return "Пожалуйста, введите действительный адрес Gmail";
  }
  return "";
};

export function validateRequired(value) {
  if (!value.trim()) {
    return "Это поле обязательно к заполнению";
  }
  return "";
}

export function validatePhone(phone) {
  const phoneRegex = /^\+996\d{9}$/;

  if (phone.trim() === "") {
    return "";
  }

  if (!phoneRegex.test(phone)) {
    return "Введите действительный номер телефона с кодом страны +996";
  }
  return "";
}
