import { useSession } from "@/components/SessionProvider";
import { getUserClicktracks } from "@/lib/firebase/getUserClicktracks";
import { setUserData } from "@/lib/firebase/setUserData";
import { Clicktrack } from "@/models/Clicktrack";
import { useEffect, useState } from "react";

export const useClicktrackStorage = () => {
  const [clicktracks, setClicktracks] = useState<Clicktrack[] | undefined>();
  const { user } = useSession();

  useEffect(() => {
    if (user) {
      // Cloud storage loading
      getUserClicktracks().then((userClicktracks) =>
        setClicktracks(userClicktracks)
      );
    } else {
      // ! local storage
    }
  }, [user]);

  const updateClicktracks = async (updatedData: Clicktrack[]) => {
    if (user) {
      const minifiedClicktracks = updatedData.map((clicktrack) =>
        Clicktrack.encode(clicktrack)
      );
      await setUserData({
        clicktracks: minifiedClicktracks,
      });
    } else {
      // ! local storage
    }
  };

  useEffect(() => {
    if (clicktracks) updateClicktracks(clicktracks);
  }, [clicktracks]);

  return { clicktracks, setClicktracks };
};
