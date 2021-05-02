import React from 'react';
import { Link } from 'react-router-dom';


export default class Breadcrumb extends React.Component {

    render() {
        return (
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Inicio</Link></li>
                <li className="breadcrumb-item"><Link to="/Courses" >Cursos </Link></li>
                <li className="breadcrumb-item active">{this.props.last.name}</li>
            </ol>

        )
    }



}