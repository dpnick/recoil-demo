import React, { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import styled from 'styled-components';
import ErrorBoundary from './components/ErrorBoundary';
import Spinner from './components/Spinner';
import Home from './pages/Home';

const Fallback = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <ErrorBoundary>
      <RecoilRoot>
        <Suspense
          fallback={
            <Fallback>
              <Spinner />
            </Fallback>
          }
        >
          <Home />
        </Suspense>
      </RecoilRoot>
    </ErrorBoundary>
  );
}

export default App;
