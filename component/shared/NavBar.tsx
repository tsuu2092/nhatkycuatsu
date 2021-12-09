import {
	Flex,
	Icon,
	Image,
	Menu,
	MenuButton,
	MenuItem,
	MenuItemProps,
	MenuList,
	Text,
} from '@chakra-ui/react'
import images from 'assets/images'
import { APP_NAME } from 'common/constants'
import { Routes } from 'common/constants/routes'
import NextLink from 'next/link'
import React, { FC } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
const NavBar: FC = () => {
	const menuItemProps: MenuItemProps = {
		_focus: { bgColor: '#484848' },
		_hover: { bgColor: '#484848' },
		p: 3,
	}

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
					userSelect="none"
					cursor="pointer"
					mt={0.5}
					h="100%"
					src={images.logo.transparent.src}
					alt={APP_NAME}
				/>
			</NextLink>
			<NextLink href="/">
				<Text
					fontSize="18px"
					userSelect="none"
					cursor="pointer"
					fontWeight={600}
					mr={8}
				>
					Nhật ký của Tsu
				</Text>
			</NextLink>
			<Flex fontSize="16px" align="center" display={['none', null, 'inherit']}>
				<NextLink href={Routes.getTopicRoute('tech')}>
					<Text mx={3} cursor="pointer">
						Công nghệ
					</Text>
				</NextLink>
				<NextLink href={Routes.getTopicRoute('life')}>
					<Text mx={3} cursor="pointer">
						Đời sống
					</Text>
				</NextLink>
			</Flex>
			<Flex display={['inherit', null, 'none']} ml="auto">
				<Menu colorScheme="gray">
					<MenuButton>
						<Icon
							display="flex"
							alignItems="center"
							boxSize="20px"
							as={AiOutlineMenu}
						/>
					</MenuButton>
					<MenuList py={0} border="0px" bgColor="#363636">
						<NextLink href={Routes.getTopicRoute('tech')}>
							<MenuItem {...menuItemProps}>
								<Text cursor="pointer">Công nghệ</Text>
							</MenuItem>
						</NextLink>
						<NextLink href={Routes.getTopicRoute('life')}>
							<MenuItem {...menuItemProps}>
								<Text cursor="pointer">Đời sống</Text>
							</MenuItem>
						</NextLink>
					</MenuList>
				</Menu>
			</Flex>
		</Flex>
	)
}

export default NavBar
