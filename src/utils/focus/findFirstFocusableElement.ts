import { isFocusable } from './isFocusable'

export function findFirstFocusableElement(
	element: HTMLElement | ChildNode,
	exclude?: (HTMLElement | ChildNode)[]
): HTMLElement | null {
	const childrens = element.childNodes

	for (let i = 0; i < childrens.length; i++) {
		const el = childrens[i]

		if (exclude) {
			const isExcludedEl = !!exclude.find((excludedEl) => excludedEl.isEqualNode(el))
			if (isExcludedEl) {
				continue
			}
		}

		if (isFocusable(el) && el instanceof HTMLElement) {
			return el
		}

		const childEl = findFirstFocusableElement(el, exclude)
		if (childEl) {
			return childEl
		}
	}

	return null
}
