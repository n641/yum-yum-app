import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (value , key) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
      console.log(e);
    }
  }

  
const getData = async (Key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(Key)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
        console.log(e);
    }
  }

  const removeItemValue = async (key)=> {
    try {
        await AsyncStorage.removeItem(key);
        return true;
    }
    catch(exception) {
        return false;
    }
}
  
export { removeItemValue, getData, storeData };