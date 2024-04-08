import Navigation from '../../components/Navigation';

const SignUpPage = () => {
  return (
    <div>
      <Navigation />
      <h1>Sign Up</h1>
      <form action='http://localhost:3000/register' method='post'>
        <label htmlFor='username'>
          <i className='fas fa-user'></i>
        </label>
        <input
          type='text'
          name='username'
          placeholder='Username'
          id='username'
          required
        />
        <label htmlFor='email'>
          <i className='fas fa-envelope'></i>
        </label>
        <input
          type='email'
          name='email'
          placeholder='Email'
          id='email'
          required
        />
        <label htmlFor='password'>
          <i className='fas fa-lock'></i>
        </label>
        <input
          type='password'
          name='password'
          placeholder='Password'
          id='password'
          required
        />
        <input type='submit' value='Sign Up' />
      </form>
    </div>
  );
};

export default SignUpPage;
