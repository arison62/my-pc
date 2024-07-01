import { createBrowserRouter } from "react-router-dom";
import PageRootLayoutPage from "./PageRootLayout";
import FileView from "./File";
import Application from "./Application";
import Desktop from "./Desktop";
import FileContent from "../components/FileContent";
import { contentLoader } from "../utils/loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageRootLayoutPage />,
    children: [
      {
        element: <Desktop />,
        index: true,
      },
      {
        element: <FileView />,

        children: [
            {
                path : 'file',
                loader: () => contentLoader("Dossier personnel"),
                element : <FileContent />
            },

          {
            path: "file/:fileId",
            loader : ({params}) => contentLoader(params.fileId as string),
            element: <FileContent />,
          },

        ],
      },
      {
        path: "application",
        element: <Application />,
      },
    ],
  },
]);

export default router;
