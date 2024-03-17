import { create } from "zustand";

const localStorageUser = window.localStorage.getItem("user");

const useUserStore = create((set) => ({
  user: localStorageUser === null ? undefined : JSON.parse(localStorageUser),
  setLoginUser: (user) => {
    window.localStorage.setItem("user", JSON.stringify(user));
    set(() => ({ user }));
  },
}));

export default useUserStore;
