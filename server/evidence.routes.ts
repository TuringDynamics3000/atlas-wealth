/**
 * ARCHITECTURAL NOTE
 *
 * This file defines HTTP boundaries only.
 * - No business logic belongs here
 * - No direct state mutation occurs here
 * - AuthorityContext enforcement happens downstream
 * - All mutations must emit durable evidence
 *
 * This separation is intentional.
 */
import { Router } from 'express';

export const evidenceRouter = Router();

evidenceRouter.post('/write', async (_req, res) => {
  // Real evidence writes already happen inside Atlas logic.
  // This endpoint exists to pressure-test evidence durability.
  res.status(200).end();
});

