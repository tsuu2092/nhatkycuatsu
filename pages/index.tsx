import { Box, GridItem, SimpleGrid } from '@chakra-ui/react'
import PostCard from 'component/post/PostCard'
import { Post } from 'core/post/post.entity'
import { PostService } from 'core/post/post.service'
import type { GetStaticProps, NextPage } from 'next'
import React from 'react'

interface Props {
	posts: Post[]
}

const HomePage: NextPage<Props> = ({ posts }) => {
	const [firstPost, ...restPosts] = posts
	return (
		<Box h="100%" mx="auto" w={['100%', '90%', '80%', '70%']} px={4} py={12}>
			<SimpleGrid columns={[1, 1, 2, 3]} gap={4}>
				<GridItem rowSpan={[1, null, 2]} colSpan={[1, null, 2]}>
					<PostCard sizeMultiplier={2} post={firstPost} />
				</GridItem>
				{restPosts.map((post) => (
					<GridItem key={post.id}>
						<PostCard post={post} />
					</GridItem>
				))}
			</SimpleGrid>
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
