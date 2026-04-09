# ENSAM African Network — Student Community Platform

Production-ready SaaS platform for ENSAM African students.

## Quick Start

1. Copy env vars:
   ```bash
   cp .env.example .env
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Generate Prisma client:
   ```bash
   npm run prisma:generate
   ```
4. Run migrations:
   ```bash
   npm run prisma:migrate -- --name init
   ```
5. Seed demo data:
   ```bash
   npm run prisma:seed
   ```
6. Start app:
   ```bash
   npm run dev
   ```

## API Routes

- Auth: `/api/auth/register`, `/api/auth/login`, `/api/auth/me`
- Posts: `/api/posts`, `/api/posts/:id`
- Comments: `/api/comments`, `/api/comments/:postId`
- Housing: `/api/housing`
- Connections: `/api/connections/request`, `/api/connections/accept`, `/api/connections/reject`
- Groups: `/api/groups`, `/api/groups/join`
- Announcements: `/api/announcements`

## Demo account

- email: `amina@ensam.africa`
- password: `password123`
