import { Box, GridItem, SimpleGrid } from '@chakra-ui/react'
import PostCard from 'component/post/PostCard'
import PostList from 'component/post/PostList'
import { Post } from 'core/post/post.entity'
import { PostService } from 'core/post/post.service'
import type { GetStaticProps, NextPage } from 'next'
import React from 'react'

interface Props {
	posts: Post[]
}

const HomePage: NextPage<Props> = ({ posts }) => {
	return (
		<Box h="100%" mx="auto" w={['100%', '90%', '80%', '75%']} px={4} py={12}>
			<PostList posts={posts} />
		</Box>
	)
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
	const posts = await PostService.getAll()

	return {
		props: { posts },
		revalidate: 60,
	}
}

export default HomePage
