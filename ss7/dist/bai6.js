"use strict";
class Account {
    constructor(id, userName, password, role) {
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
    constructor(id, userName, password, role, status) {
        super(id, userName, password, role);
        this.status = status;
    }
    login() {
        if (this.status === 'active') {
            super.login();
            console.log('Đăng nhập thành công');
        }
        else if (this.status === 'banned') {
            console.log('Tài khoản đã bị khóa');
        }
        else {
            console.log('Tài khoản không hợp lệ');
        }
    }
}
class adminAcc extends Account {
    constructor(id, userName, password, role) {
        super(id, userName, password, role);
    }
    banUser(user) {
        user.status = 'banned';
        console.log(`Tài khoản ${user.userName} đã bị khóa`);
    }
    unbanUser(user) {
        user.status = 'active';
        console.log(`Tài khoản ${user.userName} đã được mở khóa`);
    }
}
const admin1 = new adminAcc(3, 'admin1', 'adminPass123', 'admin');
const user1 = new userAcc(1, 'user1', 'password123', 'user', 'active');
const user2 = new userAcc(2, 'user2', 'password456', 'user', 'banned');
admin1.login();
admin1.banUser(user1);
user1.login();
admin1.unbanUser(user2);
user2.login();
admin1.logout();
