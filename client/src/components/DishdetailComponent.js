import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { CommentForm } from './CommentForm';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

function RenderDish({ dish }) {
    return (
        <FadeTransform in 
            transformProps={{
                exitTransform: "scale(0.5) translateY(-50%)"
            }}>
            <Card>
                <CardImg top width="100%" src={baseUrl + dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle tag="h5" className="m-1">{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </FadeTransform>
    );
}

function RenderComments({ comments, dishId, postComment }) {
    const commentItems = comments.map((comment) => {
        return (
            <Fade in>
                <div key={comment.id}>
                    <div className="container">
                        <ul class="list-unstyled">
                            <li className="mb-3 ml-3">{comment.comment}</li>
                            <li className="mb-3 ml-3">-- {comment.author} , { new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date))) }</li>
                        </ul>
                    </div>
                </div>
            </Fade>
        );
    })

    return (
        <Card>
            <CardTitle tag="h5" className="m-3">Comments</CardTitle>
            <CardText>
                <Stagger in>
                    {commentItems}
                </Stagger>
            </CardText>
            <CommentForm dishId={dishId} postComment={postComment} />
        </Card>
    );
}

function Dishdetail(props) {
    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish}/>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments}
                            postComment={props.postComment}
                            dishId={props.dish.id} />
                    </div>
                </div>
            </div>
        );
    } else {
        return(
            <div></div>
        );
    }
}

export default Dishdetail;