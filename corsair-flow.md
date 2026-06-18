# Next.js 16 Better Auth + Corsair Gmail/Calendar Flow

This is the hackathon-simple version:

```txt
Google Login via Better Auth
-> /dashboard
-> user connects Gmail/Calendar from dashboard
-> data appears when each tool is connected
```

Important tenant rule:

```ts
const tenantId = session.user.id;
const tenantCorsair = corsair.withTenant(tenantId);
```

Do not use `"shahbaz"` outside local testing.

---

## 1. Environment Variables

`.env.local`

```bash
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_APP_URL=http://localhost:3000

BETTER_AUTH_SECRET=...
BETTER_AUTH_URL=http://localhost:3000

CORSair_API_KEY=...
```

If your Corsair package expects a different env name, keep the code shape below and swap only that client initialization line.

---

## 2. Corsair Client

`src/lib/corsair.ts`

```ts
// Replace this import with the exact Corsair SDK import used in your project.
// Example shape only:
// import { Corsair } from "@corsair/sdk";

type CorsairTenantClient = {
  gmail?: {
    db?: {
      threads?: {
        list: (input?: Record<string, unknown>) => Promise<unknown>;
      };
    };
  };
  calendar?: {
    db?: {
      events?: {
        list: (input?: Record<string, unknown>) => Promise<unknown>;
      };
    };
  };
};

type CorsairClient = {
  withTenant: (tenantId: string) => CorsairTenantClient;
};

// Replace this object with your real Corsair SDK instance.
export const corsair = {
  withTenant(_tenantId: string) {
    throw new Error("Wire this to your real Corsair SDK client.");
  },
} satisfies CorsairClient;
```

Real project shape will usually be something like:

```ts
import { Corsair } from "@corsair/sdk";

export const corsair = new Corsair({
  apiKey: process.env.CORSAIR_API_KEY!,
});
```

---

## 3. Better Auth Server Session Helper

`src/lib/session.ts`

```ts
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

export async function getSession() {
  return auth.api.getSession({
    headers: await headers(),
  });
}

export async function requireUser() {
  const session = await getSession();

  if (!session?.user) {
    redirect("/auth");
  }

  return session.user;
}

export async function getTenantId() {
  const user = await requireUser();
  return user.id;
}
```

This assumes your Better Auth instance is exported from `src/lib/auth.ts` as `auth`.

---

## 4. Integration Types

`src/lib/integrations/types.ts`

```ts
export type IntegrationKind = "gmail" | "calendar";

export type IntegrationStatus = {
  gmail: boolean;
  calendar: boolean;
};
```

---

## 5. Corsair Integration Functions

`src/lib/integrations/corsair-tools.ts`

```ts
import { corsair } from "@/lib/corsair";
import type {
  IntegrationKind,
  IntegrationStatus,
} from "@/lib/integrations/types";

export async function createCorsairConnectUrl({
  tenantId,
  integration,
}: {
  tenantId: string;
  integration: IntegrationKind;
}) {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
  const successUrl = `${appUrl}/dashboard?${integration}=connected`;

  const tenantCorsair = corsair.withTenant(tenantId);

  /*
    Replace this block with your real Corsair OAuth URL call.

    The final result should be a Google/Corsair consent URL.
    Keep tenantId as session.user.id.
  */
  if (integration === "gmail") {
    // Example only:
    // return tenantCorsair.gmail.connect.createOAuthUrl({ redirectUrl: successUrl });
    return `${appUrl}/api/mock/corsair/gmail?redirect=${encodeURIComponent(successUrl)}`;
  }

  // Example only:
  // return tenantCorsair.calendar.connect.createOAuthUrl({ redirectUrl: successUrl });
  return `${appUrl}/api/mock/corsair/calendar?redirect=${encodeURIComponent(successUrl)}`;
}

export async function getIntegrationStatus(
  tenantId: string
): Promise<IntegrationStatus> {
  const tenantCorsair = corsair.withTenant(tenantId);
  /*
    Replace with your real Corsair status methods.
    The only contract your UI needs is:
    { gmail: boolean, calendar: boolean }
  */

  // Example real-ish shapes:
  // const gmail = await tenantCorsair.gmail.connection.status();
  // const calendar = await tenantCorsair.calendar.connection.status();
  // return { gmail: gmail.connected, calendar: calendar.connected };

  void tenantCorsair;

  return {
    gmail: false,
    calendar: false,
  };
}

export async function getRecentEmails(tenantId: string) {
  const tenantCorsair = corsair.withTenant(tenantId);

  return tenantCorsair.gmail?.db?.threads?.list({
    limit: 10,
  });
}

export async function getUpcomingMeetings(tenantId: string) {
  const tenantCorsair = corsair.withTenant(tenantId);

  return tenantCorsair.calendar?.db?.events?.list({
    limit: 10,
    timeMin: new Date().toISOString(),
  });
}
```

---

## 6. Gmail Connect Route

Use `GET` because `window.location.href = "/api/..."` makes a GET request. If you prefer `POST`, use a button handler with `fetch()` first, then redirect to the returned URL.

`src/app/api/integrations/gmail/connect/route.ts`

```ts
import { NextResponse } from "next/server";
import { createCorsairConnectUrl } from "@/lib/integrations/corsair-tools";
import { getTenantId } from "@/lib/session";

export async function GET() {
  const tenantId = await getTenantId();

  const oauthUrl = await createCorsairConnectUrl({
    tenantId,
    integration: "gmail",
  });

  return NextResponse.redirect(oauthUrl);
}

export async function POST() {
  return GET();
}
```

---

## 7. Calendar Connect Route

`src/app/api/integrations/calendar/connect/route.ts`

```ts
import { NextResponse } from "next/server";
import { createCorsairConnectUrl } from "@/lib/integrations/corsair-tools";
import { getTenantId } from "@/lib/session";

export async function GET() {
  const tenantId = await getTenantId();

  const oauthUrl = await createCorsairConnectUrl({
    tenantId,
    integration: "calendar",
  });

  return NextResponse.redirect(oauthUrl);
}

export async function POST() {
  return GET();
}
```

---

## 8. Integration Status API

`src/app/api/integrations/status/route.ts`

```ts
import { NextResponse } from "next/server";
import { getIntegrationStatus } from "@/lib/integrations/corsair-tools";
import { getTenantId } from "@/lib/session";

export async function GET() {
  const tenantId = await getTenantId();
  const status = await getIntegrationStatus(tenantId);

  return NextResponse.json(status);
}
```

---

## 9. Dashboard Server Page

`src/app/dashboard/page.tsx`

```tsx
import {
  getIntegrationStatus,
  getRecentEmails,
  getUpcomingMeetings,
} from "@/lib/integrations/corsair-tools";
import { requireUser } from "@/lib/session";
import { DashboardClient } from "@/components/dashboard-client";

export default async function DashboardPage() {
  const user = await requireUser();
  const tenantId = user.id;

  const status = await getIntegrationStatus(tenantId);

  const [emails, meetings] = await Promise.all([
    status.gmail ? getRecentEmails(tenantId) : Promise.resolve(null),
    status.calendar ? getUpcomingMeetings(tenantId) : Promise.resolve(null),
  ]);

  return (
    <DashboardClient
      userName={user.name ?? user.email ?? "there"}
      status={status}
      emails={emails}
      meetings={meetings}
    />
  );
}
```

---

## 10. Dashboard Client Component

`src/components/dashboard-client.tsx`

```tsx
"use client";

import { CalendarDays, Mail, RefreshCw } from "lucide-react";
import type { IntegrationStatus } from "@/lib/integrations/types";

type DashboardClientProps = {
  userName: string;
  status: IntegrationStatus;
  emails: unknown;
  meetings: unknown;
};

function connectGmail() {
  window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/api/integrations/gmail/connect`;
}

function connectCalendar() {
  window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/api/integrations/calendar/connect`;
}

export function DashboardClient({
  userName,
  status,
  emails,
  meetings,
}: DashboardClientProps) {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold tracking-normal">
          Welcome {userName}
        </h1>
        <p className="text-sm text-neutral-500">
          Connect your tools to load your briefing.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        <IntegrationPanel
          title="Gmail"
          icon={<Mail className="h-5 w-5" />}
          connected={status.gmail}
          onConnect={connectGmail}
        />

        <IntegrationPanel
          title="Calendar"
          icon={<CalendarDays className="h-5 w-5" />}
          connected={status.calendar}
          onConnect={connectCalendar}
        />
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <DataPanel
          title="Recent Emails"
          connected={status.gmail}
          emptyText="No Gmail connected"
          data={emails}
        />
        <DataPanel
          title="Upcoming Meetings"
          connected={status.calendar}
          emptyText="No Calendar connected"
          data={meetings}
        />
      </section>
    </main>
  );
}

function IntegrationPanel({
  title,
  icon,
  connected,
  onConnect,
}: {
  title: string;
  icon: React.ReactNode;
  connected: boolean;
  onConnect: () => void;
}) {
  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {icon}
          <div>
            <h2 className="text-base font-medium">{title}</h2>
            <p className="text-sm text-neutral-500">
              {connected ? "Connected" : "Not connected"}
            </p>
          </div>
        </div>
        {connected ? (
          <span className="rounded-md bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
            Connected
          </span>
        ) : (
          <button
            type="button"
            onClick={onConnect}
            className="rounded-md bg-neutral-900 px-3 py-2 text-sm font-medium text-white hover:bg-neutral-700"
          >
            Connect
          </button>
        )}
      </div>
    </div>
  );
}

function DataPanel({
  title,
  connected,
  emptyText,
  data,
}: {
  title: string;
  connected: boolean;
  emptyText: string;
  data: unknown;
}) {
  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-4">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h2 className="text-base font-medium">{title}</h2>
        <RefreshCw className="h-4 w-4 text-neutral-400" />
      </div>

      {!connected ? (
        <p className="text-sm text-neutral-500">{emptyText}</p>
      ) : (
        <pre className="max-h-80 overflow-auto rounded-md bg-neutral-50 p-3 text-xs text-neutral-700">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
}
```

---

## 11. Optional Onboarding Page

Skip this for the hackathon unless you specifically need the guided flow.

`src/app/onboarding/page.tsx`

```tsx
import Link from "next/link";
import { getIntegrationStatus } from "@/lib/integrations/corsair-tools";
import { requireUser } from "@/lib/session";

export default async function OnboardingPage() {
  const user = await requireUser();
  const status = await getIntegrationStatus(user.id);
  const completed = Number(status.gmail) + Number(status.calendar);
  const done = status.gmail && status.calendar;

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-xl flex-col justify-center gap-6 px-6 py-10">
      <header>
        <h1 className="text-2xl font-semibold">
          Welcome {user.name ?? user.email}
        </h1>
        <p className="mt-1 text-sm text-neutral-500">Progress: {completed}/2</p>
      </header>

      <div className="flex flex-col gap-3">
        <a
          href="/api/integrations/gmail/connect"
          className="rounded-md border border-neutral-200 px-4 py-3 text-sm font-medium"
        >
          {status.gmail ? "Gmail Connected" : "Connect Gmail"}
        </a>

        <a
          href="/api/integrations/calendar/connect"
          className="rounded-md border border-neutral-200 px-4 py-3 text-sm font-medium"
        >
          {status.calendar ? "Calendar Connected" : "Connect Calendar"}
        </a>
      </div>
      {done ? (
        <Link
          href="/dashboard"
          className="rounded-md bg-neutral-900 px-4 py-3 text-center text-sm font-medium text-white"
        >
          Continue to Dashboard
        </Link>
      ) : null}
    </main>
  );
}
```

---

## 12. Auth Redirect

After Better Auth login success, redirect to:

```txt
/dashboard
```

For the slower guided flow, redirect to:

```txt
/onboarding
```

For a one-day hackathon, choose `/dashboard`.
