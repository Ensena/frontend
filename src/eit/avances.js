import React from 'react';
import {
    Link
  } from "react-router-dom";
import malla_academica from "./eit_malla.json";
import "./malla.css";




function Avances()  {

let UDP
try {
   UDP = JSON.parse(window.user.UDP.edges[0].node.custom)
} catch (error) {
  return null
}




 console.log(UDP)

 let anosemestre, ano_semestre = UDP.Avances[0].semestre + "-" + UDP.Avances[0].ano;
 let codigos = []

 let semestres = [];
 let semestre = [];

 for (let curso of UDP.Avances) {
   anosemestre = curso.semestre + "-" + curso.ano;
   if (curso.estado){
       codigos.push(curso.codigo)
   }

   if (anosemestre == ano_semestre) {
     semestre.push(curso);
   } else {
     semestres.push(semestre);
     semestre = [curso];
     ano_semestre=anosemestre
   }
 }

 


 let electivos = { CIT33: 4, CIT34: 4 };
 let cfg = 4;
 for (let curso of codigos) {
   for (let key of Object.keys(electivos)) {
     if (curso.includes(key)) {
       electivos[key] = electivos[key] - 1;
     }
   }
   if (curso.includes("CFG")) {
     cfg = cfg - 1;
   }
 }

 let Licenciatura = malla_academica.slice(0, 8);
 let Electivos = malla_academica.slice(8, 10);

 return    <div className="page ">
    <div className="container page__container">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="fixed-student-dashboard.html">Inicio</a></li>
        <li className="breadcrumb-item active">Avances</li>
      </ol>




      <table className="center" style={{ verticalAlign: "top" }}>
        <tbody>
          <tr>
            <td>
              <table>
                <tbody>
                  <tr>
                    <td style={{ whiteSpace: "nowrap" }}> Semestre I</td>
                    <td style={{ whiteSpace: "nowrap" }}> Semestre II</td>
                    <td style={{ whiteSpace: "nowrap" }}> Semestre III</td>
                    <td style={{ whiteSpace: "nowrap" }}> Semestre IV</td>
                    <td style={{ whiteSpace: "nowrap" }}> Semestre V</td>
                    <td style={{ whiteSpace: "nowrap" }}> Semestre VI</td>
                    <td style={{ whiteSpace: "nowrap" }}> Semestre VII</td>
                    <td style={{ whiteSpace: "nowrap" }}> Semestre VIII</td>
                  </tr>

                  {[0, 1, 2, 3, 4, 5].map((pos, kx) => {
                    return (
                      <tr key={kx}>
                        {" "}
                        {Licenciatura.map((malla, ix) => {
                          if (malla.length <= pos) {
                            return <td key={ix} />;
                          }

                          let clickme = () => {
                            // if (this.click) this.click(malla[pos].codigo);
                          };

                          let css = malla[pos].css;

                          if (
                            codigos.includes(
                              malla[pos].codigo.replace("-", "")
                            )
                          ) {
                            css = css + " box disabled";
                          }
                          if (malla[pos].codigo == "" && cfg < 4) {
                            
                            malla[pos].css = malla[pos].css + " box disabled";
                            css = malla[pos].css;
                            cfg++;
                          }
                          return (
                            <td
                              className="normal"
                              style={{ cursor: "pointer" }}
                              onClick={clickme}
                              key={ix}
                            >
                              <table
                                className={css}
                                cellSpacing={0}
                                cellPadding={0}
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      style={{ whiteSpace: "nowrap" }}
                                      colSpan={2}
                                    >
                                      <div
                                        style={{
                                          float: "left"
                                        }}
                                      >
                                        {malla[pos].codigo}
                                      </div>
                                      <div
                                        style={{
                                          float: "right"
                                        }}
                                      >
                                        {malla[pos].creditos}
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="CourseName" colSpan={2}>
                                      {malla[pos].nombre}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="CellCourseId">
                                      {malla[pos].numero}
                                    </td>
                                    <td className="CellCourseId">
                                      {malla[pos].requisitos.join("-") || "-"}
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </td>
            <td>
              <div className="rotate" style={{ textAlign: "center" }}>
                Licenciado en Ciencias{" "}
              </div>
            </td>
            <td style={{ verticalAlign: "top" }}>
              <table>
                <tbody>
                  <tr>
                    <td style={{ whiteSpace: "nowrap" }}>Semestre IX</td>
                    <td style={{ whiteSpace: "nowrap" }}>Semestre X</td>
                  </tr>

                  {[0, 1, 2, 3, 4].map((pos, ix) => {
                    return (
                      <tr key={ix}>
                        {Electivos.map((electivo, jx) => {
                          let css = electivo[pos].css;

                          if (
                            codigos.includes(
                              electivo[pos].codigo.replace("-", "")
                            )
                          )
                            css = css + " box disabled";

                          let precode = electivo[pos].codigo
                            .replace("-", "")
                            .slice(0, 5);
                          //console.log(precode)
                          if (Object.keys(electivos)) {
                            //console.log(precode, this.electivos, Object.keys(this.electivos));
                            if (electivos[precode] < 4) {
                              electivo[pos].css = electivo[pos].css + " box disabled";
                              css = electivo[pos].css;
                              electivos[precode]++;
                            }
                          }

                          return (
                            <td
                              className="normal"
                              style={{ cursor: "pointer" }}
                              key={jx}
                            >
                              <table className={css}>
                                <tbody>
                                  <tr>
                                    <td
                                      style={{ whiteSpace: "nowrap" }}
                                      colSpan={2}
                                    >
                                      <div
                                        style={{
                                          float: "left"
                                        }}
                                      >
                                        {electivo[pos].codigo}
                                      </div>
                                      <div
                                        style={{
                                          float: "right"
                                        }}
                                      >
                                        {electivo[pos].creditos}
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="CourseName" colSpan={2}>
                                      {electivo[pos].nombre}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="CellCourseId">
                                      {electivo[pos].numero}
                                    </td>
                                    <td className="CellCourseId">
                                      {electivo[pos].requisitos.join("-") ||
                                        "-"}
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </td>
            <td>
              <div className="rotate">Egreso </div>
            </td>
            <td>
              <div className="rotate">Actividad de Titulación </div>
            </td>
          </tr>
        </tbody>
      </table>


      <div className="media mb-headings align-items-center">
        <div className="media-body">
          <h1 className="h2">Historial Academico </h1>
        </div>

      </div>
      <div>
     
                {/* <h5 className="page-heading text-xs-center text-muted">
                  {semestre[0].ano} {semestre[0].semestre == 1 ? "Otoño" : "Primavera"}
                </h5> */}
                <div className="card-columns">
             
                {UDP.Avances.map((curso, ix) => {
            return <div key={ix}>
                     <div className="card">
                        <div className="card-header bg-white">
                          <div className="media">
                            <div className="media-body media-middle">
                              <a href="">
                                {curso.codigo + "  "}
                                {curso.nombre}
                              </a>
                              <br />
                              <small className="text">
                                {curso.estado ? "Aprobado" : null}
                                {curso.nota !== " " && curso.estado == false ? "Reprobado" : null}
                                {curso.nota === " " && curso.estado == false ? "Inscrito" : null}
                                {" "+curso.ano}  {curso.semestre}
            
                                
                              </small>
                            </div>
                            <div className="media-right text-xs-center">
                              <h4 className="mb-0">
                                {curso.nota}
                                {curso.nota === " " && curso.estado == false ? "PP" : null}
                              </h4>

                              <span className="text-muted-light" />
                            </div>
                          </div>
                        </div>
                      </div>
     
                </div>
                     })}
                <hr />
              </div>
     
        </div>
   
    </div>
   
  </div>
    
}

export default Avances;
