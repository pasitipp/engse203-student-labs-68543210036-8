# LAB verification — 2026-10-19

All 12 LAB checkers completed successfully. Week 08 is the midterm, not a LAB. Instructor checker sources and their criteria were not modified.

| LAB | Full checker result |
|---|---|
| 01 | Greeting/runtime check passed; unit test passed |
| 02 | Structure/evidence checker passed |
| 03 | JavaScript syntax checker passed |
| 04 | Project verifier passed |
| 05 | 136/136 |
| 06 | 28/28 including 3/3 Challenges |
| 07 | 36/36 including 3/3 Challenges |
| 09 | 30/30 including 3/3 Challenges |
| 10 | 31/31 including 3/3 Challenges |
| 11 | 41/41 including 4/4 Challenges |
| 12 | 22/22 including 2/2 Challenges |
| 13 | 27/27 including 4/4 Challenges |

The build/test runner completed all 17 jobs: 9 frontend builds and 8 test suites (175 individual tests total). LAB12 API statement coverage is 96.24%, above the instructor threshold of 85%. Test coverage is a different measurement from the percentage of checker checkpoints passed.

Commands:

```powershell
node scripts/check-labs.mjs
node scripts/build-lab-output.mjs
npm run verify
node scripts/verify-portfolio.mjs
```

Full checker output is saved under each LAB's evidence/checker-output.txt; API, frontend test and build output is in the same evidence folder. LAB12 and LAB13 changes have separate PRs #25 and #26 and submission-v2 tags; earlier submission tags are retained. The landing page lists Submitted based on the student's submission confirmation.

This report covers automated checks. Presentation, understanding of the code, personal evidence and the instructor's final marking remain separate; passing automated checks does not promise a particular grade.
