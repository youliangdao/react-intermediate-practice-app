import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import React, { FC, memo } from "react";

import MenuIconButton from "../../atoms/button/MenuIconButton";
import MenuDrawer from "../../molecules/MenuDrawer";

// eslint-disable-next-line react/display-name
const Header: FC = memo(() => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }}>
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            ユーザー管理アプリ
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            <Link>ユーザー一覧</Link>
          </Box>
          <Box>
            <Link>設定</Link>
          </Box>
        </Flex>
        <MenuIconButton {...{ onOpen }} />
      </Flex>
      <MenuDrawer {...{ isOpen, onClose }} />
    </>
  );
});
export default Header;
