import LoginForm from "@/components/LoginForm";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex-1 flex items-center justify-center min-h-[80vh] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-zinc-900 p-10 rounded-[2rem] shadow-2xl border border-zinc-100 dark:border-zinc-800">
        <div className="text-center">
          <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Welcome back
          </h2>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 font-medium">
            Don't have an account?{" "}
            <Link href="/register" className="font-semibold text-indigo-600 hover:text-indigo-500 transition-colors underline decoration-indigo-500/30 underline-offset-4">
              Sign up for free
            </Link>
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
