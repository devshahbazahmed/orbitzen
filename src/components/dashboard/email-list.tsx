'use client';

import EmailRow from './email-row';

const emails = [
  {
    sender: 'Sarah Jenkins',
    subject: 'Q4 Growth',
    preview: 'Attached are the quarterly metrics...',
    time: '10:42 AM',
    priority: true,
  },
  {
    sender: 'Product Hunt',
    subject: 'Top products',
    preview: 'See what’s trending',
    time: '9:15 AM',
  },
  {
    sender: 'Alex Rivera',
    subject: 'Urgent API Error',
    preview: 'Seeing a 15% increase...',
    time: 'Yesterday',
    priority: true,
  },
];

export default function EmailList() {
  return (
    <div>
      {emails.map((email) => (
        <EmailRow key={email.sender} {...email} />
      ))}
    </div>
  );
}
