import { NextRequest } from 'next/server';
import { sendMail } from '../_actions';

export async function POST(request: NextRequest) {
  try {
    // ...
    const form = await request.json();

    const result = await sendMail(form);

    return Response.json(
      {
        result,
      },
      {
        status: 200,
      },
    );
    // ...
  } catch (error) {
    return Response.json(
      {
        error: error,
      },
      {
        status: 500,
      },
    );
  }
}
