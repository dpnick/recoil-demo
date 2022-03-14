import { atom } from 'recoil';
import { getUsers } from '../../lib/jsonPlaceholder';
import { User } from '../../models/User';

const userListAtom = atom<User[]>({
  key: 'userListAtom',
  default: getUsers(),
});

export default userListAtom;
