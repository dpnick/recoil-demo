import { selector } from 'recoil';
import { User } from '../../models/User';
import selectedUserIdAtom from '../atoms/selectedUserIdAtom';
import userListAtom from '../atoms/userListAtom';

const selectedUserSelector = selector({
  key: 'selectedUserSelector',
  get: ({ get }) => {
    const users: User[] = get(userListAtom);
    const selectedId = get(selectedUserIdAtom);

    const result = users.find(({ id }) => id === selectedId);
    return result;
  },
});

export default selectedUserSelector;
