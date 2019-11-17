import React, {Component} from 'react';
import axios from 'axios';
import qs from 'qs';
import '../css/student.css';

class StudentItem extends Component {
    constructor(props){
        super(props);
        this.formRef = React.createRef();
        this.state = {
            form:  {}
        }
    }
    
    componentDidMount(){
        this.setState({form: this.props.student});
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
        <button  className = "btn btn-primary" onClick = {()=>this.props.deleteStudent(this.props.student._id)} style={{margin: "0.7rem"}}>Delete</button>
        <button  className = "btn btn-primary"onClick = {()=>this.toggleDisplay(this.formRef)}>Edit</button>
        
    
    
  <form style={{marginTop: "100px"}} ref = {this.formRef} style={{margin: "auto",width: "100%",display: "none"}} onSubmit = {this.props.onStudentUpdate(this.props.student._id, this.state.form)}>
    
    <div class="form-group">
  <label >Student Name</label>
  <input type="text" class="form-control"  placeholder="Student Name" value={this.state.form.name} onChange = {this.onChangeName}/>
</div>

<div class="form-group" >
  <label>Type</label>
  <input type="text" class="form-control"  placeholder="Roll Number" value={this.state.form.rollNo} onChange = {this.onChangeRollNo}/>
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
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeRollNo = this.onChangeRollNo.bind(this);
        this.onStudentUpdate = this.onStudentUpdate.bind(this);
        this.deleteStudent = this.deleteStudent.bind(this);
    }
    componentDidMount(){
        axios.get("http://localhost:3001/student")
        .then(res=>this.setState({students : res.data}))
        .catch(err=>console.log(err));
    }
    
    onChangeName(e) {
        const form = this.state.form;
        form.name = e.target.value;
          this.setState({
              form : form
          })
    }
    onChangeRollNo(e){
        const form = this.state.form;
        form.rollNo = e.target.value;
        this.setState({
            form : form
        })
    }
    onSubmit(e){
        e.preventDefault();
        let form = this.state.form;
        axios.post("http://localhost:3001/student/add", qs.stringify(form))
        .then(res=>this.setState({students : res.data}))
        .catch(err=>alert("Sorry we are unable to add Student please try again later"));

        form = {name:"", rollNo: ""};
        this.setState({form: form});
    }
    deleteStudent(id){
        axios.delete("http://localhost:3001/student/" + id + "/delete")
        .then(res=>{this.setState({students : res.data});})
        .catch(err=> alert("Sorry delete operation was unsuccessful. Please try again later."));
    }
    toggleDisplay(ref){
        if (ref.current.style.display =="none") ref.current.style.display = "block";
        else ref.current.style.display = "none";
    }
    onStudentUpdate(id, form){
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
            
             
            
            <div >
                <div className="row" >
                   <div className = "col-sm-2 text-center left-aside" >
                    <ul type = "none"> 
                        <li> one</li>
                        <li> two</li>
                        <li> three</li> 
                    </ul>
                </div>
                <div className= "col-sm-10">
                <div className="student-details" >
                  <table className = "table"  >
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
                    <input type="text" class="form-control"  placeholder="Student Name" value={this.state.form.name} onChange = {this.onChangeName}/>
                </div>
                <div class="form-group">
                    <label>Roll Number</label>
                    <input type="text" class="form-control"  placeholder="Roll Number" value={this.state.form.rollNo} onChange = {this.onChangeRollNo}/>
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