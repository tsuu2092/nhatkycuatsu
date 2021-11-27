import { Box, Text } from '@chakra-ui/react'
import { Post } from 'core/post/post.entity'
import { PostService } from 'core/post/post.service'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'
import React from 'react'

interface Params extends ParsedUrlQuery {
	slug: string
}

interface Props {
	post: Post
}

const PostPage: NextPage<Props> = ({ post }) => {
	return (
		<Box>
			<Text>Hello</Text>
			<Text>{post.title}</Text>
			<Text>{post.author?.name}</Text>
			<Text>{post.description}</Text>
			<Text>{post.content}</Text>
		</Box>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const posts = await PostService.getAll()
	const paths = posts.map((post) => ({
		params: { slug: post.slug },
	}))
	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
	const { slug } = context.params as Params
	const post = await PostService.getOneBySlug(slug)
	return {
		props: { post },
	}
}

export default PostPage
