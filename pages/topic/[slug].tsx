import { Box, Text } from '@chakra-ui/react'
import { APP_NAME } from 'common/constants'
import PostList from 'component/post/PostList'
import { Topic } from 'core/topic/topic.entity'
import { TopicService } from 'core/topic/topic.service'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { ParsedUrlQuery } from 'querystring'
import React from 'react'

interface Params extends ParsedUrlQuery {
	slug: string
}

interface Props {
	topic: Topic
}

const TagPage: NextPage<Props> = ({ topic }) => {
	const { posts, name } = topic
	const headTitle = `${name} - ${APP_NAME}`
	return (
		<Box h="100%" mx="auto" w={['100%', '90%', '80%', '75%']} px={4} py={12}>
			<Head>
				<title>{headTitle}</title>
				<meta property="og:title" content={headTitle} key="title" />
			</Head>
			<Text textAlign="center" fontWeight={600} fontSize="4xl" mb={4}>
				{name}
			</Text>
			<PostList posts={posts} />
		</Box>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const topics = await TopicService.getAll()
	const paths = topics.map((topic) => ({
		params: { slug: topic.slug },
	}))
	return {
		paths,
		fallback: 'blocking',
	}
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
	const { slug } = context.params as Params
	try {
		const topic = await TopicService.getOneBySlug(slug)
		if (!topic) throw 404
		return {
			props: { topic },
			revalidate: 60,
		}
	} catch (e) {
		return { notFound: true }
	}
}

export default TagPage
