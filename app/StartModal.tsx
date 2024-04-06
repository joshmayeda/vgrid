import { Dialog } from '@headlessui/react';

interface StartModalProps {
    startModalIsOpen: boolean;
    setStartModalIsOpen: (isOpen: boolean) => void;
}

const EntryModal: React.FC<StartModalProps> = ({ startModalIsOpen, setStartModalIsOpen }) => {

  return (
    <Dialog open={startModalIsOpen} onClose={() => setStartModalIsOpen(false)}>
      <Dialog.Overlay className="fixed inset-0 bg-black opacity-30 " />
      <div className="fixed inset-0 flex flex-col items-center justify-center">
        <div className="flex flex-col justify-between bg-white w-144 h-144 rounded-lg p-4 shadow-lg">
          <div className="flex flex-col justify-start">
            <Dialog.Title className="text-2xl font-bold">Welcome to VGrid!</Dialog.Title>
          </div>
          <div className="flex flex-col justify-start">
            <p className="text-lg">Click on a square and enter your guess!</p>
          </div>
          <div className="flex justify-between gap-5">
            <button className="mt-4 px-4 py-2 w-full self-center bg-blue-500 text-white rounded" onClick={() => setStartModalIsOpen(false)}>
                Close
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default EntryModal;
