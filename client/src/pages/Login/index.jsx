
import {Container , Button} from 'react-bootstrap'
function Login() {
	const googleAuth = () => {
		window.open(
			`${process.env.REACT_APP_API_URL}/auth/google/callback`,
			"_self"
		);
	};
	return (
		
		<>
			<Container >
				<div className='text-center display-5'>Login </div>
                 <Button onClick={googleAuth} className="btn btn-primary">Login</Button>
			</Container>
		</>
	);
}

export default Login;
