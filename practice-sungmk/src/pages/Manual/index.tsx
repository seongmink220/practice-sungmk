import * as Styled from "./style";
import Button from "@src/components/@shared/Button";
import { FlexRow } from "@src/@styles/shared";

function Manual() {
  return (
    <Styled.Container>
      <Styled.GreetingContainer>
        <FlexRow
          gap="10px"
          marginBottom="27px"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
        >
          <img src="" alt="BackOffice 로고" />
          <h2>
            프로젝트 Building BackOffice
          </h2>
        </FlexRow>
        <Button>시작하기</Button>
      </Styled.GreetingContainer>

      <Styled.UsageContainer>
        <h1>뭘 넣을까 고민되네요.</h1>
        <Styled.UsageList>
          <li>가이드를 넣을 것인가?</li>
          <li>공지사항을 넣을 것인가?</li>
        </Styled.UsageList>
      </Styled.UsageContainer>
    </Styled.Container>
  );
}

export default Manual;
