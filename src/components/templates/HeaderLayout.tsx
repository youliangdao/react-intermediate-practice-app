import React, { FC, memo, ReactNode } from "react";

import Header from "../organisms/layout/Header";

type Props = {
  children: ReactNode;
};
// eslint-disable-next-line react/display-name
const HeaderLayout: FC<Props> = memo(({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
});
export default HeaderLayout;
