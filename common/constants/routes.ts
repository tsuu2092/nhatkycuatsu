const postRoute = '/post'
const topicRoute = '/topic'
const tagRoute = '/tag'
const pageRoute = '/page'
const getPostRoute = (slug: string) => `${postRoute}/${slug}`
const getTopicRoute = (slug: string) => `${topicRoute}/${slug}`
const getTagRoute = (slug: string) => `${tagRoute}/${slug}`
const getPageRoute = (page: number) => `${pageRoute}/${page}`
export const Routes = { getPostRoute, getTopicRoute, getTagRoute, getPageRoute }
