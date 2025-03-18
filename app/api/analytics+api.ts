import { MongoClient, ServerApiVersion } from 'mongodb';
const client = new MongoClient(process.env.ATLAS_URI || '', {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
const db = 'calculator';
const collection = 'calculations';

export async function GET(request: Request) {
  const maths = [];
  await client.connect();
  const database = client.db(db);
  const mathsCollection = database.collection(collection);
  const allMaths = await mathsCollection.find({});
  for await (const calculation of allMaths) {
    maths.push(calculation.data);
  }
  client.close();
  return Response.json(maths);
}

export async function POST(request: Request) {
  const body = await request.json();
  const maths = [];
  await client.connect();
  const database = client.db(db);
  const mathsCollection = database.collection(collection);
  await mathsCollection.insertOne(body);
  const allMaths = await mathsCollection.find({});
  for await (const calculation of allMaths) {
    maths.push(calculation.data);
  }
  client.close();
  return Response.json(maths);
}
