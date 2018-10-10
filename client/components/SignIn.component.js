import React ,{Component} from 'react';
import '../styles/app.css';

export default class MainComponent extends Component{
    
    render(){ 
        return (
            <div>
                <div class="topnav">
                    {/* <!-- HTML for displaying user details --> */}
                    <div class="topnav-right">
                    <div class="userContent"></div>
                    </div>
                </div>
            </div>
        )
    }
}