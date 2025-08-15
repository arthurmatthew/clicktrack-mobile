import { getAuth } from "@react-native-firebase/auth";
import { getFirestore } from "@react-native-firebase/firestore";

export const getUserData = async () => {
  const user = getAuth().currentUser;

  if (user) {
    const userStore = await getFirestore()
      .collection("users")
      .doc(user.uid)
      .get();

    if (userStore.exists())
      return userStore.data() as {
        clicktracks: string[];
      };
  }
};
