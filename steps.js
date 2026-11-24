/* ==================================================
   CHIB'S LOCOMOTION LOG

   Joseph sends wheel-rotation counts; they are recorded here.
   Append the newest night at the END of the list as
     { d: "YYYY-MM-DD", s: <steps> },
   keeping the 10 most recent entries.
   Also append every night to history.js (FULL_LOG),
   which keeps the complete archive and is never trimmed.
================================================== */

var STEP_LOG = [
  { d: "2026-11-13", s: 2153 },
  { d: "2026-11-14", s: 2103 },
  { d: "2026-11-15", s: 707 },
  { d: "2026-11-16", s: 820 },
  { d: "2026-11-17", s: 1424 },
  { d: "2026-11-18", s: 636 },
  { d: "2026-11-19", s: 749 },
  { d: "2026-11-20", s: 763 },
  { d: "2026-11-21", s: 429 },
  { d: "2026-11-22", s: 974 }
];
