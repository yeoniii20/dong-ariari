import { UserStoreProvider } from "@/providers/user-store-provider";
import Home from "./(home)/home/page";

export default function Page() {
  return (
    <UserStoreProvider>
      <Home />
    </UserStoreProvider>
  );
}
