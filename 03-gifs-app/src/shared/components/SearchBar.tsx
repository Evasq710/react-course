import { useEffect, useState } from "react";

interface Props {
  placeholder?: string;
  onQuery: (query: string) => void;
}

export const SearchBar = ({ placeholder = "Buscar", onQuery }: Props) => {

  const [query, setQuery] = useState('');

  /**
   * Debouncer
   * @param effect — Imperative function that can return a cleanup function
   * @param deps — If present, effect will only activate if the values in the list change.
   *  - If deps is omittted, the 'effect' function will execute after every render of the component.
   *  - If deps is an empty array ([]), the 'effect' function will execute only once, when the component initially mounts
   *  - If deps is an array with values, the 'effect' function will re-execute whenever any of those values change
   * 
   * @param effect: @returns - Cleanup function. Executed in two main scenarios:
   *  1. Before the next re-render when dependencies change
   *  2. When the component unmounts
   */
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onQuery(query);
    }, 800);

    return () => {
      // If the user enters text provoking a change in the 'query' value before the timeout, this cleanup function will prevent the setTimeout's callback exectuion
      // This allows us to execute the onQuery function, only if the user is no longer writting
      clearTimeout(timeoutId);
    }
  }, [query]);


  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }

  const handleSearch = () => {
    onQuery(query);
    setQuery(''); // Setting the query value to '' allows us to erase the input field content, thanks to: value={query}
  }


  return (
    <div className="search-container">
      <input
        type="text"
        value={query}
        placeholder={placeholder}

        onChange={e => setQuery(e.target.value)}
        onKeyDown={handleEnter} // when the function is passed by reference, the event is automatically passed to it
      />
      <button
        onClick={handleSearch}
      >
        Buscar
      </button>
    </div>
  );
}