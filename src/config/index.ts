import { I_Root_Response } from '@types';

export const api = {
  async getBallotData(): Promise<I_Root_Response> {
    const res = await fetch('http://localhost:8080/api/getBallotData');
    return res.json();
  },
};
