'use server';

import fs from 'fs';

const games: string[] = [];
const getGames = async (uri: string) => {
    const response = await fetch(uri);
    const data = await response.json();
    games.push(...data.results);
    if (data.next) {
        await getGames(data.next);
    }
    fs.writeFileSync(`75-76.json`, JSON.stringify(games, null, 2))
    console.log('written to file')
};

export default getGames;