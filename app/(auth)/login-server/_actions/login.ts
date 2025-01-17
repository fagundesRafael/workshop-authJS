'use server'

import { signIn } from "@/auth"
import { AuthError } from "next-auth"
import { redirect } from "next/navigation"

export default async function login(FormData: FormData) {
    const { email, password } = Object.fromEntries(FormData.entries())

    console.log({ email, password })

    try {
        await signIn('credentials', { email, password })
    } catch (error) {
        if (error instanceof AuthError) {
            if (error.type === 'CredentialsSignin') {
                error.message = 'Credenciais Inválidas'
                throw error
            }
        }
    }
    redirect('/dashboard')
}