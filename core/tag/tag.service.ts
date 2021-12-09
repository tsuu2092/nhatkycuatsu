import { api } from 'common/api'
import { Tag } from './tag.entity'

const TAGS_ROUTE = '/tags'

export const TagService = {
	getAll: async () => {
		const res = await api.get<Tag[]>(TAGS_ROUTE, {})
		return res.data
	},
	getOneBySlug: async (slug: string) => {
		const res = await api.get<Tag>(`${TAGS_ROUTE}/${slug}`)
		return res.data
	},
}
