export default {
  STRIPE_KEY: "pk_test_2ZpquUmoGp1CrkYb2h3lRZYO00DeZq7tUd",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-api-prod-serverlessdeploymentbucket-6vdjbw0u32ag"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://jpy87a1lqj.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_OJ9JwGAdX",
    APP_CLIENT_ID: "7gpo5k22459go38kaesh2gq2kn",
    IDENTITY_POOL_ID: "us-east-1:6b3424c5-774f-4f20-af71-e96b82ec89ec"
  },
};
