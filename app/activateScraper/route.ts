import { NextApiRequest } from 'next';
import { NextRequest } from 'next/server';

type Body = {
  search: string;
};

export async function POST(req: NextApiRequest) {
  const search = req.body.search;
}
