import React, {Component} from 'react';
import axios from 'axios';
import qs from 'qs';

export default class Filter extends Component {
    constructor(props){
        super(props);
        this.state = {
            filter : {
                     type: "",
                     minPackage: 0,
                     maxPackage: 1000000000
                   }
        }
    }

     onSubmit = (e)=>{
        e.preventDefault();
        var filter = this.state.filter;
         axios.post("http://localhost:3001/company/filters", qs.stringify(filter))
        .then(res=>this.props.onApplyFilter(res.data))
        .catch(err =>alert("Sorry we could no apply the filter please try again later"));
    }   

     onChangeType = (e)=> {
        var filter = this.state.filter;
        filter.type = e.target.value;
       this.setState({
           filter : filter
       });
      
    }

     onChangeMinPackage = (e)=>{
        var filter  = this.state.filter;
        filter.minPackage = e.target.value;
        if (filter.minPackage=="") filter.minPackage = 0;
        this.setState({
            filter: filter
        });
    }

     onChangeMaxPackage = (e)=>{
        var filter  = this.state.filter;
        filter.maxPackage = e.target.value;
        if (filter.maxPackage==="") filter.maxPackage = 1000000000;
        this.setState({
            filter: filter
        });
    }

    render(){
        return (
            <form onSubmit = {this.onSubmit}>
                 <label>  
                   Type:
                    <select onChange = {this.onChangeType} value = {this.state.filter.type}>
                        <option value=""> Any </option>
                        <option value="e-commerce"> E-Commerce</option>
                        <option value="construction"> Construction</option>
                        <option value="business"> Business</option>
                        <option value="information technology"> Information Technology</option>
                    </select>
                </label>
                <label>
                    Package:
                    <input type ="text" name="minPackage" placeholder = "from" onChange = {this.onChangeMinPackage} value={this.state.filter.minPackage}></input>
                    <input type = "text" name = "maxPackage" placeholder = "to" onChange = {this.onChangeMaxPackage} value = {this.state.filter.maxPackage}></input>
                </label>
                <input type = "submit" value = "submit"></input>
                
            </form>
        )

    }
}