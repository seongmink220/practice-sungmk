import React, {useRef, useState} from 'react'
import * as Styled from "../../../src/components/layouts/LayoutContainer/style";
// import TerminalInfo from "../../../src/pages/terminal/terminalInfo";
import TerminalAsList from "../../../src/pages/terminal/terminalAsList";
import TerminalStateList from "../../../src/pages/terminal/terminalState";
// import {useRecoilState} from "recoil";
// import { isSearchedState } from './terminalAsList/terminalAsListAtom';

function Terminal() {

    // 입력값을 저장할 상태
    const [searchValue, setSearchValue] = useState('');

    // 검색 버튼 클릭시 플래그를 저장할 상태
    const [isSearched, setIsSearched] = useState<boolean>(false);

    // 입력값이 변경될 때마다 호출되는 함수
    // const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    //     setSearchValue(e.target.value);
    // };

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
        }
        // 플래그를 true로 변경
        setIsSearched(true);
    };

    const terminalMenu = () => {
        if(isSearched){
            // return <TerminalAsList key={searchValue} terminalId={searchValue}/>
            return <TerminalStateList key={searchValue} terminalId={searchValue}/>

        }
        return null;
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
                    {/* 검색 버튼 */}
                    <button onClick={handleSearch}>검색</button>
                </div>

                {terminalMenu()}

            </section>
        </Styled.Container>
    )
}

export default Terminal;