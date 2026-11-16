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
  { d: "2026-11-06", s: 821 },
  { d: "2026-11-07", s: 1008 },
  { d: "2026-11-08", s: 1207 },
  { d: "2026-11-09", s: 1440 },
  { d: "2026-11-10", s: 1336 },
  { d: "2026-11-11", s: 2362 },
  { d: "2026-11-12", s: 1701 },
  { d: "2026-11-13", s: 2153 },
  { d: "2026-11-14", s: 2103 },
  { d: "2026-11-15", s: 707 }
];
