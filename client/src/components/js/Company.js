import React, {Component} from 'react';
import axios from 'axios';
import qs from 'qs';
import '../css/company.css'
import Filter from './Filter';
import {Link} from 'react-router-dom';

class CompanyItem extends Component {
    constructor(props){
        super(props);
        this.formRef = React.createRef();
        this.state = {
            form:  {
                type: 'E-commerce'
            }
        }
    }
    
    getDerivedStateFromProps(props, state){
       return {form: props}
    }
    
    toggleDisplay(ref){
        if (ref.current.style.display === "none") ref.current.style.display = "block";
        else ref.current.style.display = "none";
    }

    onChangeName=(e)=> {
        const form = this.state.form;
        form.name = e.target.value;
          this.setState({
              form : form
          });
    }
    onChangeType=(e)=>{
        const form = this.state.form;
        form.type = e.target.value;
        this.setState({
            form : form
        });
    }
    onChangeAddress=(e)=>{
        let form = this.state.form;
        form.address = e.target.value;
        this.setState({
            form: form
        });
    }
    onChangeMobNo=(e)=>{
        let form = this.state.form;
        form.mobNo = e.target.value;
        this.setState({
            form: form
        });
    }
    onChangeEmail=(e)=>{
        let form = this.state.form;
        form.email = e.target.value;
        this.setState({
            form: form
        });
    }
    onChangeAddress=(e)=>{
        let form = this.state.form;
        form.address = e.target.value;
        this.setState({
            form: form
        });
    }
    onChangeWebsite=(e)=>{
        let form = this.state.form;
        form.website = e.target.value;
        this.setState({
            form: form
        });
    }
    onChangePackage = (e)=>{
        let form = this.state.form;
        form.package = e.target.value;
        this.setState({
            form: form
        });
    }

    render(){

       
    return( 
        <div class="container">
	
            <table className = "table">
                <tbody>
                    <tr>
                        <td>{this.props.index + 1}</td>
                        <td>{this.props.company.name}</td>
                        <td>{this.props.company.type}</td>
                    </tr>
                </tbody>
            </table>
            <Link to = {this.props.company._id?'/company/' + this.props.company._id.toString()  + '/show':'/company'}><button className = "btn btn-primary" >Profile</button></Link>
            <button  className = "btn btn-primary" onClick = {()=>this.props.deleteCompany(this.props.company._id)} style={{margin: "0.7rem"}}>Delete</button>
            <button  className = "btn btn-primary"onClick = {()=>this.toggleDisplay(this.formRef)}>Edit</button>
        
            <form style={{marginTop: "100px"}} ref = {this.formRef} style={{margin: "auto",width: "100%",display: "none"}} onSubmit = {this.props.onCompanyUpdate(this.props.company._id, this.state.form)}>
                
                <div class="form-group p-5">
                    <label >Company Name</label>
                    <input type="text" class="form-control"  placeholder="Company Name" value={this.state.form.name} onChange = {this.onChangeName}/>
                </div>
                <div class = "form-group">
                    <label>Type</label>
                    <select value = {this.state.form.type} onChange = {this.onChangeType}>
                        <option value = "E-commerce">E-commerce</option>
                        <option value = "Information Technology">Information Technology</option>
                        <option value = "Construction">Construction</option>
                        <option value = "Business">Business</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Contact Number</label>
                    <input type="text" class="form-control"  placeholder="Contact Number" value={this.state.form.mobNo} onChange = {this.onChangeMobNo}/>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="text" class="form-control"  placeholder="Email" value={this.state.form.email} onChange = {this.onChangeEmail}/>
                </div>
                <div class="form-group">
                    <label>Package</label>
                    <input type="text" class="form-control"  placeholder="Package" value={this.state.form.package} onChange = {this.onChangePackage}/>
                </div>
                <div class="form-group">
                    <label>Website</label>
                    <input type="text" class="form-control"  placeholder="Website" value={this.state.form.website} onChange = {this.onChangeWebsite}/>
                </div>
                
                <div class="form-group">
                    <label>Address</label>
                    <input type="text" class="form-control"  placeholder="Address" value={this.state.form.address} onChange = {this.onChangeAddress}/>
                </div>
                <button type="submit" class="btn btn-primary" onClick={()=>this.toggleDisplay(this.formRef)}>Edit</button>
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
            form: {
                type: 'E-commerce'
            }
        }
                
    }
    componentDidMount(){
        axios.get("http://localhost:3001/company")
        .then(res=>this.setState({companies : res.data}))
        .catch(err=>alert("sorry we could not fetch the company details please try again later"));
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
    onSubmit=(e)=>{
        e.preventDefault();
        let form = this.state.form;
        axios.post("http://localhost:3001/company/add", qs.stringify(form))
        .then(res=>this.setState({companies : res.data}))
        .catch(err=>alert("Sorry we could not add the company right now please try again later"));

        form = {name:"", type:"E-commerce"};
        this.setState({form:form});
        
    }
    deleteCompany=(id)=>{
        axios.delete("http://localhost:3001/company/" + id + "/delete")
        .then(res=>{this.setState({companies : res.data});})
        .catch(err=> alert("Sorry delete operation was unsuccessful. Please try again later."));
    }
    toggleDisplay=(ref)=>{
        if (ref.current.style.display =="none") ref.current.style.display = "block";
        else ref.current.style.display = "none";
    }
    onCompanyUpdate=(id, form)=>{
         var f =  (e)=>{      
        e.preventDefault();
        axios.put("http://localhost:3001/company/" + id + "/put", qs.stringify(form))
        .then(res=>this.setState({companies: res.data}))
        .catch(err=>alert("Sorry we could not update the company details please try again later"));
        
         }
         return f;
       }

    
      onApplyFilter = (companies)=> {
       this.setState({companies: companies});
    }
    onChangeAddress=(e)=>{
        let form = this.state.form;
        form.address = e.target.value;
        this.setState({
            form: form
        });
    }
    onChangeMobNo=(e)=>{
        let form = this.state.form;
        form.mobNo = e.target.value;
        this.setState({
            form: form
        });
    }
    onChangeEmail=(e)=>{
        let form = this.state.form;
        form.email = e.target.value;
        this.setState({
            form: form
        });
    }
    onChangeAddress=(e)=>{
        let form = this.state.form;
        form.address = e.target.value;
        this.setState({
            form: form
        });
    }
    onChangeWebsite=(e)=>{
        let form = this.state.form;
        form.website = e.target.value;
        this.setState({
            form: form
        });
    }
    onChangePackage = (e)=>{
        let form = this.state.form;
        form.package = e.target.value;
        this.setState({
            form: form
        });
    }
    render(){
        return(

            <div class="container p-0 m-0">
                <div className="row" >
                    <div className = "col-md-3 text-center card p-5 sidebar" >
                        <Filter onApplyFilter = {this.onApplyFilter}/>
                    </div>
                    <div className= "col-md-9 m-0 p-0">
                        <div className="company-details" >
                            <table class="table table-striped">
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
                                    <select value = {this.state.form.type} onChange = {this.onChangeType}>
                                        <option value = "E-commerce">E-commerce</option>
                                        <option value = "Information Technology">Information Technology</option>
                                        <option value = "Construction">Construction</option>
                                        <option value = "Business">Business</option>
                                     </select>
                                </div>
                                <div class="form-group">
                                    <label>Contact Number</label>
                                    <input type="text" class="form-control"  placeholder="Contact Number" value={this.state.form.mobNo} onChange = {this.onChangeMobNo}/>
                                </div>
                                <div class="form-group">
                                    <label>Email</label>
                                    <input type="text" class="form-control"  placeholder="Email" value={this.state.form.email} onChange = {this.onChangeEmail}/>
                                </div>
                                <div class="form-group">
                                    <label>Package</label>
                                    <input type="text" class="form-control"  placeholder="Package" value={this.state.form.package} onChange = {this.onChangePackage}/>
                                </div>
                                <div class="form-group">
                                    <label>Website</label>
                                    <input type="text" class="form-control"  placeholder="Website" value={this.state.form.website} onChange = {this.onChangeWebsite}/>
                                </div>
                                <div class="form-group">
                                    <label>Address</label>
                                    <input type="text" class="form-control"  placeholder="Address" value={this.state.form.address} onChange = {this.onChangeAddress}/>
                                </div>
                                <button type="submit" class="btn btn-primary" onClick={()=>this.toggleDisplay(this.formRef)}>Submit</button>
                            </form>
                        </div>

                    </div>
                </div>

            </div>
            
           
          
        )
    }
}