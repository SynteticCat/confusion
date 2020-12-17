import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { CommentForm } from './CommentForm';

function RenderDish({ dish }) {
    return (
        <Card>
            <CardImg top width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle tag="h5" className="m-1">{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );
}

function RenderComments({ comments }) {
    const commentItems = comments.map((comment) => {
        return (
            <div key={comment.id}>
                <div className="container">
                    <ul class="list-unstyled">
                        <li className="mb-3 ml-3">{comment.comment}</li>
                        <li className="mb-3 ml-3">-- {comment.author} , { new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date))) }</li>
                    </ul>
                </div>
            </div>
        );
    })

    return (
        <Card>
            <CardTitle tag="h5" className="m-3">Comments</CardTitle>
            <CardText>{commentItems}</CardText>
            <CommentForm />
        </Card>
    );
}

function Dishdetail({ dish, comments }) {
    if (dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={dish}/>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={comments} />
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