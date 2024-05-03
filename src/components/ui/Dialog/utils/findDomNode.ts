import { ReactInstance, Component } from 'react'
import ReactDOM from 'react-dom'

type PropsNode = ReactInstance | HTMLElement | undefined | null

/**
 * Return if a node is a DOM node. Else will return by `findDomNode`
 */
export function findDomNode<T = Element | Text>(node: PropsNode): T | null {
  if (!node) {
    return null
  }

  if (node instanceof HTMLElement) {
    return node as unknown as T
  }

  if (node instanceof Component) {
    // eslint-disable-next-line react/no-find-dom-node
    return ReactDOM.findDOMNode(node) as unknown as T
  }

  return null
}
