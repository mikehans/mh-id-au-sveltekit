/// <reference types="@sveltejs/kit" />
interface ImportMetaEnv {
    VITE_API_URL: string,
    VITE_API_USERNAME: string,
    VITE_API_PASSWORD: string
}

interface MenuItem {
    id: number,
    label: string,
    slug: string
}

interface Menu {
    id: number,
    menu: {
        items: Array<MenuItem>,
        menuName: string,
        id: number
    }
}

interface PageData {
    SEO: ?Array<Record<string, string>>,
    created_at: string,
    id: number,
    menus: ?Array<Menu>,
    pageContent: {
        content: string,
        title: string
    },
    published_at: string,
    updated_at: string
}

type SvelteFetch = (url: string, options: Record<string, unknown>) => Promise<any>;