import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import selectedUserIdAtom from '../store/atoms/selectedUserIdAtom';
import userListAtom from '../store/atoms/userListAtom';
import Card from './Card';

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 16px;
`;

const ClickableCard = styled(Card)<{ isSelected: boolean }>`
  cursor: pointer;
  background-color: ${({ isSelected }) => (isSelected ? '#273e89' : 'white')};
  color: ${({ isSelected }) => (isSelected ? 'white' : 'black')};
  transition: border 0.2s ease-in-out, opacity 0.2s ease-in-out;
  &:hover {
    border: 1px solid #273e89;
  }
  &:active {
    opacity: 0.4;
  }
`;

export default function UserList() {
  const users = useRecoilValue(userListAtom);
  const [userId, setUserId] = useRecoilState(selectedUserIdAtom);

  return (
    <List>
      {users.map(({ id, name }) => (
        <ClickableCard
          key={id}
          isSelected={id === userId}
          onClick={() => setUserId(id)}
        >
          {name}
        </ClickableCard>
      ))}
    </List>
  );
}
