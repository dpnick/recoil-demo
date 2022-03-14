import { Post } from '../models/post';
import { User } from '../models/User';
import { fakeCategories } from '../pages/Home';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getPostsByUser = (id: number): Promise<Post[]> => {
  return (
    fetch(`${BASE_URL}/posts?userId=${id}&_limit=10`)
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok) {
          return Promise.reject(response);
        }
        return data;
      })
      // add a category to the post
      .then((posts: Post[]) =>
        posts?.map((post) => ({
          ...post,
          category:
            fakeCategories[Math.floor(Math.random() * fakeCategories.length)],
        }))
      )
      .catch((err) => Promise.reject(err))
  );
};

export const getUsers = (): Promise<User[]> => {
  return fetch(`${BASE_URL}/users`)
    .then(async (response) => {
      const data = await response.json();
      if (!response.ok) {
        return Promise.reject(response);
      }
      return data;
    })
    .catch((err) => Promise.reject(err));
};
