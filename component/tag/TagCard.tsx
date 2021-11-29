import { Image } from '@chakra-ui/image'
import { Flex, Text } from '@chakra-ui/layout'
import images from 'assets/images'
import { Tag } from 'core/tag/tag.entity'
import Link from 'next/link'
import React from 'react'
type Props = {
	tag: Tag
}

const TagCard: React.FC<Props> = ({ tag }) => {
	const { name, slug } = tag
	return (
		<Link href={`tags/${slug}/post`}>
			<Flex
				borderRadius="md"
				mr={2}
				bgColor="#363636"
				color="white"
				px={2}
				py={1}
			>
				<Text fontWeight="bold" fontSize="sm">
					{name}
				</Text>
			</Flex>
		</Link>
	)
}

export default TagCard
