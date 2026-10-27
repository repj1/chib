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
  { d: "2026-10-17", s: 2202 },
  { d: "2026-10-18", s: 2721 },
  { d: "2026-10-19", s: 1599 },
  { d: "2026-10-20", s: 1418 },
  { d: "2026-10-21", s: 128 },
  { d: "2026-10-22", s: 428 },
  { d: "2026-10-23", s: 1594 },
  { d: "2026-10-24", s: 1605 },
  { d: "2026-10-25", s: 1945 },
  { d: "2026-10-26", s: 1265 }
];
