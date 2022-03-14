import React from 'react';
import ReactFrappeChart from 'react-frappe-charts';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { fakeCategories } from '../pages/Home';
import postByCategorySelector from '../store/selectors/postByCategorySelector';

const ChartContainer = styled.div`
  width: 450px;
`;

export default function BarChart() {
  const values = useRecoilValue(postByCategorySelector);

  return (
    <ChartContainer>
      <ReactFrappeChart
        type='bar'
        colors={['#273E89']}
        axisOptions={{ xAxisMode: 'tick', yAxisMode: 'tick', xIsSeries: 1 }}
        height={250}
        data={{
          labels: fakeCategories,
          datasets: [{ values }],
        }}
      />
    </ChartContainer>
  );
}
