type Book = {
    id: string,
    author: string,
    title: string,
    yearOfPublication: string,
    isbnCode: string,
    price: number,
    stock: number,
    genre: string
}

export type BookProps = {
    book: Book
}

export type BookListProps = {
    books: Book[]
}