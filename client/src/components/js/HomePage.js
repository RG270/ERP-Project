import React, {Component} from 'react';
import '../css/homepage.css'

export default class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            response: {}
        }
    }
    componentDidMount(){
       
    }

    render(){
        return(
            <div class="homepage">
                
                <div class='carousel'>
                    <img src="pic1.jpg"></img>
                </div>

                <div class="container heading">
                    <h1><strong>ENTERPRISE RESOURCE PLATFORM</strong></h1>
                    <h5> It’s an online platform developed by students NIT Uttarakhand
                        for maintaining of placements records and internships.
                        Various Access levels based on your login credentials.
                    </h5>
                </div>

                <div class='container'>
                    <div class="p-1 mt-5">
                        <div class='row p-auto'>
                            <div class='col-md-4 p-5 m-auto'>
                                <h2>ABOUT</h2>
                            </div>
                            <div class='col-md-6 m-auto p-3'>
                                <p>This project is aimed at developing an online application
                                    for the Training and Placement Dept. of the college.
                                    The system is an online application that can be accessed 
                                    throughout the organization and outside as well with proper login provided. 
                                    This system can be used as an application for the TPO of the college 
                                    to manage the student information with regards to placement.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class='container details'>
                    <div class='container p-2'>
                        <h2>Catered to Everyone's needs</h2>
                    </div>
                    <div class='row'>
                        <div class='col-md-4 p-5'>
                            <h4>Students</h4>
                            <p>Enable students to create job profiles, upload resumes, search and apply for jobs and internships with real-time status tracking from anywhere and anytime.</p>
                        </div>
                        <div class='col-md-4 p-5'>
                            <h4>Colleges</h4>
                            <p>Capture data and reports related to students and employers which can be accessed by administrators with a single click in a safe and secure environment.</p>
                        </div>
                        <div class='col-md-4 p-5'>
                            <h4>Companies</h4>
                            <p>Easily screen students for exact requirements and get access to entire student database.</p>
                        </div>
                    </div>

                    <div class='container text-center p-3 mt-5'>
                        <h2>Supported by:</h2>
                        <div class='row p-auto card'>
                            <div class='col-md-4 m-auto'>
                                <img src="nitlogo.jpg"></img>
                            </div>
                            <div class='col-md-6 m-auto'>
                                <h1>National Institute of Technology, Uttarakhand</h1>
                                <h5>Srinagar Garhwal, Uttarakhand</h5>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}