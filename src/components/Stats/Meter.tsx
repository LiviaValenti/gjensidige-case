import React from 'react';
import styled from 'styled-components';

interface MeterProps {
  value: number;
  max: number;
}

interface ProgressProps {
  progress: number;
}

function getPercentage(value: number, max: number) {
  return (value / max) * 100;
}

const Meter = ({ value, max }: MeterProps) => {
  return (
    <MeterWrapper>
      <MeterBody>
        <ProgressBody>
          <Progress progress={getPercentage(value, max)} />
        </ProgressBody>
      </MeterBody>
      <p>{value}</p>
    </MeterWrapper>
  );
};
export default Meter;

const MeterBody = styled.div`
  height: 10px;
  width: 110px;
  border-radius: 10px;
  position: relative;
  background: #f5ead0;
  overflow: hidden;
`;

const ProgressBody = styled.span`
  width: 110px;
  position: relative;
  display: block;
  height: 100%;
`;

const Progress = styled.span<ProgressProps>`
  display: block;
  border-radius: 10px;
  height: 100%;
  background: linear-gradient(0deg, #1b771b 20%, #2fb92f 60%, #20ad14 80%);
  width: ${(props) => props.progress}%;
  transition: 0.3s;
`;


const MeterWrapper = styled.div`
 display: flex;
 align-items: center;
`