import { useState } from 'react';
import IDE from './ide'
import RunCode from './RunCode';
import AdminBar from './students'
import { Me } from '../core/ensena'
import Sync from './CoderSync';
import { CodeCpp, Langs} from './codes'
import Coder from './CoderSync';
import { Select } from 'antd';
const { Option } = Select;


let IdeAdmin = ({ User }) => {
    const [url, setURL] = useState("");
    const [code, setCode] = useState(CodeCpp);
    const [lang, setLang] = useState("Cpp");
    const [err, setErr] = useState("");
    const coder = new Coder(User.node.userByUserId, { setCode, setLang, setURL, setErr, code, lang, url, err })
    let handleChange = (value) => {
        coder.changeLang(value)
    }

   

    return <div class="row">
        <div className="mdk-drawer-layout__content" id={"user-" + User.node.id}>
            <h2> {User.node.userByUserId.name} {User.node.userByUserId.lastName}</h2>
            <div>
                Lenguaje : <Select defaultValue="C++" value={lang} style={{ width: 120 }} onChange={handleChange} >
                    {Langs.map((l,ix)=>{
                        return   <Option selected={lang==l.val}  value={l.val}>{l.name}</Option> 
                    })}
                </Select>&nbsp;&nbsp;&nbsp;&nbsp;

            <a onClick={() => { coder.Exec() }} >
                    <i className="sidebar-menu-icon sidebar-menu-icon--left material-icons">play_circle_outline</i> Ejecutar
          </a>&nbsp;&nbsp;&nbsp;&nbsp;

          <a onClick={() => { coder.Reset(lang) }} >
                    <i className="sidebar-menu-icon sidebar-menu-icon--left material-icons">stop</i> Resetear
          </a>


            </div>
            {url != "" || err != "" ? <RunCode url={url} err={err} /> : null}
            <IDE Code={code} Lang={lang} Coder={coder} />
            <br />
        </div>

    </div>

}


export default (props) => {

    let id = window.location.pathname.split("/")[2]
    let Section = {}
    for (let ss of Me.sectionsByOwnerId.edges) {
        console.log("SS", ss.node.id, (+(id)))
        if (ss.node.id == (+(id))) {
            Section = ss.node
        }
    }
    // const [Section, setSection] = useState(S);
    // const [Users, setUsers] = useState(S.usersSectionsBySectionId.edges);
    const Users = Section.usersSectionsBySectionId.edges



    return <div class="">
        <div class="row">
            <div class="col-sm-3">
                <AdminBar Section={Section} /></div>
            <div class="col-sm-9">
                <div class="container">
                    {Users.map((user, ix) => {
                        return <IdeAdmin User={user} key={ix} />
                    })}

                </div>
            </div>
        </div>




    </div >
}

