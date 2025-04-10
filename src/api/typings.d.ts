declare namespace API {
  type BaseResponseBoolean_ = {
    code?: number
    data?: boolean
    description?: string
    message?: string
  }

  type BaseResponseListUser_ = {
    code?: number
    data?: User[]
    description?: string
    message?: string
  }

  type BaseResponseLong_ = {
    code?: number
    data?: number
    description?: string
    message?: string
  }

  type BaseResponseString_ = {
    code?: number
    data?: string
    description?: string
    message?: string
  }

  type BaseResponseUser_ = {
    code?: number
    data?: User
    description?: string
    message?: string
  }

  type getUsersUsingGETParams = {
    /** username */
    username?: string
  }

  type User = {
    avatarUrl?: string
    createTime?: string
    email?: string
    gender?: number
    id?: number
    isDelete?: number
    phone?: string
    updateTime?: string
    userAccount?: string
    userPassword?: string
    userRole?: number
    userStatus?: number
    username?: string
  }

  type UserLoginRequest = {
    userAccount?: string
    userPassword?: string
  }

  type UserRegisterRequest = {
    code?: string
    name?: string
    phone?: string
    userAccount?: string
  }
}
