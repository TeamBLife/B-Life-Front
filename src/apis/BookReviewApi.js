import AxiosInstance from "../utils/AxiosInstance";

export const getBookReview = async (bookId, page = 0, size = 5) => {
    try {
        const response = await AxiosInstance.get(
            `/bookreviews/books/${bookId}?page=${page}&size=${size}`
        );
        console.log(response)
        return response.data;
    } catch (e) {
        console.error(e);
        return [];
    }
}


export const createReview = async (bookId, point, comment) => {
    try {
        const response = await AxiosInstance.post(
            `/bookreviews/books/${bookId}`,
            {
                point,
                comment
            }
        )
        return response.data;
    } catch (e) {
        console.error(e);
        return [];
    }
}


export const deleteReview = async(bookReviewId) => {
    try {
        const response = await AxiosInstance.delete(
            `/bookreviews/${bookReviewId}`
        );
        return response.data;
    } catch (e) {
        console.error(e);
        return [];
    }

}


export const updateReview = async (bookReviewId, point, comment) =>{

    try {
        const response = await AxiosInstance.patch(
            `/bookreviews/${bookReviewId}`,
            {
                point,
                comment
            }
        );

        return response.data;
    } catch (e) {
        console.error(e);
        return [];
    }
}


export const getBookReviewPoints = async (bookId) =>{

    try {
        const response = await AxiosInstance.get(
            `/bookreviews/books/${bookId}/point`
        );

        return response.data;
    } catch (e) {
        console.error(e);
        return {};
    }
}

