const isSafe = require("./isSafe");
const SolveMazeRecursion = ({
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
}) => {
  if (startRow === endRow && startCol === endCol) {
    solution.solutionRow.push(visitedRow.slice());
    solution.solutionCol.push(visitedCol.slice());
    return true;
  }

  visitedRow.push(startRow);
  visitedCol.push(startCol);

  if (
    isSafe({
      matrixSize,
      currRow: startRow + 1,
      currCol: startCol,
      blocksRowsArr,
      blocksColsArr,
      visitedRow,
      visitedCol,
    })
  ) {
    SolveMazeRecursion({
      matrixSize,
      startRow: startRow + 1,
      startCol,
      blocksRowsArr,
      blocksColsArr,
      endRow,
      endCol,
      solution,
      visitedRow,
      visitedCol,
    });
  }

  if (
    isSafe({
      matrixSize,
      currRow: startRow - 1,
      currCol: startCol,
      blocksRowsArr,
      blocksColsArr,
      visitedRow,
      visitedCol,
    })
  ) {
    SolveMazeRecursion({
      matrixSize,
      startRow: startRow - 1,
      startCol,
      blocksRowsArr,
      blocksColsArr,
      endRow,
      endCol,
      solution,
      visitedRow,
      visitedCol,
    });
  }

  if (
    isSafe({
      matrixSize,
      currRow: startRow,
      currCol: startCol + 1,
      blocksRowsArr,
      blocksColsArr,
      visitedRow,
      visitedCol,
    })
  ) {
    SolveMazeRecursion({
      matrixSize,
      startRow,
      startCol: startCol + 1,
      blocksRowsArr,
      blocksColsArr,
      endRow,
      endCol,
      solution,
      visitedRow,
      visitedCol,
    });
  }

  if (
    isSafe({
      matrixSize,
      currRow: startRow,
      currCol: startCol - 1,
      blocksRowsArr,
      blocksColsArr,
      visitedRow,
      visitedCol,
    })
  ) {
    SolveMazeRecursion({
      matrixSize,
      startRow,
      startCol: startCol - 1,
      blocksRowsArr,
      blocksColsArr,
      endRow,
      endCol,
      solution,
      visitedRow,
      visitedCol,
    });
  }

  visitedRow.pop();
  visitedCol.pop();
};

module.exports = SolveMazeRecursion;
