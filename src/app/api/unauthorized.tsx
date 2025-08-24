import SignIn from '@/app/(full-width-pages)/(auth)/signin/page'

export default function Unauthorized() {
  return (
    <main>
      <h1>401 - Unauthorized</h1>
      <p>Please log in to access this page.</p>
      <SignIn />
    </main>
  )
}