import { Author } from 'core/author/author.entity'

export interface Post {
	id: number
	slug: string
	title: string
	description?: string
	author?: Author
	created_at: string
	content: string
}
