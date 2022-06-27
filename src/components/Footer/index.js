import heart from '../../assets/images/heart-icon.png'
export default function Header() {
  return (
    <footer className='bg-red-900 flex justify-between'>
      <p className='footer text-xl font-semibold sm:ml-12'>       
          Made with <img alt="heart" className="inline"src={heart}></img> by Daily Love Calendar
      </p>
      <p className='footer text-xl font-semibold my-auto mr-1 sm:mr-12'>&copy;Daily Love Calendar</p>
    </footer>
  );
}