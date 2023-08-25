import { S3Client } from '@aws-sdk/client-s3';

const key = import.meta.env.VITE_NEXT_PUBLIC_APP_AWS_ACCESS_KEY_ID;
console.log({key});

const s3Client = new S3Client({
	region: import.meta.env.VITE_NEXT_PUBLIC_APP_AWS_REGION, // Replace with your AWS region
	credentials: {
		accessKeyId: import.meta.env.VITE_NEXT_PUBLIC_APP_AWS_ACCESS_KEY_ID, // Replace with your AWS access key
		secretAccessKey: import.meta.env.VITE_NEXT_PUBLIC_APP_AWS_SECRET_ACCESS_KEY, // Replace with your AWS secret key
	},
});

export default s3Client;
