import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TerminalInfoTs } from '../terminalInfo/terminalInfo'

interface TerminalInfoProps {
    terminalId: string;
}

interface TerminalData {
    terminalData : TerminalInfoTs
}

function TerminalInfo({ terminalId }: TerminalInfoProps) {
    const [terminalData, setTerminalData] = useState<TerminalData | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                // 서버로 요청을 보내고 데이터를 받아옵니다.
                const response = await axios.get<TerminalData>(`'https://devapi.ubcn.co.kr:17881/vmms/terminals/` + terminalId);
                setTerminalData(response.data);
            } catch (error) {
                // 에러 발생 시 에러 상태를 업데이트합니다.
                setError('데이터를 가져오는 도중 오류가 발생했습니다.');
            } finally {
                setLoading(false);
            }
        };

        // terminalId가 변경될 때마다 fetchData 함수를 호출하여 데이터를 가져옵니다.
        // fetchData();
    }, [terminalId]);

    // 로딩 중이면 로딩 메시지를 표시합니다.
    if (loading) return <div>Loading...</div>;

    // 에러가 발생했을 경우 에러 메시지를 표시합니다.
    if (error) return <div>{error}</div>;

    // 데이터가 있는 경우 해당 데이터를 화면에 표시합니다.
    return (
        <div>
            <h3>TerminalInfo</h3>
            {terminalData && (
                <div>
                    {terminalData.terminalData.terminalId}
                </div>
            )}
        </div>
    );
}

export default TerminalInfo;
