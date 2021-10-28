import React  from 'react';
import {connect} from 'react-redux';
//@ts-ignore
import DefaultUserPic from "../../../assets/DefaultUserPic.jpeg";
const axios = require('axios');

require("../../../style/profile/ProfilePage.scss");

interface userprofile {
    user_id: string[];
    username?: string[];
    email?: string[];
    profileImage?: string;
    msg?:string[];
}
interface userprofileState{
    user_id: string[];
    username?: string[];
    email?: string[];
    profileImage?: string;
    msg?:string[];
}
class UserProfile extends React.Component <userprofile,userprofileState>{
    constructor(props: any){
        super(props);
        this.state={
            user_id:this.props.user_id,
            username:this.props.username,
            email:this.props.email,
            profileImage:this.props.profileImage,
            msg:this.props.msg,
        }
    }

    fetchUserDetails=(user_id: string[])=>{
        //console.log(user_id);
        axios.get("http://localhost:5000/userapi/getUserDetails/"+user_id,{
            headers: {
                "content-type": "application/json"
              }
        }).then((res: { data: { results: {email: any, profileImage: any; }[]; }; })=>{
            console.log(res);
            this.setState({email:res.data.results[0].email});
            this.setState({profileImage:res.data.results[0].profileImage})
        })
        .catch((err: any)=>console.log(err))
    }

    changeProfileImage=(event: {newprofile: string})=>{
       
        this.setState({profileImage:event.newprofile});
    }
/* 
    UpdateProfileHandler=(e: { preventDefault: () => void; })=>{
        e.preventDefault();
        //create object of form data
        const formData=new FormData();
        formData.append("profileImage",this.state.uploadedFile);
        formData.append("user_id",this.state.user_id);

        //update-profile
        axios.post("http://localhost:5000/userapi/update-profile/",formData,{
            headers: {
                "content-type": "application/json"
              }
        }).then(res=>{
            console.log(res);
           this.setState({msg:res.data.message});
           this.setState({profileImage:res.data.results.profileImage});
        })
        .catch(err=>console.log(err))
    }

 */
    componentDidMount(){
     this.fetchUserDetails(this.state.user_id);
    }

render(){

    if(this.state.profileImage){
        var profilePic=this.state.profileImage;
    }else{
         profilePic=DefaultUserPic;
    }

    return (
        <div className="profile-container">
            <div className="profile-hero">
                <img src={profilePic} alt="profile pic"/>
                <div className="details-container">
                    <header>
                        <p>@owenmille</p>
                        <button>3 <small>posts</small></button>
                        <button>9 <small>books</small></button>
                        <h1>Owen Miller</h1>
                    </header>   
                    <div>
                        <p>Hello everyone! just made my account so feel free to add me as a friend :)</p>
                    </div>
                </div>
            </div>

            {/* <div className="description-box">
                
            </div>
            <div className="profilebox">
                <h1>{this.state.username}</h1>
            </div>
            <div className="profilebox">
                <p>{this.state.email}</p>
            </div>
            <div className="profilebox">
                <h1>{this.state.msg}</h1>
            </div> */}
        </div>

        /* 
        <Container>
        <Row>
       <Col>
       <img src={profilePic} alt="profile pic" />
       </Col>
        <Col>
            <h1>User Profile</h1>
            <Form className="form">     
    <p>{this.state.msg}</p>
  <Form.Group controlId="formCategory1">
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" defaultValue={this.state.username}/>
  
  </Form.Group>
  <Form.Group controlId="formCategory2">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" defaultValue={this.state.email} />
  
  </Form.Group>
 
  <Form.Group controlId="formCategory4">
    <Form.Label>Profile Image</Form.Label>
    <Form.Control type="file" name="profileImage" onChange={this.changeProfileImage}/>
    </Form.Group>
  <Button variant="primary" onClick={this.UpdateProfileHandler}>Update Profile</Button>
  </Form>
   </Col>

       </Row>
        </Container> */
    )
}
}
/* 
const mapStatetoProps=(state)=>{
    return{
        user_id:state.user.userDetails.userid,
        username:state.user.userDetails.username,
       email:state.user.email,
       profileImage: state.user.profileImage,
       msg:state.user.msg
    }
   }
   
   

   export default connect(mapStatetoProps)(UserProfile); */
   export default UserProfile