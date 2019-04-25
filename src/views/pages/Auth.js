import Login from '@/blocks/Login';

const login = new Login();

class Auth {
  async render() {
    const loginNode = await login.render();

    return `
      <div class="auth">
        <div class="auth__container">
          ${loginNode}
        </div> 
      </div>
    `
  }

  async afterRender() {}
}

export default Auth;