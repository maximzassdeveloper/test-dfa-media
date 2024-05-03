export function isFocusable(element: HTMLElement | ChildNode, onlyTabbed = true) {
	if (!(element instanceof HTMLElement)) {
		return false
	}
	// Element with tabIndex < 0 may be focusable, but he won't be in the tabbing order
	if (onlyTabbed && element.tabIndex < 0) {
		return false
	}

	if (element.getAttribute('disabled')) {
		return false
	}

	return Boolean(
		element instanceof HTMLInputElement ||
			element instanceof HTMLSelectElement ||
			element instanceof HTMLTextAreaElement ||
			element instanceof HTMLButtonElement ||
			element instanceof HTMLAreaElement ||
			element instanceof HTMLIFrameElement ||
			(element instanceof HTMLAnchorElement && element.href) ||
			element.tabIndex >= 0 ||
			element.isContentEditable
	)
}
