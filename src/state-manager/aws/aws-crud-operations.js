import { S3 } from "../../config/awsconfig";
import { v4 } from "uuid";

async function uploadImage(file) {
  const uniqueFileName = `${v4()}_${file.name}`;

	const params = {
		Bucket: import.meta.env.VITE_NEXT_PUBLIC_APP_AWS_BUCKET_NAME,
		Key: uniqueFileName,
		Body: file,
	};

	try {
		const result = await S3.upload(params).promise();
		console.log("Image uploaded successfully.");
    return result
	} catch (error) {
		console.error("Error uploading image:", error);
	}
}

export {uploadImage};

async function deleteImage(fileName) {
	const params = {
		Bucket: import.meta.env.VITE_NEXT_PUBLIC_APP_AWS_BUCKET_NAME,
		Key: fileName,
	};

	try {
		const result = await S3.deleteObject(params).promise();
		console.log("Image deleted successfully.");
    return result
	} catch (error) {
		console.error("Error deleting image:", error);
	}
}

export {deleteImage};


