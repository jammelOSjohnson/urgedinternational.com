import React, { useEffect, useState } from 'react';
import { useAppData } from '../../../Context/AppDataContext';



export const MailBoxNumber: React.FC = function MailBoxNumber() {
    var { value }  = useAppData();
    var { mailbox_Num } = value;

    var [mailboxNum, setMailboxNum] = useState('');

    useEffect(() => {
        if(mailbox_Num === undefined){

        }else{
            setMailboxNum(mailbox_Num);
        }
    }, [mailbox_Num])
    
    if(mailboxNum != ''){
        return (
            <>
                <span style={{color: "#FF5E14", textDecoration: "underline"}}>
                    {mailboxNum}
                </span>
            </>
        );
    }else{
        return (
            <>
                <span style={{color: "#FF5E14", textDecoration: "underline"}}>
                    MBNUM
                </span>
            </>
        );
    }
    
}
