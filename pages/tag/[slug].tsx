import { Box, Text } from '@chakra-ui/react'
import { APP_NAME } from 'common/constants'
import PostList from 'component/post/PostList'
import { Tag } from 'core/tag/tag.entity'
import { TagService } from 'core/tag/tag.service'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { ParsedUrlQuery } from 'querystring'
import React from 'react'

interface Params extends ParsedUrlQuery {
	slug: string
}

interface Props {
	tag: Tag
}

const TagPage: NextPage<Props> = ({ tag }) => {
	const { posts, name } = tag
	const headTitle = `${name} - ${APP_NAME}`
	return (
		<Box h="100%" mx="auto" w={['100%', '90%', '80%', '75%']} px={4} py={12}>
			<Head>
				<title>{headTitle}</title>
				<meta property="og:title" content={`${headTitle}`} />
			</Head>
			<Text fontWeight={600} fontSize="2xl" mb={2}>
				{name}
			</Text>
			<PostList posts={posts} />
		</Box>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const tags = await TagService.getAll()
	const paths = tags.map((tag) => ({
		params: { slug: tag.slug },
	}))
	return {
		paths,
		fallback: 'blocking',
	}
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
	const { slug } = context.params as Params
	try {
		const tag = await TagService.getOneBySlug(slug)
		if (!tag) throw 404
		return {
			props: { tag },
			revalidate: 60,
		}
	} catch (e) {
		return { notFound: true }
	}
}

export default TagPage
