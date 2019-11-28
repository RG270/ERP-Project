import React, {Component} from 'react';
import axios from 'axios';
import qs from 'qs';
import '../css/student.css';
import {Link} from 'react-router-dom';
import StudentFilter from './StudentFilter';


class StudentItem extends Component {
    constructor(props){
        super(props);
        this.formRef = React.createRef();
        this.state = {
            form:  {
                backLog: false,
                blackList: false,
                placed: false
            }
        }
    }
    
    componentDidMount(){
        this.setState({
            form: this.props.student
        });
    }
    
    toggleDisplay(ref){
        if (ref.current.style.display =="none") ref.current.style.display = "block";
        else ref.current.style.display = "none";
    }

    onChangeName=(e)=> {
        const form = this.state.form;
        form.name = e.target.value;
          this.setState({
              form : form
          });
    }
    onChangeRollNo=(e)=>{
        const form = this.state.form;
        form.rollNo = e.target.value;
        this.setState({
            form : form
        });
    }
    onChangeMobNo=(e)=>{
        const form = this.state.form;
        form.mobNo = e.target.value;
        this.setState({
            form : form
        });
    }
    onChangeEmail=(e)=>{
        const form = this.state.form;
        form.email = e.target.value;
        this.setState({
            form : form
        });
    }
    onChangeBlackList=(e)=>{
        const form = this.state.form;
        form.blackList = e.target.value;
        this.setState({
            form : form
        });
    }
    onChangePlaced=(e)=>{
        const form = this.state.form;
        form.placed = e.target.value;
        this.setState({
            form : form
        });
    }
    onChangeBackLog=(e)=>{
        const form = this.state.form;
        form.backLog = e.target.value;
        this.setState({
            form : form
        });
    }
    onChangeCGPA=(e)=>{
        const form = this.state.form;
        form.cgpa = e.target.value;
        this.setState({
            form : form
        });
    }


    render(){

       
    return( 
        <div className="container" style={{float: "left"}}>
          
        <table className = "table">
            <tbody>
        <tr>
        <td>{this.props.index + 1}</td>
        <td>{this.props.student.name}</td>
        <td>{this.props.student.rollNo}</td>
        </tr>
        </tbody>
        </table>
        <Link to = {this.props.student._id?'/student/' + this.props.student._id.toString()  + '/show':'/student'}><button className = "btn btn-primary" >Profile</button></Link>
        <button  className = "btn btn-primary" onClick = {()=>this.props.deleteStudent(this.props.student._id)} style={{margin: "0.7rem"}}>Delete</button>
        <button  className = "btn btn-primary"onClick = {()=>this.toggleDisplay(this.formRef)}>Edit</button>
        
    
    
  <form style={{marginTop: "100px"}} ref = {this.formRef} style={{margin: "auto",width: "100%",display: "none"}} onSubmit = {this.props.onStudentUpdate(this.props.student._id, this.state.form)}>
    
    <div class="form-group">
  <label >Student Name</label>
  <input type="text" class="form-control"  placeholder="Student Name" value={this.state.form.name} onChange = {this.onChangeName}/>
</div>

<div class="form-group" >
  <label>Roll Number</label>
  <input type="text" class="form-control"  placeholder="Roll Number" value={this.state.form.rollNo} onChange = {this.onChangeRollNo}/>
</div>
<div class="form-group">
                <label>E-mail</label>
                <input type="text" class="form-control"  required placeholder="E-mail" value={this.state.form.email} onChange = {this.onChangeEmail}/>
            </div>
            <div class="form-group">
                <label>Mobile Number</label>
                <input type="text" class="form-control"  required placeholder="Mobile Number" value={this.state.form.mobNo} onChange = {this.onChangeMobNo}/>
            </div>
            <div class="form-group">
                <label>CGPA</label>
                <input type="text" class="form-control"  placeholder="CGPA" value={this.state.form.cgpa} onChange = {this.onChangeCGPA}/>
            </div>
            <div class="form-group">
                <label>Back Log</label>
                <select onChange = {this.onChangeBackLog} value = {this.state.form.backLog} >
                    <option value = {false}>No</option>
                    <option value = {true}>Yes</option>    
                </select>    
            </div>
            <div class="form-group">
                <label>Black Listed</label>
                <select onChange = {this.onChangeBlackList} value = {this.state.form.blackList} >
                    <option value = {false}>No</option>
                    <option value = {true}>Yes</option>    
                </select>    
            </div>
            <div class="form-group">
                <label>Placed</label>
                <select onChange = {this.onChangeBackLog} value = {this.state.form.backLog} >
                    <option value = {false}>No</option>
                    <option value = {true}>Yes</option>    
                </select>    
            </div>
<button type="submit" class="btn btn-primary" onClick = {()=>this.toggleDisplay(this.formRef)}>Edit</button>
</form>


</div>

    

    )
}

}





export default class Student extends Component {
    constructor(){
        super();
        this.formRef = React.createRef();
        this.state = {
            students : [{}],
            form: {}
        }
       

    }
    componentDidMount(){
        axios.get("http://localhost:3001/student")
        .then(res=>this.setState({students : res.data}))
        .catch(err=>console.log(err));
    }
    
    onChangeName=(e)=> {
        const form = this.state.form;
        form.name = e.target.value;
          this.setState({
              form : form
          })
    }
    onChangeRollNo=(e)=>{
        const form = this.state.form;
        form.rollNo = e.target.value;
        this.setState({
            form : form
        })
    }
    onChangeMobNo=(e)=>{
        const form = this.state.form;
        form.mobNo = e.target.value;
        this.setState({
            form : form
        });
    }
    onChangeEmail=(e)=>{
        const form = this.state.form;
        form.email = e.target.value;
        this.setState({
            form : form
        });
    }
    onChangeBlackList=(e)=>{
        const form = this.state.form;
        form.blackList = e.target.value;
        this.setState({
            form : form
        });
    }
    onApplyFilter = (students)=> {
        this.setState({students: students});
     }
    onChangePlaced=(e)=>{
        const form = this.state.form;
        form.placed = e.target.value;
        this.setState({
            form : form
        });
    }
    onChangeBackLog=(e)=>{
        const form = this.state.form;
        form.backLog = e.target.value;
        this.setState({
            form : form
        });
    }
    onChangeCGPA=(e)=>{
        const form = this.state.form;
        form.cgpa = e.target.value;
        this.setState({
            form : form
        });
    }
    onSubmit=(e)=>{
        e.preventDefault();
        let form = this.state.form;
        axios.post("http://localhost:3001/student/add", qs.stringify(form))
        .then(res=>this.setState({students : res.data}))
        .catch(err=>alert("Sorry we are unable to add Student please try again later"));

        form = {name:"", rollNo: ""};
        this.setState({form: form});
        
    }
    deleteStudent=(id)=>{
        axios.delete("http://localhost:3001/student/" + id + "/delete")
        .then(res=>{this.setState({students : res.data});})
        .catch(err=> alert("Sorry delete operation was unsuccessful. Please try again later."));
    }
    toggleDisplay=(ref)=>{
        if (ref.current.style.display =="none") ref.current.style.display = "block";
        else ref.current.style.display = "none";
    }
    onStudentUpdate=(id, form)=>{
         var f =  (e)=>{      
        e.preventDefault();
        axios.put("http://localhost:3001/student/" + id + "/put", qs.stringify(form))
        .then(res=>this.setState({students: res.data}))
        .catch(err=>alert("sorry we could not update the student details please try again later"));       
    }
    return f;
    
}
    render(){
        return(

            <div class="container m-0 p-0">
                <div className="row">
               
                    <div className = "col-md-3 text-center card p-5">
                        <StudentFilter onApplyFilter = {this.onApplyFilter}/>
                    </div>
                    <div className= "col-sm-9 m-0 p-0">
                        <div className="student-details" >
                            <table class="table table-striped">
                                <thead >
                                    <th >#</th>
                                    <th >Name</th>
                                    <th >Roll Number</th>
                                </thead>
                            </table>
                            {this.state.students.map((student,index)=>(
                                <StudentItem deleteStudent = {this.deleteStudent} index = {index}  student = {student} onStudentUpdate = {this.onStudentUpdate}/>
                                ))            
                            }
                        </div>

                        <button className = "btn btn-primary" onClick = {()=>this.toggleDisplay(this.formRef)}>Add students</button>
                        
                        <div ref = {this.formRef} className = "student-form" style={{display: "none"}} >
                            
                            <form onSubmit = {this.onSubmit}>
                                <div class="form-group">
                                    <label >Student Name</label>
                                    <input type="text" class="form-control"  required placeholder="Student Name" value={this.state.form.name} onChange = {this.onChangeName}/>
                                </div>
                                <div class="form-group">
                                    <label>Roll Number</label>
                                    <input type="text" class="form-control"  required placeholder="Roll Number" value={this.state.form.rollNo} onChange = {this.onChangeRollNo}/>
                                </div>
                                <div class="form-group">
                                    <label>E-mail</label>
                                    <input type="text" class="form-control"  required placeholder="E-mail" value={this.state.form.email} onChange = {this.onChangeEmail}/>
                                </div>
                                <div class="form-group">
                                    <label>Mobile Number</label>
                                    <input type="text" class="form-control"  required placeholder="Mobile Number" value={this.state.form.mobNo} onChange = {this.onChangeMobNo}/>
                                </div>
                                <div class="form-group">
                                    <label>CGPA</label>
                                    <input type="text" class="form-control"  placeholder="CGPA" value={this.state.form.cgpa} onChange = {this.onChangeCGPA}/>
                                </div>
                                <div class="form-group">
                                    <label>Back Log</label>
                                    <select onChange = {this.onChangeBackLog} value = {this.state.form.backLog} >
                                       <option value = {false}>No</option>
                                       <option value = {true}>Yes</option>    
                                    </select>    
                                </div>
                                <div class="form-group">
                                    <label>Black Listed</label>
                                    <select onChange = {this.onChangeBlackList} value = {this.state.form.blackList} >
                                       <option value = {false}>No</option>
                                       <option value = {true}>Yes</option>    
                                    </select>    
                                </div>
                                <div class="form-group">
                                    <label>Placed</label>
                                    <select onChange = {this.onChangeBackLog} value = {this.state.form.backLog} >
                                       <option value = {false}>No</option>
                                       <option value = {true}>Yes</option>    
                                    </select>    
                                </div>
                                <button type="submit" class="btn btn-primary" onClick = {()=>this.toggleDisplay(this.formRef)}>Submit</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>    
        )
    }
}