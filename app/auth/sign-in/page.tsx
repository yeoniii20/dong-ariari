import { UserStoreProvider } from "@/app/providers/user-store-provider";
import SignInPage from "@/app/auth/sign-in/sign-in-page";

export default function SignIn() {
  return (
    <UserStoreProvider>
      <SignInPage />
    </UserStoreProvider>
  );
}
