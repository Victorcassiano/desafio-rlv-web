'use client'
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { DialogFooter } from "./ui/dialog"
import { useEffect, useState } from "react"
import { useToast } from "./ui/use-toast"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const createUserFormSchema = z.object({
    email: z.string().nonempty('Campo e-mail está vazio!').email('E-mail inválido!'),
})

type createUserFormData = z.infer<typeof createUserFormSchema>


interface FormNewsletterProps {
    counter?: number;
    label?: boolean;
    classNameContainerButtons: string;
    classNameInput: string;
    hiddenButtonCancel?: boolean;
    forModal?: boolean;
    className: string;
    toggleModal?: (value: boolean) => void;
    onSuccess?: (value: boolean) => void;
}


export default function FormNewsletter({ counter = 0, label = true, className, classNameContainerButtons, classNameInput, hiddenButtonCancel = false, forModal = true, toggleModal, onSuccess }: FormNewsletterProps) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<createUserFormData>({ resolver: zodResolver(createUserFormSchema) })
    const { toast } = useToast()

    const [success, setSuccess] = useState(false)


    const onSubmit = (data: any) => {
        console.log(data)

        if (forModal) {
            onSuccess!(true)
        } else {
            toast({
                description: "Inscrição feita com sucesso, agora você vai receber as ultimas notícias diretamente do seu e-mail.",
                variant: 'success',
            })
        }
        setSuccess(true)
    }

    useEffect(() => {
        reset()
    }, [reset])

    return (
        <form
            data-forModal={forModal}
            onSubmit={handleSubmit(onSubmit)}
            className={className}
        >
            <div className="flex flex-row justify-start items-center gap-5">
                <Label data-isLabel={label} className="text-right data-[isLabel=false]:hidden">
                    E-mail
                </Label>
                <Input
                    placeholder="jhon@example.com"
                    className={classNameInput}
                    {...register("email", { required: true })}
                />
            </div>
            {errors.email && <span className="text-red-400 text-sm">{errors.email.message}</span>}
            {(success && forModal) && <span className="text-green-600 text-sm">Inscrição feita com sucesso, você irá retornar a pagina principal em {counter} segundos.</span>}

            <DialogFooter data-hiddenButtonCancel={hiddenButtonCancel} className={`flex ${classNameContainerButtons} gap-5`}>
                <button
                    type="submit"
                    className={`inline-flex h-10 items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-600 text-white mobile:text-xs text-nowrap`}
                >
                    Inscrever-se
                </button>
                <button
                    data-hiddenButtonCancel={hiddenButtonCancel}
                    type="button"
                    onClick={() => toggleModal!(false)}
                    className="data-[hiddenButtonCancel=true]:hidden"
                >
                    Cancelar
                </button>
            </DialogFooter>

        </form>
    )
}

