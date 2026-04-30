'use server'

import { remark } from 'remark';
import html from 'remark-html';
import path from "path";
import matter from "gray-matter";
import { STR_PROJECTS_DIRECTORY } from '../../_Utilities/constants';
import * as fs from "fs";

export async function getPostData(id: string): Promise<string> {
    const fullPath = path.join(STR_PROJECTS_DIRECTORY, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id and contentHtml
    return contentHtml;
}

export async function getAllPostData(): Promise<string[]> {
    const files = fs.readdirSync(STR_PROJECTS_DIRECTORY);
    const markdownFiles = files.filter((file) => file.endsWith('.md'));

    const posts = await Promise.all(
        markdownFiles.map(async (file) => {
            const id = path.basename(file, '.md');
            return getPostData(id);
        })
    );

    return posts;
}