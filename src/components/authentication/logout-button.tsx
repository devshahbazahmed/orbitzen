'use client';

import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

export function LogoutButton() {
  const router = useRouter();

  async function logout() {
    await authClient.signOut();

    router.replace('/login');
  }

  return (
    <Button
      onClick={logout}
      className="bg-pink-800 text-white hover:bg-pink-700"
    >
      Logout
    </Button>
  );
}
