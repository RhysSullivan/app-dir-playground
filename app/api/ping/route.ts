export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("slug");
  return Response.json({ time: new Date().toISOString(), slug: id });
}
