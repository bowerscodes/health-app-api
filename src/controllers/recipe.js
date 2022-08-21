// exports.create = async (req, res) => {
//   const db = await getDb();
//   const { title } = req.body;

//   try {
//     await db.query(`INSERT INTO Recipe (title) VALUES ('${title}')`);
    
//     res.sendStatus(201);
//   } catch (err) {
//     res.sendStatus(500).json(err);
//   }

//   db.close();
// };

exports.create = (req, res) => {
  res.sendStatus(201);
}