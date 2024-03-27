import AxiosInstance from "../utils/AxiosInstance";


export const getCheckout = async (libbookId) => {
    try {
        const response = await AxiosInstance.get(
            `/chckoutbooks/${libbookId}`
        );

        return response.data;
    } catch (e) {
        console.error(e);
        return [];
    }
}


export const createCheckout = async (memberId, libBookId) => {

    try {
        const response = await AxiosInstance.post(
            `/checkoutbooks`, {
                memberId, libBookId
            }
        );
        return response.data;
    } catch (e) {
        console.error(e);
        return [];
    }

}


export const updateCheckout = async (memberId, libBookId) =>{

    try {
        const response = await AxiosInstance.patch(
            `/checkoutbooks`, {
                memberId, libBookId
            }
        );
        return response.data;
    } catch (e) {
        console.error(e);
        return [];
    }
}

export const createReservation = async (libBookId) =>{
    try {
        const response = await AxiosInstance.post(`/checkoutbooks/reservation`, {libBookId});
        return response.data;
    } catch (e) {
        console.error(e);
        return [];
    }
}
