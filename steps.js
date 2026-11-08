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
  { d: "2026-10-29", s: 1066 },
  { d: "2026-10-30", s: 671 },
  { d: "2026-10-31", s: 1135 },
  { d: "2026-11-01", s: 1175 },
  { d: "2026-11-02", s: 1017 },
  { d: "2026-11-03", s: 1095 },
  { d: "2026-11-04", s: 1396 },
  { d: "2026-11-05", s: 1520 },
  { d: "2026-11-06", s: 821 },
  { d: "2026-11-07", s: 1008 }
];
