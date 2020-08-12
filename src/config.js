export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_51HEfDZF3FtGReOpiFujPuNGRiCcMBoDYYptXco3vW2MkPfWRrtu3pKWId67VM2Dz3R8cDadoiqNCx25dGE66nvkk001zf9A8TP",
    s3: {
      REGION: "us-west-2",
      BUCKET: "rw-notes-app-uploads"
    },
    apiGateway: {
      REGION: "us-west-2",
      URL: "https://datqz9ubyc.execute-api.us-west-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-west-2",
      USER_POOL_ID: "us-west-2_wOEfPXcjK",
      APP_CLIENT_ID: "4vschtgou8r28doelvfe9al78",
      IDENTITY_POOL_ID: "us-west-2:369151ba-923d-4b53-aaca-7ca7f0c1854c"
    }
  };