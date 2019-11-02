import styled from 'styled-components';

const Page = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const PageHeader = styled.div`
  height: 3em;
  font-size: 2em;
  display: flex;
  align-items: center;
`;

export const PageBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Page;
