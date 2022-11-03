/* eslint-disable react-hooks/exhaustive-deps */
import {
  Center,
  Spinner,
  useDisclosure,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React, { FC, memo, useCallback, useEffect } from "react";

import { useAllUsers } from "../../hooks/useAllUsers";
import UserCard from "../organisms/user/UserCard";
import UserDetailModal from "../organisms/user/UserDetailModal";

// eslint-disable-next-line react/display-name
const UserManagement: FC = memo(() => {
  const { fetchUsers, loading, users } = useAllUsers();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const onClickUser = useCallback(() => onOpen(), []);
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }} justify="center">
          {users.map((user) => (
            <WrapItem key={user.id}>
              <UserCard
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal {...{ isOpen, onClose }} />
    </>
  );
});
export default UserManagement;
