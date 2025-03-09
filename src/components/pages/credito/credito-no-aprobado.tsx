import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { ContentContainer } from "../shared/content-container";
import { LucideCircleX } from "lucide-react";

export const CreditoNoAprobado = () => {
  return (
    <ContentContainer>
      <div className="flex gap-32 items-center justify-center max-h-20">
        <img
          src="/pymes.jpeg"
          className="w-1/4 object-contain md:object-cover rounded-3xl max-h-1/4"
        />
        <Card className="px-[32px] py-[64px] min-h-6/12 min-w-4/12 justify-center flex flex-col gap-16 rounded-4xl">
          <CardTitle className="font-bold text-[64px] items-centers justify-center flex">
            <LucideCircleX size={190} />
          </CardTitle>
          <CardDescription className="gap-16 flex flex-col items-center">
            <span className="font-bold text-[#160f41] text-lg">
              Lo sentimos! Actualmente no tenemos una oferta para ti
            </span>
            <div className="flex flex-col text-center">
              <span className="font-bold text-[#160f41] text-lg">
                Sigue estos consejos y obtén tu crédito
              </span>
              <span className="font-bold text-[#d2006e] text-lg">
                en el mejor banco para ti
              </span>
            </div>
            <span className="font-bold text-[#d2006e] text-xl">
              Consejo: Mejora tu aprendizaje financiero
            </span>
          </CardDescription>
        </Card>
      </div>
    </ContentContainer>
  );
};
