import { UserStoreProvider } from "@/providers/user-store-provider";
import SignInPage from "@/auth/sign-in/sign-in-page";

export default function SignIn() {
  return (
    <UserStoreProvider>
      <SignInPage />
    </UserStoreProvider>
  );
}
