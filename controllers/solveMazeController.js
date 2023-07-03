const SolveMaze = require("../helpers/SolveMaze");
const logger = require("../middleware/logger");

const solveMazeController = async (req, res) => {
  const {
    testVariable,
    matrixSize,
    startRow,
    startCol,
    blocksRows,
    blocksCols,
    endRow,
    endCol,
  } = req.query;

  logger(testVariable);

  logger(JSON.stringify(req.query));

  const matrixSizeN = parseInt(matrixSize);
  const startRowN = parseInt(startRow);
  const startColN = parseInt(startCol);
  const blocksRowsArr = JSON.parse(blocksRows);
  const blocksColsArr = JSON.parse(blocksCols);
  const endRowN = parseInt(endRow);
  const endColN = parseInt(endCol);

  const solution = SolveMaze({
    matrixSize: matrixSizeN,
    startRow: startRowN,
    startCol: startColN,
    blocksRowsArr,
    blocksColsArr,
    endRow: endRowN,
    endCol: endColN,
  });

  logger(JSON.stringify(solution));

  res.status(200).json({ message: solution });
};

module.exports = solveMazeController;
