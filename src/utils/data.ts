import showAppImg from '../assets/Launchpad.png'
import fileImg from '../assets/Finder.png'
import AndroidStudioImg from '../assets/android-studio-icon.svg'
import FirefoxImg from '../assets/firefox-6.svg'
import PostmanImg from '../assets/postman-icon.svg'
import VScodeImg from '../assets/visual-studio-code-1.svg'
import SqliteImg from '../assets/sqlite.svg'

type DockItem = {
    title : string
    img : string
    path : string
}

export type AppItem = {
    title : string
    img : string
    path?: string
}

export const appItem : AppItem[] = [
    {
        title : 'Android Studio',
        img : AndroidStudioImg
    },
    {
        title : 'Firefox',
        img : FirefoxImg
    },
    {
        title: 'Postman',
        img : PostmanImg
    },
    {
        title : 'Visual Studio Code',
        img : VScodeImg
    },
    {
        title :'SQLite',
        img : SqliteImg
    },
    {
        title : 'Fichiers',
        img : fileImg,
        path: '/file'
    }
]

export const dockItems : DockItem[] = [
    {
        title : "Show Applications",
        img : showAppImg,
        path : "application",
    },
    {
        title : "Fichiers",
        img : fileImg,
        path : "file",
    },
]



