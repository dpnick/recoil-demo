import { atom } from 'recoil';

const selectedUserIdAtom = atom<number | null>({
  key: 'selectedUserIdAtom',
  default: null,
});

export default selectedUserIdAtom;
