
const  loginform= require('./LoginForm.jsx')

class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            name:"",
            email:""
        }
    }
    render(){

        return(
            <div>
            <loginform.Form/>
            </div>
        )
    }
}

ReactDOM.render(<Login/>,document.getElementById("mydiv"))