import { Author } from 'core/author/author.entity'
import { Tag } from 'core/tag/tag.entity'
import { Topic } from 'core/topic/topic.entity'

export interface Post {
	id: number
	slug: string
	title: string
	description?: string
	created_at: string
	content: string
	coverUrl?: string
	author?: Author
	topic?: Topic
	tags: Tag[]
}
