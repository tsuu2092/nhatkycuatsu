import { Image, Img } from '@chakra-ui/image'
import { AspectRatio, Flex, Text } from '@chakra-ui/layout'
import images from 'assets/images'
import { Post } from 'core/post/post.entity'
import React from 'react'
import Link from 'next/link'
import { Tag, TagCloseButton } from '@chakra-ui/tag'
import TagCard from 'component/tag/TagCard'
type Props = {
	post: Post
	sizeMultiplier?: number
}

const PostCard: React.FC<Props> = ({ post, sizeMultiplier = 1 }) => {
	const { id, slug, title, created_at, coverUrl, description, author, tags } =
		post
	const { name, avatarUrl } = author ?? {}
	return (
		<Link href={`posts/${slug}`}>
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
					></Image>
				</AspectRatio>

				<Text fontWeight={600} mt={2} fontSize="xl">
					{title}
				</Text>
				<Text noOfLines={2} textOverflow="ellipsis" fontSize="sm">
					{description}
				</Text>
				<Flex align="center" my={2}>
					<Image mr={2} borderRadius="full" boxSize="25px" src={avatarUrl} />
					<Text textTransform="uppercase" fontWeight="bold" fontSize="sm">
						{name || 'Anonymous'}
					</Text>
				</Flex>
				<Flex mt={2} align="center" overflowX="hidden">
					{tags.map((tag) => (
						<TagCard key={tag.slug} tag={tag} />
					))}
				</Flex>
			</Flex>
		</Link>
	)
}

export default PostCard
