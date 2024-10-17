"use client";
import { useUserStore } from "@/providers/user-store-provider";
import { useRouter } from "next/navigation";

export const HomePage = () => {
  const router = useRouter();

  const { accessToken, refreshToken, id } = useUserStore((state) => state);

  return (
    <div>
      accessToken: {accessToken}
      <hr />
      refreshToken: {refreshToken}
      <hr />
      id: {id}
      <hr />
      <br />
      <button onClick={() => router.push("/auth/sign-in")}>
        Go To Sign In
      </button>
    </div>
  );
};
