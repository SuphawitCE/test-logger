exports.SRPALogin = [
  'SRPALoginResponseEvent.request.userAttributes["custom:customer_id"]',
  'SRPALoginResponseEvent.request.userAttributes["cognito:email_alias"]',
  'SRPALoginResponseEvent.request.userAttributes["custom:firebase_uid"]',
  "SRPALoginResponseEvent.request.userAttributes.given_name",
  "SRPALoginResponseEvent.request.userAttributes.family_name",
  "SRPALoginResponseEvent.request.userAttributes.email",
];

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
