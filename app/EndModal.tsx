import { Dialog } from '@headlessui/react';

interface EndModalProps {
    endModalIsOpen: boolean;
    setEndModalIsOpen: (isOpen: boolean) => void;
    guessesCorrect: number;
}

const EntryModal: React.FC<EndModalProps> = ({ endModalIsOpen, setEndModalIsOpen, guessesCorrect }) => {

  return (
    <Dialog open={endModalIsOpen} onClose={() => setEndModalIsOpen(false)}>
      <Dialog.Overlay className="fixed inset-0 bg-black opacity-30 " />
      <div className="fixed inset-0 flex flex-col items-center justify-center">
        <div className="flex flex-col justify-between bg-white w-144 h-144 rounded-lg p-4 shadow-lg">
          <div className="flex flex-col justify-start">
            <Dialog.Title className="text-2xl font-bold">Good Game!</Dialog.Title>
          </div>
          <div className="flex flex-col justify-start">
            Guesses Correct: {guessesCorrect}
          </div>
          <div className="flex justify-between gap-5">
            <button className="mt-4 px-4 py-2 w-full self-center bg-blue-500 text-white rounded" onClick={() => setEndModalIsOpen(false)}>
                Close
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default EntryModal;
