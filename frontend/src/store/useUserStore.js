import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create()(
  persist(
    (set) => ({
      user: {
        id: "",
        name: "",
        email: "",
        profilePic:
          "https://res.cloudinary.com/dhxelcjwn/image/upload/v1737779596/networq/default-user.jpg",
        token: null,
        role: "",
      },
      setUser: (user) =>
        set((state) => ({
          user: { ...state.user, ...user },
        })),
      logout: () =>
        set(() => ({
          user: {
            id: "",
            name: "",
            email: "",
            profilePic:
              "https://res.cloudinary.com/dhxelcjwn/image/upload/v1737779596/networq/default-user.jpg",
            token: null,
            role: "",
          },
        })),
    }),
    {
      name: "user-store",
      partialize: (state) => ({ user: state.user }),
    }
  )
);

export default useUserStore;