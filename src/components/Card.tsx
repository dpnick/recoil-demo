import React from 'react';
import styled from 'styled-components';

interface CardProps {
  children: React.ReactNode;
}

const Container = styled.div`
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #eaeaea;
  box-shadow: 5px 5px 15px 4px lightgray;
  margin: 4px;
`;

export default function Card({
  children,
  ...props
}: CardProps & React.HTMLAttributes<HTMLDivElement>) {
  return <Container {...props}>{children}</Container>;
}
