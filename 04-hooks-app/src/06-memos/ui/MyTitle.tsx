import React from "react"

interface Props {
  title: string
}

/**
 * Lets you skip re-rendering a component when its props are unchanged.
 * @param Component — The component to memoize.
 * @param propsAreEqual — A function that will be used to determine if the props have changed.
 */
export const MyTitle = React.memo(({ title }: Props) => {

  console.log('MyTitle re-render')

  return (
    <h1 className="text-3xl">{title}</h1>
  )
})