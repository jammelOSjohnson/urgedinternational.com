import React, { useEffect, useState } from 'react';
import { useAppData } from '../../../Context/AppDataContext';



export const MailBoxNumber: React.FC = function MailBoxNumber() {
    var { value }  = useAppData();
    var { mailbox_Num, fetchAddress, userInfo } = value;

    var [mailboxNum, setMailboxNum] = useState('');

    var onload = async function onload(){
        await fetchAddress(userInfo._id, value);
    }

    useEffect(() => {
        if(mailbox_Num === undefined){
            onload();
        }else{
            setMailboxNum(mailbox_Num);
        }
    }, [mailbox_Num])
    
    if(mailboxNum != ''){
        return (
            <>
                <span>
                    {mailboxNum}
                </span>
            </>
        );
    }else{
        return (
            <>
                <span>
                    MBNUM
                </span>
            </>
        );
    }
    
}

export default MailBoxNumber;
