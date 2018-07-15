import React, { Component } from "react"


import InputForm from "./InputForm"
import BookList from './BookList'

import "bootstrap/dist/css/bootstrap.min.css"


export default class KennelCompany extends Component {
    render() {
        return (
            <React.Fragment>
                <InputForm />
                <BookList />
            </React.Fragment>
        )
    }
}