import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getAllQueue, deleteQueue, addQueue} from '../../actions/QueueActions';
import Header from '../Header';


 class Queue extends Component {
     constructor(){
         super()
         this.state ={
             tables : []
         }
     }
     
     componentDidMount(){
        if (!this.props.auth.validToken && !this.props.auth.token.role[0].roleName === 'admin') {
             this.props.history.push("/login")
        }
        this.props.getAllQueue("A");     
     }
    
     componentWillReceiveProps(newProps){
        this.setState({
                tables :newProps.tables
        })
     }
     onClick(type){
         this.props.getAllQueue(type);
         this.setState({
             tables:this.props.tables
         }) 
     }
     deleteQueue(id){
         this.props.deleteQueue(id, this.props.history);
     }
     addQueue(id){
        this.props.addQueue(id, this.props.history);
     }
   
    render() { 
            const {tables} = this.state;
            let tableBody ;
          if(tables.length > 0){
              tableBody =tables.map(row =>{
                               return (
                                 <tr key={row.id} className="text-center">
                                   <td>{row.name}</td>
                                   <td>{row.id}</td>
                                   <td>{row.patient.firstName}</td>
                                   <td>{row.patient.lastName}</td>
                                   <td>{row.patient.phone}</td>
                                   <td>
                                     <button
                                       className={`${
                                         row.status
                                           ? "btn btn-light"
                                           : "btn btn-primary"
                                       }`}
                                       style={{
                                         width: "100px",
                                         fontWeight: "bold",
                                         verticalAlign: "center",
                                       }}
                                       onClick={() => this.addQueue(row.id)}
                                     >
                                       ok
                                     </button>
                                   </td>
                                   <td>
                                     <button
                                       className="btn btn-danger"
                                       style={{
                                         width: "100px",
                                         fontWeight: "bold",
                                         verticalAlign: "center",
                                       }}
                                       onClick={() => this.deleteQueue(row.id)}
                                     >
                                       delete
                                     </button>
                                   </td>
                                 </tr>
                               );
                           })
                        }else{
                            tableBody = "loading..."
                        }
        return (
            <>
                <div  style={{width:'1400px', margin:'0 auto'}}>
                        <Header />
                        <div className="btn-group ">
                            <button type="button" className="btn btn-light border pr-5 pl-5 mr-2" style={{borderRadius:'10px', fontWeight:'bold'}}onClick={()=>this.onClick("A")}>A</button>
                            <button type="button" className="btn btn-light border pr-5 pl-5 mr-2" style={{borderRadius:'10px', fontWeight:'bold'}}onClick={()=>this.onClick("B")}>B</button>
                            <button type="button" className="btn btn-light border pr-5 pl-5 mr-2" style={{borderRadius:'10px', fontWeight:'bold'}}onClick={()=>this.onClick("C")}>C</button>
                            <button type="button" className="btn btn-light border pr-5 pl-5 mr-2" style={{borderRadius:'10px', fontWeight:'bold'}}onClick={()=>this.onClick("D")}>D</button>
                            <button type="button" className="btn btn-light border pr-5 pl-5 mr-2" style={{borderRadius:'10px', fontWeight:'bold'}}onClick={()=>this.onClick("E")}>E</button>
                            <button type="button" className="btn btn-light border pr-5 pl-5 mr-2" style={{borderRadius:'10px', fontWeight:'bold'}}onClick={()=>this.onClick("F")}>F</button>
                        </div>
                    <table className="table table-sm border-bottom" style={{borderTop:'none'}}>
                        <thead>
                        <tr className="text-center">
                            <th className="pt-2 pb-2">Navbat_r</th>
                            <th className="pt-2 pb-2">#Id raqam</th>
                            <th className="pt-2 pb-2">Bemor_ismi</th>
                            <th className="pt-2 pb-2">Bemor_Fam</th>
                            <th className="pt-2 pb-2">Bemor_tel</th>
                            <th className="pt-2 pb-2"></th>
                            <th className="pt-2 pb-2"></th>
                        </tr>
                        </thead>
                        <tbody>
                          {tableBody}
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
};

Queue.propTypes = {
    getAllQueue : PropTypes.func.isRequired,
    tables : PropTypes.array.isRequired
}

const mapStateToPorps = state => ({
    tables : state.tables.tables,
    auth : state.auth
})


export default connect(mapStateToPorps, {getAllQueue, deleteQueue, addQueue})  (Queue);
