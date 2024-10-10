import { UserStoreProvider } from "@/app/providers/user-store-provider";
import { HomePage } from "@/app/home-page";

export default function Home() {
  return (
    <UserStoreProvider>
      <HomePage />
    </UserStoreProvider>
  );
}
