import { selector } from 'recoil';
import { getPostsByUser } from '../../lib/jsonPlaceholder';
import { Post } from '../../models/post';
import selectedUserIdAtom from '../atoms/selectedUserIdAtom';

const postByUserSelector = selector({
  key: 'postByUserSelector',
  get: async ({ get }) => {
    try {
      const selectedId = get(selectedUserIdAtom);
      let result: Post[] | null = null;
      if (selectedId) {
        result = await getPostsByUser(selectedId);
      }
      return result;
    } catch (error) {
      throw error;
    }
  },
});

export default postByUserSelector;
