/* eslint-disable react-hooks/exhaustive-deps */

import { useCallback, useState } from "react";

import { User } from "../types/api/user";

type Props = {
  id: number;
  onOpen: () => void;
  users: User[];
};

export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | undefined>();
  const onSelectUser = useCallback((props: Props) => {
    const { id, onOpen, users } = props;
    const targetUser = users.find((user) => user.id === id);
    setSelectedUser(targetUser);
    onOpen();
  }, []);

  return {
    onSelectUser,
    selectedUser,
  };
};
