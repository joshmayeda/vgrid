'use client';

import Image from 'next/image'
import Navbar from './Navbar'
import GridArea from './GridArea'
import { useState, useEffect } from 'react'
import fetchData from './api/data'
import removeDuplicates from './api/data1';
import StartModal from './StartModal'
//import getGames from './api/test';

export default function Home() {

  interface TopCategoriesCore {
    [key: string]: string[];
  }

  const modernPlatforms = [
    'PC', //4
    'PlayStation 5', //187
    'Xbox Series X/S', //186
    'PlayStation 4', //18
    'Xbox One', //1
    'Nintendo Switch', //7
    'Nintendo 3DS', //8
    'Wii U', //10
    'Wii', //11
    'PlayStation 3', //16
    'PS Vita', //19
    'PSP', //17
    'Xbox 360', //14
  ]

  const retroPlatforms = [

  ]

  const topCategoriesCore: TopCategoriesCore = {
    Genre: [
      'Action',
      'Indie',
      'Adventure',
      'RPG',
      'Strategy',
      'Shooter',
      'Casual',
      'Simulation',
      'Puzzle',
      'Platformer',
      'Massively Multiplayer',
      'Racing',
      'Sports',
      'Fighting',
    ],
    // Developer: [
    //   'Ubisoft',
    //   'Valve Software',
    //   'Feral Interactive',
    //   'Electronic Arts',
    //   'Square Enix',
    //   'Sony Interactive',
    //   'Capcom',
    //   'Bethesda',
    //   'SEGA',
    //   'Warner Bros. Interactive',
    //   'Telltale Games',
    //   'BANDAI NAMCO',
    //   '2K',
    //   'BioWare',
    //   'Gearbox Software',
    //   'Konami',
    //   'CD PROJEKT RED',
    //   'Naughty Dog',
    //   'Rockstar Games',
    //   'FromSoftware',
    //   'Activision',   
    // ],
    ESRB: [
      'Everyone',
      'Everyone 10+',
      'Teen',
      'Mature',
    ]
  }

  const topCategoriesWild = [
    'One Word Title (ignore "The")',
    'Platform Exclusive',
  ]

  const [platforms, setPlatforms] = useState<string[]>([]);
  const [topCategories, setTopCategories] = useState<string[]>([]);
  const [allGames, setAllGames] = useState<any[]>([]);
  const [startModalIsOpen, setStartModalIsOpen] = useState<boolean>(true);

  const randomizeTopCategories = () => {
    let random: string[] = [];
    let randomIndex = Math.floor(Math.random() * 2);
    for(let i = 0; i < 2; i++) {
      let key = Object.keys(topCategoriesCore)[randomIndex];
      //TODO: Fix error that occurs here sometimes VVV (TypeError: Cannot read properties of undefined (reading 'length')) when reloading page sometimes?
      let value = topCategoriesCore[key][Math.floor(Math.random() * topCategoriesCore[key].length)];
      random.push(`${key}: ${value}`);
    
      let temp = randomIndex;
      while (temp === randomIndex) {
        temp = Math.floor(Math.random() * 2);
      }
      randomIndex = temp;
    }
    random.push(topCategoriesWild[Math.floor(Math.random() * topCategoriesWild.length)]);
    console.log("top: " + random);
    setTopCategories(random);
  }

  const randomizePlatforms = () => {
    let random: string[] = [];
    for (let i = 0; i < 3; i++) {
      let randomPlatform = modernPlatforms[Math.floor(Math.random() * modernPlatforms.length)];
      while(random.includes(randomPlatform)) {
        randomPlatform = modernPlatforms[Math.floor(Math.random() * modernPlatforms.length)];
      }
      random[i] = randomPlatform;
    }
    setPlatforms(random);
  }

  useEffect(() => {
    randomizePlatforms();
    randomizeTopCategories();
    fetchData().then(data => {
      const games = data;
      setAllGames(games);
      console.log(games);
    });
  }, []);

  return (
    <main className="flex flex-col justify-between min-h-screen bg-red-100">
      <Navbar />
      <GridArea topCategories={topCategories} randomizeTopCategories={randomizeTopCategories} platforms={platforms} allGames={allGames} />
      <div className="flex justify-center mb-5">
        Created by Josh Mayeda
      </div>
      { startModalIsOpen ? <StartModal startModalIsOpen={startModalIsOpen} setStartModalIsOpen={setStartModalIsOpen} /> : null }
    </main>
  )
}
