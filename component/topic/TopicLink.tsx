import { Text } from '@chakra-ui/layout'
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
			<Text
				title={name}
				fontWeight={600}
				fontSize="sm"
				color="#555555"
				textTransform="uppercase"
			>
				{name}
			</Text>
		</Link>
	)
}

export default TopicLink
