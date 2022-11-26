import {ProsConsType} from "~/src/Model/ProsConsSummary/ProsConsItem";

export interface ProsConsContactFormRequestItem {
    type: ProsConsType
    text: string
}

export interface ProsConsContactFormRequest {
    name: string
    email: string
    note: string
    items: ProsConsContactFormRequestItem[]
}