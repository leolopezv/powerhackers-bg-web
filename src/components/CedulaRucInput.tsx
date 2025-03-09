import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  identificacion: z
    .string()
    .regex(/^\d+$/, "Solo se permiten números")
    .min(10, "Debe tener al menos 10 caracteres")
    .max(13, "No puede tener más de 13 caracteres"),
  infoAdicional: z.string().optional(),
});

export function CedulaRucInput() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const identificacionValue = watch("identificacion");

  const onSubmit = (data: any) => {
    console.log("Datos enviados:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div>
        <label>Cédula o RUC:</label>
        <input
          type="text"
          {...register("identificacion")}
          maxLength={13}
          placeholder="Ingrese su número"
          className="border p-2 rounded"
        />
        {errors.identificacion && (
          <p className="text-red-500">{errors.identificacion.message}</p>
        )}
      </div>

      {identificacionValue?.length === 13 && (
        <div>
          <label>Información adicional:</label>
          <input
            type="text"
            {...register("infoAdicional")}
            placeholder="Ingrese más datos"
            className="border p-2 rounded"
          />
        </div>
      )}

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Enviar
      </button>
    </form>
  );
}
