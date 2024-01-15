function delay<T>(value: T, time: number) : Promise<T> {
  return new Promise<T>((res) => setTimeout(() => res(value), time));
}

const login = async (username: string, password: string) => {
  return delay(username === 'admin' && password === 'admin', 2000);
}

const AuthenticationService = {
  login
}

export default AuthenticationService