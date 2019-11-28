import React, {Component} from 'react';
import axios from 'axios';
import qs from 'qs';

export default class StudentFilter extends Component {
    constructor(props){
        super(props);
        this.state = {
            filter : {
                     minCGPA: 0,
                     maxCGPA: 10
                   }
        }
    }

     onSubmit = (e)=>{
        e.preventDefault();
        var filter = this.state.filter;
         axios.post("http://localhost:3001/student/filters", qs.stringify(filter))
        .then(res=>this.props.onApplyFilter(res.data))
        .catch(err =>alert("Sorry we could no apply the filter please try again later"));
    }   

    

     onChangeMinCGPA = (e)=>{
        var filter  = this.state.filter;
        filter.minCGPA = e.target.value;
        if (filter.minCGPA==="") filter.minCGPA = 0;
        this.setState({
            filter: filter
        });
    }

     onChangeMaxCGPA = (e)=>{
        var filter  = this.state.filter;
        filter.maxCGPA = e.target.value;
        if (filter.maxCGPA==="") filter.maxCGPA = 10;
        this.setState({
            filter: filter
        });
    }

    render(){
        return (
            <div>
                <h4 class="mb-3 text-muted">Filters</h4>
                <form onSubmit = {this.onSubmit}>
                    
                    <div>
                       
                        <label>CGPA:</label>
                        <input type = "text" name=  "minPackage" class="form-control" placeholder = "from" onChange = {this.onChangeMinCGPA} value={this.state.filter.minCGPA}></input>
                        <input type = "text" name = "maxPackage" class="form-control" placeholder = "to" onChange = {this.onChangeMaxCGPA} value = {this.state.filter.maxCGPA}></input>
                    </div>

                    <input class="btn btn-success" type = "submit" class="form-control" value = "submit"></input>    
                </form>
            </div>
        )

    }
}