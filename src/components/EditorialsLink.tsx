import Link from 'next/link';

const editorials = [
    { title: 'Todas', filter: 'todas' },
    { title: 'Estatísticas Sociais', filter: 'sociais' },
    { title: 'Estatísticas Econômicas', filter: 'economicas' },
    { title: 'Geociências', filter: 'geociencias' },
    { title: 'IBGE', filter: 'ibge' },
    { title: 'Revista Retratos', filter: 'revistaretratos' },
]

const EditorialsLink = () => {
    return (
        <ul className="grid w-44 gap-1 p-5">
            {editorials.map((item, idx) => (
                <li key={idx} className="w-full flex justify-center items-center">
                    <Link
                        href={item.filter}
                        className="w-full block select-none space-y-1 rounded-md p-3 no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-sm font-medium leading-none"
                    >
                        {item.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default EditorialsLink;