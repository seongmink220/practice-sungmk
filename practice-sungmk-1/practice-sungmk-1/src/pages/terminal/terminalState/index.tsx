import React, {useEffect, useState} from 'react'
import axios from "axios";
import {TerminalState} from './TerminalState'

interface TerminalAsListProps {
    terminalId?: string;
}

const fetchTerminalState = async (terminalId: string): Promise<TerminalState[]> => {
    const response = await axios.get<TerminalState[]>(`https://devapi.ubcn.co.kr:17881/vmms/terminals/${terminalId}/status`);
    console.log("response.data==" + response.data)
    return response.data;
};

const TerminalStateList: React.FC<TerminalAsListProps> = ({ terminalId }) => {
    const [terminalStates, setTerminalStates] = useState<TerminalState[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const data = await fetchTerminalState(terminalId || '');
                setTerminalStates(data);
            } catch (error) {
                console.error('terminalInfo fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [terminalId]);

    if (loading) return <div>Loading...</div>;
    if (terminalStates.length === 0) return <div>No data available</div>;

    return (
        <div>
            <h3>Terminal Status</h3>
            <table style={{ border: '1px solid black', borderCollapse: 'collapse', width: '100%', textAlign : 'center'}}>
                <thead style={{ border: '1px solid black', borderCollapse: 'collapse', width: '100%' }}>
                <tr>
                    <th >Terminal ID</th>
                    <th>Terminal SN</th>
                    {/* 다른 필요한 헤더 항목들 */}
                </tr>
                </thead>
                <tbody>
                {terminalStates.map((terminal, index) => (
                    <tr key={index} style={{ border: '1px solid black', borderCollapse: 'collapse', width: '100%' }}>
                        <td>{terminal.pdError}</td>
                        <td>{terminal.soldOut}</td>
                        {/* 필요한 다른 데이터 출력 */}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );

};

export default TerminalStateList;