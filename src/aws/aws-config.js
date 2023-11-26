import { S3Client } from '@aws-sdk/client-s3';
import { decrypt } from '../encrypt/encrypt';

const key = import.meta.env.VITE_NEXT_PUBLIC_APP_AWS_ACCESS_KEY_ID;
// console.log({key});

const s3Client = new S3Client({
	region: import.meta.env.VITE_NEXT_PUBLIC_APP_AWS_REGION, // Replace with your AWS region
	credentials: {
		accessKeyId: decrypt(import.meta.env.VITE_NEXT_PUBLIC_APP_AWS_ACCESS_KEY_ID), // Replace with your AWS access key
		secretAccessKey: decrypt(import.meta.env.VITE_NEXT_PUBLIC_APP_AWS_SECRET_ACCESS_KEY), // Replace with your AWS secret key
	},
});

export default s3Client;
