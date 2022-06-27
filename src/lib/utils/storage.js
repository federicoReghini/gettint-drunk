import AsyncStorage from '@react-native-async-storage/async-storage';

async function setStorage(key, value) {
    try {
        const now = new Date();

        const item = {
            [key]: value,
            expire: now.getTime()
        }
    
        const jsonValue = JSON.stringify(item);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (error) {
        return error?.message;
    }
}

async function getStorage(key) {

    try {
        const value = await AsyncStorage.getItem(key);
        if (value) {
            const json = JSON.parse(value);
            return json[key];
        }else {
            return null;
        }
    } catch (error) {
        return error.message;
    }
}

async function getExpireStorage(key) {

    try {
        const value = await AsyncStorage.getItem(key);
        if (value) {
            return JSON.parse(value);
        }else {
            return null;
        }
    } catch (error) {
        return error.message;
    }

}

async function removeStorage(key) {

    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        return error.message;
    }
}

async function clearStorage() {

    try {
        await AsyncStorage.clear();
    } catch (error) {
        return error.message;
    }
}

export {
    setStorage,
    getStorage,
    getExpireStorage,
    removeStorage,
    clearStorage
}