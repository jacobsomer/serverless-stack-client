const dev = {
  STRIPE_KEY: "pk_test_2ZpquUmoGp1CrkYb2h3lRZYO00DeZq7tUd",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1c3s0xm2d4y51"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://rvsko4ld2h.execute-api.us-east-1.amazonaws.com/dev/"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_hrTLr25Kc",
    APP_CLIENT_ID: "24jdgcofq002nd4r4rkfgtcgm7",
    IDENTITY_POOL_ID: "us-east-1:524701b0-4572-4666-b576-265d20f2fea0"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_2ZpquUmoGp1CrkYb2h3lRZYO00DeZq7tUd",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1c3s0xm2d4y51"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://sn3zqjc2k5.execute-api.us-east-1.amazonaws.com/prod/"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_h1GjgCvMt",
    APP_CLIENT_ID: "mfgh695m9utr8bk5qp5riqv55",
    IDENTITY_POOL_ID: "us-east-1:bd866436-a356-41e4-af64-5698ec54340b"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;


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
