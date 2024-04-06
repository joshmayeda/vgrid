import { useState, Fragment } from 'react'
import { Combobox } from '@headlessui/react'

interface SearchBarProps {
    allGames: any[];
    currentGame: string;
    setCurrentGame: (game: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ allGames, currentGame, setCurrentGame }) => {
    const [query, setQuery] = useState('')

  const filteredGames =
    query === ''
      ? allGames
      : allGames.filter((game) => {
            return game && game.name && game.name.toLowerCase().match(query.toLowerCase())
        })

  if (!allGames.length) {
    return <div>Loading...</div>;
  }

  return (
    <Combobox value={currentGame} onChange={setCurrentGame}>
      <Combobox.Input onChange={(event) => setQuery(event.target.value)} style={{ border: '2px solid black'  }}/>
      <Combobox.Options style={{ overflow: 'auto', maxHeight: '22rem' }}>
        {query && filteredGames.map((game) => (
          <Combobox.Option key={game.name} value={game.name}>
            {game.name}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  )
  };
  
  export default SearchBar;
  