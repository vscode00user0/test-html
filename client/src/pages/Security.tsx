import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Lock, EyeOff, Activity } from "lucide-react";

export default function Security() {
  const sections = [
    {
      title: "Двухфакторная аутентификация (2FA) в Telegram",
      icon: Lock,
      content: "Используйте облачный пароль. Привяжите 2FA к почте с надежным паролем. Запишите резервные коды и храните их в безопасном месте."
    },
    {
      title: "Надежные пароли",
      icon: ShieldCheck,
      content: "Уникальный пароль для каждого сервиса. Длина от 12 символов, содержащих буквы, цифры и спецсимволы."
    },
    {
      title: "Проверка активных сессий",
      icon: Activity,
      content: "Регулярно проверяйте раздел «Активные сессии» в настройках. Немедленно завершайте незнакомые сессии."
    }
  ];

  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-primary uppercase tracking-tight">Техническая защита</h1>
      <div className="grid gap-6">
        {sections.map((section, idx) => (
          <Card key={idx} className="card-hover">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <section.icon className="w-6 h-6" />
              </div>
              <CardTitle>{section.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{section.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-8 text-primary uppercase tracking-tight">Поведенческие паттерны</h2>
      <Card className="bg-secondary/20 border-secondary">
        <CardContent className="pt-6">
          <h3 className="text-xl font-bold mb-4 text-primary">Настройка конфиденциальности</h3>
          <p className="text-muted-foreground">Минимизируйте раскрытие личной информации. Настройте, кто может видеть ваш номер телефона, время активности и фото профиля.</p>
        </CardContent>
      </Card>
    </div>
  );
}
