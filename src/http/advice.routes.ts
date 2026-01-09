import { Router } from 'express';
import { buildAdviceDecision } from '../wealth-investments/decisions/buildAdviceDecision';
import { recordClientAcceptance } from '../wealth-investments/acceptance/recordClientAcceptance';

export const adviceRouter = Router();

adviceRouter.post('/decision', async (req, res) => {
  try {
    const { authority } = req.body;

    const decision = await buildAdviceDecision(
      'client-test',
      'goal-test',
      authority
    );

    res.status(200).json(decision);
  } catch (err:any) {
    res.status(400).json({ error: err.message });
  }
});

adviceRouter.post('/accept', async (req, res) => {
  try {
    const { authority } = req.body;

    const acceptance = recordClientAcceptance(
      { adviceId: 'advice-test', decisionHash: 'hash' } as any,
      authority.principalId,
      true,
      'signed'
    );

    res.status(200).json(acceptance);
  } catch (err:any) {
    res.status(400).json({ error: err.message });
  }
});
