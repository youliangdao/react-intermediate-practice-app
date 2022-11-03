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
import { useLoginUser } from "../../hooks/useLoginUser";
import { useSelectUser } from "../../hooks/useSelectUser";
import UserCard from "../organisms/user/UserCard";
import UserDetailModal from "../organisms/user/UserDetailModal";

// eslint-disable-next-line react/display-name
const UserManagement: FC = memo(() => {
  const { fetchUsers, loading, users } = useAllUsers();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { onSelectUser, selectedUser, setSelectedUser } = useSelectUser();
  const { loginUser } = useLoginUser();
  console.log(loginUser);
  const onClickUser = useCallback(
    (id: number) => {
      onSelectUser({ id, onOpen, users });
    },
    [users, onSelectUser, onOpen]
  );
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
                imageUrl="../../assets/order-header.png"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
                id={user.id}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal
        isOpen={isOpen}
        onClose={onClose}
        user={selectedUser}
        isAdmin={loginUser?.isAdmin}
      />
    </>
  );
});
export default UserManagement;
