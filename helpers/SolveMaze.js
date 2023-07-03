const SolveMazeRecursion = require("./SolveMazeRecursion");
const SolveMaze = ({
  matrixSize,
  startRow,
  startCol,
  blocksRowsArr,
  blocksColsArr,
  endRow,
  endCol,
}) => {
  const solution = { solutionRow: [], solutionCol: [] };
  const visitedRow = [];
  const visitedCol = [];

  SolveMazeRecursion({
    matrixSize,
    startRow,
    startCol,
    blocksRowsArr,
    blocksColsArr,
    endRow,
    endCol,
    solution,
    visitedRow,
    visitedCol,
  });

  return solution;
};

module.exports = SolveMaze;
