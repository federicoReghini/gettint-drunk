// utils
import { Platform } from "react-native";
import { clearStorage, getExpireStorage, getStorage } from "../utils/storage";

function useLogout() {

    const logoutExpire = async () => {

        const now = new Date();

        if(Platform.OS === 'web'){

            if ((await getStorage('refreshToken')) !== null) {
    
                const refreshToken = await getExpireStorage('refreshToken');
    
    
                if ((now.getTime() - refreshToken?.expire) > 7200000) {
                    await clearStorage();
                } else {
                    return null;
                }
            }
        }else {
            
            if (arguments[0] !== null) {
    
                const refreshToken = arguments[1];
        
                if ((now.getTime() - refreshToken?.expire) > 7200000) {
                    return 'expire'
                } else {
                    return null;
                }
            }
        }
    }

    const logoutUser = async () => {
        await clearStorage();
    }

    return { logoutExpire, logoutUser }
}

export default useLogout;