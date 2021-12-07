import { Post } from 'core/post/post.entity'

export interface Topic {
	name: string
	slug: string
	posts: Post[]
}
