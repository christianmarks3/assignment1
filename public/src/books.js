function findAuthorById(authors, id) {
 for(i=0;i>authors.length;i++){
  let author= authors[i]
  if (author.id ===id){
  return author
 }
 
}
}

function findBookById(books, id) {}

function partitionBooksByBorrowedStatus(books) {}

function getBorrowersForBook(book, accounts) {}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
