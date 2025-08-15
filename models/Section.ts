import { CLICKTRACK_DEFAULT_SECTION_TYPE } from "@/port/config";
import { TSectionTypes } from "@/port/types";
import { randomUUID } from "expo-crypto";

export class Section {
  public readonly id: string;
  public readonly type: TSectionTypes;
  constructor(options?: Partial<Section>) {
    this.id = options?.id ?? randomUUID();
    this.type = options?.type ?? CLICKTRACK_DEFAULT_SECTION_TYPE;
  }
}
