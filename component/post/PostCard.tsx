import { Image } from '@chakra-ui/image'
import { AspectRatio, Box, Flex, Text } from '@chakra-ui/layout'
import { chakra } from '@chakra-ui/react'
import images from 'assets/images'
import { Routes } from 'common/constants/routes'
import TopicLink from 'component/topic/TopicLink'
import { Post } from 'core/post/post.entity'
import Link from 'next/link'
import React from 'react'
type Props = {
	post: Post
	sizeMultiplier?: number
}

const PostCard: React.FC<Props> = ({ post }) => {
	const {
		topic,
		slug,
		title,
		created_at,
		coverUrl,
		description,
		author,
		minsRead = 5,
	} = post
	const { name, avatarUrl } = author ?? {}
	return (
		<Link href={Routes.getPostRoute(slug)}>
			<Flex
				title={title}
				cursor="pointer"
				_hover={{ backgroundColor: 'gray.50' }}
				h="100%"
				direction="column"
				boxShadow="md"
				p={4}
			>
				<AspectRatio ratio={16 / 9}>
					<Image
						objectFit="cover"
						src={coverUrl}
						fallbackSrc={images.blog.placeholder.src}
						alt={title}
					></Image>
				</AspectRatio>

				<Text fontWeight={600} mt={2} fontSize="lg">
					{title}
				</Text>
				<Text noOfLines={2} textOverflow="ellipsis" fontSize="sm">
					{description}
				</Text>
				<Box mt="auto">
					<Flex my={2} align="center">
						<Image mr={2} borderRadius="full" boxSize="25px" src={avatarUrl} />
						<Text fontWeight="bold" fontSize="sm">
							{name || 'Anonymous'}
						</Text>
					</Flex>
					<Flex align="center">
						<Text fontSize="sm" fontWeight={600} color="#555555">
							<TopicLink topic={topic} />
							<chakra.span mx={1}>•</chakra.span>
							{new Date(created_at).toLocaleDateString()}
							<chakra.span mx={1}>•</chakra.span>
							<chakra.span textTransform="uppercase">
								{minsRead} min{minsRead !== 1 && 's'} read
							</chakra.span>
						</Text>
					</Flex>
				</Box>
				{/* {tags.map((tag) => (
						<TagCard key={tag.slug} tag={tag} />
					))} */}
			</Flex>
		</Link>
	)
}

export default PostCard
