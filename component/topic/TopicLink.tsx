import { chakra } from '@chakra-ui/react'
import { Routes } from 'common/constants/routes'
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
		<Link href={Routes.getTopicRoute(slug)}>
			<chakra.span color="#e3a220" title={name} textTransform="uppercase">
				{name}
			</chakra.span>
		</Link>
	)
}

export default TopicLink
