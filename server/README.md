\# Server Runtime (Node Only)



This directory contains Node-only HTTP servers and routes.



These files MUST NOT be imported by:

\- Next.js App Router

\- React components

\- Projection layers



Reason:

Next.js will attempt to statically analyse files under `src/` and fail.



Rule:

UI → projections → domain → evidence  

Server runtime is separate.



