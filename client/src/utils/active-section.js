import HomePage from '../components/HomePage';
// import Calendars from '../components/Calendars';
import Dashboard from '../components/Dashboard';
import Login from '../components/Login';

// renders component based on nav title clicked
const activeSection = (currentCategory) => {
  if(currentCategory.name === "Homepage"){
    return <HomePage></HomePage> 
  }else if (currentCategory.name === "Dashboard"){
    return <Dashboard></Dashboard>
  }else if(currentCategory.name === "Login"){
    return <Login></Login>
  }
};

export default activeSection;