import type { AppProps } from "next/app";

import { UserStoreProvider } from "@/app/providers/user-store-provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserStoreProvider>
      <Component {...pageProps} />
    </UserStoreProvider>
  );
}
