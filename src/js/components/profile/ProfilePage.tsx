import React, { Component }  from 'react';
import { connect } from 'react-redux';
//@ts-ignore
import DefaultUserPic from "../../../assets/images/DefaultUserPic.jpeg";

import { ProfileComponentProps } from './ProfileComponentProps'
import { ProfileComponentState } from './ProfileComponentState'
import { Profile } from '../../core/domain/users'

//import actions
import * as postActions from '../../../store/actions/postActions'
import * as userActions from '../../../store/actions/userActions'
import * as globalActions from '../../../store/actions/globalActions'

import ProfileHeader from './profileHeader'

require("../../../style/profile/ProfilePage.scss");
export class ProfileComponent extends Component<ProfileComponentProps,ProfileComponentState> {

    static propTypes = {
    }

    constructor (props: ProfileComponentProps) {
        super(props)

        this.state = {
        }
    }
    componentWillMount () {
        this.props.loadPosts()
        this.props.loadUserInfo()
    }

    render() {
             
          const {loadPosts, hasMorePosts, translate} = this.props
          const posts = this.props.posts
          
          return (
            <div className="profile-container">
            <div className="profile-hero">
                <img src={this.props.avatar} alt="profile pic"/>
                <div className="details-container">
                    <header>
                        <p>this.props.username</p>
                        <button>{this.props.numberOfPosts}<small>posts</small></button>
                        <button>{this.props.numberOfBooks}<small>books</small></button>
                        <h1>Owen Miller</h1>
                    </header>   
                    <div>
                        <p>{this.props.bio}</p>
                    </div>
                </div>
            </div>
        </div>
          )
    }
}




/**
 * Map dispatch to props
 * @param  {func} dispatch is the function to dispatch action to reducers
 * @param  {object} ownProps is the props belong to component
 * @return {object}          props of component
 */
 const mapDispatchToProps = (dispatch: any, ownProps: ProfileComponentProps) => {
    const { userId } = ownProps.match.params
    return {
      loadPosts: () => dispatch(postActions.dbGetPostsByUserId(userId)),
      loadUserInfo: () => dispatch(userActions.dbGetUserInfoByUserId(userId, 'header'))
  
    }
  }
  
  /**
   * Map state to props
   * @param  {object} state is the obeject from redux store
   * @param  {object} ownProps is the props belong to component
   * @return {object}          props of component
   */
   const mapStateToProps = (state: Map<string, any>, ownProps: ProfileComponentProps) => {
    const { userId } = ownProps.match.params
    const uid = state.get('authorize').get('uid')
    const hasMorePosts = state.get('post').get('profile').get('hasMoreData')
    const posts = state.get('post').get('userPosts').get(userId)
    const userProfile = state.get('user').get('info').get(userId) as Profile
    return {
      avatar: userProfile.avatar,
      name: userProfile.fullName, 
      banner: userProfile.banner,
      tagLine: userProfile.tagLine,
      isAuthedUser: userId === uid,
      userId,
      posts,
      hasMorePosts
    }
  }
  
  // - Connect component to redux store
  export default connect(mapStateToProps, mapDispatchToProps)(ProfileComponent as any)
  