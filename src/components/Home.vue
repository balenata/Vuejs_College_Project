<template>
  <div id="app">
    <div class="margin">
      <div class="container ">
        <div class="d-flex justify-content-center ">
          <div class="user_card">
            <div class="d-flex justify-content-center">
              <div class="brand_logo_container">
                <img
                  src="../img/logo.jpg"
                  class="brand_logo"
                  alt="Logo"
                  width="100px"
                />
              </div>
            </div>
            <div class="d-flex justify-content-center form_container">
              <form class="hvr-underline-from-left">
                <div class="input-group mb-3">
                  <div class="input-group-append">
                    <span class="input-group-text">
                      <font-awesome-icon icon="user" />
                    </span>
                  </div>
                  <input
                    type="text"
                    name=""
                    class="form-control input_user"
                    v-model="name"
                    placeholder="username"
                  />
                </div>
                <div class="input-group mb-2">
                  <div class="input-group-append">
                    <span class="input-group-text"
                      ><font-awesome-icon icon="key" />
                    </span>
                  </div>
                  <input
                    id="password"
                    :type="show === true ? 'text' : 'password'"
                    name=""
                    class="form-control input_pass"
                    v-model="password"
                    placeholder="password"
                  />
                  <label>
                    <font-awesome-icon
                      class="show-icon"
                      v-if="show"
                      @click="show = !show"
                      icon="eye"
                    />
                    <font-awesome-icon
                      class="hide-icon "
                      v-else
                      @click="show = !show"
                      icon="eye-slash"
                    />
                  </label>
                </div>
                <div class="d-flex justify-content-center mt-3 login_container">
                  <button
                    :disabled="name && password.length > 0 ? false : true"
                    type="submit"
                    name="button"
                    class="btn login_btn"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      password: '',
      show: false
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        if (JSON.parse(localStorage.getItem('loggedInForEng')) === true) {
          localStorage.setItem('loggedInForEng', true)
        } else {
          localStorage.setItem('loggedInForEng', false)
        }
        if (JSON.parse(localStorage.getItem('loggedInForMed')) === true) {
          localStorage.setItem('loggedInForMed', true)
        } else {
          localStorage.setItem('loggedInForMed', false)
        }
        if (JSON.parse(localStorage.getItem('loggedInForInfo')) === true) {
          localStorage.setItem('loggedInForInfo', true)
        } else {
          localStorage.setItem('loggedInForInfo', false)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.margin {
  margin-top: 100px;
  margin-bottom: 70px;
  margin-right: 40px;
}
.user_card {
  height: 400px;
  width: 350px;
  margin-top: auto;
  margin-bottom: auto;
  background: #bcbcdf;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;
}
.brand_logo_container {
  position: absolute;
  height: 170px;
  width: 170px;
  top: -75px;
  border-radius: 50%;
  background: #1b0ce6;
  padding: 10px;
  text-align: center;
}
.brand_logo {
  height: 150px;
  width: 150px;
  border-radius: 50%;
  border: 2px solid white;
}
.form_container {
  margin-top: 100px;
}
.login_btn {
  width: 100%;
  background: #5034ee !important;
  color: white !important;
}
.login_btn:focus {
  box-shadow: none !important;
  outline: 0px !important;
}
.login_container {
  padding: 0 2rem;
}
.input-group-text {
  background: #5034ee !important;
  color: white !important;
  border: 0 !important;
  border-radius: 0.25rem 0 0 0.25rem !important;
}
.input_user,
.input_pass:focus {
  box-shadow: none !important;
  outline: 0px !important;
}

@mixin showpass($property) {
  position: absolute;
  left: $property;
  top: 20px;
  z-index: 11;
  cursor: pointer;
}

.show-icon {
  @include showpass(212px);
  margin-top: -8px;
}

.hide-icon {
  @include showpass(210px);
  margin-top: -10px;
  color: #555;
}
</style>
