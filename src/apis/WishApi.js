import AxiosInstance from "../utils/AxiosInstance";


export const postWishList = async (libbookId) => {
    try {
        const response = await AxiosInstance.post(
            `/libbook/wish/${libbookId}`
        );

        return response.data;
    } catch (e) {
        console.error(e);
        return [];
    }
}
