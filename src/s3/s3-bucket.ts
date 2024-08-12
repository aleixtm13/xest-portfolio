import { ListObjectsCommand } from "@aws-sdk/client-s3";
import client from "src/connectors/aws/aws-connector";

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

const isFolder = (key: string): boolean => {
    return key.endsWith("/");
}

const removeFolderSlash = (key: string): string => {
    return key.replace(/\/$/, '');
}