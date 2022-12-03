import styled from "styled-components";
export const Section = styled.section`
  padding: 94px 20px 100px;
`;
export const H2 = styled.h2`
margin-bottom: 60px;
}`;
export const Columns = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  overflow: hidden;
`;
export const Profile = styled.div`
  display: flex;
  min-width: 720px;
  height: 350px;
  max-width: none;
  margin-right: 20px;
  padding: 50px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  background-color: #f8f8f8;
  box-shadow: 0 4px 6px 0 rgb(0 0 0 / 10%);
  column-gap: 48px;
  translate: 200%;
  scale: 0.98;
  transition: transform 0.5s;
  opacity: 0.4;
  &.active {
    scale: 1;
    opacity: 1;
  }
`;

export const Strong = styled.strong`
  font-size: 24px;
  line-height: 32px;
`;
export const ProfileDescription = styled.div`
  img {
    width: 27px;
    height: 24px;
    margin-bottom: 15px;
  }
  display: flex;
  flex-direction: column;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  column-gap: 14px;
  justify-content: center;
`;
export const Dot = styled.button`
  display: block;
  background-color: #99adb7;
  width: 14px;
  height: 14px;
  border-radius: 100%;
  outline: none;
  &.active {
    background-color: #00324b;
  }
`;
