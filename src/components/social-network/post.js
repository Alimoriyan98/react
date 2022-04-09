import React from 'react';
import './post.css';

class Post extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: [],
            comment_number: this.props.comments.length,
            like_number: this.props.like_number,
        }
    }

    render() {
        return (
            <div className="container posts-content">
                <div className="col-lg-8 mx-auto">

                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="media mb-3">
                                <img src={this.props.profile_picture} class="d-block ui-w-40 rounded-circle" alt="" />
                                <div className="media-body ml-3">
                                    {this.props.user_name}
                                    <div className="text-muted small">@{this.props.user_id}</div>
                                </div>
                            </div>
                            <p>{this.props.post_text}</p>
                            <img src={this.props.attached_image} class="d-block half-f" alt="" />
                        </div>
                        <div className="card-footer">
                            <button className="d-inline-block text-muted ml-3 to-a" onClick={
                                () => {
                                    if (this.state.is_liked) {
                                        this.setState({ like_number: this.state.like_number - 1, is_liked: false })
                                    } else {
                                        this.setState({ like_number: this.state.like_number + 1, is_liked: true })
                                    }
                                }
                            }>
                                <small className="align-middle"><strong>{this.state.like_number}</strong> Likes</small>
                            </button>

                            <button className="d-inline-block text-muted ml-3 to-a" >
                                <small className="align-middle"><strong>{this.state.comment_number}</strong> Comments</small>
                            </button>

                            <button className="d-inline-block text-muted ml-3 to-a" >
                                <small className="align-middle">Repost</small>
                            </button>

                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

Post.defaultProps = {
    comments: [],
    comment_number: 0,
    like_number: 0
}

export default Post;