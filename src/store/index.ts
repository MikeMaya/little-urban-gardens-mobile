import AsyncStorage from '@react-native-community/async-storage';

export async function storeData(key: string, data: any) {
  try {
    const jsonValue = JSON.stringify(data);
    await AsyncStorage.setItem('key', jsonValue);
  } catch (e) {
    console.error(e);
  }
}

export async function getData(key: string) {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error(e);
  }
}
