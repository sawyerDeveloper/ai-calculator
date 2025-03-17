import { MongoClient, ObjectId, ServerApiVersion } from 'mongodb';
const client = new MongoClient(process.env.ATLAS_URI || '', {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
const maths = [
  [1, '+', 1, '=', 2],
  [2, '+', 2, '=', 4],
  [2, '+', 2, '=', 4],
  [1, '+', 3, '=', 4],
  [2, '-', 2, '=', 0],
  [2, '+', 2, '=', 4],
];
export async function GET(request: Request) {
  const maths = [];
  await client.connect();
  const database = client.db('calculator');
  const mathsCollection = database.collection('calculations');
  const allMaths = await mathsCollection.find({});
  for await (const calculation of allMaths) {
    maths.push(calculation.math);
  }
  return Response.json(maths);
}

export async function POST(request: Request) {
  const body = await request.json();
  return Response.json(body);
}
