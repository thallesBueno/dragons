function delay<T>(value: T, time: number) : Promise<T> {
  return new Promise<T>((res) => setTimeout(() => res(value), time));
}

const login = async (username: string, password: string) => {
  const isAdmin = username === 'admin' && password === 'admin';

  if (isAdmin) {
    localStorage.setItem('auth_token', 'token');
  }

  return delay(isAdmin, 2000);
}

const logout = async () => {
  localStorage.removeItem('auth_token');
}

const AuthenticationService = {
  login,
  logout
}

export default AuthenticationService