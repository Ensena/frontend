import React, { Component } from 'react';
import { Button } from 'antd';
import IDE from '../../coder/ide';
import Api from '../../ensena';


function eventSorter(a, b) {
    let arr1 = +a.split("/")[5]
    let arr2 = +b.split("/")[5]


    if (arr1 == arr2) {
        return 0;
    } else {
        return arr1 < arr2 ? -1 : 1;
    }
}
 


class ReviewCode extends  Component  {
 
     constructor(props) {
         super(props)
         this.pos = 0
         this.state={code :{} ,load:false,steps:[],history:false,run :false,show:false ,user:props.task[this.pos].node.userByOwnerId }
         this.getInfo()

     }

     getInfo(){
         this.setState({user:this.props.task[this.pos].node.userByOwnerId})
        let api =new Api("tasks/getCode")
        api.getAll({task_id:this.props.task[this.pos].node.taskId ,user_id:this.props.task[this.pos].node.ownerId }).
        then((code)=>{ 
           this.setState({code:code,load:true})
        })

        let step =new Api("tasks/getCodeHistory")
        step.getAll({task_id:this.props.task[this.pos].node.taskId ,user_id:this.props.task[this.pos].node.ownerId }).
        then((code)=>{ 
           this.setState({steps:code})
        })
     }


     async Steps(){
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
          }
        this.state.steps.sort(eventSorter);
        let api =new Api("tasks/getCode")
        this.state.run=true
        this.setState({run:true})
        for(let step of this.state.steps ){
            api.getAll({task_id:this.props.task[this.pos].node.taskId ,user_id:this.props.task[this.pos].node.ownerId,snapshot:  +step.split("/")[5] }).
            then((code)=>{ 
               let history = new Date((+step.split("/")[5]) * 1000 )
               this.setState({code:code,history:history.toString() })
            })
            if (this.state.run == false){
                return 
            }
            await sleep(200);
        }
        api.getAll({task_id:this.props.task[0].node.taskId ,user_id:this.props.task[this.pos].node.ownerId }).
        then((code)=>{ 
           this.setState({code:code,load:true})
        })

     }

     next(n){
        this.state.run=false 
        this.state.history =""
        let pos = (this.pos + n)
        if (pos <0 ){
            pos = this.props.task.length-1
        }
        this.pos = (pos)%this.props.task.length
        this.getInfo()
     }
 
     render() {
         let task = this.props.task[0].node
         console.log(this.props)
        return <div>
        <Button  onClick={()=>{  this.next(-1)     }} > Anterior Alumno</Button>  
         {"  "}
        <Button  onClick={()=>{  this.next(1)     }} > Siguente Alumno</Button>  
         {this.state.show?<Button  onClick={()=>{ this.setState({show:false})       }} > Ocultar Datos</Button>: <Button  onClick={()=>{ this.setState({show:true})  }} > Mostrar Datos</Button> }
         {"   "}<Button  onClick={()=>{    this.Steps()   }} > Recrear los {this.state.steps.length} pasos</Button>
         {"   "}{this.state.run?<Button  onClick={()=>{ this.state.run=false ;this.setState({run:false})  }} >  Detener</Button>:null}
        <h1 className="h2" style={{display:this.state.show?"":"none"}}>{this.state.user.name} {this.state.user.lastName}  {this.state.user.email}  </h1>
        <h1 className="h2" >{this.state.history}  </h1>

        <div className="row">
          <div className="col-md-11">
            <div className="card">
    


            {this.state.load?<IDE default={this.state.code.code} />:null}
         

            </div>
          </div>
        </div>
        </div>
  }
    }

export default ReviewCode