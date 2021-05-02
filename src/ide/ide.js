import { useState } from 'react';

import AceEditor from "react-ace";
import {Type} from './codes'

import "ace-builds/src-noconflict/mode-csharp";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-golang";
import "ace-builds/src-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-twilight";

export default ({Code,Lang,Coder}) => {
    //    ID = Me.id 
    return <AceEditor
        placeholder="// Inserta tu codigo"
        mode={Type(Lang)}
        theme="twilight"
        name="hoola"
        // onLoad={this.onLoad}
        // onChange={this.onChange}
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        width={"100%"}
        height={"700px"}
        highlightActiveLine={true}
        value={Code}
        onChange={(e)=>{Coder.Send(e)}}
        setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 2,
        }} />
}

