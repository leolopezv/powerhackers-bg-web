import { z } from "zod";

export const CreditoFormSchema = z.object({
  identificacion: z
    .string()
    .regex(/^\d+$/, "Solo se permiten números")
    .min(10, "Debe tener al menos 10 caracteres")
    .max(13, "No puede tener más de 13 caracteres"),
  infoAdicional: z.string().optional(),
});

export type CreditoForm = z.infer<typeof CreditoFormSchema>;
