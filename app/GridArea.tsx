'use client';

import { useState, useEffect } from 'react';
import EntryModal from './EntryModal';


interface GridAreaProps {
  // Define your props here

}

const GridArea: React.FC<GridAreaProps> = (props) => {
  // Add your component logic here

  const [backgroundColor1, setBackgroundColor1] = useState(false);
  const [backgroundColor2, setBackgroundColor2] = useState(false);
  const [backgroundColor3, setBackgroundColor3] = useState(false);
  const [backgroundColor4, setBackgroundColor4] = useState(false);
  const [backgroundColor5, setBackgroundColor5] = useState(false);
  const [backgroundColor6, setBackgroundColor6] = useState(false);
  const [backgroundColor7, setBackgroundColor7] = useState(false);
  const [backgroundColor8, setBackgroundColor8] = useState(false);
  const [backgroundColor9, setBackgroundColor9] = useState(false);

  const [dialogOpen, setDialogOpen] = useState(false);

  const onSubmit = () => {
    console.log('Submitted');
    setDialogOpen(false);
  }

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&dates=2010-01-01,2018-12-31`)
      const data = await response.json()
      console.log(data)
    }
    getData();
  }, [])

  return (
    <>
        <div className="flex flex-cols self-center justify-center h-192 w-176">

            {/* Column 1 */}
            <div className="flex flex-col basis-1/4">
              <div className="basis-1/12"></div>
              <button className="basis-1/3">Poopman</button>
              <button className="basis-1/3">Poopman</button>
              <button className="basis-1/3">Poopman</button>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col basis-1/2">
            <div className="basis-1/12 self-center justify-center">Poopman</div>
            <button onMouseEnter={() => setBackgroundColor1(true)} onMouseLeave={() => setBackgroundColor1(false)} onClick={() => setDialogOpen(true)} className={`basis-1/3 ring ring-black ${ backgroundColor1 ? 'bg-orange-300' : 'bg-orange-200' }`}>Hi</button>
            <button onMouseEnter={() => setBackgroundColor2(true)} onMouseLeave={() => setBackgroundColor2(false)} onClick={() => setDialogOpen(true)} className={`basis-1/3 ring ring-black ${ backgroundColor2 ? 'bg-orange-300' : 'bg-orange-200' }`}>Poopman</button>
            <button onMouseEnter={() => setBackgroundColor3(true)} onMouseLeave={() => setBackgroundColor3(false)} onClick={() => setDialogOpen(true)} className={`basis-1/3 ring ring-black ${ backgroundColor3 ? 'bg-orange-300' : 'bg-orange-200' }`}>Poopman</button>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col basis-1/2">
            <div className="basis-1/12 self-center">Poopman</div>
            <button onMouseEnter={() => setBackgroundColor4(true)} onMouseLeave={() => setBackgroundColor4(false)} onClick={() => setDialogOpen(true)} className={`basis-1/3 ring ring-black ${ backgroundColor4 ? 'bg-orange-300' : 'bg-orange-200' }`}>Poopman</button>
            <button onMouseEnter={() => setBackgroundColor5(true)} onMouseLeave={() => setBackgroundColor5(false)} onClick={() => setDialogOpen(true)} className={`basis-1/3 ring ring-black ${ backgroundColor5 ? 'bg-orange-300' : 'bg-orange-200' }`}>Poopman</button>
            <button onMouseEnter={() => setBackgroundColor6(true)} onMouseLeave={() => setBackgroundColor6(false)} onClick={() => setDialogOpen(true)} className={`basis-1/3 ring ring-black ${ backgroundColor6 ? 'bg-orange-300' : 'bg-orange-200' }`}>Poopman</button>
            </div>

            {/* Column 4 */}
            <div className="flex flex-col basis-1/2">
            <div className="basis-1/12 self-center">Poopman</div>
            <button onMouseEnter={() => setBackgroundColor7(true)} onMouseLeave={() => setBackgroundColor7(false)} onClick={() => setDialogOpen(true)} className={`basis-1/3 ring ring-black ${ backgroundColor7 ? 'bg-orange-300' : 'bg-orange-200' }`}>Poopman</button>
            <button onMouseEnter={() => setBackgroundColor8(true)} onMouseLeave={() => setBackgroundColor8(false)} onClick={() => setDialogOpen(true)} className={`basis-1/3 ring ring-black ${ backgroundColor8 ? 'bg-orange-300' : 'bg-orange-200' }`}>Poopman</button>
            <button onMouseEnter={() => setBackgroundColor9(true)} onMouseLeave={() => setBackgroundColor9(false)} onClick={() => setDialogOpen(true)} className={`basis-1/3 ring ring-black ${ backgroundColor9 ? 'bg-orange-300' : 'bg-orange-200' }`}>Poopman</button>
            </div>

        </div>

        <EntryModal isOpen={dialogOpen} onClose={() => setDialogOpen(false)} onSubmit={onSubmit} />
    </>
  );
};

export default GridArea;
