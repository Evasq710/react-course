import { useRef } from "react"

export const FocusScreen = () => {

  // A way to persist data between hook calls
  // useRef returns a mutable ref object whose .current property is initialized to the passed argument
  // The returned object will persist for the full lifetime of the hook and won't produce re-renders when its content changes
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    console.log(inputRef.current?.value);
    inputRef.current?.select();
  }

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-thin text-white">Focus Screen</h1>
      <input
        ref={inputRef}
        type="text"
        className="bg-white text-black px-4 py-2 rounded-md"
        autoFocus
      />
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
      >
        Set Focus
      </button>
    </div>
  )
}