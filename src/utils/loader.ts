import { folders } from "./data";

export const contentLoader = (fileId: string) => {
  const fileSystem = folders.get(fileId);

  return { fileSystem };
};
