import { getAuth } from "@react-native-firebase/auth";
import { getFirestore } from "@react-native-firebase/firestore";

export const setUserData = async (data: { clicktracks: string[] }) => {
  const user = getAuth().currentUser;

  if (user) {
    await getFirestore().collection("users").doc(user.uid).set(data);
  }
};
