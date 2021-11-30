import { Box, Text, Flex, Image, Icon, Link } from '@chakra-ui/react'
import images from 'assets/images'
import React, { FC } from 'react'
import { FaGithub } from 'react-icons/fa'
import NextLink from 'next/link'
import { APP_NAME } from 'core/common/constants'
const NavBar: FC = () => {
	return (
		<Flex
			py={2}
			px={8}
			h="64px"
			zIndex={10}
			bgColor="#242424"
			color="white"
			align="center"
		>
			<NextLink href="/">
				<Image
					cursor="pointer"
					mt={0.5}
					h="100%"
					src={images.logo.transparent.src}
				/>
			</NextLink>
		</Flex>
	)
}

export default NavBar
