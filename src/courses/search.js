import React from 'react';
import Api, { GQL } from '../ensena';
import Footer from '../footer/footer';

const courses = new Api(`graphql/search`)





class Search extends React.Component {

    constructor(props) {
        super(props)
        this.state = { courses: [] }
        courses.getAll().then((data) => { this.setState({ courses: data.data.allCourses.edges }) })

    }

    render() {
        return (
            <div className="page ">
                <div className="container page__container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="fixed-instructor-dashboard.html">Home</a></li>
                        <li className="breadcrumb-item active">Courses</li>
                    </ol>
                    <div className="d-flex flex-column flex-sm-row flex-wrap mb-headings align-items-start align-items-sm-center">
                        <div className="flex mb-2 mb-sm-0">
                            <h1 className="h2">Buscador de cursos</h1>
                        </div>
                        <a href="fixed-instructor-quiz-edit.html" className="btn btn-success">Crear un curso</a>
                    </div>
                    <div className="card card-body border-left-3 border-left-primary navbar-shadow mb-4">
                        <form action="#">
                            <div className="d-flex flex-wrap2 align-items-center mb-headings">
                                <div className="dropdown">
                                    <a href="#" data-toggle="dropdown" className="btn btn-white"><i className="material-icons mr-sm-2">tune</i> <span className="d-none d-sm-block">Filters</span></a>
                                    <div className="dropdown-menu">
                                        <div className="dropdown-item d-flex flex-column">
                                            <div className="form-group">
                                                <label htmlFor="custom-select" className="form-label">Category</label><br />
                                                <select id="custom-select" className="form-control custom-select" style={{ width: '200px' }}>
                                                    <option selected>All categories</option>
                                                    <option value={1}>Vue.js</option>
                                                    <option value={2}>Node.js</option>
                                                    <option value={3}>GitHub</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="published01" className="form-label">Published</label><br />
                                                <select id="published01" className="form-control custom-select" style={{ width: '200px' }}>
                                                    <option selected>Published courses</option>
                                                    <option value={1}>Draft courses</option>
                                                    <option value={3}>All courses</option>
                                                </select>
                                            </div>
                                            <a href="#">Clear filters</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex search-form ml-3 search-form--light">
                                    <input type="text" className="form-control" placeholder="Search courses" id="searchSample02" />
                                    <button className="btn" type="button" role="button"><i className="material-icons">search</i></button>
                                </div>
                            </div>
                            <div className="d-flex flex-column flex-sm-row align-items-sm-center" style={{ whiteSpace: 'nowrap' }}>
                                <small className="flex text-muted text-uppercase mr-3 mb-2 mb-sm-0">Displaying 4 out of 10 courses</small>
                                <div className="w-auto ml-sm-auto table d-flex align-items-center mb-0">
                                    <small className="text-muted text-uppercase mr-3 d-none d-sm-block">Sort by</small>
                                    <a href="#" className="sort desc small text-uppercase">Course</a>
                                    <a href="#" className="sort small text-uppercase ml-2">Earnings</a>
                                    <a href="#" className="sort small text-uppercase ml-2">Sales</a>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* <div className="alert alert-light alert-dismissible border-1 border-left-3 border-left-warning" role="alert">
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                        <div className="text-black-70">Ohh no! No courses to display. Add some courses.</div>
                    </div> */}
                    <div className="row">
                        {this.state.courses.map((course, ix) => (<div className="col-md-6" key={ix} >
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column flex-sm-row">
                                        <a href="fixed-instructor-course-edit.html" className="avatar avatar-lg avatar-4by3 mb-3 w-xs-plus-down-100 mr-sm-3">
                                            <img src="assets/images/vuejs.png" alt="Card image cap" className="avatar-img rounded" />
                                        </a>
                                        <div className="flex" style={{ minWidth: '200px' }}>
                                            {/* <h5 class="card-title text-base m-0"><a href="fixed-instructor-course-edit.html"><strong>Learn Vue.js</strong></a></h5> */}
                                            <h4 className="card-title mb-1"><a href="fixed-instructor-course-edit.html">{course.node.name}</a></h4>
                                            <p className="text-black-70">{course.node.description}</p>
                                            <div className="d-flex align-items-end">
                                                <div className="d-flex flex flex-column mr-3">
                                                    <div className="d-flex align-items-center py-1 border-bottom">
                                                        <small className="text-black-70 mr-2">{course.node.code} </small>
                                                    </div>
                                                    <div className="d-flex align-items-center py-1">
                                                        <small className="text-muted mr-2">{course.node.institutionByOwnerInstitutionId.name}</small>
                                                    </div>
                                                </div>
                                                <div className="text-center">
                                                    <a href="fixed-instructor-course-edit.html" className="btn btn-sm btn-white">Ir al curso</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card__options dropdown right-0 pr-2">
                                    <a href="#" className="dropdown-toggle text-muted" data-caret="false" data-toggle="dropdown">
                                        <i className="material-icons">more_vert</i>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a className="dropdown-item" href="fixed-instructor-course-edit.html">Edit course</a>
                                        <a className="dropdown-item" href="#">Course Insights</a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item text-danger" href="#">Delete course</a>
                                    </div>
                                </div>
                            </div>
                        </div>))}


                    </div>
                    {/* Pagination */}
                    <ul className="pagination justify-content-center pagination-sm">
                        <li className="page-item disabled">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true" className="material-icons">chevron_left</span>
                                <span>Prev</span>
                            </a>
                        </li>
                        <li className="page-item active">
                            <a className="page-link" href="#" aria-label={1}>
                                <span>1</span>
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label={1}>
                                <span>2</span>
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span>Next</span>
                                <span aria-hidden="true" className="material-icons">chevron_right</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <Footer />
            </div>


        );
    }
}

export default Search;
