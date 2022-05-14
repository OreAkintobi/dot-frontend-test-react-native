import { I_AwardCategory } from '@types';

export const api = {
  async getBallotData(): Promise<I_AwardCategory> {
    const res = await fetch('http://localhost:8080/api/getBallotData');
    return res.json();
  },
};
