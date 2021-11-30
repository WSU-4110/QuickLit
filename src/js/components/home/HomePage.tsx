import { useEffect, useState } from "react";
import { getUser, isSignedIn } from "../../util/AuthUtility";
import { BACKEND_BASE_URL, NOT_SIGNED_IN_RESPONSE } from "../../util/Constants";
//@ts-ignore
import profilePic from "../../../assets/images/YellowGlasses.png";
require("../../../style/homePage/homePage.scss");

export function Home() {
    const [posts, setPosts] = useState([{
        author: "",
        body: ""
    }]);

    useEffect(() => {
        fetchPosts(setPosts);
    
    }, []);

    return(
    <div className="all-posts-wrapper">
        {
            posts.map( post =>{
                    return (
                    <div className="post-container">
                        <img src={profilePic}></img>
                        <div className="body-content">
                        <div className="post-author">
                            {post.author}
                        </div>
                        <div className="post-body">
                            {post.body}
                        </div>
                        </div>
                            
                    </div>
                    );
                }
            )
        }
    </div>
    );
}

const fetchPosts = (setPostsHook: any)=>{
    const user = getUser();
    if(!isSignedIn() || !user){
        return NOT_SIGNED_IN_RESPONSE;
    }
    const request: Request = new Request(BACKEND_BASE_URL+"authenticated/userdata/all/abe");
    request.headers.append("Authorization", user.cognitoTokenJWT);
    
    const formattedPosts: any = [];
    fetch(request).then((response)=>{
        const status: number = response.status as number;
        if (status >= 200 && status <= 399) {
            response.json().then(data =>{
                data.records.forEach( function(record: any){
                    formattedPosts.push({
                        author: record[0].stringValue,
                        body: record[1].stringValue
                    })
                }

                )
                console.log("abe says "+JSON.stringify(data.records[0][0].stringValue));
              setPostsHook(formattedPosts);
              }
            );
  
        } else {
          console.log("got a non valid response code: code="+ status)
        }
      }).catch((error) =>{
        console.error(error);
    })
  }
  
export default Home;