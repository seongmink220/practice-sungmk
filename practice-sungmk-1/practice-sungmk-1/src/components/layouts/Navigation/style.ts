// import { Theme } from "../../../../src/@types/shared";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div``;

export const WrapperLink = styled(Link)`
    margin-right: 10px;
    text-decoration: none; /* 예시로 텍스트 데코레이션을 없앰 */
    color: inherit; /* 부모 요소의 글꼴 색상 상속 */
    border: 1px solid black;
    border-radius: 5px;
    padding: 2px;
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
