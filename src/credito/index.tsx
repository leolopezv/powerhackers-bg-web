import { ContentContainer } from "@/components/pages/shared/content-container";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Navbar } from "@/components/ui/navbar";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";
import { CreditoAprobado } from "@/components/pages/credito/credito-aprobado";
import { CreditoNoAprobado } from "@/components/pages/credito/credito-no-aprobado";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CreditoForm,
  CreditoFormSchema,
} from "@/lib/validations/schemas/credito";

export default function CreditPage() {

  const cedulaAprobada = "0924151152001";
  // const cedulaNoAprobada = "0909059776";

  const [creditoAprobado, setCreditoAprobado] = useState(false);

  const [aceptaProteccionDatos, setAcceptProteccionDatos] =
    useState<boolean>(false);

  const [continuar, setContinuar] = useState(false);

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<CreditoForm>({
    resolver: zodResolver(CreditoFormSchema),
    mode: "onBlur",
  });

  const identificacionValue = watch("identificacion") || "";

  const sendData = (data: CreditoForm) => {
    setContinuar(true);
    if(identificacionValue === cedulaAprobada){
      setCreditoAprobado(true);
    }else{
      setCreditoAprobado(false);
    }
  };




  return (
    <>
      <Navbar />
      <ContentContainer className={continuar ? "hidden" : ""}>
        <div className="flex gap-32 items-center justify-center  lg:max-h-20">
          <img
            src="/pymes.jpeg"
            className="w-1/4 object-contain md:object-cover rounded-3xl max-h-1/4"
          />
          <Card className="px-[32px] py-[72px] min-h-4/12 min-w-4/12 justify-center flex flex-col gap-16 rounded-4xl">
            <CardTitle className="flex flex-col font-bold text-[64px] text-center">
              <span>Analizador de</span> <span>créditos</span>
            </CardTitle>
            <CardDescription>
              <form
                id="initial-form"
                className="gap-4 max-h-1/4 flex flex-col"
                onSubmit={handleSubmit(sendData)}
              >
                <h2 className="text-center font-bold text-2xl text-black dark:text-white">
                  Conoce tu perfil de crédito al instante
                </h2>
                <div className="flex flex-col gap-8">
                  <Input
                    {...register("identificacion")}
                    leadingTitle="Cédula de identidad o ruc"
                    placeholder="Ej: 0924151152001"
                    maxLength={13}
                    helperText={
                      errors.identificacion && errors.identificacion?.message
                    }
                  />

                  <Input
                    {...register("infoAdicional")}
                    leadingTitle="Url del sitio web del negocio"
                    placeholder="Ej: www.ejemplo.com.ec"
                    className={`transition-opacity duration-500 ${
                      identificacionValue?.length === 13
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                    }`}
                    helperText={
                      errors.infoAdicional && errors.infoAdicional?.message
                    }
                  />
                </div>

                <Card className="bg-[#f9f9f9]">
                  <CardDescription>
                    <div className="flex gap-2 items-center px-4">
                      <Checkbox
                        id="protectionLaw"
                        checked={aceptaProteccionDatos}
                        onCheckedChange={() =>
                          setAcceptProteccionDatos(!aceptaProteccionDatos)
                        }
                      />
                      <label htmlFor="protectionLaw">
                        He leído y acepto la{" "}
                        <a className="text-blue-500">
                          ley de protección de datos
                        </a>
                      </label>
                    </div>
                  </CardDescription>
                </Card>
              </form>
            </CardDescription>
            <CardFooter className="px-0 flex justify-center">
              <Button
                form="initial-form"
                className="font-bold"
                variant={
                  !isValid || !aceptaProteccionDatos ? "disabled" : "default"
                }
                // onClick={() => setContinuar(true)}
                type="submit"
                disabled={!isValid || !aceptaProteccionDatos}
              >
                Conecta con facebook para continuar
              </Button>
            </CardFooter>
          </Card>
        </div>
      </ContentContainer>
      <section className={continuar ? "" : "hidden"}>
        <div className={!creditoAprobado ? "hidden" : ""}>
          <CreditoAprobado />
        </div>
        <div className={!creditoAprobado ? "" : "hidden"}>
          <CreditoNoAprobado />
        </div>
      </section>
    </>
  );
}
