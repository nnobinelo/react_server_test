import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import uselessIcon1 from '../uselessIcon1.png'
import {connect} from 'react-redux'
//import axios from 'axios' //used to make hhtp requests

class Home extends Component{
	render(){
		console.log(this.props)

		const {posts} = this.props

		const postsList = posts.length ? 
			(posts.map(post=>{
					return(
						<div className="post card" key = {post.id}>
							<img src={uselessIcon1} alt="A dumb icon" height={256/2+''}/>
							<div className="card-content">
								<Link to={'/' + post.id}>
									<span className="card-title red-text">{post.title}</span>
								</Link>
								<p>{post.body}</p>
							</div>
						</div>
					)
				})
			) 
			:
			(<div className = "center">No posts yet :(</div>)
		
		return(
			<div className="container home">
				<h4 className="center">Home</h4>
				{postsList}
			</div>
		)
	}
}

const mapStateToProps = (state) =>{
	return {
		posts: state.posts
	}
}

export default connect(mapStateToProps)(Home) //connect is a function that returns the HOC needed to interact with redux store