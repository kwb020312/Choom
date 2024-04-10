import { PropsWithChildren } from "react";

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <main>
      Navbar
      {children}
      Footer
    </main>
  );
};

export default RootLayout;
