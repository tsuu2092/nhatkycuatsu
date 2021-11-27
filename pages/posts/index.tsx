import { Box, Text } from '@chakra-ui/react'
import { Post } from 'core/post/post.entity'
import { PostService } from 'core/post/post.service'
import type { GetStaticProps, NextPage } from 'next'
import React from 'react'
import Link from 'next/link'

interface Props {
	posts: Post[]
}

const PostsPage: NextPage<Props> = ({ posts }) => {
	return (
		<Box>
			<Text>There is {posts.length} posts</Text>
			{posts.map((post) => (
				<Text>
					<Link href={`/posts/${encodeURIComponent(post.slug)}`}>
						{post.title}
					</Link>
				</Text>
			))}
		</Box>
	)
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
	const posts = await PostService.getAll()

	return {
		props: { posts },
	}
}

export default PostsPage
