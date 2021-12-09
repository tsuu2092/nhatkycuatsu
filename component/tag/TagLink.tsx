import { chakra } from '@chakra-ui/react'
import { Tag } from 'core/tag/tag.entity'
import Link from 'next/link'
import React from 'react'
type Props = {
	tag: Tag
}

const TagLink: React.FC<Props> = ({ tag }) => {
	const { name, slug } = tag
	return (
		<Link href={`/tag/${slug}`}>
			<chakra.span cursor="pointer" textDecoration="underline">
				{name}
			</chakra.span>
		</Link>
	)
}

export default TagLink
