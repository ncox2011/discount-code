import React, { Component } from 'react'

export default class InputForm extends Component {

    // Set initial state
    state = {
        title: "",
        author: "",
        publishDate: "",
        price: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    // Simplistic handler for login submit
    handleInputForm = (e) => {
        e.preventDefault()

        /*
            For now, just store the email and password that
            the customer enters into local storage.
        */
        localStorage.setItem(
            "books",
            JSON.stringify({
                title: this.state.title,
                author: this.state.author,
                publishDate: this.state.publishDate,
                price: this.state.price
            })
        )
    }

    render() {
        return (
            <form onSubmit={this.handleInputForm}>
                <h1 className="h3 mb-3 font-weight-normal">Enter Book Information</h1>
                <label htmlFor="inputTitle">
                    Book Title
                </label>
                <input onChange={this.handleFieldChange} type="text"
                       id="title"
                       placeholder="Book Title"
                       required="" autoFocus="" />
                <label htmlFor="inputAuthor">
                    Author
                </label>
                <input onChange={this.handleFieldChange} type="text"
                       id="author"
                       placeholder="Author"
                       required="" />
                <label htmlFor="inputPublishedDate">
                    Date Published
                </label>
                <input onChange={this.handleFieldChange} type="date"
                    id="datePublished"
                    placeholder="Date Published"
                    required="" />
                <label htmlFor="price">
                <input onInput={this.handleFieldChange} type="number"
                    id="price"
                    placeholder="Price"
                    required="" />
                </label>
                <button type="submit">
                    Save
                </button>
            </form>
        )
    }
}
