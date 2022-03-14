import { selector } from 'recoil';
import { fakeCategories } from '../../pages/Home';
import postByUserSelector from './postByUserSelector';

const postByCategorySelector = selector({
  key: 'postByCategorySelector',
  get: ({ get }) => {
    const posts = get(postByUserSelector);

    const result = fakeCategories.map((category) => {
      const selectedPosts = posts?.filter((post) => post.category === category);
      return selectedPosts?.length ?? 0;
    });
    return result;
  },
});

export default postByCategorySelector;
