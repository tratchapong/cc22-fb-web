import { FakebookLogo, HomeIcon } from '@/icons'
import useUserStore from '@/stores/userStore'

function Header() {
  const logout = useUserStore(state => state.logout)
  const user = useUserStore(state=>state.user)
  return (
    <div className="flex gap-4 text-4xl h-14 border fixed top-0 z-10">
      <FakebookLogo className='w-12' />
      <p>Hello, {user?.firstName}</p>
      <HomeIcon />
      <button className="btn btn-info" onClick={logout}>Logout</button>
    </div>
  )
}

export default Header