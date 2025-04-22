import { z } from "zod";

const noHTML = (value: string) => !/<\/?[^>]+>/.test(value);

export const FORMSCHEMA = z.object({
    username: z
        .string()
        .min(2, {
            message: "El nombre debe tener al menos 2 caracteres.",
        })
        .refine(noHTML, {
            message: "El nombre no puede contener HTML.",
        })
        .transform((value) => value.trim()),
    email: z
        .string()
        .email({
            message: "El correo electrónico no es válido.",
        })
        .transform((value) => value.trim()),
    message: z
        .string()
        .min(10, {
            message: "El mensaje debe tener al menos 10 caracteres.",
        })
        .refine(noHTML, {
            message: "El mensaje no puede contener HTML.",
        })
        .transform((value) => value.trim()),
});
