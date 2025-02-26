import { auth } from '@/auth/auth'
import { Button } from '@/components/ui/button'

export default async function Home() {
  const { user } = await auth()
  return (
    <>
      <div>
        <h1>Sign in</h1>
        {JSON.stringify(user)}
        <Button>Sign in</Button>
      </div>
    </>
  )
}
