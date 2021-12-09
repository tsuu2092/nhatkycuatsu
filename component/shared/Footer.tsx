import { chakra, Flex, Icon, Link, Text } from '@chakra-ui/react'
import React, { FC } from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'

type SocialIconProps = {
	href: string
	icon: any
}

const SocialIcon: FC<SocialIconProps> = ({ href, icon }) => {
	return (
		<Link href={href} isExternal target="_blank">
			<Icon mx={3} cursor="pointer" boxSize="35px" color="#ecb75d" as={icon} />
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
			<Text fontSize="xl">
				<chakra.span fontWeight={600} color="white">
					Nhật ký của Tsu
				</chakra.span>
				<chakra.span> 🌙</chakra.span>
			</Text>
			<Text color="white" my={3.5} fontSize="md">
				Nơi lưu giữ những ký ức thường nhật
			</Text>
			<Flex>
				<SocialIcon
					href="https://www.facebook.com/khaitruong922/"
					icon={FaFacebook}
				/>
				<SocialIcon href="https://www.youtube.com/Tsuu2092" icon={FaYoutube} />
				<SocialIcon
					href="https://www.github.com/khaitruong922/"
					icon={FaGithub}
				/>
				<SocialIcon
					href="https://www.linkedin.com/in/khaitruong922/"
					icon={FaLinkedin}
				/>
			</Flex>
		</Flex>
	)
}

export default Footer
