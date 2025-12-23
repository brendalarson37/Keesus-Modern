import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get(api.events.list.path, async (req, res) => {
    const events = await storage.getEvents();
    res.json(events);
  });

  app.get(api.news.list.path, async (req, res) => {
    const news = await storage.getNews();
    res.json(news);
  });

  // Seed data on startup if empty
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingEvents = await storage.getEvents();
  if (existingEvents.length === 0) {
    const eventsToSeed = [
      {
        title: "Road Rally",
        date: "October 2025",
        photoUrl: "https://www.amazon.com/photos/shared/U7Pb5VqfR-S2x9EXJL95Ug.TLIhBUWCoHVyUthHsV-sVL",
        description: "Join us for the annual Road Rally!"
      },
      {
        title: "Keesus Concert",
        date: "August 2025",
        photoUrl: "https://www.amazon.com/photos/shared/Wg3QEvR_RQ6bE-3yRHYAKQ.-h4Zfdugs9vXQr9Y3GR7VA",
        description: "Live music on the lake."
      },
      {
        title: "Pontoon Trivia",
        date: "July 2025",
        photoUrl: "https://www.amazon.com/photos/shared/M70QebdRSbWWlCm9V2U_Qw.rkCRQbW_pP1ousdajoHToT",
        description: "Test your knowledge on the water."
      },
      {
        title: "4th of July Parade & Picnic",
        date: "July 2025",
        photoUrl: "https://www.amazon.com/photos/shared/2altiqOKTxmVPntTo01F_g.tKCBMeGwl2GilpBboiTYio",
        description: "Celebration of Independence Day."
      },
      {
        title: "LKAA Family Picnic",
        date: "June 2025",
        photoUrl: "https://www.amazon.com/photos/shared/lQUOjfOuRd6GKdpcCkxbnA.CMYveTZVJbAslASZB0MEIU",
        description: "Fun for the whole family."
      }
    ];

    for (const event of eventsToSeed) {
      await storage.createEvent(event);
    }
  }

  const existingNews = await storage.getNews();
  if (existingNews.length === 0) {
    await storage.createNews({
      title: "LKAA News",
      content: "What have our Keesan's been up to? See the email updates for the latest news and highlights from our social events. All LKAA members receive the emails. See Kenn Belter if you are not receiving them."
    });
  }
}
