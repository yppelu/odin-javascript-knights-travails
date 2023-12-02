const movesGraph = buildGraphOfPossibleMoves();

function knightMoves(src, dest) {
  src = `${src[0]},${src[1]}`;
  dest = `${dest[0]},${dest[1]}`;
  const visitedCells = new Set();

  const queue = [[src]];
  while (queue.length > 0) {
    const current = queue.shift();
    const lastMove = current[current.length - 1];

    if (lastMove === dest) {
      printPath(current);
      return true;
    }

    for (let i = 0; i < movesGraph[lastMove].length; i++) {
      if (!visitedCells.has(movesGraph[lastMove][i])) {
        queue.push([...current, movesGraph[lastMove][i]]);
      }
    }

    visitedCells.add(lastMove);
  }

  return false;
}

function printPath(moves) {
  console.log(`You made it in ${moves.length - 1} moves! Here's your path:`);
  for (let i = 0; i < moves.length; i++) {
    console.log(moves[i]);
  }
}

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