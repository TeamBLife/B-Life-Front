import AxiosInstance from "utils/AxiosInstance";

class BookApi {
  async searchBook(title, page) {
    try {
      const response = await AxiosInstance.get(
        `/books/search?title=${title}&page=${page}`
      );

      return await response.data;
    } catch (e) {
      return [];
    }
  }

  async getBookByIsbn(isbn) {
    try {
      const response = await AxiosInstance.get(`/books/${isbn}`);
      return await response.data;
    } catch (e) {}
  }
}

const bookApi = new BookApi();

export default bookApi;
