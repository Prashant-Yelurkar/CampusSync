import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";

// Get Auth Token
export const getAuthToken = async () => {
  try {
    if (Platform.OS === "web") {
      if (checkTokensSync()) {
        return `${localStorage.getItem("_at")}.${localStorage.getItem("_bt")}.${localStorage.getItem("_ct")}`;
      }
    } else {
      const [at, bt, ct] = await Promise.all([
        AsyncStorage.getItem("_at"),
        AsyncStorage.getItem("_bt"),
        AsyncStorage.getItem("_ct"),
      ]);
      if (at && bt && ct) {
        return `${at}.${bt}.${ct}`;
      }
    }
  } catch (error) {
    console.error("Error in getAuthToken:", error);
    return null;
  }
};

// Set Auth Token
export const setAuthToken = async (token) => {
  try {
    if (!token) return false;

    const [at, bt, ct] = token.split(".");
    if (Platform.OS === "web") {
      localStorage.setItem("_at", at);
      localStorage.setItem("_bt", bt);
      localStorage.setItem("_ct", ct);
    } else {
      await AsyncStorage.multiSet([
        ["_at", at],
        ["_bt", bt],
        ["_ct", ct],
      ]);
    }

    return true;
  } catch (error) {
    console.error("Error in setAuthToken:", error);
    return false;
  }
};

// Check Tokens Exist
export const checkTokens = async () => {
  try {
    if (Platform.OS === "web") {
      return checkTokensSync();
    } else {
      const [at, bt, ct] = await Promise.all([
        AsyncStorage.getItem("_at"),
        AsyncStorage.getItem("_bt"),
        AsyncStorage.getItem("_ct"),
      ]);
      return !!(at && bt && ct);
    }
  } catch (error) {
    console.error("Error in checkTokens:", error);
    return false;
  }
};

// ✅ Synchronous check for web only
const checkTokensSync = () => {
  return (
    localStorage.getItem("_at") != null &&
    localStorage.getItem("_bt") != null &&
    localStorage.getItem("_ct") != null
  );
};

// Remove All Tokens
export const removeToken = async () => {
  try {
    if (Platform.OS === "web") {
      localStorage.removeItem("_at");
      localStorage.removeItem("_bt");
      localStorage.removeItem("_ct");
    } else {
      await AsyncStorage.multiRemove(["_at", "_bt", "_ct"]);
    }
  } catch (error) {
    console.error("Error in removeToken:", error);
  }
};
