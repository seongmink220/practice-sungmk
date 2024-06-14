// import { Theme } from "../../../../src/@types/shared";
import styled, { css } from "styled-components";

export const Container = styled.div``;

export const GreetingContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 50px 40px 40px;
  min-width: 320px;
`;

export const termianlNav = styled.nav`
    //display: flex;
    padding: 10px;
    flex-direction: row;
`;

export const terminalUl = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: row; //Default 값

`;

export const terminalLi = styled.li`
    margin-right: 10px;
`;

export const terminalStrong = styled.strong`
    cursor: pointer;
    padding: 10px 15px;
    background-color: #576ffb;
    color: white;
    border: none;
    border-radius: 4px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #1e41ff;
    }
`;


// export const UsageContainer = styled.section`
//   display: flex;
//   flex-direction: column;
//   padding: 30px 43px;
//   justify-content: center;
//   align-items: center;
//   gap: 40px;
//
//   ${({ theme }: { theme: Theme }) => css`
//     background-color: ${theme.COLOR.BACKGROUND.SECONDARY};
//   `}
// `;

export const UsageList = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
