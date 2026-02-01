import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Scale, ShieldAlert, Landmark, Building2, Timer } from "lucide-react";
import type { LawArticle } from "@shared/schema";

export default function Law() {
  const { data: laws, isLoading } = useQuery<LawArticle[]>({
    queryKey: ["/api/law"],
  });

  const steps = [
    { icon: ShieldAlert, t: "Собирайте доказательства", d: "Делайте скриншоты диалогов, сохраняйте ID и реквизиты." },
    { icon: Landmark, t: "Блокируйте операции", d: "Свяжитесь с банком для оспаривания транзакции." },
    { icon: Building2, t: "Обратитесь в полицию", d: "Подайте заявление по месту жительства." },
    { icon: Timer, t: "Учитывайте сроки", d: "Чем быстрее вы начнете действовать, тем выше шансы." }
  ];

  return (
    <div className="container mx-auto py-12 px-4 max-w-6xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-4">
          <Scale className="w-10 h-10 text-primary" />
          Статьи УК РФ: Ваше право на защиту
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto italic">Знание законодательства — ваш первый шаг к восстановлению справедливости.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 uppercase tracking-tight">
            Ключевые статьи УК РФ
          </h2>
          {isLoading ? (
            <div className="space-y-4">
              {[1, 2, 3].map(i => <Skeleton key={i} className="h-32 rounded-lg" />)}
            </div>
          ) : (
            <div className="space-y-6">
              {laws?.map((law) => (
                <Card key={law.id} className="border-l-4 border-l-primary">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{law.article}: {law.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{law.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 uppercase tracking-tight">
            Жертва? Действуй!
          </h2>
          <div className="space-y-4">
            {steps.map((step, i) => (
              <Card key={i} className="card-hover">
                <CardContent className="flex gap-4 pt-6">
                  <div className="p-3 bg-primary/10 rounded-full h-fit text-primary">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{i + 1}. {step.t}</h3>
                    <p className="text-sm text-muted-foreground">{step.d}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
