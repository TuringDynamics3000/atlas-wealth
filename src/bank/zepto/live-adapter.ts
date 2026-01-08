import { ZeptoConfig } from './config'

export class ZeptoLiveAdapter {
  constructor(private cfg: ZeptoConfig) {}

  async transfer(payload: any) {
    if (this.cfg.mode !== 'LIVE') {
      throw new Error('BANK_LIVE_DISABLED_BY_POLICY')
    }

    // REAL LIVE ISTEP GOES HERE – intentionally unreachable
    throw new Error('LIVE_TRANSFER_PATH_DISABLED')
  }
}