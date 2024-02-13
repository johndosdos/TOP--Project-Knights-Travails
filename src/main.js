// @ts-check
"use-strict";

/**
 *
 * @param {string} source
 * @param {string} destination
 */
function knight_moves(source, destination) {
  const CHESS_BOARD = Array.from({ length: 8 }, function () {
    return Array.from({ length: 8 }, function () {
      return 0;
    });
  });

  const SOURCE_COORDINATES = notation_to_array_coordinates(source);
  const DESTINATION_COORDINATES = notation_to_array_coordinates(destination);

  const FINAL_PATH = bfs(
    SOURCE_COORDINATES,
    DESTINATION_COORDINATES,
    CHESS_BOARD
  );

  return FINAL_PATH;
}

//HELPER FUNCTIONS

/**
 *
 * @param {string} notation
 * @returns {number[]}
 */
function notation_to_array_coordinates(notation) {
  const RANK = 8 - parseInt(notation[1]);
  const FILE = notation.charCodeAt(0) - "a".charCodeAt(0);

  return [FILE, RANK];
}

/**
 *
 * @param {number} source_x
 * @param {number} source_y
 * @param {number[][]} chess_board
 */
function get_valid_knight_moves(source_x, source_y, chess_board) {
  const MOVES = [
    // 0, up-left L move
    { source_x: source_x - 1, source_y: source_y - 2 },
    // 1, up-right L move
    { source_x: source_x + 1, source_y: source_y - 2 },
    // 2, right-up L move
    { source_x: source_x + 2, source_y: source_y - 1 },
    // 3, right-down L move
    { source_x: source_x + 2, source_y: source_y + 1 },
    // 4, down-right L move
    { source_x: source_x + 1, source_y: source_y + 2 },
    // 5, down-left L move
    { source_x: source_x - 1, source_y: source_y + 2 },
    // 6, left-down L move
    { source_x: source_x - 2, source_y: source_y + 1 },
    // 7, left-up L move
    { source_x: source_x - 2, source_y: source_y - 1 },
  ];

  return MOVES.filter(function (move) {
    return (
      move.source_x >= 0 &&
      move.source_x < chess_board[0].length &&
      move.source_y >= 0 &&
      move.source_y < chess_board.length
    );
  }).map(function (coordinate) {
    return [coordinate.source_x, coordinate.source_y];
  });
}

/**
 * @param {number[]} source
 * @param {number[]} destination
 * @param {number[][]} chess_board
 */
function bfs(source, destination, chess_board) {
  const QUEUE = [];
  const VISITED = new Set();
  const PARENT = {};

  QUEUE.push(source);
  PARENT[source] = null;

  while (QUEUE.length) {
    const CURRENT = QUEUE.shift();

    if (CURRENT) {
      VISITED.add(CURRENT.toString());

      if (CURRENT.toString() === destination.toString()) {
        const FINAL_PATH = [];
        let temp = CURRENT;
        while (temp !== null && temp.toString()) {
          FINAL_PATH.push(temp);

          temp = PARENT[temp];
        }

        return FINAL_PATH.reverse();
      }

      const VALID_MOVES = get_valid_knight_moves(
        CURRENT[0],
        CURRENT[1],
        chess_board
      );

      VALID_MOVES.forEach(function (element) {
        if (!VISITED.has(element.toString())) {
          PARENT[element] = CURRENT;
        }
      });

      QUEUE.push(...VALID_MOVES);
    }
  }
}

/////////////////

function main() {
  const OUTPUT = knight_moves("a1", "c3");
  console.log(OUTPUT);
}

main();
