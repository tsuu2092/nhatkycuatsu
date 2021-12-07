import { api } from 'common/api'
import { Post } from './post.entity'

const sortByNewest = 'created_at:DESC'

export const POSTS_ROUTE = '/posts'

export const PostService = {
	getAll: async () => {
		const res = await api.get<Post[]>(POSTS_ROUTE, {
			params: { _sort: sortByNewest },
		})
		return res.data
	},
	getNewest: async (_limit: number = 5) => {
		const res = await api.get<Post[]>(POSTS_ROUTE, {
			params: { _sort: sortByNewest, _limit },
		})
		return res.data
	},
	getOneBySlug: async (slug: string) => {
		const res = await api.get<Post>(`${POSTS_ROUTE}/${slug}`)
		return res.data
	},
}
