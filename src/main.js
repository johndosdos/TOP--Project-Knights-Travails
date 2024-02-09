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
function main() {
  knight_moves("a1", "b3");
}

main();
