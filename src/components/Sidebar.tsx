'use client'
import Link from "next/link";
import Collapsible from "./Collapsible";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import EditorialsLink from "./EditorialsLink";
import DialogNewsletter from "./DialogNewsletter";


const Sidebar = () => {
    return (
        <header className="bg-gray-200 dark:bg-gray-950 pb-0">
            <div className="container tablet:flex tablet:justify-center tablet:flex-col tablet:items-center tablet:w-full mobile:flex mobile:justify-between mobile:flex-row mobile:items-center mobile:px-5 mobile:w-full grid gap-4 text-center py-5 mx-auto">
                <div className="space-y-3 tablet:mb-5">
                    <h1 className="text-4xl font-bold tracking-tighter mobile:text-2xl tablet:text-3xl">Notícias do Dia</h1>
                </div>
                <NavigationMenu className="mobile:hidden">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Editorias</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <EditorialsLink />
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/noticias/todas" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Notícias
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/releases/todas" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Releases
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <DialogNewsletter />
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <Sheet>
                    <SheetTrigger asChild>
                        <button className="hidden mobile:flex">
                            <svg className="w-6 h-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetTitle className="mb-7 text-base">Notícias do Dia</SheetTitle>
                        <Collapsible />
                    </SheetContent>
                </Sheet>
            </div>

        </header>
    );
}

export default Sidebar;