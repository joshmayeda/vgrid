'use client';

import { useState, useEffect } from 'react';
import EntryModal from './EntryModal';

interface GridAreaProps {
  topCategories: string[];
  randomizeTopCategories: () => void;
  platforms: string[];
  allGames: any[];
  setEndModalIsOpen: (isOpen: boolean) => void;
  guessesLeft: number;
  setGuessesLeft: (guesses: number) => void;
  guessesCorrect: number;
  setGuessesCorrect: (guesses: number) => void;
}
//TODO: Add check to see if puzzle is even possible

const GridArea: React.FC<GridAreaProps> = ({ topCategories, platforms, randomizeTopCategories, allGames, setEndModalIsOpen, guessesLeft, setGuessesLeft, guessesCorrect, setGuessesCorrect }) => {

  const [backgroundColor1, setBackgroundColor1] = useState(false);
  const [backgroundColor2, setBackgroundColor2] = useState(false);
  const [backgroundColor3, setBackgroundColor3] = useState(false);
  const [backgroundColor4, setBackgroundColor4] = useState(false);
  const [backgroundColor5, setBackgroundColor5] = useState(false);
  const [backgroundColor6, setBackgroundColor6] = useState(false);
  const [backgroundColor7, setBackgroundColor7] = useState(false);
  const [backgroundColor8, setBackgroundColor8] = useState(false);
  const [backgroundColor9, setBackgroundColor9] = useState(false);

  const [backgroundImage1, setBackgroundImage1] = useState('');
  const [backgroundImage2, setBackgroundImage2] = useState('');
  const [backgroundImage3, setBackgroundImage3] = useState('');
  const [backgroundImage4, setBackgroundImage4] = useState('');
  const [backgroundImage5, setBackgroundImage5] = useState('');
  const [backgroundImage6, setBackgroundImage6] = useState('');
  const [backgroundImage7, setBackgroundImage7] = useState('');
  const [backgroundImage8, setBackgroundImage8] = useState('');
  const [backgroundImage9, setBackgroundImage9] = useState('');

  const [dialogOpen, setDialogOpen] = useState(false);

  const [currentPlatform, setCurrentPlatform] = useState('');
  const [currentCategory, setCurrentCategory] = useState('');
  const [currentSquare, setCurrentSquare] = useState(0);
  const [currentGame, setCurrentGame] = useState('');

  const checkValid = (game: any) => {
    let correct = false;
    const gameData = allGames.find((g) => g.name === game);
    const gamePlatforms = gameData.platforms.map((platform: any) => platform.platform.name);
    console.log(gameData);
    if (gamePlatforms.includes(currentPlatform)) { // Check if the game is on the platform
      console.log('platform Correct');
      if(currentCategory.includes('One Word Title')) { // Check if the game is a one word title
        const gameName = gameData.name;
        const gameNameSplit = gameName.split(' ');
        if (gameNameSplit.length === 1) {
          console.log('One word Title Correct');
          correct = true;
        } else {
          console.log('One word Title Incorrect');
        }
      } else if (currentCategory.includes('ESRB')) { // Check if the game has the correct ESRB rating
        const gameRating = gameData.esrb_rating.name;
        if (currentCategory.includes(gameRating)) {
          console.log('ESRB Correct');
          correct = true;
        } else {
          console.log('ESRB Incorrect');
        }
      } else if (currentCategory.includes('Genre')) { // Check if the game has the correct genre
        const gameGenres = gameData.genres.map((genre: any) => genre.name);
        const gameGenre = currentCategory.split(':')[1].trim();
        if (gameGenres.includes(gameGenre)) {
          console.log('Genre Correct');
          correct = true;
        } else {
          console.log('Genre Incorrect');
        }
      } else if (currentCategory.includes('Platform Exclusive')) { // Check if the game is platform exclusive
        const gamePlatforms = gameData.platforms.map((platform: any) => platform.platform.name);
        if (gamePlatforms.length === 1) {
          console.log('Platform Exclusive Correct');
          correct = true;
        } else {
          console.log('Platform Exclusive Incorrect');
        }
      }
      if(correct){
        switch(currentSquare) {
          case 1: setBackgroundImage1(gameData.background_image); break;
          case 2: setBackgroundImage2(gameData.background_image); break;
          case 3: setBackgroundImage3(gameData.background_image); break;
          case 4: setBackgroundImage4(gameData.background_image); break;
          case 5: setBackgroundImage5(gameData.background_image); break;
          case 6: setBackgroundImage6(gameData.background_image); break;
          case 7: setBackgroundImage7(gameData.background_image); break;
          case 8: setBackgroundImage8(gameData.background_image); break;
          case 9: setBackgroundImage9(gameData.background_image); break;
        }
        setGuessesCorrect(guessesCorrect + 1);
      }
    } else {
      console.log('platform Incorrect');
    }
    setGuessesLeft(guessesLeft - 1);
    if(guessesLeft === 1) {
      setEndModalIsOpen(true);
    }
  };

  const onSubmit = () => {
    console.log('Submitted');
    checkValid(currentGame);
    setDialogOpen(false);
  }

  const clicked = (platform: string, category: string, square: number) => {
    setCurrentSquare(square);
    setCurrentPlatform(platform);
    setCurrentCategory(category);
    setDialogOpen(true);
  }

  return (
    <>
        <div className="flex flex-cols self-center justify-center h-192 w-176">

            {/* Column 1 */}
            <div className="flex flex-col basis-1/4">
              <div className="basis-1/12"></div>
              <button className="basis-1/3 mr-3">{platforms[0]}</button>
              <button className="basis-1/3 mr-3">{platforms[1]}</button>
              <button className="basis-1/3 mr-3">{platforms[2]}</button>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col basis-1/2">
            <div className="basis-1/12 self-center text-center">{topCategories[0]}</div>
            <img id='1' src={backgroundImage1} onMouseEnter={() => setBackgroundColor1(true)} onMouseLeave={() => setBackgroundColor1(false)} onClick={() => clicked(platforms[0], topCategories[0], 1)} className={`basis-1/3 ring ring-black ${ backgroundColor1 ? 'bg-orange-300' : 'bg-orange-200' }`} /> {/* square 1 */}
            <img id='4' src={backgroundImage4} onMouseEnter={() => setBackgroundColor2(true)} onMouseLeave={() => setBackgroundColor2(false)} onClick={() => clicked(platforms[1], topCategories[0], 4)} className={`basis-1/3 ring ring-black ${ backgroundColor2 ? 'bg-orange-300' : 'bg-orange-200' }`} /> {/* square 4 */}
            <img id='7' src={backgroundImage7} onMouseEnter={() => setBackgroundColor3(true)} onMouseLeave={() => setBackgroundColor3(false)} onClick={() => clicked(platforms[2], topCategories[0], 7)} className={`basis-1/3 ring ring-black ${ backgroundColor3 ? 'bg-orange-300' : 'bg-orange-200' }`} /> {/* square 7 */}
            </div>

            {/* Column 3 */}
            <div className="flex flex-col basis-1/2">
            <div className="basis-1/12 self-center text-center">{topCategories[1]}</div>
            <img id='2' src={backgroundImage2} onMouseEnter={() => setBackgroundColor4(true)} onMouseLeave={() => setBackgroundColor4(false)} onClick={() => clicked(platforms[0], topCategories[1], 2)} className={`basis-1/3 ring ring-black ${ backgroundColor4 ? 'bg-orange-300' : 'bg-orange-200' }`} /> {/* square 2 */}
            <img id='5' src={backgroundImage5} onMouseEnter={() => setBackgroundColor5(true)} onMouseLeave={() => setBackgroundColor5(false)} onClick={() => clicked(platforms[1], topCategories[1], 5)} className={`basis-1/3 ring ring-black ${ backgroundColor5 ? 'bg-orange-300' : 'bg-orange-200' }`} /> {/* square 5 */}
            <img id='8' src={backgroundImage8} onMouseEnter={() => setBackgroundColor6(true)} onMouseLeave={() => setBackgroundColor6(false)} onClick={() => clicked(platforms[2], topCategories[1], 8)} className={`basis-1/3 ring ring-black ${ backgroundColor6 ? 'bg-orange-300' : 'bg-orange-200' }`} /> {/* square 8 */}
            </div>

            {/* Column 4 */}
            <div className="flex flex-col basis-1/2">
            <div className="basis-1/12 self-center text-center">{topCategories[2]}</div>
            <img id='3' src={backgroundImage3} onMouseEnter={() => setBackgroundColor7(true)} onMouseLeave={() => setBackgroundColor7(false)} onClick={() => clicked(platforms[0], topCategories[2], 3)} className={`basis-1/3 ring ring-black ${ backgroundColor7 ? 'bg-orange-300' : 'bg-orange-200' }`} /> {/* square 3 */}
            <img id='6' src={backgroundImage6} onMouseEnter={() => setBackgroundColor8(true)} onMouseLeave={() => setBackgroundColor8(false)} onClick={() => clicked(platforms[1], topCategories[2], 6)} className={`basis-1/3 ring ring-black ${ backgroundColor8 ? 'bg-orange-300' : 'bg-orange-200' }`} /> {/* square 6 */}
            <img id='9' src={backgroundImage9} onMouseEnter={() => setBackgroundColor9(true)} onMouseLeave={() => setBackgroundColor9(false)} onClick={() => clicked(platforms[2], topCategories[2], 9)} className={`basis-1/3 ring ring-black ${ backgroundColor9 ? 'bg-orange-300' : 'bg-orange-200' }`} /> {/* square 9 */}
            </div>

        </div>

        <EntryModal isOpen={dialogOpen} onClose={() => setDialogOpen(false)} onSubmit={onSubmit} allGames={allGames} currentGame={currentGame} setCurrentGame={setCurrentGame} />
    </>
  );
};

export default GridArea;
