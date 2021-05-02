//const authorization="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6IjEiLCJFbWFpbCI6Im1hbGJhQG1tYWUuY2wifQ.1mZ_Y3Hz6zEcS0MP7EfH0xh8KeUep3D9g6hwhiomvSg"
const authorization=""




function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }


class Ensena {
    constructor() {
        this.authorization = authorization!=""?authorization:getCookie("ensena")
        if (this.authorization ==""){
            this.redirect()
        }
        this.me =false 
      }


   async Me(){

    var myHeaders = new Headers();
    myHeaders.append('pragma', 'no-cache');
    myHeaders.append('cache-control', 'no-cache');
    myHeaders.set("Authorization",this.authorization)
    return fetch("/api/v1/me", {
             headers: myHeaders 
          })
          .then((res)=> {   return res.status==200?res.json():this.redirect() })
          .then((res)=>{this.me = res;  })   
    }
    Graphql(service,obj){}
    Get(service,id,obj){}
    New(service,obj){}
    Update(service,id,obj){}
    redirect(){
        window.location.href  ="/oauth2/login?client_id=7nywNebh7Q"
    }
}

class Api {
    constructor(process) {
        this._process = process;
        this.msg = true
        this.url = "/api/v1/"
    }

    SetDomain(url){
        this.url = url 
    }


    CallProcess(process, data, method) {

        let args = {}
        let url =  this.url + process
        let  auth = authorization!=""?authorization:getCookie("ensena")
        var myHeaders = new Headers();
        myHeaders.append('pragma', 'no-cache');
        myHeaders.append('cache-control', 'no-cache');
        myHeaders.set("Authorization",auth)
        if (method == "GET") {
            args = {
                headers: myHeaders,
            }
            var esc = encodeURIComponent;
            var query = Object.keys(data)
                .map(k => esc(k) + '=' + esc(data[k]))
                .join('&');
            url = url + "?" + query
        }
        else if (method == "POST") {
            args = {
                method: 'POST',
                headers: { Authorization: auth , "Content-Type": "application/json; charset=utf-8" },
                body: JSON.stringify(data)
            }
        }
        else if (method == "PUT") {
            args = {
                method: 'PUT',
                headers: { Authorization:auth , "Content-Type": "application/json; charset=utf-8" },
                body: JSON.stringify(data)
            }
            url = url + "/" + data.ID
    
        }
    
    
        else if (method == "DELETE") {
            args = {
                method: 'DELETE',
                headers: { Authorization: auth , "Content-Type": "application/json; charset=utf-8" }
            }
            url = url + "/" + data.ID
    
        }
    
    
        console.log("URL", url)
    
    
    
        return new Promise((resolve, reject) => {
    
    
    
    
            fetch(url, args).catch((err)=>{
                reject(err)
            }).then(function (response) {
                return response.json();
            }).catch((err)=>{
                
                reject(err)
            })
    
                .then(function (myJson) {
    
                    resolve(myJson)
                })
    
        })
    }

    new(params) {


        return new Promise((resolve, reject) => {

            this.CallProcess(this._process, params, "POST").then((data) => {

                resolve(data)
                if (this.msg){
                    // notification.success({
                    //     message: 'Se ha insertado con exito ',
                    //     description: 'El Id de inserccion es  ' + data.Data.ID,
                    // });
                }

            })
        })

    }


    get(ID, params = {}) {
        console.log("ID", ID)
        return new Promise((resolve, reject) => {
            this.CallProcess(this._process + "/" + ID, params, "GET").then((data) => { resolve(data.Data) })
        })

    }
    getAll(params = {}) {
        return new Promise((resolve, reject) => {
            this.CallProcess(this._process, params, "GET").then((data) => { resolve(data) })
        })

    }
    save(process) {

        return new Promise((resolve, reject) => {

            this.CallProcess(this._process, process, "PUT").then((data) => {
                // notification.success({
                //     message: 'Se ha actualizado con exito ',
                //     description: 'El Id ' + data.Data.ID,
                // });


                resolve(data.Data)
            }).catch((data)=>{reject(data)})

        })
    }
    delete(process) {

        return new Promise((resolve, reject) => {


            // confirm({
            //     title: 'Â¿Esta seguro que desea borrar?',
            //     content: 'Esta seguro que desea borrar el registro id : ' + process.ID,
            //     okText: 'Si',
            //     okType: 'danger',
            //     cancelText: 'No',
            //     onOk: () => {


            //         CallProcess(this._process, process, "DELETE").then((data) => {
            //             resolve(data.Data)
            //         })
            //     },
            //     onCancel() {
            //         resolve(process)
            //     },
            // });


        })
    }
}


var ensena = new Ensena()

let obj = {
    Graphql:ensena.Graphql,
    Get:ensena.Get,
    New:ensena.New,
    Update:ensena.Update,

}

let Render = ensena.Me()



function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  let Name, LastName, Picture, Email,Me,data,UUID,GenerateUUID,Token = getCookie("ensena")

GenerateUUID = uuidv4
Render.then(()=>{
    Name= ensena.me.Ensena.data.user.name
    LastName= ensena.me.Ensena.data.user.lastName
    Email= ensena.me.Ensena.data.user.email
    Picture= ensena.me.Ensena.data.user.picture
    Me = ensena.me.Ensena.data.user
    data = ensena.me
    UUID = uuidv4()
})



export  { Name , Render,LastName,Email,Picture,Me,data,Api,UUID,GenerateUUID,Token  }