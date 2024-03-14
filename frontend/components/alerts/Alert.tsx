import AlertSuccess from "./AlertSuccess";
import AlertError from "./AlertError";

import { useAlertContext } from "@/contexts/useAlert";

const Alert = () => {
    const { showAlert, alertType, alertMessage } = useAlertContext();

    return showAlert ? (
      <>
        {
            alertType === 'success' ?
                <AlertSuccess text={alertMessage}></AlertSuccess>
            :
                <AlertError text={alertMessage}></AlertError>
        }
      </>
    ) : null;
  };
  
  export default Alert;