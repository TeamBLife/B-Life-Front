import AxiosInstance from "../utils/AxiosInstance";

class LibraryApi {
    async addLibBook(isbn13, totalBookCount, libId){
        try {
            const response = await AxiosInstance.post(
                `/libraries/${libId}/libbook`,{isbn13:isbn13, totalBookCount: totalBookCount}
            );
            return await response.data;
        } catch (e) {}
    }

    async registerLibrary(libId){
        try {
            const response = await AxiosInstance.post(
                `/libraries/register?libId=${libId}`
            );
            return await response.data;
        } catch (e) {}
    }

    async getLibraryList(page, pageSize){
       try {
           const response = await AxiosInstance.get(
               `/libraries`, {pageSize: pageSize, page: page}
           );
           return await response.data;
       } catch (e) {}
    }


    async searchLibraryList(regionCode, libName, page, pageSize){
        try {
            const response = await AxiosInstance.get(
                `/libraries/search`,
                {regionCode: regionCode, libName: libName, page: page, pageSize: pageSize}
            );
            return await response.data;
        } catch (e) {}
    }


    async updateLibrary(libId, closed, operatingTime, tel, homepage){
        try {
            const response = await AxiosInstance.patch(
                `/libraries/${libId}`,
                {closed: closed, operatingTime: operatingTime, tel: tel, homepage: homepage}
            );
            return await  response.data;
        } catch (e) {}
    }


    async updateLibBook(libBookId, totalBookCount){
        try {
            const response = await AxiosInstance.patch(
                `/libraries/${libBookId}`,{totalBookCount: totalBookCount}
            );
            return await response.data
        }catch (e) {}
    }

    async deleteLibBook(libBookId){
        try {
            const response = await AxiosInstance.delete(
                `/libraries/libbooks/${libBookId}`
            );
            return await response.data;
        }catch (e) {}
    }
}

const libraryApi = new LibraryApi();
export default libraryApi;