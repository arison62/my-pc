import { createBrowserRouter} from "react-router-dom";
import PageRootLayoutPage from "./PageRootLayout";
import FileView from "./File";
import Application from "./Application";
import Desktop from "./Desktop";


const router = createBrowserRouter([
    {
        path: "/",
        element: <PageRootLayoutPage />,
        children:[
            {
                element : <Desktop />,
                index: true
            },
            {
                path : 'file',
                element : <FileView />
            },
            {
                path : 'application',
                element : <Application />
            }
        ]
    }
])

export default router