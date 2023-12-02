const boardGraph = buildGraphOfPossibleMoves();

function buildGraphOfPossibleMoves() {
  const graph = {};

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      graph[`${i},${j}`] = [];

      const possibleMoves = getPossibleMovesForCell(i, j);
      for (let k = 0; k < possibleMoves.length; k++) {
        graph[`${i},${j}`].push(`${possibleMoves[k][0]},${possibleMoves[k][1]}`);
      }
    }
  }

  return graph;
}

function getPossibleMovesForCell(i, j) {
  const moves = [
    [i - 2, j - 1],
    [i - 2, j + 1],
    [i - 1, j - 2],
    [i - 1, j + 2],
    [i + 1, j - 2],
    [i + 1, j + 2],
    [i + 2, j - 1],
    [i + 2, j + 1]
  ];

  for (let i = 0; i < moves.length; i++) {
    if (moves[i][0] < 0 || moves[i][0] > 7 || moves[i][1] < 0 || moves[i][1] > 7) {
      moves.splice(i, 1);
      i--;
    }
  }

  return moves;
}