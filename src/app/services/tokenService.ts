type UserStorageT = {
  accessToken?: string;
  refreshToken?: string;
};
class TokenService {
  getLocalRefreshToken() {
    const temp = localStorage.getItem('user_secret');
    const user = temp ? JSON.parse(temp) : temp;
    return user?.refreshToken;
  }

  getLocalAccessToken() {
    let temp;
    // fix error "ReferenceError: localStorage is not defined" in Next
    if (typeof window !== 'undefined') {
      temp = localStorage.getItem('user_secret');
    }
    return temp && JSON.parse(temp);
  }

  getConfigHeadersWithToken() {
    const temp = localStorage.getItem('user_secret');
    const token = temp && JSON.parse(temp);

    return {
      headers: { Authorization: token },
    };
  }

  updateLocalAccessToken(token: string) {
    const temp = localStorage.getItem('user_secret');
    const user: UserStorageT = temp ? JSON.parse(temp) : '';
    user.accessToken = token;
    localStorage.setItem('user_secret', JSON.stringify(user));
  }

  getUser() {
    const user = localStorage.getItem('user_secret');
    return user ? JSON.parse(user) : '';
  }

  setUser(user: string) {
    localStorage.setItem('user_secret', JSON.stringify(`Bearer ${user}`));
  }

  removeUser() {
    localStorage.removeItem('user_secret');
  }
}

export default new TokenService();
