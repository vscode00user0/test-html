import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, AlertTriangle, ArrowRight, ShieldAlert } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative py-20 px-4 hero-gradient overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                SCAM.Тень: <span className="text-primary">Вы в опасной зоне</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Telegram — это динамичный, но иногда и опасный лес ловушек. Наша цель — вскрыть механизмы обмана, вооружить вас знаниями и помочь избежать цифровых угроз.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/security">
                  <Button size="lg" className="rounded-full gap-2">
                    <Shield className="w-5 h-5" /> Не будьте статистикой
                  </Button>
                </Link>
                <Link href="/classification">
                  <Button variant="outline" size="lg" className="rounded-full gap-2">
                    Узнайте врага <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-8 mt-12">
                <div>
                  <div className="text-3xl font-bold text-primary">20+</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Ежедневных схем</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">350К₽</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Средний ущерб</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">80%</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Необращений</div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl border bg-card/50 backdrop-blur flex items-center justify-center p-8 overflow-hidden">
               <ShieldAlert className="w-64 h-64 text-primary/20 absolute animate-pulse" />
               <div className="z-10 text-center">
                 <AlertTriangle className="w-16 h-16 text-primary mx-auto mb-4" />
                 <h2 className="text-2xl font-bold">Система защиты активна</h2>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-12">Анатомия атаки: 5 шагов</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { n: 1, t: "Первый контакт", d: "Неожиданное сообщение от \"друга\" или \"банка\"." },
              { n: 2, t: "Манипуляция", d: "Использование срочности, страха или жадности." },
              { n: 3, t: "Вывод средств", d: "Получение доступа к данным и перевод денег." },
              { n: 4, t: "Исчезновение", d: "Блокировка жертвы и удаление аккаунтов." },
              { n: 5, t: "Последствия", d: "Осознание потери и уроки на будущее." }
            ].map((step) => (
              <Card key={step.n} className="card-hover text-left">
                <CardContent className="pt-6">
                  <div className="text-4xl font-black text-primary/10 mb-4">{step.n}.</div>
                  <h3 className="font-bold mb-2">{step.t}</h3>
                  <p className="text-sm text-muted-foreground">{step.d}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-primary/10 border-primary/20 overflow-hidden">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-bold mb-4">Знание закона — оружие</h2>
              <p className="text-muted-foreground mb-8">Изучите статьи УК РФ и узнайте, как защитить свои права.</p>
              <Link href="/law">
                <Button size="lg" variant="default" className="rounded-full">Перейти к законам</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
