import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import InboxHeader from '@/components/dashboard/inbox-header';
import EmailList from '@/components/dashboard/email-list';
import InboxFooter from '@/components/dashboard/inbox-footer';
import AssistantPanel from '@/components/dashboard/assistant-panel';
import { redirect } from 'next/navigation';

export default async function Dashboard() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect('/login');
  }

  return (
    <div className="grid h-screen grid-cols-[1fr_340px]">
      <div className="flex flex-col">
        <InboxHeader />

        <EmailList />

        <InboxFooter />
      </div>

      <AssistantPanel />
    </div>
  );
}
