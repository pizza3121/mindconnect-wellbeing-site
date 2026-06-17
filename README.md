# MindConnect Vercel Static Site

MindConnect is a student wellbeing signposting website for UWS London Campus. It is a static website and does not require a build step.

## Files

- `index.html` - production-ready static homepage
- `styles.css` - site styling and responsive layout
- `assets/gantt_chart.png` - project evidence image
- `guides/` - reserved for local PDF guides
- `vercel.json` - Vercel static-site settings

## Guide PDF links

Local PDF guide files were not found in the project folder during setup, so the guide cards currently link to this Google Drive folder:

https://drive.google.com/drive/folders/1Lnxt6z80dfbDnBFZ5ZksXFZ4ZtIVvVaO?usp=sharing

If the four PDFs are added later, place them in `guides/` and update the four guide links in `index.html` to:

- `guides/Guide_1_Calm_in_Five_Minutes.pdf`
- `guides/Guide_2_Small_Steps_for_Low_Days.pdf`
- `guides/Guide_3_A_Better_Nights_Sleep.pdf`
- `guides/Guide_4_Deadlines_Without_Dread.pdf`

## Feedback form placeholder

The feedback button currently scrolls to the feedback section and shows:

`Feedback form link will be added here.`

Replace the placeholder in `index.html` with the final MS Forms link:

`[PASTE_MS_FORMS_LINK_HERE]`

## Manual Vercel Deployment

Vercel CLI was not installed in the working environment, so deploy manually:

1. Go to `vercel.com`.
2. Import project from GitHub or upload the folder.
3. Set project root to `mindconnect-vercel-site`.
4. Framework preset: `Other`.
5. Build command: leave blank.
6. Output directory: leave blank or use project root.
7. Deploy.

## Local Preview

Open `index.html` directly in a browser, or run:

```bash
python3 -m http.server 4173
```

Then visit:

```text
http://localhost:4173
```

## Safety Disclaimer

MindConnect is a student signposting project and is not a crisis or clinical service. If someone is in immediate danger, call 999. For urgent emotional support, Samaritans are available at 116 123, Shout is available by texting SHOUT to 85258, and NHS 111 offers a mental health option.
