# IsasCakesUSA

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Quote Form Email Setup

The quote overlay submits to `src/pages/api/quote.js` and sends email through Resend.

Create a local `.env` file with:

```env
RESEND_API_KEY=re_xxxxxxxxx
RESEND_FROM_EMAIL=quotes@yourdomain.com
QUOTE_RECEIVER_EMAIL=you@example.com
```

Notes:
- `RESEND_FROM_EMAIL` must use a sender verified in your Resend account.
- `QUOTE_RECEIVER_EMAIL` is where quote requests are delivered.
