import PropTypes from 'prop-types'
import Button from './Button';

const Header = ({title}) => {
  const onClick = () => {
    console.log('Click')
  }


  return (
    <header className="header">
        <h1> {title} </h1>
        <Button color="green" text='Add' onClick={onClick} />
        
    </header>
  );
}

Header.defaultProps = {
    title: 'React Task tracker'
}

Header.propTypes = {
  title: PropTypes.string,
}

//you can use inline styling to style the variables using css in js
// const headingStyle = {
//   color: 'red', 
//   backgroundColor: 'black'
// }

export default Header