class Account {
  id: number;
  userName: string;
  password: string;
  isLogin: boolean;
  role: string;

  constructor(id: number, userName: string, password: string, role: string) {
    this.id = id;
    this.userName = userName;
    this.password = password;
    this.isLogin = false;
    this.role = role;
  }

  login() {
    if (!this.isLogin) {
      this.isLogin = true;
      console.log('Đăng nhập thành công');
    }
  }

  logout() {
    if (this.isLogin) {
      this.isLogin = false;
      console.log('Đăng xuất thành công');
    }
  }
}

class userAcc extends Account {
  status: string;

  constructor(id: number, userName: string, password: string, role: string, status: string) {
    super(id, userName, password, role);
    this.status = status;
  }

  login() {
    if (this.status === 'active') {
      super.login();
      console.log('Đăng nhập thành công');
    } else if (this.status === 'banned') {
      console.log('Tài khoản đã bị khóa');
    } else {
      console.log('Tài khoản không hợp lệ');
    }
  }
}

const user1 = new userAcc(1, 'user1', 'password123', 'admin', 'active');
user1.login();
user1.logout();

const user2 = new userAcc(2, 'user2', 'password456', 'user', 'banned');
user2.login();
user2.logout();
