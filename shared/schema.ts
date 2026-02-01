import { pgTable, text, serial, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const scamTypes = pgTable("scam_types", {
  id: serial("id").primaryKey(),
  category: text("category").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  indicators: text("indicators").array().notNull(),
  actions: text("actions").array().notNull(),
});

export const insertScamTypeSchema = createInsertSchema(scamTypes).omit({ id: true });
export type InsertScamType = z.infer<typeof insertScamTypeSchema>;
export type ScamType = typeof scamTypes.$inferSelect;

export const lawArticles = pgTable("law_articles", {
  id: serial("id").primaryKey(),
  article: text("article").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
});

export const insertLawArticleSchema = createInsertSchema(lawArticles).omit({ id: true });
export type InsertLawArticle = z.infer<typeof insertLawArticleSchema>;
export type LawArticle = typeof lawArticles.$inferSelect;
