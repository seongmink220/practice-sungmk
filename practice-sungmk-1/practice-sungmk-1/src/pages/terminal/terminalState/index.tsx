import React, {useEffect, useState} from 'react'
import axios from "axios";

interface TerminalAsListProps {
    terminalId?: string;
}

export interface TerminalState {
    terminalId: string,
    terminalSn: string,
    terminalVer: string,
    merchantName: string,
    presentName: string,
    tel: string,
    address: string,
    addressDetail: string,
    businessNo: string,
    bizType: string,
    presentRegNo: string,
    merchantType: string,
    connectCode: string,
    securityLevel: string,
    groupCode: string,
    saleType: string,
    dnsFlag: string,
    stateFlag: string,
    useFlag: string,
    enableServiceList: string,
    lastDnLdDate: string,
    lastDnLdTime: string,
    lastAdjustReqDate: string,
    temp: string,
    categoryCode: string,
    agentCode: string,
    vanTerminalId: string,
    orgTerminalId1: string,
    orgTerminalId2: string,
    orgTerminalId3: string,
    pgMerchNbr: string,
    vanCode: string,
    procId: string,
    afterData: string,
    newTerminalId: string,
    code: string,
    organizationPath: string,
    model: string,
    modem: string,
    modemSN: string,
    modemInfo: string,
    place: string,
    transactionNo: string,
    isSoldOut: string,
    isControlError: string,
    isPdError: string,
    isEmptyCol: string,
    company: string,
    userName: string,
    userId: string,
    aspCharge: string,
    placeCode: string,
    placeNo: string,
    accessStatus: string,
    organ: string,
    controlError: string,
    pdError: string,
    isExpire: string,
    emptyCol: string,
    soldOut: string,
    tranDate: string,
    tranDate2: string,
    finalTranDate: string,
    isTradeIn: string,
    csMemo: string,
    memo: string,
    tmsFlag: string,
    cardId: string,
    responseDate: string,
    resCode: string
}

const fetchTerminalState = async (terminalId: string): Promise<TerminalState> => {
    const response = await axios.get<TerminalState>(`https://devapi.ubcn.co.kr:17881/vmms/terminals/${terminalId}/status`);
    console.log("response.data==" + response.data)
    return response.data;
};

const TerminalStateList : React.FC<TerminalAsListProps> = ({ terminalId }) => {

    const [TerminalState, setTerminalState] = useState<TerminalState[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const data = await fetchTerminalState(terminalId || '');
                setTerminalState([data]);
                console.log("TerminalState==" + TerminalState[0]);
                // console.log("TerminalState[0]==" + TerminalState);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [terminalId]);

    if (loading) return <div>Loading...</div>;
    if (TerminalState.length === 0) return <div>No data available</div>;

    return (
        <div>
            <h3>Terminal Status</h3>
            <table>
                <thead>
                <tr>
                    <th>Terminal ID</th>
                    <th>Terminal SN</th>
                    {/* 다른 필요한 헤더 항목들 */}
                </tr>
                </thead>
                <tbody>
                {TerminalState.map((terminal, index) => (
                    <tr key={index}>
                        <td>{terminal.terminalId}</td>
                        <td>{terminal.terminalSn}</td>
                        {/* 필요한 다른 데이터 출력 */}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );

};

export default TerminalStateList;