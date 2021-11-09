export type FormParams = {
  verify: string
  username: string
  password: string
  confirmPassword?: string
}

export type PageStatus = 'login' | 'register' | ''
