import AWS from './aws-config'; // Import the AWS configuration
import {v4} from "uuid";

export const uploadFile = async (file) => {
  const s3 = new AWS.S3();

  const params = {
    Bucket: import.meta.env.VITE_NEXT_PUBLIC_APP_AWS_BUCKET_NAME,
    Key: `${v4()}_${file.name}`,
    Body: file,
  };

  try {
    console.log('File uploaded successfully');
    return await s3.upload(params).promise();
  } catch (error) {
    console.error('Error uploading file:', error);
  }
};

export const deleteFile = async (fileKey) => {
  const s3 = new AWS.S3();

  const params = {
    Bucket: import.meta.env.env.VITE_NEXT_PUBLIC_APP_AWS_BUCKET_NAME,
    Key: fileKey,
  };

  try {
    console.log('File deleted successfully');
    return await s3.deleteObject(params).promise();
  } catch (error) {
    console.error('Error deleting file:', error);
  }
};
