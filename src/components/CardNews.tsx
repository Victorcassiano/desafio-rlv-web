import { CardTitle, CardDescription, CardFooter, Card } from "@/components/ui/card"
import Image from "next/image";
import Link from "next/link"
import moment from "moment";
import { ChevronRightIcon } from "lucide-react";
import { INewsProps } from "@/interfaces/INewsProps";



const CardNews: React.FC<INewsProps> = ({ id, titulo, introducao, editorias, data_publicacao, link, imagens }) => {
    return (
        <Card key={id} className="border mx-auto relative h-full flex flex-col">
            <div className="grid gap-4 grid-cols-1 flex-grow p-5">
                <div className="flex items-center justify-start">
                    <Image
                        alt="image"
                        className="aspect-[2/1] rounded-lg object-cover object-center"
                        height="200"
                        width="400"
                        src={imagens}
                    />
                </div>
                <div className="space-y-2">
                    <CardTitle className="text-base font-bold tracking-tighter">
                        {titulo}
                    </CardTitle>
                    <CardDescription>
                        {introducao}
                    </CardDescription>
                    <div className="flex items-center gap-2">
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                            Editorias: {editorias.toLocaleUpperCase()}
                            <br />
                            Publicação: {moment(data_publicacao).format('DD [de] MMMM, YYYY')}
                        </div>
                    </div>
                </div>
            </div>
            <CardFooter className="p-5">
                <Link
                    className="inline-flex items-center underline-offset-2 underline-thickness-2 text-sm font-medium underline"
                    href={link || '#'}
                    target="_blank"
                >
                    Leia mais
                    <ChevronRightIcon className="w-4 h-4 ml-2" />
                </Link>
            </CardFooter>
        </Card>
    );
}

export default CardNews;