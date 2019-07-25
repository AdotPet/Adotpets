<template>
  <form v-if="!loggingIn" @submit.prevent="login()">
    <div class="bg-indigo vh-92 pb-6">
      <div class="about bg-white">
        <div>
          <h1 class="bg-indigo text-white py-12">
            Área do membro
            <br />
          </h1>

          <div class="bg-indigo font-sans">
            <div class="flex justify-center">
              <div class="w-3/5 sm:3/5">
                <div class="border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg">
                  <div
                    v-if="errorMessage"
                    class="bg-red-lighter border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
                    role="alert"
                  >
                    <span class="block sm:inline">{{ errorMessage }}</span>
                  </div>
                  <div class="pb-6">
                    <label class="font-bold text-grey-darker block pb-4">Usuário ou E-mail</label>
                    <input
                      v-model="user.email"
                      type="email"
                      class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
                      placeholder="Digite seu e-mail"
                    />
                  </div>

                  <div class="pb-6">
                    <label class="font-bold text-grey-darker block pb-4">Senha</label>
                    <input
                      v-model="user.password"
                      type="password"
                      class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
                      placeholder="Digite sua senha"
                    />
                  </div>
                  <div>
                    <ul class="flex justify-center list-reset p-2">
                      <li>
                        <a href="#">
                          <i class="fa fa-facebook px-4 social-media text-blue" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-twitter px-4 social-media text-blue" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="flex items-center justify-center flex-col">
                    <button
                      type="submit"
                      class="bg-teal-dark hover:bg-teal text-white font-bold py-2 px-12 rounded"
                    >Entrar</button>

                    <a
                      class="no-underline inline-block align-baseline font-bold text-sm text-blue hover:text-blue-dark float-right mt-4"
                      href="#"
                    >Esqueceu sua senha?</a>
                  </div>
                </div>
                <div class="text-center">
                  <p class="text-white text-sm">
                    Ainda não tem uma conta?
                    <a
                      href="#"
                      class="no-underline text-teal-light font-bold"
                    >Criar conta</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import Joi from "joi";
import axios from "axios";
const LOGIN_URL = "https://adotpets.herokuapp.com/auth/local";
const schema = Joi.object().keys({
  email: Joi.string()
    .email()
    .min(2)
    .max(30)
    .required(),
  password: Joi.string()
    .trim()
    .min(6)
    .required()
});
export default {
  data: () => ({
    errorMessage: "",
    loggingIn: false,
    user: {
      email: "",
      password: ""
    }
  }),
  methods: {
    login() {
      this.errorMessage = "";
      if (this.validUser()) {
        this.loggingIn = true;
        const body = {
          identifier: this.user.email,
          password: this.user.password
        };
        axios
          .post(LOGIN_URL, body)
          .then(result => {
            const token = result.data.jwt;
            localStorage.setItem("token", token);
          })
          .then(result => {
            setTimeout(() => {
              this.loggingIn = false;
              this.$router.push("/MinhaConta");
            }, 1000);
          })
          .catch(error => {
            setTimeout(() => {
              this.loggingIn = false;
              this.errorMessage = error.message;
            }, 1000);
          });
      }
    },
    validUser() {
      const result = Joi.validate(this.user, schema);
      if (result.error === null) {
        return true;
      }
      if (result.error.message.includes("email")) {
        this.errorMessage = "email is invalid. 😭";
      } else {
        this.errorMessage = "Password is invalid. 🙈";
      }
      return false;
    }
  }
};
</script>

<style scoped>
.social-media {
  font-size: 30px;
  padding: 0 10px;
  border-radius: 20%;
}
.vh-92 {
  height: 92vh;
}
</style>
