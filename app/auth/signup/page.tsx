import SignUpForm from "@/components/auth-forms/signup-form"

export default function SignupPage() {
  return (
    <div className="bg-muted flex items-center justify-center h-screen overflow-hidden">
      <div className="w-full max-w-sm md:max-w-4xl">
        <SignUpForm />
      </div>
    </div>
  )
}