import Image from 'next/image'
import Navbar from './Navbar'
import GridArea from './GridArea'

export default function Home() {

  const modernPlatforms = [
    'PC',
    'PlayStation 5',
    'Xbox Series S/X',
    'PlayStation 4',
    'Xbox One',
    'Nintendo Switch',
    'Nintendo 3DS',
    'Wii U',
    'Wii',
    'Playstation 3',
    'PS Vita',
    'PSP',
  ]

  const topCategories = {
    genre: [
      'Action',
      'Indie',
      'Adventure',
      'RPG',
      'Strategy',
      'Shooter',
      'Casual',
      'Simulation',
      'Puzzle',
      'Arcade',
      'Platformer',
      'Massively Multiplayer',
      'Racing',
      'Sports',
      'Fighting',
    ],
    developer: [
      'ubisoft',
      'valve-software',
      'feral-interactive',
      'electronic-arts',
      'square-enix',
      'sony-interactive-entertainment',
      'capcom',
      'bethesda',
      'sega',
      'warner-bros-interactive',
      'telltale-games',
      'bandai-namco-entertainment',
      '2k',
      'bioware',
      'gearbox-software',
      'nintendo',
      'konami',
      'cd-projekt-red',
      'naughty-dog',
      'rockstar-games',
      'fromsoftware',
      'activision',   
    ],
    releaseDate: [
      '2015-01-01,2019-12-31',
      '2010-01-01,2014-12-31',

    ],
    oneWordTitle: [
    ],
    nominated: [
    ],
    ESRB: [
      'E',
      'E10+',
      'T',
      'M',
    ]
  }

  return (
    <main className="flex flex-col justify-between min-h-screen bg-red-100">
      <Navbar />
      <GridArea />
      <div className="flex justify-center mb-5">
        hello im padding
      </div>
    </main>
  )
}
