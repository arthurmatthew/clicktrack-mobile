import { constructSection } from "@/lib/constructSection";
import {
  CLICKTRACK_DEFAULT_NAME,
  CLICKTRACK_DEFAULT_PERMANANT,
} from "@/port/config";
import { randomUUID } from "expo-crypto";
import { ClicktrackData } from "./ClicktrackData";

export class Clicktrack {
  public name: string; // Display name
  public readonly id: string; // Unique UUID
  public permanant: boolean; // Deletable
  public opened: boolean; // Opened, in its 'show more' state in the clicktrack list
  public data: ClicktrackData; // Clicktrack data, like settings and sections

  constructor(options?: Partial<Clicktrack>) {
    this.name = options?.name ?? CLICKTRACK_DEFAULT_NAME;
    this.id = options?.id ?? randomUUID();
    this.permanant = options?.permanant ?? CLICKTRACK_DEFAULT_PERMANANT;
    this.data = options?.data ?? new ClicktrackData({});
    this.opened = options?.opened ?? false;
  }

  public static parseInternals(clicktrack: Clicktrack) {
    return new Clicktrack({
      ...clicktrack,
      data: new ClicktrackData({
        ...clicktrack.data,
        sections: clicktrack.data.sections
          .map((section) => constructSection(section))
          .filter((section) => section !== undefined),
      }),
    });
  }

  public static encode(clicktrack: Clicktrack) {
    return btoa(JSON.stringify(clicktrack));
  }
  public static decode(string: string) {
    return JSON.parse(atob(string)) as Clicktrack;
  }
}
