type Config<TagName extends keyof HTMLElementTagNameMap> = {
  tagName?: TagName
  parent?:
    | keyof HTMLElementTagNameMap
    | `#${string}`
    | `.${string}`
    | HTMLElement
  prepend?: boolean
}

// FIXME: types, too much 'if'
const createElementAndAppendToDOM = <
  TagName extends keyof HTMLElementTagNameMap
>(
  elementId: string,
  config?: Config<TagName>
) => {
  const { tagName = 'div', parent = 'body', prepend = true } = config ?? {}

  let element: HTMLElementTagNameMap[TagName] | null = null

  element = document.querySelector(`#${elementId}`)

  if (element === null) {
    element = document.createElement(tagName) as HTMLElementTagNameMap[TagName]

    element.setAttribute('id', elementId)

    let parentElement: HTMLElement | null = null

    if (parent instanceof HTMLElement) {
      parentElement = parent
    } else {
      parentElement = document.querySelector(parent)
    }

    if (parentElement === null) {
      throw new Error(`Parent '${parent}' element is not found.`)
    }

    parentElement[prepend ? 'prepend' : 'append'](element)
  }

  if (element.tagName.toLowerCase() !== tagName) {
    throw new Error(
      `'${element.tagName.toLowerCase()}' element with id '#${elementId}' should be '${tagName}'.`
    )
  }

  return element
}

export { createElementAndAppendToDOM }
