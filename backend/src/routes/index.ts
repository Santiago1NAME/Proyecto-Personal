import { Router } from "express";
import { readdirSync, lstatSync } from "fs";
import { join } from "path";

const PATH_ROUTER = __dirname;
const router = Router();

const cleanFileName = (fileName: string) => {
    return fileName.split('.').shift();
}
const processFile = (filePath: string, basePath: string) => {
    const relativePath = filePath.replace(basePath, "");
    const routeFile = relativePath.replace('\\','');
    const cleanName = cleanFileName(routeFile);

    if (cleanName !== "index") {
        const pathA = cleanName?.split('\\');
        const friendlyPath = pathA?.reduce((acc: string, element: string, key: number) => {
            const url = `${element}`;
            return acc === '' ? url : `${acc}/${url}`;
        }, '');

        const moduleRouter = require(filePath);
        router.use(`/${friendlyPath}`, moduleRouter.router);
    }
}

const processDirectory = (dirPath: string, basePath: string = dirPath) => {
    const files = readdirSync(dirPath);

    files.forEach((file) => {
        const filePath = join(dirPath, file);
        const stats = lstatSync(filePath);
        if (stats.isDirectory()) {
            processDirectory(filePath, basePath);
        } else {
            processFile(filePath, basePath);
        }
    });
}

processDirectory(PATH_ROUTER);

export { router };