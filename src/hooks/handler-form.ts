import { FORMSCHEMA } from "@/utils/form-schame";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";


const useHandlerFrom = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const form = useForm<z.infer<typeof FORMSCHEMA>>({
        resolver: zodResolver(FORMSCHEMA),
        defaultValues: {
            username: "",
            email: "",
            message: "",
        },
    });

    async function onSubmit(values: z.infer<typeof FORMSCHEMA>) {
        setIsLoading(true);
        setStatus("idle");

        try {
            const response = await emailjs.send(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                {
                    name: values.username,
                    message: values.message,
                    email: values.email,
                    title: "Nuevo mensaje de contacto",
                },
                import.meta.env.VITE_KEY_EMAIL
            );

            if (response.status !== 200) {
                setStatus("error");
                setIsLoading(false);
                return toast.error("No se pudo enviar el mensaje", {
                    description: "Por favor, intenta de nuevo más tarde.",
                    duration: 4000,
                });
            }

            setStatus("success");
            setIsLoading(false);
            toast.success("Mensaje enviado correctamente", {
                description: "¡Gracias por tu mensaje! Te responderé pronto.",
                duration: 4000,
            });
            form.reset();

            return setTimeout(() => setStatus("idle"), 2000);
        } catch (error) {
            console.error("Error al enviar el formulario:", error);
            setStatus("error");
            toast.error("Hubo un error inesperado", {
                description: "Intenta nuevamente más tarde.",
                duration: 4000,
            });

            return setTimeout(() => setStatus("idle"), 2000);
        } finally {
            setIsLoading(false);
        }
    }
    return {
        form,
        onSubmit,
        isLoading,
        status,
    }
}

export default useHandlerFrom;