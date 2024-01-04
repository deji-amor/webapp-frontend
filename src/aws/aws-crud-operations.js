import s3Client from "./aws-config";
import {PutObjectCommand, DeleteObjectCommand} from "@aws-sdk/client-s3";
import {v4 as uuidv4} from "uuid";

export const uploadFile = async (file, ...routes) => {
	let uniqueFileName
	if(routes.length === 0) uniqueFileName = `afms/file_${uuidv4()}`.replaceAll(" ", "");
	else {
		const routesStr = routes.map(route => `${route}/`).join("")
		uniqueFileName = `afms/${routesStr}file_${Date.now()}_${file.name}`.replaceAll(" ", "");
	}

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
		console.log(fileUrl, "FILEURL")

		return fileUrl; // Return the constructed URL
		// return await s3Client.send(new PutObjectCommand(params));
	} catch (error) {
		console.error("Error uploading file:", error);
	}
};

export const removeSchemeHostAndSlash = (url) => {
	const withoutSchemeAndHost = url.replace(/^(https?|ftp):\/\/[^/\s]+/, "");
	return withoutSchemeAndHost.replace(/^\/*/, "");
}

export const extractFileName = (url) =>  {
	const urlParts = url.split("/");
	const fileNameWithExt = urlParts.pop();
	const fileNameParts = fileNameWithExt.split("_");
	const fileNameAndExt = fileNameParts.pop();
	return fileNameAndExt;
}

export const deleteFileByUrl = async fileUrl => {
	const fileKey = removeSchemeHostAndSlash(fileUrl);

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