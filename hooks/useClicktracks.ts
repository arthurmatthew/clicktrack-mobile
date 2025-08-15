import { useRef } from "react";
import { Clicktrack } from "../models/Clicktrack";
import { useClicktrackStorage } from "./useClicktrackStorage";

/**
 * Built upon the `useClicktrackStorage` hook, this hook provides functions to interact with the
 * stored Clicktracks. This is seperate from actual Clicktrack individual storage functionality,
 * as inside of the app the only data passed into the Clicktrack page is the Clicktrack ID. Is
 * this redundant?!
 */
export const useClicktracks = () => {
  const { clicktracks, setClicktracks } = useClicktrackStorage();
  const importRef = useRef<HTMLInputElement | null>(null);

  const handleAdd = () => {
    setClicktracks((previousClicktracks) => {
      if (previousClicktracks === undefined) return;
      return [
        ...previousClicktracks,
        new Clicktrack({
          name: `New Metronome ${previousClicktracks.length + 1}`,
        }),
      ];
    });
  };

  const handleRemove = (id: string) => {
    setClicktracks((previousClicktracks) => {
      if (previousClicktracks === undefined) return;
      if (
        !previousClicktracks.find((metronome) => metronome.id === id)?.permanant
      )
        return previousClicktracks.filter((metronome) => metronome.id !== id);
      return previousClicktracks;
    });
  };

  const handleImport = () => {
    setClicktracks((previousClicktracks) => {
      if (
        previousClicktracks === undefined ||
        importRef.current?.value === undefined
      )
        return;
      try {
        const importedClicktrack = Clicktrack.decode(importRef.current.value);

        if (importedClicktrack === undefined)
          throw new Error("Clicktrack code returns undefined.");

        return [
          ...previousClicktracks,
          new Clicktrack({
            ...importedClicktrack,
            id: undefined,
            name: importedClicktrack.name,
          }),
        ];
      } catch (error) {
        console.error(error);
        return previousClicktracks;
      }
    });
  };

  const handleTemplate = (code: string) => {
    setClicktracks((previousClicktracks) => {
      if (previousClicktracks === undefined) return;
      try {
        const template = Clicktrack.decode(code);

        if (template === undefined)
          throw new Error("Clicktrack from code is undefined");

        return [
          ...previousClicktracks,
          new Clicktrack({
            ...template,
            id: undefined,
            name: template.name,
          }),
        ];
      } catch (error) {
        console.error(error);
        return previousClicktracks;
      }
    });
  };

  const handleNameChange = (id: string, newName: string) => {
    setClicktracks((previousClicktracks) => {
      if (previousClicktracks === undefined) return;
      const clicktracksWithoutToBeNamed = previousClicktracks.filter(
        (metronome) => metronome.id !== id
      );
      const clicktrackToBeNamed = previousClicktracks.find(
        (metronome) => metronome.id === id
      );

      if (!clicktrackToBeNamed) return previousClicktracks;

      const clicktrackToBeNamedIndex =
        previousClicktracks.indexOf(clicktrackToBeNamed);

      clicktracksWithoutToBeNamed.splice(
        clicktrackToBeNamedIndex,
        0,
        new Clicktrack({ ...clicktrackToBeNamed, name: newName })
      );

      return clicktracksWithoutToBeNamed;
    });
  };

  const handleCopy = (id: string) => {
    setClicktracks((previousClicktracks) => {
      if (previousClicktracks === undefined) return;
      const clicktrackToCopy = previousClicktracks.find(
        (clicktrack) => clicktrack.id === id
      );
      if (!clicktrackToCopy) return previousClicktracks;

      return [
        ...previousClicktracks,
        new Clicktrack({
          ...clicktrackToCopy,
          id: undefined,
        }),
      ];
    });
  };

  return {
    clicktracks,
    importRef,
    handleAdd,
    handleImport,
    handleTemplate,
    handleRemove,
    handleNameChange,
    handleCopy,
  };
};
