import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from 'actions'
import requireAuth from './requireAuth'

class CommentBox extends Component {

    state = {
        comment: '',
    }

    handleComment = (e) => {
        this.setState({comment: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.saveComment(this.state.comment)
        this.setState({comment: ''})
    }

    render() {
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <h4>Add a Comment</h4>
                    <textarea 
                    onChange = {this.handleComment}
                    value = {this.state.comment} />
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
                <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch Comments</button>
            </div>
        )
    }
}

export default connect(null, actions)(requireAuth(CommentBox))