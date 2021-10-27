exports.PhoneLogin = [
  'phoneLoginWithOTPResponseEvent.request.userAttributes["custom:customer_id"]',
  'phoneLoginWithOTPResponseEvent.request.userAttributes["cognito:email_alias"]',
  'phoneLoginWithOTPResponseEvent.request.userAttributes["custom:firebase_uid"]',
  'phoneLoginWithOTPResponseEvent.request.userAttributes["cognito:phone_number_alias"]',
  "phoneLoginWithOTPResponseEvent.request.userAttributes.given_name",
  "phoneLoginWithOTPResponseEvent.request.userAttributes.phone_number",
  "phoneLoginWithOTPResponseEvent.request.userAttributes.family_name",
  "phoneLoginWithOTPResponseEvent.request.userAttributes.email",
];
