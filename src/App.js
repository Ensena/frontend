import logo from './logo.svg';
// import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Me from './profile/me';
import Courses from './courses/courses'
import Course from './courses/course'
import AdminCourse from './adminCourses/course'
import AdminCoder from './ide/ideAdmin'


import Coder from './ide/ideBasic';
import Database from './ide/Database'
import Avances from './eit/avances';

import './App.css';
import Server from './ide/server';

import Apps from './apps/Apps';

function App() {
  return (
      <div>
        <Route path="/" exact children={<Me />} />
        <Route path="/Me" exact children={<Me />} />
        <Route path="/Courses" exact children={<Courses />} />
        <Route path="/Course/:id/:name" exact children={<Course />} />
        <Route path="/AdminCourse/:id/:name" exact children={<AdminCourse />} />
        <Route path="/AdminCoder/:id/" exact children={<AdminCoder />} />


        <Route path="/App/MasAPPS" exact children={<Apps />} />
        <Route path="/App/IdeOnline" exact children={<Coder />} />
        <Route path="/App/Database" exact children={<Database />} />
        <Route path="/App/Server" exact children={<Server />} />
        <Route path="/App/Avance" exact children={<Avances />} />
     
     
      </div>
  );
}

export default App;
