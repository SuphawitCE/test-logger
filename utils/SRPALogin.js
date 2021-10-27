exports.SRPALogin = [
  'SRPALoginResponseEvent.request.userAttributes["custom:customer_id"]',
  'SRPALoginResponseEvent.request.userAttributes["cognito:email_alias"]',
  'SRPALoginResponseEvent.request.userAttributes["custom:firebase_uid"]',
  "SRPALoginResponseEvent.request.userAttributes.given_name",
  "SRPALoginResponseEvent.request.userAttributes.family_name",
  "SRPALoginResponseEvent.request.userAttributes.email",
];
