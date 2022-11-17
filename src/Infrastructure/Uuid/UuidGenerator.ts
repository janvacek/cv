import { v4 as uuidv4 } from 'uuid'

export const useUuidGenerator = () => {
	const generate = () => {
		return uuidv4()
	}

	return {
		generate
	}
}