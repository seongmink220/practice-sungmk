import React, {useEffect, useState} from 'react';
// import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface TerminalAsListProps {
    terminalId?: string;
}

interface TerminalInfo
{
    terminalId: string | null,
    terminalSn: string | null,
    terminalVer: string | null,
    merchantName: string | null,
    presentName: string | null,
    tel: string | null,
    address: string | null,
    addressDetail: string | null,
    businessNo: string | null,
    bizType: string | null,
    presentRegNo: string | null,
    merchantType: string | null,
    connectCode: string | null,
    securityLevel: string | null,
    groupCode: string | null,
    saleType: string | null,
    dnsFlag: string | null,
    stateFlag: string | null,
    useFlag: string | null,
    enableServiceList: string | null,
    lastDnLdDate: string | null,
    lastDnLdTime: string | null,
    lastAdjustReqDate: string | null,
    temp: string | null,
    categoryCode: string | null,
    agentCode: string | null,
    vanTerminalId: string | null,
    orgTerminalId1: string | null,
    orgTerminalId2: string | null,
    orgTerminalId3: string | null,
    pgMerchNbr: string | null,
    vanCode: string | null,
    procId: string | null,
    afterData: string | null,
    newTerminalId: string | null,
    code: string | null,
    organizationPath: string | null,
    model: string | null,
    modem: string | null,
    modemSN: string | null,
    modemInfo: string | null,
    place: string | null,
    transactionNo: string | null,
    isSoldOut: string | null,
    isControlError: string | null,
    isPdError: string | null,
    isEmptyCol: string | null,
    company: string | null,
    userName: string | null,
    userId: string | null,
    aspCharge: string | null,
    placeCode: string | null,
    placeNo: string | null,
    accessStatus: string | null,
    organ: string | null,
    controlError: string | null,
    pdError: string | null,
    isExpire: string | null,
    emptyCol: string | null,
    soldOut: string | null,
    tranDate: string | null,
    tranDate2: string | null,
    finalTranDate: string | null,
    isTradeIn: string | null,
    csMemo: string | null,
    memo: string | null,
    tmsFlag: string | null,
    cardId: string | null,
    responseDate: string | null,
    resCode: string | null
}

const fetchTerminalInfo = async (terminalId: string): Promise<TerminalInfo> => {
    const response = await axios.get<TerminalInfo>(`https://devapi.ubcn.co.kr:17881/vmms/terminals/${terminalId}`);
    console.log("response.data==" + response.data.terminalId)
    return response.data;
};



const TerminalAsList: React.FC<TerminalAsListProps> = ({ terminalId }) => {

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
    if (!TerminalInfo) return null;

    return (
        <div>
            <h3>Terminal Information</h3>
            <p>ID: {TerminalInfo.code}</p>
            <p>Name: {TerminalInfo.merchantName}</p>
            {/* 필요한 데이터를 여기에 추가합니다. */}
        </div>
    );

};

export default TerminalAsList;