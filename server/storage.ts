import { db } from "./db";
import {
  events,
  news,
  type Event,
  type InsertEvent,
  type NewsItem,
  type InsertNewsItem
} from "@shared/schema";

export interface IStorage {
  getEvents(): Promise<Event[]>;
  createEvent(event: InsertEvent): Promise<Event>;
  getNews(): Promise<NewsItem[]>;
  createNews(newsItem: InsertNewsItem): Promise<NewsItem>;
}

export class DatabaseStorage implements IStorage {
  async getEvents(): Promise<Event[]> {
    return await db.select().from(events);
  }

  async createEvent(insertEvent: InsertEvent): Promise<Event> {
    const [event] = await db.insert(events).values(insertEvent).returning();
    return event;
  }

  async getNews(): Promise<NewsItem[]> {
    return await db.select().from(news);
  }

  async createNews(insertNews: InsertNewsItem): Promise<NewsItem> {
    const [newsItem] = await db.insert(news).values(insertNews).returning();
    return newsItem;
  }
}

export const storage = new DatabaseStorage();
