import * as React from 'react';
import { auth } from '../../../lib/auth';
import { headers } from 'next/headers';

export default async function Dashboard() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  console.log(session?.user.name);
  console.log(session?.user.email);
  return <div>Welcome {session?.user.name}</div>;
}
