
import { markdownToHtml } from './src/utils/markdown';
import fs from 'fs';
import path from 'path';

async function test() {
    const filePath = path.join(process.cwd(), 'markdown/Blog/ecommerce-performance.md');
    const fileContent = fs.readFileSync(filePath, 'utf8');

    // Extract content after frontmatter (simple split for debug)
    const parts = fileContent.split('---');
    const content = parts.length > 2 ? parts.slice(2).join('---') : fileContent;

    const html = await markdownToHtml(content);
    console.log('--- HTML OUTPUT START ---');
    console.log(html);
    console.log('--- HTML OUTPUT END ---');
}

test().catch(console.error);
