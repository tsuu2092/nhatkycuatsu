import { api } from 'common/api'
import { Topic } from './topic.entity'

export const TOPIC_ROUTE = '/topics'

export const TopicService = {
	getAll: async () => {
		const res = await api.get<Topic[]>(TOPIC_ROUTE, {})
		return res.data
	},
	getOneBySlug: async (slug: string) => {
		const res = await api.get<Topic>(`${TOPIC_ROUTE}/${slug}`)
		return res.data
	},
}
