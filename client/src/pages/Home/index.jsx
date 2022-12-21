import {Container , Button} from 'react-bootstrap'

function Home(userDetails) {
	const user = userDetails.user;
	console.log(user.picture)
	const logout = () => {
		window.open(`${process.env.REACT_APP_API_URL}/auth/logout`, "_self");
	};
	return (
		<>
			<Container >
				<div className='text-center display-5' > Home </div>
				<div>
				<img src={user.picture}	alt="profile"  />
					<p>{user.name}</p>
					<p>{user.email}</p>
				</div>
                 <Button onClick={logout} className="btn btn-primary">Logout</Button>
			</Container>
		</>
	);
}

export default Home;
