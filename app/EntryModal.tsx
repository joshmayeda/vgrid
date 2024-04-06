import { Dialog } from '@headlessui/react';
import SearchBar from './SearchBar';

interface EntryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  allGames: any[];
  currentGame: string;
  setCurrentGame: (game: string) => void;
}

const EntryModal: React.FC<EntryModalProps> = ({ isOpen, onClose, onSubmit, allGames, currentGame, setCurrentGame }) => {

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <Dialog.Overlay className="fixed inset-0 bg-black opacity-30 " />

      <div className="fixed inset-0 flex flex-col items-center justify-center">
        <div className="flex flex-col justify-between bg-white w-144 h-144 rounded-lg p-4 shadow-lg">
          <div className="flex flex-col justify-start">
            <Dialog.Title className="text-2xl font-bold">Enter Guess</Dialog.Title>
            <SearchBar allGames={allGames} currentGame={currentGame} setCurrentGame={setCurrentGame} />
          </div>
          <div className="flex justify-between gap-5">
            <button className="mt-4 px-4 py-2 w-1/2 self-center bg-blue-500 text-white rounded" onClick={onClose}>
                Close
            </button>
            <button className="mt-4 px-4 py-2 w-1/2 self-center bg-green-500 text-white rounded" onClick={onSubmit}>
                Submit
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default EntryModal;
