import { scamTypes, lawArticles, type ScamType, type InsertScamType, type LawArticle, type InsertLawArticle } from "@shared/schema";

export interface IStorage {
  getScamTypes(): Promise<ScamType[]>;
  getLawArticles(): Promise<LawArticle[]>;
  createScamType(scam: InsertScamType): Promise<ScamType>;
  createLawArticle(law: InsertLawArticle): Promise<LawArticle>;
}

export class MemStorage implements IStorage {
  private scamTypes: Map<number, ScamType>;
  private lawArticles: Map<number, LawArticle>;
  private scamId: number;
  private lawId: number;

  constructor() {
    this.scamTypes = new Map();
    this.lawArticles = new Map();
    this.scamId = 1;
    this.lawId = 1;
  }

  async getScamTypes(): Promise<ScamType[]> {
    return Array.from(this.scamTypes.values());
  }

  async getLawArticles(): Promise<LawArticle[]> {
    return Array.from(this.lawArticles.values());
  }

  async createScamType(scam: InsertScamType): Promise<ScamType> {
    const id = this.scamId++;
    const newScam = { ...scam, id };
    this.scamTypes.set(id, newScam);
    return newScam;
  }

  async createLawArticle(law: InsertLawArticle): Promise<LawArticle> {
    const id = this.lawId++;
    const newLaw = { ...law, id };
    this.lawArticles.set(id, newLaw);
    return newLaw;
  }
}

export const storage = new MemStorage();
