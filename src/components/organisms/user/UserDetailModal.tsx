import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
} from "@chakra-ui/react";
import React, { FC, memo } from "react";

import { User } from "../../../types/api/user";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  user: User | undefined;
};

// eslint-disable-next-line react/display-name
const UserDetailModal: FC<Props> = memo((props) => {
  const { isOpen, onClose, user } = props;
  return (
    <Modal
      {...{ isOpen, onClose }}
      // eslint-disable-next-line jsx-a11y/no-autofocus
      autoFocus={false}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent pb={6}>
        <ModalHeader>ユーザー詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>名前</FormLabel>
              <Input value={user ? user.username : ""} isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>フルネーム</FormLabel>
              <Input value={user ? user.name : ""} isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>MAIL</FormLabel>
              <Input value={user ? user.email : ""} isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>TEL</FormLabel>
              <Input value={user ? user.phone : ""} isReadOnly />
            </FormControl>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
export default UserDetailModal;
