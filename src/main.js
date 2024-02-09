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

  const VALID_KNIGHT_MOVES = get_valid_knight_moves(
    SOURCE_COORDINATES[0],
    SOURCE_COORDINATES[1],
    CHESS_BOARD
  );
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
  });
}

/////////////////

function main() {
  knight_moves("a1", "b3");
}

main();
