import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get("/api/scams", async (_req, res) => {
    const scams = await storage.getScamTypes();
    res.json(scams);
  });

  app.get("/api/law", async (_req, res) => {
    const law = await storage.getLawArticles();
    res.json(law);
  });

  // Seed initial data
  const scams = await storage.getScamTypes();
  if (scams.length === 0) {
    await storage.createScamType({
      category: "ФИНАНСОВЫЕ ХИЩНИКИ",
      title: "ХИТЫ",
      description: "Цель: Привлечение жертв инвестиционными схемами.",
      indicators: ["Гарантированный доход", "Срочность", "Неизвестная платформа"],
      actions: ["Не инвестируйте в сомнительные проекты", "Проверяйте лицензию ЦБ"],
    });
    
    await storage.createLawArticle({
      article: "Статья 159 УК РФ",
      title: "Мошенничество",
      description: "Хищение чужого имущества или приобретение права на него путем обмана или злоупотребления доверием.",
    });
  }

  return httpServer;
}
