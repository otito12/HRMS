import React from 'react';
import PageHeader from '../../components/PageHeader';
import TelegramIcon from '@mui/icons-material/Telegram';

export default function EmployeeMessenger() {
    return (
        <>
        <PageHeader
          title = "Employee Messenger"
          subTitle = "Message Employee's in your organization"
          icon = {<TelegramIcon fontSize="Large"/>}
          />
        </>
    )
}
