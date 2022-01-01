import { remark } from 'remark';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

export async function markdownToHtml(markdownContent: string): Promise<any> {
    // console.log(`Inside markdownToHtml: markdownContent`, markdownContent);
	return await remark().use(remarkRehype).use(rehypeStringify).process(markdownContent);
}
