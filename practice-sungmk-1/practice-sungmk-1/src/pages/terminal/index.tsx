import React, {useRef, useState} from 'react'
import * as Styled from "./style"
import TerminalInfoList from "../../../src/pages/terminal/terminalInfo";
import TerminalStateList from "../../../src/pages/terminal/terminalState";


function Terminal() {

    // 입력값을 저장할 상태
    const [searchValue, setSearchValue] = useState('');

    // 검색 버튼 클릭시 플래그를 저장할 상태
    const [isSearched, setIsSearched] = useState<boolean>(false);

    const [selectTab, setSelectTab] = useState('');



    // input 요소에 접근하기 위한 ref 생성
    const inputRef = useRef<HTMLInputElement>(null);

    // 검색 버튼 클릭시 호출되는 함수
    const handleSearch = () => {
        if (inputRef.current) {
            const searchValue = inputRef.current.value;
            // 검색값을 상태로 설정
            setSearchValue(searchValue);

            // 검색값 출력
            console.log('검색 값:', searchValue);
            setSelectTab('terminalInfo');
        }
        // 플래그를 true로 변경
        setIsSearched(true);
    };

    const terminalMenu = () => {

        switch (selectTab){
            case 'terminalInfo':
                return <TerminalInfoList key={searchValue} terminalId={searchValue}/>
            case 'terminalState':
                return <TerminalStateList key={searchValue} terminalId={searchValue}/>
            case 'terminalAsList':
                return null;
            case 'cardMerchInfo':
                return null;
            default:
                return null;
        }

    }

    return (
        <Styled.Container>
            <section>
                <div>TerminalId 검색 화면입니다.</div>

                <div>
                    <label htmlFor="searchInput">단말기 검색 : </label>
                    <input
                        type="text"
                        name="searchTerminalID"
                        placeholder="검색어를 입력하세요"
                        ref={inputRef}
                    />
                    <button onClick={handleSearch}>검색</button>
                </div>

                <Styled.termianlNav>
                    <Styled.terminalUl>
                        <Styled.terminalLi>
                            <Styled.terminalStrong onClick={() => setSelectTab('terminalInfo')}>TerminalInfo</Styled.terminalStrong>
                        </Styled.terminalLi>
                        <Styled.terminalLi>
                            <Styled.terminalStrong onClick={() => setSelectTab('terminalState')}>TerminalState</Styled.terminalStrong>
                        </Styled.terminalLi>
                        <Styled.terminalLi>
                            <Styled.terminalStrong onClick={() => setSelectTab('terminalAsList')}>terminalAsList</Styled.terminalStrong>
                        </Styled.terminalLi>
                        <Styled.terminalLi>
                            <Styled.terminalStrong onClick={() => setSelectTab('cardMerchInfo')}>cardMerchInfo</Styled.terminalStrong>
                        </Styled.terminalLi>
                    </Styled.terminalUl>
                </Styled.termianlNav>
                {terminalMenu()}

            </section>
        </Styled.Container>
    )
}

export default Terminal;



// 입력값이 변경될 때마다 호출되는 함수
// const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>) => {
//     setSearchValue(e.target.value);
// };