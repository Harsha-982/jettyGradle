
class Form extends React.Component{
    constructor(props) {
        super(props);
        this.state={
        }
    }
    render(){
        return(
            <div>
                <h1>Welcome to Full</h1>
                Username : <input type="text" name="name" id="name"/><br/>
                Password : <input type="password" name="password" id="password"/><br/>
                <input type="submit" value="Login"/>
            </div>
        )
    }
}

export default Form;
