var books = [
  {
    isbn: '9780892541461',
    title: 'Necronomicon',
    author: 'H.P. Lovecraft'
  },
  {
    isbn: '9780670813025',
    title: 'It',
    author: 'Stephen King'
  },
  {
    isbn: '9780007127047',
    title: 'If You Give a Mouse a Cookie',
    author: 'Laura Numeroff'
  }
];

console.log('My array of books: ', books);
console.log('   Type of my array: ', typeof books);

var stringified = JSON.stringify(books);
console.log('My array stringified: ', stringified);
console.log('   Type of my stringified array: ', typeof stringified);

var student = '{"id": 77, "name": "Ben"}';

console.log('My student string: ', student);
console.log('   Type of my student string: ', typeof student);

var myObject = JSON.parse(student);
console.log('My string into an object: ', myObject);
console.log('   Type of my string into an object: ', typeof myObject);
