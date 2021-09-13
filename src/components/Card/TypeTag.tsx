import styled from 'styled-components';

interface TypeTagProps {
  type: string;
  gradientBackground: string;
}

const TypeTag = ({ type, gradientBackground }: TypeTagProps) => {
  return (
    <TypeTagWrapper gradientBackground={gradientBackground}>
      <TagIcon src={`/images/${type}.svg`} alt={`${type}icon`} />
    </TypeTagWrapper>
  );
};

export default TypeTag;

const TagIcon = styled.img`
  padding: 5px;
  width: 20px;
`;

const TypeTagWrapper = styled.div<{ gradientBackground: string }>`
  align-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(${(props) => props.gradientBackground});
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  color: white;
  text-transform: uppercase;
`;
