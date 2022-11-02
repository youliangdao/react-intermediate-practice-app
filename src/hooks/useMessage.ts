/* eslint-disable react-hooks/exhaustive-deps */
import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";

type Props = {
  title: string;
  status: "info" | "success" | "error" | "warning";
};

export const useMessage = () => {
  const toast = useToast();
  const showMessage = useCallback((props: Props) => {
    const { title, status } = props;
    toast({
      title,
      duration: 2000,
      isClosable: true,
      position: "top",
      status,
    });
  }, []);
  return { showMessage };
};
