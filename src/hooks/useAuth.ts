/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import { User } from "../types/api/user";
import { useLoginUser } from "./useLoginUser";
import { useMessage } from "./useMessage";

export const useAuth = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser();

  const login = useCallback((id: string) => {
    setLoading(true);
    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (res.data) {
          showMessage({
            title: "ログインに成功しました",
            status: "success",
          });
          const isAdmin = res.data.id === 10 ? true : false;
          setLoginUser({ ...res.data, isAdmin });
          history.push("/home");
        } else {
          showMessage({
            title: "ユーザーが見つかりません",
            status: "warning",
          });
          alert("ユーザーが見つかりません");
        }
      })
      .catch(() => {
        showMessage({
          title: "ログインできません",
          status: "error",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    loading,
    login,
  };
};
