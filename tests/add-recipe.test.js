const { expect } = require('chai');
const request = require('supertest');
const getDb = require('../src/services/db');
const app = require('../src/app');

describe('add recipe', () => {
  // let db;
  // beforeEach(async () => (db = await getDb()));

  // afterEach(async () => {
  //   await db.query('DELETE FROM Recipe');
  //   await db.close();
  // });

  describe('/recipe', () => {
    describe('POST', () => {

      // it('creates a new recipe in the database (BASIC)', () => {
      //   const res = await request(app).post('/recipe').send({
      //     title: 'Fried Egg'
      //   });

      //   expect(res.status).to.equal(201);
      // })

      it('creates a new recipe in the database', async () => {
        const res = await request(app).post('/recipe').send({
          title: 'Fried Egg',
          // ingredients: { 'egg': 1, 'oil': '1tbsp' },
          // method: { '1': 'Heat oil in a frying pan', '2': 'Add egg and cook' },
          // nutrition: { 'calories': 100, 'fat': 10, 'carbs': 20, 'protein': 30, 'sugar': 0 },
        });

        expect(res.status).to.equal(201);

        // const [[recipeEntries]] = await db.query(
        //   `SELECT * FROM Recipe WHERE title = 'Fried Egg'`
        // );

        // expect(recipeEntries.title).to.equal('Fried Egg');
        // expect(recipeEntries.ingredients).to.equal('{ "egg": 1, "oil": "1tbsp" }');
        // expect(recipeEntries.method).to.equal('{ "1": "Heat oil in a frying pan", "2": "Add egg and cook" }');
      });
    });
  });
});