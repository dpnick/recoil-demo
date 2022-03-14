import React, { Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import selectedUserSelector from '../store/selectors/selectedUserSelector';
import BarChart from './BarChart';
import Card from './Card';
import Spinner from './Spinner';

const CenteredCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Fallback = styled.div`
  width: 450px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function UserInfo() {
  const selectedUser = useRecoilValue(selectedUserSelector);

  if (selectedUser) {
    return (
      <CenteredCard>
        <h3>Selected user details</h3>
        <span>name: {selectedUser.name}</span>
        <span>email: {selectedUser.email}</span>
        <span>company: {selectedUser.company.name}</span>
        <Suspense
          fallback={
            <Fallback>
              <Spinner />
            </Fallback>
          }
        >
          <BarChart />
        </Suspense>
      </CenteredCard>
    );
  }
  return null;
}
