import { devtools, persist } from "zustand/middleware";
import { createStore } from "zustand/vanilla";

export type UserState = {
  accessToken: string;
  refreshToken: string;
  id: string;
  isSignIn: boolean;
};

export type UserActions = {
  signIn: ({
    accessToken,
    refreshToken,
  }: {
    accessToken: string;
    refreshToken: string;
  }) => void;
  signOut: () => void;
};

export type UserStore = UserState & UserActions;

export const defaultInitState: UserState = {
  accessToken: "initialAccessToken",
  refreshToken: "initialRefreshToken",
  id: "defaultIdValue",
  isSignIn: false,
};

export const initUserStore = (): UserState => {
  return defaultInitState;
};

export const createUserStore = (initState: UserState = defaultInitState) => {
  return createStore<UserStore>()(
    devtools(
      persist(
        (set, get) => ({
          ...initState,
          signIn: ({ accessToken, refreshToken }) =>
            set((state) => ({
              ...state,
              accessToken: accessToken,
              refreshToken: refreshToken,
            })),
          signOut: () => set(() => initState),
        }),
        {
          name: "ariari-storage",
        }
      )
    )
  );
};
