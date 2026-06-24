When you use Gmail or Google Calendar, it is likely that a regular workflow takes a few more clicks than it should. Or maybe sending a calendar invite is too many steps on the UI.

Many startups have tried to make managing email and calendar seamless, but this is hard to do because everyone uses it slightly differently.

Corsair provides the building blocks to hundreds of integrations. You can use those building blocks to wire your app into almost any other app. You can also use Corsair's MCP to let any agent get full access to integrations so it can do things on your behalf.

This means you can make new UIs that are set up exactly how you need, and power them using Corsair.

Use Corsair to create Gmail and Google Calendar integrations. Use the Gmail API to make it more intuitive to search, draft, send and receive emails. Use the Google Calendar API to make it easier to manage your schedule and send calendar invites and updates.

Once this is done, your email and calendar management will not be limited to how Google, Superhuman, or anyone else sees the way your workflows should be. Instead, you can decide exactly what needs to be more prominent.

Tech stack
Next.js, Postgres and Corsair (Ngrok is optional and can be used for webhooks)

Bonus tasks
Probably the most high-value bonus task is to add agent chat using the Corsair MCP. This will let users chat to send emails and calendar invites.
Example:

"Send a calendar invite to friend@corsair.dev at 9 AM next Thursday. Send him an email too saying I look forward to our meeting."

Use Corsair's built-in webhooks so you can get all new emails and calendar invites in realtime without having to poll the Google APIs
Add automatic email filtering by sending the email subject and body through a cheap LLM to determine priority level
Wire in keystrokes so users can do common actions via the keyboard instead of clicking around
Use the Corsair search API to add a better UI around Gmail advanced search
Add a vector database to the existing Postgres database. Since Corsair caches all emails that come through it, you can search locally instead of using the Gmail API. This allows lightning-fast search across the entire email and calendar in under 1 second
Before starting, watch the setup videos in order:

corsair-setup

corsair-webhooks

corsair-calendar-webhooks

Resources:

Corsair Setup Videos
GitHub Repo
Start by posting about what you are going to build on LinkedIn and X/Twitter.

Tag ChaiCode, Hitesh Sir, Piyush and Corsair
Corsair LinkedIn
Add this line at the end of your post

"Builder Mode On | MacBook Giveaway Hackathon"

Use hashtags: #chaicode #corsair-dev

Rules & Guidelines
Build a Superhuman-style Gmail and Google Calendar workflow app using Next.js, Postgres and Corsair.

Gmail integration through Corsair is mandatory.
Google Calendar integration through Corsair is mandatory.
Ngrok is optional and can be used for webhook testing.
Things to Submit
Code must be open source on GitHub.

Deployed live link is mandatory.

Demo video is mandatory.

Video should be YC-style: explain the problem, your solution, product demo, tech stack, Corsair usage, Gmail integration, Calendar integration and what makes your workflow better.

Keep in mind
Hardcoded Gmail or Calendar data will not be accepted.

A basic Gmail UI clone will not be enough to win.

Your project must include at least one meaningful workflow improvement for Gmail or Google Calendar.

AI should improve the workflow, not be added just for the sake of it.

Bonus points for Corsair MCP agent chat, realtime webhooks, keyboard shortcuts, command palette, priority filtering, Corsair search API usage and fast local search.

Plagiarized, copied or template-only submissions can be disqualified.

Final submission must include GitHub repo, live link, demo video, X/Twitter post link, LinkedIn post link, short README, list of Corsair features used and bonus tasks attempted.
