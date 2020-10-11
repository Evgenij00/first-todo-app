import { createContext } from "react";

type AlertContextType = {
    showAlert: (text: string, type: string) => void;
    hideAlert: () => void;
    alert: any;
}

export const AlertContext = createContext<Partial<AlertContextType>>({})