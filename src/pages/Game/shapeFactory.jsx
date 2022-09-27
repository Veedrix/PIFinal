const SHAPES = [
  {
    shape: [//quadrado
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 0 },
      { x: 1, y: 1 },
    ],
    width: 2,
    height: 2,
    rotate: false,
  },
  {
    shape: [//forma I
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: 2 },
      { x: 0, y: 3 },
    ],
    width: 1,
    height: 4,
  },
  {
    shape: [//Forma L ao contrario
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: 2 },
      { x: 1, y: 2 },
    ],
    width: 1,
    height: 3,
  },
  {
    shape: [//Forma L
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
      { x: 2, y: 1 },
    ],
    width: 1,
    height: 3,
  },
  {
    shape: [//Forma T
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 1, y: 1 },
      { x: 2, y: 0 },
    ],
    width: 1,
    height: 3,
  },
  {
    shape: [//Forma Z
      { x: 0, y: 0 },
      { x: 2, y: 1 },
      { x: 1, y: 1 },
      { x: 1, y: 0 },
    ],
    width: 1,
    height: 3,
  },
  {
    shape: [//Forma Z ao contrario
      { x: 0, y: 0 },
      { x: 1, y: 2 },
      { x: 1, y: 1 },
      { x: 0, y: 1 },
    ],
    width: 1,
    height: 3,
  },
];

export function randomShape() {
  return SHAPES[Math.floor(Math.random() * SHAPES.length)];
}
