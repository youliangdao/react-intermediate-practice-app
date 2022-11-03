import { Box, Image, Stack, Text } from "@chakra-ui/react";
import React, { FC, memo } from "react";

type Props = {
  id: number;
  fullName: string;
  imageUrl: string;
  onClick: (id: number) => void;
  userName: string;
};

// eslint-disable-next-line react/display-name
const UserCard: FC<Props> = memo((props) => {
  const { id, fullName, imageUrl, onClick, userName } = props;
  return (
    <Box
      w="260px"
      h="260px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      p={4}
      _hover={{ cursor: "pointer", opacity: 0.8 }}
      onClick={() => onClick(id)}
    >
      <Stack textAlign="center">
        <Image
          boxSize="160px"
          borderRadius="full"
          src={imageUrl}
          alt={userName}
          m="auto"
        />
        <Text fontSize="lg" fontWeight="bold">
          {userName}
        </Text>
        <Text fontSize="sm" color="gray">
          {fullName}
        </Text>
      </Stack>
    </Box>
  );
});
export default UserCard;
