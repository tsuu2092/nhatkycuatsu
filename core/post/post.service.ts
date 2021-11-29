import { api } from 'core/common/api'
import { Post } from './post.entity'

export const POSTS_ROUTE = '/posts'

export const PostService = {
	getAll: async () => {
		const res = await api.get<Post[]>(POSTS_ROUTE, {
			params: { _sort: 'created_at:DESC' },
		})
		return res.data
	},
	getOneBySlug: async (slug: string) => {
		const res = await api.get<Post>(`${POSTS_ROUTE}/${slug}`)
		return res.data
	},
}
