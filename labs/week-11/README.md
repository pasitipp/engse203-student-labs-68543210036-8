# week-11 — Production and Full-Stack Integration

Source: [source/](source/) · Real test logs: [evidence/](evidence/)

Local build and automated checks pass. Personal demo video CP42 is pending; DEMO.md is a recording guide, not video evidence. No cloud service has been deployed.

Instructor: https://github.com/se-rmutl/engse203-lab/tree/main/labs

Regenerate this portfolio only after running the actual checks and builds:

```sh
node scripts/check-labs.mjs 11
node scripts/build-lab-output.mjs 11
node scripts/prepare-portfolio.mjs
npm run build:pages
```

Commands above run from the repository root. See source package.json and instructor guide for individual development commands. Never commit a real .env, token, or personal password.
