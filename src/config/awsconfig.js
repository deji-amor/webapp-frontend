export const awsconfig = {
	bucketName: import.meta.env.VITE_NEXT_PUBLIC_APP_AWS_BUCKET_NAME,

	region: import.meta.env.VITE_NEXT_PUBLIC_APP_AWS_REGION,

	accessKeyId: import.meta.env.VITE_NEXT_PUBLIC_APP_AWS_ACCESS_KEY_ID,

	secretAccessKey: import.meta.env.VITE_NEXT_PUBLIC_APP_AWS_SECRET_ACCESS_KEY,

	s3Url: import.meta.env.VITE_NEXT_PUBLIC_APP_S3URL,
};