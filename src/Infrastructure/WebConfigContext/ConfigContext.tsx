import {createContext, ReactNode, useState} from 'react'
import {WebConfig} from "~/src/Model/WebConfig/WebConfig";
import {BaseWebConfig} from "~/src/Infrastructure/WebConfigContext/Config";


interface ConfigContextProviderProps {
    children: ReactNode
}

export const ConfigContext = createContext<WebConfig>(BaseWebConfig)

export const ConfigContextProvider = (props: ConfigContextProviderProps) => {
    const [webConfig] = useState<WebConfig>(BaseWebConfig)

    return (
        <ConfigContext.Provider value={webConfig}>
            {props.children}
        </ConfigContext.Provider>
    )
}