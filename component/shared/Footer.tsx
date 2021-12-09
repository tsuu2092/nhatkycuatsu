import { chakra, Flex, Icon, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React, { FC } from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'

type IconLinkProps = {
	href: string
	icon: any
}

const IconLink: FC<IconLinkProps> = ({ href, icon }) => {
	return (
		<Link href={href}>
			<Icon mx={2} cursor="pointer" boxSize="35px" color="#ecb75d" as={icon} />
		</Link>
	)
}

const Footer: FC = () => {
	return (
		<Flex
			justify="center"
			align="center"
			direction="column"
			py={8}
			px={12}
			h="200px"
			bgColor="#242424"
		>
			<Text fontSize="2xl">
				<chakra.span fontWeight={600} color="white">
					Nhật ký của Tsu
				</chakra.span>
				<chakra.span> 🌙</chakra.span>
			</Text>
			<Flex mt={4}>
				<IconLink
					href="https://www.facebook.com/khaitruong922/"
					icon={FaFacebook}
				/>
				<IconLink href="https://www.youtube.com/Tsuu2092" icon={FaYoutube} />
				<IconLink
					href="https://www.github.com/khaitruong922/"
					icon={FaGithub}
				/>
				<IconLink
					href="https://www.linkedin.com/in/khaitruong922/"
					icon={FaLinkedin}
				/>
			</Flex>
		</Flex>
	)
}

export default Footer
