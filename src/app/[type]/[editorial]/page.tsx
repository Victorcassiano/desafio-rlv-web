'use client'
import React from "react";
import Image from "next/image";
import { useParams } from 'next/navigation'
import 'moment/locale/pt-br';
import Skeleton from "@/components/Skeleton";
import { useQuery } from "@tanstack/react-query";
import { INewsProps } from "@/interfaces/INewsProps";
import CardNews from "@/components/CardNews";
import api from "@/services/api";


export default function Component() {
    const { type, editorial } = useParams()

    const { data: dataNews, isLoading, isFetching } = useQuery<INewsProps[]>({
        queryKey: ["stream-hydrate-users"],
        queryFn: () => getNews(),
        refetchOnWindowFocus: false
    })

    const filterNews = (item: INewsProps) => {
        if (editorial === 'todas') return true;
        return editorial === item.editorias
    };

    const getNews = async () => {

        const { data, status } = await api.get(`?qtd=50&introsize=80&page=${1}&tipo=${type}`)

        if (status === 200) {
            let news: INewsProps[] = data.items

            news = news.map(item => {
                return {
                    ...item,
                    imagens: 'https://agenciadenoticias.ibge.gov.br/' + JSON.parse(item.imagens).image_intro
                }
            })

            return news
        } else {
            console.error("error fetching more posts")

            return []
        }

    }

    return (

        <main className="w-full h-full">
            <div className="container tablet:w-full mobile:w-full grid grid-cols-1 gap-5 mx-auto mt-10 mb-10">
                {dataNews?.filter(filterNews).length === 0 && (
                    <div className="flex flex-col items-center justify-center self-center">
                        <Image
                            src='/assets/icon-news-empty.svg'
                            alt="icon-news-empty"
                            width={300}
                            height={300}
                        />
                        <p className="mobile:text-center">Ainda não há <span className="font-bold">
                            {type.toString().toLocaleUpperCase()} </span>
                            sobre <span className="font-bold">
                                {editorial.toString().toLocaleUpperCase()}
                            </span> em nosso site.
                        </p>
                    </div>
                )}
                <div
                    className="grid gap-5 desktop:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1"
                >
                    {(isLoading || isFetching) ? (
                        <>
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                        </>
                    ) : dataNews?.filter(filterNews).map((item) => (
                        <CardNews
                            key={item.id}
                            id={item.id}
                            titulo={item.titulo}
                            introducao={item.introducao}
                            data_publicacao={item.data_publicacao}
                            editorias={item.editorias}
                            imagens={item.imagens}
                            link={item.link}
                        />
                    ))}
                </div>
            </div>
        </main >
    )
}

