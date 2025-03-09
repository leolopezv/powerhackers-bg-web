import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { ContentContainer } from "../shared/content-container";
import { Button } from "@/components/ui/button";
import { LucideCircleCheck } from "lucide-react";

export const CreditoAprobado = () => {
  return (
    <ContentContainer>
      <div className="flex gap-32 items-center justify-center max-h-20">
        <img
          src="/pymes.jpeg"
           className="w-1/4 object-contain md:object-cover rounded-3xl max-h-1/4"
        />
        <Card className="px-[32px] py-[64px] min-h-4/12 min-w-4/12 justify-center flex flex-col gap-16 rounded-4xl">
          <CardTitle className="font-bold text-[64px] items-centers justify-center flex">
            <LucideCircleCheck size={190} />
          </CardTitle>
          <CardDescription className="gap-16 flex flex-col items-center">
            <span className="font-bold text-[#160f41] text-lg">
              Estás cerca de ser parte del{" "}
              <span className="text-[#d2006e]">mejor banco para ti</span>
            </span>
            <span className="font-bold text-[#160f41] text-lg">
              Acepta tu crédito y crece sin límites
            </span>
            <span className="font-bold text-[#d2006e] text-2xl">
              Monto: $10000.00
            </span>
          </CardDescription>
          <CardFooter className="px-0 flex justify-center">
            <Button className="w-1/2 font-bold">Solicitar mi crédito</Button>
          </CardFooter>
        </Card>
      </div>
    </ContentContainer>
  );
};
