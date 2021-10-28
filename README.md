# test-logger

## Getting Started

`git clone git@github.com:SuphawitCE/test-logger.git`

`cd test-logger`

`npm install`

`node index.js`  or `npm start`

### Result
```
{"level":30,"time":1635401144821,"pid":19566,"hostname":"Suphawith-J.local","SRPALoginResponseEvent":{"request":{"userAttributes":{"custom:customer_id":"**Redacted**","sub":"bc73af20-6f67-416b-8530-f49289b6bec0","cognito:email_alias":"**Redacted**","cognito:user_status":"FORCE_CHANGE_PASSWORD","email_verified":"true","phone_number_verified":"false","custom:migrated_user":"true","custom:firebase_uid":"**Redacted**","given_name":"**Redacted**","custom:custom_auth_verified":"true","custom:latest_login_method":"SRP_A","family_name":"**Redacted**","email":"**Redacted**"}}},"phoneLoginWithOTPResponseEvent":{"request":{"userAttributes":{"sub":"d007bcfc-c535-410e-9ac0-aa3f562043a8","cognito:email_alias":"**Redacted**","cognito:user_status":"CONFIRMED","email_verified":"true","custom:custom_auth_verified":"true","custom:latest_login_method":"CUSTOM_CHALLENGE","phone_number_verified":"true","cognito:phone_number_alias":"**Redacted**","phone_number":"**Redacted**","given_name":"**Redacted**","family_name":"**Redacted**","email":"**Redacted**"},"session":[{"challengeName":"CUSTOM_CHALLENGE","challengeResult":true,"challengeMetadata":"CODE-119984"}]}}}
```


### use https://www.jsonformatter.io/  to format the JSON
