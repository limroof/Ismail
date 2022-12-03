import styled from "styled-components";

export const Section = styled.section`
  background-color: #dff8eb;
  padding-top: 30px;
  padding-bottom: 124px;
  padding-left: 40px;
  padding-right: 40px;
`;

export const H2 = styled.h2`
  margin-top: 0;
`;

export const Columns = styled.div`
  max-width: 1100px;
  display: flex;
  margin: 0 auto;
`;

export const Item = styled.div`
  text-align: center;
  max-width: 370px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 40px;
  flex-grow: 1;
  > img {
    max-width: 252px;
  }
  > p {
    max-width: 320px;
    margin-bottom: 0;
  }
`;
