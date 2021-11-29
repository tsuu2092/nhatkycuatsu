import { Author } from 'core/author/author.entity'
import { Tag } from 'core/tag/tag.entity'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export interface Post {
	id: number
	slug: string
	title: string
	description?: string
	author?: Author
	created_at: string
	content: string
	coverUrl?: string
	tags: Tag[]
	mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>
}
