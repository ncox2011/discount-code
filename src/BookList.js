import React, { Component } from 'react'
import Book from './Book'

export default class BookList extends Component {

    state= {
        books: [
            {id: 1, title: "The Reasons I Won't Be Coming", author: "Elliott Pearlman", publishedDate: "11/11/2001", price: "18"}
        ]
    }
    render() {
        return (
            <React.Fragment>
                <ul>
                    {
                        this.state.books.map(book => < Book key={book.id} book={book} />)
                    }
                </ul>
            </React.Fragment>
        )
    }
}
