'use client'
import { useEffect, useState } from "react";
import { NavigationMenuLink } from "./ui/navigation-menu";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import FormNewsletter from "./FormNewsletter";


const DialogNewsletter: React.FC = () => {
    const [open, setOpen] = useState(false)
    const [success, setSuccess] = useState(false)
    const [counter, setCounter] = useState(5);

    const toggleModal = () => {
        setSuccess(false)
        setOpen(prev => !prev)
    }

    useEffect(() => {
        if (success) {
            const timer = setInterval(() => {
                if (counter > 0) {
                    setCounter((prevCounter) => prevCounter - 1);
                } else {
                    clearInterval(timer);
                    toggleModal(); // Close modal after countdown
                    setCounter(5)
                }
            }, 1000);

            return () => clearInterval(timer); // Cleanup function to clear timer
        }
    }, [success, counter]);

    return (
        <Dialog open={open}
            onOpenChange={(dialog) => {
                if (!dialog)
                    toggleModal()
            }}
        >
            <DialogTrigger asChild>
                <button onClick={toggleModal}>
                    <NavigationMenuLink className='group inline-flex h-10 w-max items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-600 text-white'>
                        Assinar newsletter
                    </NavigationMenuLink>
                </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] rounded-md">
                <DialogHeader className="flex justify-start items-start">
                    <DialogTitle>Newsletter</DialogTitle>
                    <DialogDescription>
                        Receba as últimas notícias por e-mail
                    </DialogDescription>
                </DialogHeader>
                <FormNewsletter counter={counter} onSuccess={setSuccess} toggleModal={setOpen} className="flex flex-col gap-5" classNameContainerButtons="flex-row-reverse" classNameInput="flex-1" />
            </DialogContent>
        </Dialog>
    );
}

export default DialogNewsletter;
