import React from 'react';
import {Me as me,Api,FindInstitute}  from '../core/ensena';
import { render } from '@testing-library/react';
import {
  Link
} from "react-router-dom";





class News extends React.Component {

  constructor(props) {
      super(props)


      this.udp = FindInstitute(2);
      this.uft =null// findInstitute(4) ;
  
      this.state={news :[]}
      let news = new Api("news")
      let all_news=[];
      if (this.udp && me.moodleUdp){
        all_news.push(news.getAll({username:"IngCienciasUDP"}))
      }
      if (this.uft){
        all_news.push(news.getAll({username:"ufinisterrae"}))
      }
  
      Promise.all(all_news).then(values => { 
        console.log(values)
        
        var merged =[]
        for (let value of values)
          merged = [].concat.apply(merged, value.News);

        //var merged = [].concat.apply([], values.News);

        merged.sort(function(a, b) {
          let x = new Date(a.Time)
          let y = new Date(b.Time)
          if (x > y) {
            return -1;
          }
          if (x < y) {
            return 1;
          }
          return 0;
        });
        this.setState({news:merged})
      });



  }
  render() {

    let Fecha = (f)=>{

      let date = new Date(f.Time)
      let dd = date.getDate();

      let mm = date.getMonth()+1; 
      let yyyy = date.getFullYear();

      return  dd+'/'+mm+'/'+yyyy;
    }

    let goNews = (n) =>{

     let  l = n.length
     let url = n.slice(l-23)

      window.location = url 

    }

    return  <div className="col-sm">

    <div className="card">
      <div className="card-body">
        <div className="d-flex mb-1">
          <div className="avatar avatar-sm mr-3">
            <img src="https://scontent.fscl9-2.fna.fbcdn.net/v/t1.6435-1/124644023_10220467277365738_6415641028506853648_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=7206a8&_nc_ohc=OqqYpwEyTJEAX_Yhv05&_nc_ht=scontent.fscl9-2.fna&oh=c0fc5dd19649a773517e62dd597ae200&oe=608723C8" alt="Avatar" className="avatar-img rounded-circle" />
          </div>
          <div className="flex">
            <div className="d-flex align-items-center mb-1">
              <strong className="text-15pt">Manuel Alba</strong>
              <small className="ml-auto text-muted">14/06/2020</small>
            </div>
            <div>
              <p>Gracias a todos por usar Enseña 🔥durante este semetre</p>
              <p><a href>#Enseña</a> <a href>#GraciasTotales</a> </p>
            </div>
          </div>
        </div>
        {/* <div className="d-flex align-items-center">
          <a href className="text-muted d-flex align-items-center text-decoration-0"><i className="material-icons mr-1" style={{fontSize: 'inherit'}}>favorite_border</i> 26</a>
          <a href className="text-muted d-flex align-items-center text-decoration-0 ml-3"><i className="material-icons mr-1" style={{fontSize: 'inherit'}}>thumb_up</i> 123</a>
        </div> */}
      </div>
    </div>

   {this.state.news.map((New,ix)=>{ return  <div className="card" key={ix}>
      <div className="card-body" onClick={()=>{ goNews(New.Text) } }>
        <div className="d-flex mb-1">
          <div className="avatar avatar-sm mr-3">
            <img src={New.ImgUrl} alt="Avatar" className="avatar-img rounded-circle" />
          </div>
          <div className="flex">
            <div className="d-flex align-items-center mb-1">
              <strong className="text-15pt">{New.Name}</strong>
              <small className="ml-auto text-muted">{Fecha(New)}</small>
            </div>
            <div>
              <p>{New.Text}</p>
            </div>
          </div>
        </div>
        {/* <div className="d-flex align-items-center">
          <a href className="text-muted d-flex align-items-center text-decoration-0"><i className="material-icons mr-1" style={{fontSize: 'inherit'}}>favorite_border</i> 26</a>
          <a href className="text-muted d-flex align-items-center text-decoration-0 ml-3"><i className="material-icons mr-1" style={{fontSize: 'inherit'}}>thumb_up</i> 123</a>
        </div> */}
      </div>
      </div> })}
    {/* <div className="card">
      <div className="card-body">
        <div className="d-flex mb-1">
          <div className="avatar avatar-sm mr-3">
            <img src="assets/images/people/50/woman-5.jpg" alt="Avatar" className="avatar-img rounded-circle" />
          </div>
          <div className="flex">
            <div className="d-flex align-items-center mb-1">
              <strong className="text-15pt">Michelle Smith</strong>
              <small className="ml-auto text-muted">4 days ago</small>
            </div>
            <div>
              <p>Checkout our new JVC camera course on <a href>https://t.co/Wh7jE0yz4h</a> 😉
              </p></div>
            <a href className="card my-3 text-body text-decoration-0">
              <img src="assets/images/stories/256_rsz_phil-hearing-769014-unsplash.jpg" alt="image" className="card-img-top" />
              <span className="card-footer d-flex flex-column">
                <strong>Learn How To Operate a JVC Camera</strong>
                <span className="text-black-70">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                <span className="text-muted">frontendmatter.com</span>
              </span>
            </a>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <a href className="text-muted d-flex align-items-center text-decoration-0"><i className="material-icons mr-1" style={{fontSize: 'inherit'}}>favorite_border</i> 156</a>
          <a href className="text-muted d-flex align-items-center text-decoration-0 ml-3"><i className="material-icons mr-1" style={{fontSize: 'inherit'}}>thumb_up</i> 351</a>
        </div>
      </div>
    </div> */}
  </div>
  }
}

export default News;
