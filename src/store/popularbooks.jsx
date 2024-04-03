const { create } = require("zustand");

const usePopularBooksStore = create((set) => ({
  popularBooks: [],
  setPopularBooks: (popularBooks) => {
    set(() => ({ popularBooks }));
  },
}));

export default usePopularBooksStore;
