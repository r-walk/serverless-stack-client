export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_51HEfDZF3FtGReOpiFujPuNGRiCcMBoDYYptXco3vW2MkPfWRrtu3pKWId67VM2Dz3R8cDadoiqNCx25dGE66nvkk001zf9A8TP",
    s3: {
      REGION: "us-west-2",
      BUCKET: "notes-app-2-api-dev-attachmentsbucket-1e2fym2pj4vev"
    },
    apiGateway: {
      REGION: "us-west-2",
      URL: "https://7aohxpyze0.execute-api.us-west-2.amazonaws.com/dev"
    },
    cognito: {
      REGION: "us-west-2",
      USER_POOL_ID: "us-west-2_z5eMeXCia",
      APP_CLIENT_ID: "fjtbv8gu1pgbh1brdco02d9d6",
      IDENTITY_POOL_ID: "us-west-2:e4135b33-5049-4818-bb68-a774807a20a1"
    }
  };