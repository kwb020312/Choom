import { PropsWithChildren } from "react";

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <main>
      {children}
      Footer
    </main>
  );
};

export default RootLayout;
