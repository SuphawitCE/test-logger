// exports.SRPALogin = [
//   '*.request.userAttributes["custom:customer_id"]',
//   '*.request.userAttributes["cognito:email_alias"]',
//   '*.request.userAttributes["custom:firebase_uid"]',
//   "*.request.userAttributes.given_name",
//   "*.request.userAttributes.family_name",
//   "*.request.userAttributes.email",
// ];

// exports.PhoneLogin = [
//   '*.request.userAttributes["custom:customer_id"]',
//   '*.request.userAttributes["cognito:email_alias"]',
//   '*.request.userAttributes["custom:firebase_uid"]',
//   '*.request.userAttributes["cognito:phone_number_alias"]',
//   "*.request.userAttributes.given_name",
//   "*.request.userAttributes.phone_number",
//   "*.request.userAttributes.family_name",
//   "*.request.userAttributes.email",
// ];

const integrateString = () => {
  const text = "firebaseUserResponse.";
  const providerData = [
    "providerData[*].uid",
    "providerData[*].displayName",
    "providerData[*].email",
    "providerData[*].photoURL",
  ];
  const temp = [];
  providerData.forEach((providerKey) => temp.push(`${text}${providerKey}`));
  return temp;
};

const firebaseUserResponse = integrateString();

exports.cognitoKeys = [
  '*.request.userAttributes["custom:customer_id"]',
  '*.request.userAttributes["cognito:email_alias"]',
  '*.request.userAttributes["custom:firebase_uid"]',
  '*.request.userAttributes["cognito:phone_number_alias"]',
  "*.request.userAttributes.email",
  "*.request.userAttributes.given_name",
  "*.request.userAttributes.phone_number",
  "*.request.userAttributes.family_name",
  "*.request.validationData.email",
  "*.user",
  "*.domain",
  "*.displayName",
  "*.photoURL",
  ...firebaseUserResponse,
  // "firebaseUserResponse.providerData[*].uid",
  // "firebaseUserResponse.providerData[*].displayName",
  // "firebaseUserResponse.providerData[*].email",
  // "firebaseUserResponse.providerData[*].photoURL",
];
