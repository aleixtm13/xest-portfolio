import { ListObjectsCommand } from "@aws-sdk/client-s3";
import client from "src/connectors/aws/aws-connector";

const bucketName = 'xest-blog'; //TODO: move to env
const region = 'eu-north-1'; //TODO: move to env

export const ListBucketFolders = async (bucketName: string): Promise<string[]> => {
    const command = new ListObjectsCommand({
        Bucket: bucketName,
    });
    const { Contents } = await client.send(command);
    const folders = [];
    for (const content of Contents || []) {
        if (isFolder(content.Key ?? '')) {
            folders.push(removeFolderSlash(content.Key ?? ''));
        }
    }
    return folders;
}

export const getImagesFromFolder = async (folderName: string): Promise<string[]> => {
    const bucketName = 'xest-blog'
    const command = new ListObjectsCommand({
        Bucket: bucketName,
        Prefix: `${folderName}/`,
    });
    const { Contents } = await client.send(command);
    const images = [];
    for (const content of Contents || []) {
        if (!isFolder(content.Key ?? '')) {
            images.push(content.Key ?? '');
        }
    }
    return images;
}

export const getImageUrl = (key: string) => {
    return `https://${bucketName}.s3.${region}.amazonaws.com/${key}`;
  };

const isFolder = (key: string): boolean => {
    return key.endsWith("/");
}

const removeFolderSlash = (key: string): string => {
    return key.replace(/\/$/, '');
}