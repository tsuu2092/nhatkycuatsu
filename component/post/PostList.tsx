import { GridItem, SimpleGrid } from '@chakra-ui/react'
import { Post } from 'core/post/post.entity'
import React from 'react'
import PostCard from './PostCard'

type Props = {
	posts: Post[]
}

const PostList: React.FC<Props> = ({ posts }) => {
	return (
		<SimpleGrid columns={[1, 1, 2, 3]} gap={4}>
			{posts.map((post) => (
				<GridItem key={post.id}>
					<PostCard post={post} />
				</GridItem>
			))}
		</SimpleGrid>
	)
}

export default PostList
