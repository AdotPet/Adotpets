<template>
  <form @submit.prevent="login()">
    <div class="bg-indigo h-screen overflow-hidden pb-2">
      <div class="about bg-white">
        <h1 class="bg-indigo-500 text-white py-6">
          Página de Registro
          <br />
        </h1>

        <div class="bg-indigo-500 h-screen overflow-hidden font-sans">
          <div class="flex justify-center">
            <div class="w-3/5 sm:3/5">
              <div
                class="border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg"
              >
                <div
                  v-if="errorMessage"
                  class="bg-red-200 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
                  role="alert"
                >
                  <span class="block sm:inline">{{ errorMessage }}</span>
                </div>

                <div class="pb-6">
                  <label class="font-bold text-grey-400 block pb-4"
                    >Nome de usuário</label
                  >
                  <input
                    v-model="user.username"
                    type="text"
                    class="mx-auto max-w-2xl block appearance-none w-full bg-white border border-grey-200 hover:border-grey px-2 py-2 rounded shadow"
                    placeholder="Digite seu nome de usuário"
                  />
                </div>

                <div class="pb-6">
                  <label class="font-bold text-grey-400 block pb-4"
                    >E-mail</label
                  >
                  <input
                    v-model="user.email"
                    type="email"
                    class="mx-auto max-w-2xl block appearance-none w-full bg-white border border-grey-200 hover:border-grey px-2 py-2 rounded shadow"
                    placeholder="Digite seu e-mail"
                  />
                </div>

                <div class="pb-6">
                  <label class="font-bold text-grey-400 block pb-4"
                    >Senha</label
                  >
                  <input
                    v-model="user.password"
                    type="password"
                    class="mx-auto max-w-2xl block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
                    placeholder="Digite sua senha"
                  />
                </div>

                <div class="pb-6 flex justify-center flex-col">
                  <label
                    class="p-4 bg-red-300 font-bold text-grey-400 block pb-4"
                    ><span class="font-dark">Meu animal favorito</span></label
                  >
                  <div class="flex justify-center bg-red-200">
                    <label class="p-4" for="ong"
                      ><img
                        src="https://image.flaticon.com/icons/svg/1530/1530856.svg"
                        width="50"
                        alt=""
                      />
                      <input
                        id="ong"
                        v-model="user.lookingfor"
                        class="mt-4"
                        type="radio"
                        name="user"
                        value="Dogs"
                      />
                    </label>
                    <label class="p-4" for="user"
                      ><img
                        src="https://image.flaticon.com/icons/svg/1530/1530857.svg"
                        width="50"
                        alt=""
                      />
                      <input
                        id="user"
                        v-model="user.lookingfor"
                        class="mt-4"
                        type="radio"
                        name="ong"
                        value="Cats"
                      />
                    </label>
                  </div>
                </div>

                <div class="flex items-center justify-center flex-col">
                  <button
                    type="submit"
                    class="bg-indigo-600 hover:bg-teal text-white font-bold p-2 py-2 px-32 rounded"
                  >
                    Registre-se
                  </button>
                </div>
              </div>
              <div class="text-center">
                <p class="text-white text-sm">
                  Ainda não tem uma conta?
                  <a href="#" class="no-underline text-teal-light font-bold"
                    >Criar conta</a
                  >.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import axios from "axios";
const LOGIN_URL = "https://adotpets.herokuapp.com/auth/local/register";

export default {
  data: () => ({
    errorMessage: "",
    loggingIn: false,
    user: {
      username: "",
      email: "",
      password: "",
      lookingfor: ""
    }
  }),
  methods: {
    login() {
      const body = {
        username: this.user.username,
        email: this.user.email,
        password: this.user.password,
        confirmed: false,
        blocked: false
      };
      axios
        .post(LOGIN_URL, body)
        .then(result => {
          const token = result.data.jwt;
          localStorage.setItem("token", token);
        })
        .then(() => {
          setTimeout(() => {
            this.$router.push("/MinhaConta");
          }, 1000);
        })
        .catch(error => {
          setTimeout(() => {
            this.errorMessage = error.message;
          }, 1000);
        });
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
