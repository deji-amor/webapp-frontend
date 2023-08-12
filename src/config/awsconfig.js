import AWS from "aws-sdk";

AWS.config.update({
	accessKeyId: import.meta.env.VITE_NEXT_PUBLIC_APP_AWS_ACCESS_KEY_ID,
	secretAccessKey: import.meta.env.VITE_NEXT_PUBLIC_APP_AWS_SECRET_ACCESS_KEY,
	region: import.meta.env.VITE_NEXT_PUBLIC_APP_AWS_REGION,
});

const S3 = new AWS.S3();

export {S3};
