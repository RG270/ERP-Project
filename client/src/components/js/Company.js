import React, {Component} from 'react';
import axios from 'axios';
import qs from 'qs';
import '../css/company.css'
export default class Company extends Component {
    constructor(props){
        super(props);
        this.state = {
            companies : [{}],
            form: {}
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
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
    render(){
        return(
            <div>
                 <div className = "company-details">
                  <table className = "table">
                      <thead>
                          <th scope="col">#</th>
                          <th scope="col">Name</th>
                          <th scope="col">Type</th>
                      </thead>
                <tbody>
                  {this.state.companies.map((company,index)=>
                      (<tr>
                          <td>{index + 1}</td>
                          <td>{company.name}</td>
                          <td>{company.type}</td>
                          <td><button onClick = {()=>this.deleteCompany(company._id.toString())}>Delete</button></td>
                      </tr>)
               )}
        </tbody>
            </table>
            </div>

            <div className = "company-form">
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
           
           
          
        )
    }
}