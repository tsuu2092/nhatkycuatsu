import { chakra } from '@chakra-ui/react'
import { Tag } from 'core/tag/tag.entity'
import { Topic } from 'core/topic/topic.entity'
import Link from 'next/link'
import React from 'react'
type Props = {
	topic?: Topic
}

const TopicLink: React.FC<Props> = ({ topic }) => {
	if (!topic) return <></>
	const { name, slug } = topic
	return (
		<Link href={`/topics/${slug}`}>
			<chakra.span color="#e3a220" title={name} textTransform="uppercase">
				{name}
			</chakra.span>
		</Link>
	)
}

export default TopicLink
