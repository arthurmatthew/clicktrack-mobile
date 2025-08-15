import { Metronome } from "@/models/Metronome";
import { Repeat } from "@/models/Repeat";
import { Transition } from "@/models/Transition";
import { FirebaseAuthTypes } from "@react-native-firebase/auth";

export type TCustomerPortalResult = {
  url: string;
};
export type TUserDocument = {
  clicktracks: string[];
};
export type TNotification =
  | {
      content: string;
      type: TNotificationTypes;
    }
  | undefined;
export type TNotificationTypes = "warning" | "error" | "info" | undefined;
export type TNotify = (content: string, type: TNotificationTypes) => void;
export type TNotificationContext = {
  notif: TNotification;
  notify: TNotify;
  clearNotif: () => void;
};
export type TDarkModeContext = {
  dark: boolean;
  toggleDark: () => void;
};
export type TUserContext = {
  user: FirebaseAuthTypes.User | null;
  premium: boolean;
  initialized: boolean;
};
export type ClicktrackRouteParams = {
  id: string;
};
export type TTemplate = {
  code: string;
  name: string;
  description: string;
};
export type TTimeSignature = [beats: number, value: number];
export type TNote = [note: string, octave: number];
export type TSaveableData =
  | string
  | number
  | object
  | boolean
  | undefined
  | null;

export const SectionTypeMap = {
  metronome: Metronome,
  repeat: Repeat,
  transition: Transition,
};

export type TSection = Metronome | Repeat | Transition;
export type TSectionTypes = "metronome" | "repeat" | "transition";

export type TCurveTypes = "linear" | "ease-in" | "ease-out" | "custom";

export type TAccentLevels = 0 | 1 | 2 | 3;
export type TAccentMap = TAccentLevels[];

export type TWaves = Exclude<OscillatorType, "custom">;
