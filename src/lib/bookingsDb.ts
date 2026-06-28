import fs from "fs/promises";
import path from "path";

export interface Booking {
  id: string;
  name: string;
  phone: string;
  email?: string;
  city: string;
  service: string;
  date: string;
  time: string;
  message: string;
  status: "pending" | "confirmed" | "completed" | "cancelled";
  createdAt: string;
}

const DB_DIR = path.join(process.cwd(), "db");
const DB_FILE = path.join(DB_DIR, "bookings.json");

// Helper to ensure db directory and file exist
async function ensureDb() {
  try {
    await fs.mkdir(DB_DIR, { recursive: true });
  } catch (err) {
    // Ignore error if directory already exists
  }

  try {
    await fs.access(DB_FILE);
  } catch (err) {
    // File doesn't exist, create it with empty array
    await fs.writeFile(DB_FILE, JSON.stringify([], null, 2), "utf8");
  }
}

export async function readBookings(): Promise<Booking[]> {
  await ensureDb();
  try {
    const data = await fs.readFile(DB_FILE, "utf8");
    return JSON.parse(data) as Booking[];
  } catch (err) {
    console.error("Error reading bookings JSON database:", err);
    return [];
  }
}

export async function writeBookings(bookings: Booking[]): Promise<boolean> {
  await ensureDb();
  try {
    await fs.writeFile(DB_FILE, JSON.stringify(bookings, null, 2), "utf8");
    return true;
  } catch (err) {
    console.error("Error writing bookings to JSON database:", err);
    return false;
  }
}

export async function addBooking(bookingData: Omit<Booking, "id" | "status" | "createdAt">): Promise<Booking> {
  const bookings = await readBookings();
  
  const newBooking: Booking = {
    ...bookingData,
    id: `bk_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    status: "pending",
    createdAt: new Date().toISOString(),
  };

  bookings.unshift(newBooking); // Add to the top of the list
  await writeBookings(bookings);
  return newBooking;
}

export async function updateBookingStatus(id: string, status: Booking["status"]): Promise<Booking | null> {
  const bookings = await readBookings();
  const index = bookings.findIndex((b) => b.id === id);

  if (index === -1) {
    return null;
  }

  bookings[index].status = status;
  await writeBookings(bookings);
  return bookings[index];
}
