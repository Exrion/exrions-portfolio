'use server'

import path from "path";
import matter from "gray-matter";
import { STR_PROJECTS_DIRECTORY } from '../../_Utilities/constants';
import * as fs from "fs";

export async function getPostData(id: string): Promise<string> {
    const fullPath = path.join(STR_PROJECTS_DIRECTORY, `${id}.md`.replaceAll("%20", " "));
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    // const processedContent = await remark()
    //     .use(html)
    //     .process(matterResult.content);
    // const contentHtml = processedContent.toString();

    // Combine the data with the id and contentHtml
    return JSON.stringify(matterResult);
}

export async function getAllPostIds(): Promise<string[]> {
    const files = fs.readdirSync(STR_PROJECTS_DIRECTORY);
    const markdownFiles = files.filter((file) => file.endsWith('.md'));
    const ids = markdownFiles.map((file) => path.basename(file, '.md'));
    return ids;
}