export enum ProsConsType {
	PRO = 'pro',
	CON = 'con',
	NOTE = 'note'
}

export interface ProsConsItem {
	text: string
	type: ProsConsType
}