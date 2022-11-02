import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import React, { FC, memo } from "react";

type Props = {
  onOpen: () => void;
};

// eslint-disable-next-line react/display-name
const MenuIconButton: FC<Props> = memo(({ onOpen }) => (
  <IconButton
    aria-label="メニューボタン"
    icon={<HamburgerIcon />}
    size="sm"
    variant="unstyled"
    display={{ base: "block", md: "none" }}
    onClick={onOpen}
  />
));
export default MenuIconButton;