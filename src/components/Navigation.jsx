import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          maxWidth: '70vw',
        }}
      >
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`/sign-up`}>Sign-up</Link>
        </li>
        <li>
          <Link to={`/sign-in`}>Sign-in</Link>
        </li>
        <li>
          <Link to={`/success`}>Success</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
