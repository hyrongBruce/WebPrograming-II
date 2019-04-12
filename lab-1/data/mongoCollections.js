const dbConnection = require("./mongoConnections");

const getCollectionFn = collection => {
  let _col = undefined;

  return async () => {
    if (!_col) {
      const db = await dbConnection();
      _col = await db.collection(collection);
    }
    return _col;
  };
};

/* Now, you can list your collections here: */
module.exports = {
    tasksData: getCollectionFn("tasksData")
};