import { remark } from 'remark';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

export async function markdownToHtml(markdownContent: any) : Promise<any>{
    return await remark().use(remarkRehype).use(rehypeStringify).process(markdownContent);
}