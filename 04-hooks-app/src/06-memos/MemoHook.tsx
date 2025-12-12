import { useCallback, useState } from "react"
import { MyTitle } from "./ui/myTitle"
import { MySubtitle } from "./ui/MySubtitle";

export const MemoHook = () => {

  const [title, setTitle] = useState('Hola');
  const [subtitle, setSubtitle] = useState('Mundo');

  // This function will have a different memory address with every render,
  // so it could trigger a re-render in MySubtitle Component, event though we are using React.memo

  // NO: const handleMyAPICall = () => {
  // OK: useCallback: will return a memoized version of the callback that only changes if one of the inputs has changed.
  const handleMyAPICall = useCallback(() => {
    console.log('Llamar a mi API - ', subtitle);
  }, [subtitle]);

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-thin text-white">MemoApp</h1>

      <MyTitle title={title} />
      <MySubtitle subtitle={subtitle} callMyAPI={handleMyAPICall} />

      <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={() => setTitle('Hello ' + new Date().getTime())}
      >
        Cambiar título
      </button>

      <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        // onClick={() => setSubtitle('World ' + new Date().getTime())}
        onClick={() => setSubtitle('World ')}
      >
        Cambiar subtítulo
      </button>

    </div>
  )
}
