import { Collection, Document, MongoClient, ServerApiVersion } from 'mongodb';
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
  const maths : string[] = []
  const mathsCollection = await getCollection();
  const allMaths = await mathsCollection.find({});
  for await (const calculation of allMaths) {
    maths.push(calculation.data);
  }
  return sendData(maths)
}

export async function POST(request: Request) {
  const maths : string[] = []
  const body = await request.json();
  const mathsCollection = await getCollection();
  await mathsCollection.insertOne(body);
  const allMaths = await mathsCollection.find({});
  for await (const calculation of allMaths) {
    maths.push(calculation.data);
  }
  return sendData(maths)
}

async function getCollection() {
  await client.connect();
  const database = client.db(db);
  return database.collection(collection);
}

function sendData(maths : string[]) {
  maths.reverse();
  client.close();
  return Response.json(maths);
}