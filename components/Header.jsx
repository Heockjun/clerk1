import { UserButton, auth } from '@clerk/nextjs'
import Link from 'next/link'

const Header = () => {
  const { userId } = auth()
  return (
    <>
      <nav className="bg-red-900 py-4 px-8">
        <div className="flex items-center justify-between container">
          <div className="flex items-center font-bold">
            <Link href="/">
              <div className="text-lg text-white">Clerk Auth</div>
            </Link>
          </div>
          <div className="flex items-center font-bold">
            {!userId ? (
              <>
                {/* 로그인 안된 경우 표시 */}
                <Link
                  href="/sign-in"
                  className="text-blue-300 hover:text-white mr-4"
                >
                  Sign In
                </Link>
                <Link
                  href="/sign-up"
                  className="text-blue-300 hover:text-white mr-4"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                {/* 로그인된 경우 표시 */}
                <Link
                  href="/repos"
                  className="text-blue-300 hover:text-white mr-4"
                >
                  Repos
                </Link>
                <Link
                  href="/courses"
                  className="text-blue-300 hover:text-white mr-4"
                >
                  Courses
                </Link>
                <Link
                  href="/dashboard"
                  className="text-blue-300 hover:text-white mr-4"
                >
                  Dashboard
                </Link>
                <Link
                  href="/profile"
                  className="text-blue-300 hover:text-white mr-4"
                >
                  Profile
                </Link>
                <div className="ml-auto">
                  <UserButton afterSignOutUrl="/" />
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
