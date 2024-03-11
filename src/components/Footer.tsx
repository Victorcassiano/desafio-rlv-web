import Link from "next/link"
import Image from "next/image"
import FormNewsletter from "./FormNewsletter"

export default function Footer() {
    return (
        <footer className="w-full border-t">
            <div className="container grid gap-6 tablet:gap-10 grid-cols-2 tablet:grid-cols-1 mobile:grid-cols-1 py-12">
                <div className="flex items-center space-x-4 tablet:place-self-center">
                    <Image
                        alt="Logo"
                        className="rounded-xl"
                        height="56"
                        width="56"
                        src="/assets/icon-news.svg"

                    />
                    <div className="grid gap-1">
                        <p className="text-sm leading-none text-gray-500 dark:text-gray-400">As notícias mais confiáveis do dia</p>
                        <p className="text-sm leading-none text-gray-500 dark:text-gray-400">Sempre imparcial. Sempre informado.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 tablet:grid-cols-2 tablet:place-self-center gap-2">
                    <div className="grid gap-1 tablet:text-center">
                        <h3 className="text-lg font-semibold">Política</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Fique por dentro das últimas decisões e notícias políticas.
                        </p>
                    </div>
                    <div className="grid gap-1 tablet:text-center">
                        <h3 className="text-lg font-semibold">Esportes</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Resultados, destaques e análises esportivas.</p>
                    </div>
                    <div className="grid gap-1 tablet:text-center">
                        <h3 className="text-lg font-semibold">Entretenimento</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Fofocas de celebridades, filmes e música.</p>
                    </div>
                    <div className="grid gap-1 tablet:text-center">
                        <h3 className="text-lg font-semibold">Tecnologia</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Novidades tecnológicas, inovações e gadgets.</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2 tablet:place-self-center">
                    <label className="text-sm font-medium tracking-tighter mobile:text-center tablet:text-center" htmlFor="email">
                        Receba as últimas notícias por e-mail
                    </label>
                    <div className="flex flex-col gap-2">
                        <FormNewsletter label={false} hiddenButtonCancel={true} className="flex flex-row mobile:flex-col gap-5" classNameInput="w-[350px]" forModal={false} classNameContainerButtons="flex-[0.3]" />
                    </div>
                </div>
            </div>
            <div className="border-t border-border py-4 flex-shrink-0">
                <div className="container flex flex-row tablet:flex-col-reverse mobile:flex-col-reverse items-center justify-between tablet:justify-center mobile:justify-center tablet:gap-y-5 mobile:gap-y-5 text-sm text-gray-500 dark:text-gray-400">
                    <span className="text-center">© 2024 Notícias do Dia. Todos os direitos reservados.</span>
                    <nav className="flex gap-4 mobile:text-center mobile:text-xs whitespace-nowrap">
                        <Link className="font-medium underline " href="#">
                            Home
                        </Link>
                        <Link className="font-medium underline" href="#">
                            Contato
                        </Link>
                        <Link className="font-medium underline" href="#">
                            Termos de uso
                        </Link>
                        <Link className="font-medium  underline" href="#">
                            Política de Privacidade
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

