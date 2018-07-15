import React, { Component } from 'react'
import BookList from './BookList'
import InputForm from './InputForm'
import Book from './Book'

export default class ApplicationViews extends Component {

    render () {
        return (
                 <Route exact path='/books/:bookId' render={props => {
                    return < Book book={props.location.state.book} />
                 }} />

        )
    }
}