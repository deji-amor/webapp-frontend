import s3Client from "./aws-config";
import {PutObjectCommand, DeleteObjectCommand} from "@aws-sdk/client-s3";

export const uploadFile = async file => {
	const uniqueFileName = `file_${Date.now()}_${file.name}`.replaceAll(" ", "");

	const params = {
		Bucket: import.meta.env.VITE_NEXT_PUBLIC_APP_AWS_BUCKET_NAME, // Replace with your S3 bucket name
		Key: uniqueFileName,
		Body: file,
	};

	try {
		await s3Client.send(new PutObjectCommand(params));
		console.log("File uploaded successfully");

		// Construct the URL using the S3 bucket, region, and key (object name)
		const fileUrl = `https://${params.Bucket}.s3.amazonaws.com/${params.Key}`;

		return fileUrl; // Return the constructed URL
		// return await s3Client.send(new PutObjectCommand(params));
	} catch (error) {
		console.error("Error uploading file:", error);
	}
};

export const deleteFileByUrl = async fileUrl => {
	// Extract the file key from the URL
	const urlParts = fileUrl.split("/");
	const fileKey = urlParts[urlParts.length - 1];

	const params = {
		Bucket: import.meta.env.VITE_NEXT_PUBLIC_APP_AWS_BUCKET_NAME,
		Key: fileKey,
	};

	try {
		return await s3Client.send(new DeleteObjectCommand(params));
	} catch (error) {
		console.error("Error deleting file:", error);
	}
};