import { Button } from "@chakra-ui/react";
import React, { FC, memo, ReactNode } from "react";

type Props = {
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
};

// eslint-disable-next-line react/display-name
const PrimaryButton: FC<Props> = memo(
  ({ children, disabled = false, loading = false, onClick }) => {
    return (
      <Button
        bg="teal.400"
        color="white"
        _hover={{ opacity: 0.8 }}
        onClick={onClick}
        isLoading={loading}
        disabled={disabled || loading}
      >
        {children}
      </Button>
    );
  }
);
export default PrimaryButton;
