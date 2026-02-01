import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import type { ScamType } from "@shared/schema";

export default function Classification() {
  const { data: scams, isLoading } = useQuery<ScamType[]>({
    queryKey: ["/api/scams"],
  });

  return (
    <div className="container mx-auto py-12 px-4 max-w-6xl">
      <h1 className="text-4xl font-bold mb-4 text-primary text-center uppercase tracking-widest">Бестиарий цифровых хищников</h1>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Изучите повадки мошенников, чтобы не стать их следующей целью.</p>

      {isLoading ? (
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map(i => <Skeleton key={i} className="h-64 rounded-xl" />)}
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {scams?.map((scam) => (
            <Card key={scam.id} className="card-hover flex flex-col h-full bg-card/50">
              <CardHeader>
                <div className="text-xs font-bold text-primary mb-2 uppercase tracking-tighter">{scam.category}</div>
                <CardTitle className="text-2xl">{scam.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <p className="text-sm italic border-l-2 border-primary pl-4 py-1">{scam.description}</p>
                <div>
                  <h4 className="text-xs font-bold uppercase mb-2">Индикаторы угрозы:</h4>
                  <ul className="text-sm space-y-1">
                    {scam.indicators.map((ind, i) => (
                      <li key={i} className="flex items-center gap-2 text-destructive">
                        <span className="w-1.5 h-1.5 bg-destructive rounded-full" /> {ind}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase mb-2">Алгоритм действий:</h4>
                  <ul className="text-sm space-y-1">
                    {scam.actions.map((act, i) => (
                      <li key={i} className="flex items-start gap-2 text-green-500">
                        <span className="font-bold">{i + 1}.</span> {act}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
