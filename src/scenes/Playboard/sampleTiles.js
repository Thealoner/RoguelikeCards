const TYPE = {
  MONSTER: 'MONSTER',
  PLAYER: 'PLAYER',
  POTION: 'POTION',
  COIN: 'COIN',
  WEAPON: 'WEAPON'
};

const sampleTiles = [
    {
      id: 0,
      icon: '🧟‍',
      title: 'Zombie',
      hp: 3,
      type: TYPE.MONSTER
    },
    {
      id: 1,
      icon: '🐱‍🐉',
      title: 'Dinosaur',
      hp: 7,
      type: TYPE.MONSTER
    },
    {
      id: 2,
      icon: '🧛‍',
      hp: 3,
      type: TYPE.MONSTER
    },
    {
      id: 3,
      icon: '🧙‍',
      title: 'Sourcerer',
      hp: 3,
      type: TYPE.MONSTER
    },
    {
      id: 4,
      icon: '👦',
      title: 'You',
      hp: 10,
      type: TYPE.PLAYER
    },
    {
      id: '5',
      icon: '🗡',
      title: 'Sword',
      hp: 8,
      type: TYPE.WEAPON
    },
    {
      id: 6,
      icon: '🤢',
      title: 'Poison',
      hp: 3,
      type: TYPE.POTION
    },
    {
      id: 7,
      icon: '🐉',
      title: 'Dragon',
      hp: 3,
      type: TYPE.MONSTER
    },
    {
      id: 8,
      icon: '🍷',
      title: 'Healing Potion',
      hp: 5,
      type: TYPE.POTION
    }
];

export default sampleTiles;