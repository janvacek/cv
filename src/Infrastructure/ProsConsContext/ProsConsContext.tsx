import { createContext, ReactNode, useState } from 'react'
import { ProsConsItem, ProsConsType } from '~/src/Model/ProsConsSummary/ProsConsItem'
import { useUuidGenerator } from '~/src/Infrastructure/Uuid/UuidGenerator'


export interface ProsConsContextState {
	items: ProsConsItem[]
}

const emptyProsConsContextState: ProsConsContextState = {
	items: []
}

export interface ProsConsContextType {
	prosCons: ProsConsContextState
	addItem: (text: string, type: ProsConsType, id?: string) => void
	removeItem: (id: string) => void
}

interface ProsConsContextProviderProps {
	children: ReactNode
}

export const ProsConsContext = createContext<ProsConsContextType>({
	prosCons: emptyProsConsContextState,
	removeItem: () => {},
	addItem: () => {}
})

export const ProsConsContextProvider = (props: ProsConsContextProviderProps) => {
	const [prosCons, setProsCons] = useState<ProsConsContextState>({ items: [] })
	const { generate } = useUuidGenerator()

	const addItem = (text: string, type: ProsConsType, id: string = generate()) => {
		setProsCons({ items: [...prosCons.items, { text, type, id }] })
	}

	const removeItem = (id: string) => {
		setProsCons({ items: prosCons.items.filter(i => i.id !== id) })
	}

	return (
		<ProsConsContext.Provider value={{ prosCons, addItem, removeItem }}>
			{props.children}
		</ProsConsContext.Provider>
	)
}