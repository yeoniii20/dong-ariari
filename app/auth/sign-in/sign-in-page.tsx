"use client";
import { useUserStore } from "@/app/providers/user-store-provider";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const { signIn, accessToken } = useUserStore((state) => state);
  const router = useRouter();

  const handleSignInClick = () => {
    signIn({
      accessToken: "dummy-access-token",
      refreshToken: "dummy-refresh-token",
    });
    router.back();
  };

  return (
    <div>
      accessToken: {accessToken}
      <br />
      <button onClick={handleSignInClick}>Sign in with dummy data</button>
    </div>
  );
}
