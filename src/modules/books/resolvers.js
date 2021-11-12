const pg = require("../../utils/postgres");

const getBooks = async () => {
  const result = await pg(
    "select id, created_at, author, book_name, price from book where status = $1",
    "active"
  );
  console.log(result);
  return result.rows;
};
const createBook = async (_, { author, bookName, price }) => {
  const res = await pg(
    "INSERT INTO book(author, book_name, price)VALUES($1, $2, $3)",
    author,
    bookName,
    price
  );

  console.log(res);
  if (res.rowCount > 0) return "ok created";
  return "not created";
};
const updateBook = async (_, { id, author, bookName, price }) => {
  console.log(author, id);
  const res = await pg(
    "update book set author = $1, book_name = $2, price = $3 where id = $4",
    author,
    bookName,
    price,
    id
  );
  console.log(res);
  if (res.rowCount > 0) return "ok update";
  return "not update";
};
const deleteBook = async (_, { id }) => {
  const res = await pg(
    "update book set status = $2 where id = $1",
    id,
    "!active"
  );
  console.log(res);
  if (res.rowCount > 0) return "ok deleted";
  return "not deleted";
};
/*
// bazadan o'chirib tashash
const deleteBook = async (_, { id }) => {
  const res = await pg("delete from book where id = $1", id);
  console.log(res);
  if (res.rowCount > 0) return "ok deleted";
  return "not deleted";
};
*/
module.exports = {
  Query: {
    getBooks,
  },
  Mutation: {
    createBook,
    updateBook,
    deleteBook,
  },
};
