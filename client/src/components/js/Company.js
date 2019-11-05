import React, {Component} from 'react';
import axios from 'axios';
import qs from 'qs';
import '../css/company.css'

class CompanyItem extends Component {
    constructor(props){
        super(props);
        this.formRef = React.createRef();
        this.state = {
            form:  {}
        }
    }
    
    componentDidMount(){
        this.setState({form: this.props.company});
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
          })
    }
    onChangeType=(e)=>{
        const form = this.state.form;
        form.type = e.target.value;
        this.setState({
            form : form
        })
    }


    render(){

       
    return( 
        <div className="container" style={{float: "left"}}>
          
        <table className = "table">
            <tbody>
        <tr>
        <td>{this.props.index + 1}</td>
        <td>{this.props.company.name}</td>
        <td>{this.props.company.type}</td>
        </tr>
        </tbody>
        </table>
        <button  className = "btn btn-primary" onClick = {()=>this.props.deleteCompany(this.props.company._id)} style={{margin: "0.7rem"}}>Delete</button>
        <button  className = "btn btn-primary"onClick = {()=>this.toggleDisplay(this.formRef)}>Edit</button>
        
    
    
  <form style={{marginTop: "100px"}} ref = {this.formRef} style={{margin: "auto",width: "100%",display: "none"}} onSubmit = {this.props.onCompanyUpdate(this.props.company._id, this.state.form)}>
    
    <div class="form-group">
  <label >Company Name</label>
  <input type="text" class="form-control"  placeholder="Company Name" value={this.state.form.name} onChange = {this.onChangeName}/>
</div>

<div class="form-group" >
  <label>Type</label>
  <input type="text" class="form-control"  placeholder="Type" value={this.state.form.type} onChange = {this.onChangeType}/>
</div>
<button type="submit" class="btn btn-primary">Edit</button>
</form>


</div>

    

    )
}

}





export default class Company extends Component {
    constructor(){
        super();
        this.formRef = React.createRef();
        this.state = {
            companies : [{}],
            form: {}
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onCompanyUpdate = this.onCompanyUpdate.bind(this);
        this.deleteCompany = this.deleteCompany.bind(this);
    }
    componentDidMount(){
        axios.get("http://localhost:3001/company")
        .then(res=>this.setState({companies : res.data}))
        .catch(err=>console.log(err));
    }
    
    onChangeName(e) {
        const form = this.state.form;
        form.name = e.target.value;
          this.setState({
              form : form
          })
    }
    onChangeType(e){
        const form = this.state.form;
        form.type = e.target.value;
        this.setState({
            form : form
        })
    }
    onSubmit(e){
        e.preventDefault();
        let form = this.state.form;
        axios.post("http://localhost:3001/company/add", qs.stringify(form))
        .then(res=>this.setState({companies : res.data}))
        .catch(err=>console.log("here"));

        form = {name:"", type: ""};
        this.setState({form: form});
    }
    deleteCompany(id){
        axios.delete("http://localhost:3001/company/" + id + "/delete")
        .then(res=>{this.setState({companies : res.data});})
        .catch(err=> alert("Sorry delete operation was unsuccessful. Please try again later."));
    }
    toggleDisplay(ref){
        if (ref.current.style.display =="none") ref.current.style.display = "block";
        else ref.current.style.display = "none";
    }
    onCompanyUpdate(id, form){
         var f =  (e)=>{      
        e.preventDefault();
        axios.put("http://localhost:3001/company/" + id + "/put", qs.stringify(form))
        .then(res=>this.setState({companies: res.data}))
        .catch(err=>alert("sorry we could not update the company details please try again later"));
        
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
                <div className="company-details" >
                  <table className = "table"  >
                      <thead >
                          <th >#</th>
                          <th >Name</th>
                          <th >Type</th>
                      </thead>
                      </table>
                        {this.state.companies.map((company,index)=>(
                            <CompanyItem deleteCompany = {this.deleteCompany} index = {index}  company = {company} onCompanyUpdate = {this.onCompanyUpdate}/>
                        ))            
                        }
                              
            </div>

           <button className = "btn btn-primary" onClick = {()=>this.toggleDisplay(this.formRef)}>Add companies</button>
           
           
          
           
            <div ref = {this.formRef} className = "company-form" style={{display: "none"}} >
                           
                        <form onSubmit = {this.onSubmit}>
                <div class="form-group">
                    <label >Company Name</label>
                    <input type="text" class="form-control"  placeholder="Company Name" value={this.state.form.name} onChange = {this.onChangeName}/>
                </div>
                <div class="form-group">
                    <label>Type</label>
                    <input type="text" class="form-control"  placeholder="Type" value={this.state.form.type} onChange = {this.onChangeType}/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>

                </div>
                 </div>
                
                




            </div>
           
           
          
        )
    }
}