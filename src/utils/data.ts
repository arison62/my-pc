import showAppImg from "../assets/Launchpad.png";
import fileImg from "../assets/Finder.png";
import AndroidStudioImg from "../assets/android-studio-icon.svg";
import FirefoxImg from "../assets/firefox-6.svg";
import PostmanImg from "../assets/postman-icon.svg";
import VScodeImg from "../assets/visual-studio-code-1.svg";
import SqliteImg from "../assets/sqlite.svg";
import homeImg from "../assets/system/home.png";
import picturesImg from "../assets/system/pictures.png";
import documentImg from "../assets/system/documents.png";
import downloadImg from "../assets/system/downloads.png";

type DockItem = {
  title: string;
  img: string;
  path: string;
};

export type AppItem = {
  title: string;
  img: string;
  path?: string;
};

export enum CFileSystemType {
  FILE,
  DIRECTORY,
}
export type CFileSystem = {
  title: string;
  img: string;
  path: string[];
  type: CFileSystemType;
  content: CFileSystem[] | null;
};

export const folders = new Map<string, CFileSystem>([
  [
    "Dossier personnel",
    {
      title: "Dossier personnel",
      img: homeImg,
      path: ["Dossier personnel"],
      type: CFileSystemType.DIRECTORY,
      content: [
        {
          title: "Images",
          img: picturesImg,
          path: ["Dossier personnel", "Images"],
          type: CFileSystemType.DIRECTORY,
          content: null,
        },
        {
          title: "Documents",
          img: documentImg,
          path: ["Dossier personnel", "Documents"],
          type: CFileSystemType.DIRECTORY,
          content: null,
        },
        {
          title: "Download",
          img: downloadImg,
          path: ["Dossier personnel", "Download"],
          type: CFileSystemType.DIRECTORY,
          content: null,
        },
      ],
    },
  ],
]);

export const appItem: AppItem[] = [
  {
    title: "Android Studio",
    img: AndroidStudioImg,
  },
  {
    title: "Firefox",
    img: FirefoxImg,
  },
  {
    title: "Postman",
    img: PostmanImg,
  },
  {
    title: "Visual Studio Code",
    img: VScodeImg,
  },
  {
    title: "SQLite",
    img: SqliteImg,
  },
  {
    title: "Fichiers",
    img: fileImg,
    path: "/file",
  },
];

export const dockItems: DockItem[] = [
  {
    title: "Show Applications",
    img: showAppImg,
    path: "application",
  },
  {
    title: "Fichiers",
    img: fileImg,
    path: "file",
  },
];
