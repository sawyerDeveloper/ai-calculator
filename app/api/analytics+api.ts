const maths = [
    [1, '+', 1, '=', 2],
    [2, '+', 2, '=', 4],
    [2, '+', 2, '=', 4],
    [1, '+', 3, '=', 4],
    [2, '-', 2, '=', 0],
    [2, '+', 2, '=', 4],
  ]
export function GET(request: Request) {
  return Response.json({
    maths
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  return Response.json(body);
}
