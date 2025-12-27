export interface IStorage {
  // Static storage interface (not used by frontend anymore)
}

export class MemStorage implements IStorage {
  // In-memory implementation if needed in future
}

export const storage = new MemStorage();
