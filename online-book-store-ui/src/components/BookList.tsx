import {BookListProps} from "./types/Book.type.ts";

const BookList = (props: BookListProps) => {
    return (
        <div>
            {
                props.books.map(book =>
                    <li className="flex justify-between items-center py-2 border-b border-gray-200">
                        <div className="w-1/2">
                            <h3 className="text-lg font-medium text-gray-800">{book.title}</h3>
                            <p className="text-gray-600 text-sm">
                                By {book.author} ({book.yearOfPublication})
                            </p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="inline-block bg-gray-200 px-2 py-1 rounded-full text-xs text-gray-700">{book.genre}</span>
                            <p className="text-white-800 font-medium">₦{book.price.toFixed(2)}</p>
                            {book.stock > 0 ? (
                                <span className="text-green-500 font-medium">In Stock ({book.stock})</span>
                            ) : (
                                <span className="text-red-500 font-medium">Out of Stock</span>
                            )}
                        </div>
                    </li>
                )
            }
        </div>
    )
}


export default BookList;