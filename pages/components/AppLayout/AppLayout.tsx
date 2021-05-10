import PrimaryNavbar from '../NavBar/Navbar'

export function AppLayout({ children }) {
  return (
    <div className='flex font-Prompt'>
      <div className='flex-1 h-screen'>
        <div className="w-full absolute t-0">
          <PrimaryNavbar/>
        </div>
        <div className='w-full max-w-screen-lg m-auto h-full pt-24'>{children}</div>
      </div>
    </div>
  )
}
