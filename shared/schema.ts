import { pgTable, text, serial, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const events = pgTable("events", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  date: text("date").notNull(), // Using text for flexible display like "October 2025"
  photoUrl: text("photo_url"),
  description: text("description"),
});

export const insertEventSchema = createInsertSchema(events).omit({ id: true });

export type Event = typeof events.$inferSelect;
export type InsertEvent = z.infer<typeof insertEventSchema>;

export const news = pgTable("news", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertNewsSchema = createInsertSchema(news).omit({ id: true, createdAt: true });

export type NewsItem = typeof news.$inferSelect;
export type InsertNewsItem = z.infer<typeof insertNewsSchema>;
