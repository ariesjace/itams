import LoginForm from "@/components/auth-forms/login-form"

export default function LoginPage() {
  return (
    <div className="bg-muted flex items-center justify-center h-screen overflow-hidden">
      <div className="w-full max-w-sm md:max-w-4xl">
        <LoginForm />
      </div>
    </div>
  )
}