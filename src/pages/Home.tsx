import React from 'react';
import styled from 'styled-components';
import UserInfo from '../components/UserInfo';
import UserList from '../components/UserList';

export const fakeCategories = ['sport', 'movie', 'game', 'other'];

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    width: 85vw;
    margin: auto;
  }

  @media (min-width: 1024px) {
    width: 70vw;
  }
`;

export default function Home() {
  return (
    <HomeContainer>
      <h2>Recoil demo app</h2>
      <UserList />
      <UserInfo />
    </HomeContainer>
  );
}
