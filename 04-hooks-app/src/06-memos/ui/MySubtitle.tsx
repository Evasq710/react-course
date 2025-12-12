import { memo } from "react";

interface Props {
  subtitle: string;
}

/**
 * Lets you skip re-rendering a component when its props are unchanged.
 * @param Component — The component to memoize.
 * @param propsAreEqual — A function that will be used to determine if the props have changed.
 */
export const MySubtitle = memo(({ subtitle }: Props) => {

  console.log('MySubtitle re-render')

  return (
    <>
      <h6 className="text-2xl font-bold">{subtitle}</h6>

      <button className="bg-indigo-500 text-white px-2 py-1 rounded-md cursor-pointer">
        Llamar a función
      </button>
    </>
  )
})