import { MongoClient } from "mongodb";
import dns from "dns";

const uri = process.env.MONGODB_URI;
const globalForMongo = globalThis as unknown as { _mongo?: Promise<MongoClient> };

async function connect(): Promise<MongoClient> {
  if (!uri) throw new Error("MONGODB_URI is not set in .env.local");
  const client = new MongoClient(uri);
  try {
    return await client.connect();
  } catch (e) {
    // কিছু লোকাল নেটওয়ার্কের DNS (রাউটার) Atlas-এর SRV রেকর্ড resolve করতে পারে না —
    // তখন পাবলিক DNS দিয়ে আরেকবার চেষ্টা করি (Vercel-এ দরকার হয় না, তবে ক্ষতিও নেই)
    if (String((e as Error).message).includes("querySrv")) {
      dns.setServers(["8.8.8.8", "1.1.1.1"]);
      return await client.connect();
    }
    throw e;
  }
}

export function getClient(): Promise<MongoClient> {
  if (!globalForMongo._mongo) globalForMongo._mongo = connect();
  // কানেকশন একবার ফেল করলে পরের রিকোয়েস্টে আবার চেষ্টা করা যায়
  globalForMongo._mongo.catch(() => {
    delete globalForMongo._mongo;
  });
  return globalForMongo._mongo;
}
