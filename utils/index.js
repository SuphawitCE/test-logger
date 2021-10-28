exports.SRPALogin = [
  '*.request.userAttributes["custom:customer_id"]',
  '*.request.userAttributes["cognito:email_alias"]',
  '*.request.userAttributes["custom:firebase_uid"]',
  "*.request.userAttributes.given_name",
  "*.request.userAttributes.family_name",
  "*.request.userAttributes.email",
];

exports.PhoneLogin = [
  '*.request.userAttributes["custom:customer_id"]',
  '*.request.userAttributes["cognito:email_alias"]',
  '*.request.userAttributes["custom:firebase_uid"]',
  '*.request.userAttributes["cognito:phone_number_alias"]',
  "*.request.userAttributes.given_name",
  "*.request.userAttributes.phone_number",
  "*.request.userAttributes.family_name",
  "*.request.userAttributes.email",
];
