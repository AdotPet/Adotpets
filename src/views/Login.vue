<template>
  <div class="bg-indigo h-screen pb-6">
    <div class="about bg-white">
      <div>
        <h1 class="bg-indigo text-white py-12">
          Área do membro
          <br />
        </h1>
        <div class="bg-indigo font-sans">
          <div class="flex justify-center">
            <div class="w-3/5">
              <div
                class="border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg"
              >
                <div class="pb-6">
                  <label class="font-bold text-grey-darker block pb-4"
                    >Username or Email</label
                  >
                  <input
                    type="text"
                    class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
                    placeholder="Your Username"
                  />
                </div>

                <div class="pb-6">
                  <label class="font-bold text-grey-darker block pb-4"
                    >Password</label
                  >
                  <input
                    type="text"
                    class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
                    placeholder="Your Password"
                  />
                </div>

                <div>
                  <ul class="flex justify-center list-reset p-2">
                    <li>
                      <a href="#">
                        <i
                          class="fa fa-facebook px-4 social-media text-blue"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i
                          class="fa fa-twitter px-4 social-media text-blue"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="flex items-center justify-center flex-col">
                  <button
                    class="bg-teal-dark hover:bg-teal text-white font-bold py-2 px-12 rounded"
                  >
                    Login
                  </button>

                  <a
                    class="no-underline inline-block align-baseline font-bold text-sm text-blue hover:text-blue-dark float-right mt-4"
                    href="#"
                    >Forgot Password?</a
                  >
                </div>
              </div>
              <div class="text-center">
                <p class="text-white text-sm">
                  Don't have an account?
                  <a href="#" class="no-underline text-teal-light font-bold"
                    >Create an Account</a
                  >.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.social-media {
  font-size: 30px;
  padding: 0 10px;
  border-radius: 20%;
}
</style>
