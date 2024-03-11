'use client'
import { useState } from "react";
import {
    Collapsible as Collaps,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { SheetClose } from "./ui/sheet";

const editorials = [
    { title: 'Todas', filter: 'todas' },
    { title: 'Estatísticas Sociais', filter: 'sociais' },
    { title: 'Estatísticas Econômicas', filter: 'economicas' },
    { title: 'Geociências', filter: 'geociencias' },
    { title: 'IBGE', filter: 'ibge' },
    { title: 'Revista Retratos', filter: 'revistaretratos' },
]

const Collapsible = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Collaps
            open={isOpen}
            onOpenChange={setIsOpen}
            className="w-full h-10 bg-slate-200 rounded-md space-y-3"
        >
            <CollapsibleTrigger asChild>
                <button className="flex w-full h-full flex-row items-center justify-between px-3">
                    <h4 className="text-sm font-semibold">
                        Editorias
                    </h4>
                    <ChevronDown className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
                </button>
            </CollapsibleTrigger>

            <CollapsibleContent className="space-y-2">
                <ul className="grid w-44 gap-1">
                    {editorials.map((item, idx) => (
                        <li key={idx} className="w-full flex justify-center items-center">
                            <SheetClose asChild>

                                <Link
                                    href={item.filter}
                                    className="w-full block select-none space-y-1 rounded-md p-3 no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-sm font-medium leading-none"
                                >
                                    {item.title}
                                </Link>
                            </SheetClose>
                        </li>
                    ))}
                </ul>
                <div className="w-full h-[1px] bg-gray-200" />
            </CollapsibleContent>
            <ul className="grid w-full gap-3">
                <li className="w-full h-10 bg-slate-200 rounded-md pl-3 flex justify-center items-center">
                    <SheetClose asChild>
                        <Link
                            href="/noticias/todas"
                            className="w-full block select-none space-y-1 rounded-md no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-sm font-medium leading-none"
                        >
                            Notícias
                        </Link>
                    </SheetClose>
                </li>
                <li className="w-full h-10 bg-slate-200 rounded-md pl-3 flex justify-center items-center">
                    <SheetClose asChild>
                        <Link
                            href="/releases/todas"
                            className="w-full block select-none space-y-1 rounded-md no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-sm font-medium leading-none"
                        >
                            Releases
                        </Link>
                    </SheetClose>
                </li>

            </ul>
        </Collaps>
    );
}

export default Collapsible;