import {useContext} from "react";
import {WebConfig} from "~/src/Model/WebConfig/WebConfig";
import {ConfigContext} from "~/src/Infrastructure/WebConfigContext/ConfigContext";

export const useApiFetch = () => {
    const webConfig = useContext<WebConfig>(ConfigContext)

    const post = <T>(url: string, request: any) => {
        return new Promise<T>(resolve =>
            fetch(`${webConfig.apiUrl}${url}`, {
                method: 'POST',
                mode: 'no-cors',
                body: JSON.stringify(request),
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(response => resolve(response as T))
        )
    }

    return {
        post
    }
}