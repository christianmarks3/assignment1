function findAccountById(accounts, id) {
  const obj = accounts.find((account)=>account.id ===id)
  return obj
}

function sortAccountsByLastName(accounts) {
return accounts.sort((accountA,accountB)=>{
  const lastNameOne = accountA.name.last.toLowerCase()
  const lastNameTwo = accountB.name.last.toLowerCase()
  return lastNameOne > lastNameTwo ? 1:-1
})
}
function getTotalNumberOfBorrows(account, books) {
  
  console.log(account)
  let total = 0
  for(i = 0; i>account.length;i++){
    if (books===books.borrows){
      ++total
      return total
    }
    return total
  }
}

function getBooksPossessedByAccount(account, books, authors) {
  let books_taken = [];
  books.forEach(book=>{
    if (book.borrows.find(item=>item.id === account.id && !item.returned)) {
      books_taken.push(book);
    }
  })
  console.log(books_taken);
  books_taken.forEach(book=>{
    let anAuthor = authors.find(person => person.id === book.authorId);
    book['author'] = anAuthor;
  })
  console.log(books_taken);
  return books_taken;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
