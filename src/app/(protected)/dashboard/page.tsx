import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import InboxHeader from '@/components/dashboard/inbox-header';
import EmailList from '@/components/dashboard/email-list';
import InboxFooter from '@/components/dashboard/inbox-footer';
import AssistantPanel from '@/components/dashboard/assistant-panel';

export default async function Dashboard() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  console.log(session?.user.name);
  console.log(session?.user.email);
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
