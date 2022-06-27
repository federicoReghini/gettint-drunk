// utils
import { clearStorage, getExpireStorage } from "../utils/storage";

function useLogout() {

    const logoutExpire = () => {
        if ((getStorage('refreshToken')) !== null) {

            const refreshToken = getExpireStorage('refreshToken');

            const now = new Date();

            if ((now.getTime() - refreshToken?.expire) > 14200000) {
                clearStorage();
            } else {
                return null;
            }
        }
    }

    const logoutUser = () => {
        clearStorage();
    }

    return { logoutExpire, logoutUser }
}

export default useLogout;