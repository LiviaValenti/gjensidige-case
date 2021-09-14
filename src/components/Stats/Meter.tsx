import styled from 'styled-components';

interface MeterProps {
  value: number;
  max: number;
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
  background: #7e6d57;
  overflow: hidden;
  filter: drop-shadow(2px 1px 4px #14141440);
`;

const ProgressBody = styled.span`
  width: 110px;
  position: relative;
  display: block;
  height: 100%;
  filter: drop-shadow(1px 0px 4px #14141486);
`;

const Progress = styled.span<{ progress: number }>`
  display: block;
  border-radius: 10px;
  height: 100%;
  background: linear-gradient(0deg, #135713 20%, #1fa81f 60%, #18830e 80%);
  width: ${(props) => props.progress}%;
  transition: 0.3s;
`;

const MeterWrapper = styled.div`
  display: flex;
  align-items: center;
`;
