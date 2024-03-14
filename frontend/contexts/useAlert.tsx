import React, { createContext, useContext, useState } from 'react';

type AlertType = 'success' | 'error';

interface AlertContextType {
  showAlert: boolean;
  alertType: AlertType;
  alertMessage: string;
  showAlertMessage: (type: AlertType, message: string) => void;
}

export const AlertContext = createContext<AlertContextType | null>(null);

export const useAlertContext = (): AlertContextType => {
  const context = useContext(AlertContext);
  if (!context) {
    return {
        showAlert: false,
        alertType: 'success',
        alertMessage: '',
        showAlertMessage: () => {},
    };
  }
  return context;
};

interface AlertProviderProps{
    children: React.ReactNode;
}

const AlertProvider: React.FC<AlertProviderProps> = ({ children }) => {
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState<AlertType>('success');

    const showAlertMessage = (type: AlertType, message: string) => {
        setAlertType(type);
        setAlertMessage(message);
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 3000);
    };

    const contextValue: AlertContextType = {
        showAlert,
        alertType,
        alertMessage,
        showAlertMessage,
    };

    return <AlertContext.Provider value={contextValue}>
        {children}
    </AlertContext.Provider>;
};

export default AlertProvider;