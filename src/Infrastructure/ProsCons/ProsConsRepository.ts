import {useApiFetch} from "~/src/Infrastructure/Api/Fetch";
import {ProsConsContactFormRequest} from "~/src/Model/ProsConsContactForm/ProsConsContactForm";

export const useProsConsRepository = () => {
    const {post} = useApiFetch()

    return {
        sendEmail: (request: ProsConsContactFormRequest) => post<void>('/cv', request)
    }
}