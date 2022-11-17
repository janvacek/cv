export enum ProsConsType {
	PRO = 'pro',
	CON = 'con',
	NOTE = 'note'
}

export interface ProsConsItem {
	id: string
	text: string
	type: ProsConsType
}