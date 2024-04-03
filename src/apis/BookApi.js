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

  async getPopularBookList() {
    const response = await AxiosInstance.get(`/books/popular`);

    const data = await response.data

    console.log("data = ", data)
    console.log(response.status)
    console.log(response)
    
    return await response.data;
  }
}

const bookApi = new BookApi();

export default bookApi;
