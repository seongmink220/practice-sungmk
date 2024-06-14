import React, {useEffect, useState} from 'react';
// import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import {TerminalInfo} from './terminalInfo'

interface TerminalInfoProps {
    terminalId?: string;
}

const fetchTerminalInfo = async (terminalId: string): Promise<TerminalInfo> => {
    const response = await axios.get<TerminalInfo>(`https://devapi.ubcn.co.kr:17881/vmms/terminals/${terminalId}`);
    console.log("response.data==" + response.data)
    return response.data;
};


const TerminalInfoList : React.FC<TerminalInfoProps> = ({ terminalId }) => {

    const [TerminalInfo, setTerminalInfo] = useState<TerminalInfo | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const data = await fetchTerminalInfo(terminalId || '');
                setTerminalInfo(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [terminalId]);

    if (loading) return <div>Loading...</div>;
    if (!TerminalInfo) return <div>No data available</div>;

    return (
        <div>
            <h3>Terminal Information</h3>
            <p>ID: {TerminalInfo.code}</p>
            <p>Name: {TerminalInfo.merchantName}</p>
            {/* 필요한 데이터를 여기에 추가합니다. */}
        </div>
    );

};

export default TerminalInfoList;