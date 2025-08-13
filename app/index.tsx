import { useRouter } from "expo-router";
import { useEffect } from "react";

export default function Index() {
  const router = useRouter();

  const isLoggedIn = false; // simulate

  useEffect(() => {
    if (isLoggedIn) {
      router.replace("/(main)/clicktracks");
    } else {
      router.replace("/(auth)/login");
    }
  }, [isLoggedIn]);
}
