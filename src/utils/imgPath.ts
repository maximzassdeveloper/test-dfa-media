import { IMG_URL } from '@/config/const'

export const imgPath = (path: string, width = 0) => {
	if (width !== 0) {
		return `${IMG_URL}/w${width}${path}`
	}

	return `${IMG_URL}/original${path}`
}
