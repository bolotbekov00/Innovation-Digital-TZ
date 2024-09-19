export const validateGmail = (email) => {
  const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  if (!gmailRegex.test(email)) {
    return "Please enter a valid Gmail address";
  }
  return "";
};
export function validateRequired(value) {
  if (!value) {
    return "This field is required";
  }
  return "";
}

export function validatePhone(phone) {
  const phoneRegex = /^\+996\d{9}$/;
  if (!phoneRegex.test(phone)) {
    return "Please enter a valid phone number with country code +996 followed by exactly 9 digits";
  }
  return "";
}
