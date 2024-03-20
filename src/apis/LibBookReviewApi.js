import AxiosInstance from "../utils/AxiosInstance";

export const getLibBookReview = async (libBookId, page = 0, size = 5) => {
    try {
        const response = await AxiosInstance.get(
            `/libbookreviews/libbooks/${libBookId}?page=${page}&size=${size}`
        );
        console.log(response.data)
        return response.data;
    } catch (e) {
        console.error(e);
        return [];
    }
}

export const createLibBookReview = async (libBookId, point, comment, status) => {
    try {
        const response = await AxiosInstance.post(
            `/libbookreviews/libbooks/${libBookId}`, {
                point, comment, status
            }
        );

        return response.data;
    } catch (e) {
        console.error(e);
        return [];
    }
}

export const deleteLibBookReview = async (libBookReviewId) => {

    try {
        const response = await AxiosInstance.delete(
            `/libbookreviews/${libBookReviewId}` // Use backticks ` to allow for template literals
        );

        return response.data;
    } catch (e) {
        console.error(e);
        return [];
    }
}

export const updateLibBookReview = async (libBookReviewId, point, comment, status) => {

    try {
        const response = await AxiosInstance.patch(
            `/libbookreviews/${libBookReviewId}`, {
                point, comment, status
            }
        );

        return response.data;
    } catch (e) {
        console.error(e);
        return [];
    }
}

export const getLibBookReviewPoints = async (libBookId) => {

    try {
        const response = await AxiosInstance.get(
            `/libbookreviews/libbooks/${libBookId}/point`
        );

        return response.data;
    } catch (e) {
        console.error(e);
        return {};
    }
}
