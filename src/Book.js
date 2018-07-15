import React from 'react'
import { Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"

export default props => {
    let book = {}

// Check if the data is in `props.animal`
if (props.hasOwnProperty("book")) {
    book = props.book

// If not, data will be in `props.location.state.animal`
} else {
    book = props.location.state.book
}
   return (
        <div className="card" style={{width: `18rem`}}>
            <div className="card-body">
                <h5 className="card-title">
                    {props.book.title}
                </h5>
                <p className="card-text">{props.book.price}</p>
                {
                    <Link className="card-link"
                    to={{
                        pathname: `/books/${book.id}`,
                        state: { book: book }
                    }}>
                    Details
                </Link>
                }
            </div>
        </div>
    )
}