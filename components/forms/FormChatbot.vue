<template>
  <div>
      <form v-if="!isSubmitted" @submit.prevent="submitForm" class="form">

        <div class="form-element">
          <input type="text" class="form-input" v-model="form.name" required placeholder="Full Name">
          <span class="text-sm text-red-500 font-semibold flex justify-start mt-1" v-if="errors && errors.name">{{ errors.name }}</span>
        </div>
        <!-- form element -->

        <div class="form-element">
          <client-only>
            <vue-tel-input
              class="form-element"
              :valid-characters-only="true"
              @input="onInput"
              v-bind="bindProps"
              v-model="form.phone"
            ></vue-tel-input>
          </client-only>
          <span class="text-sm text-red-500 font-semibold flex justify-start mt-1" v-if="errors && errors.phone">{{ errors.phone }}</span>
        </div>
        <!-- form element -->

        <div class="form-element">
          <input type="text" v-model="form.email" class="form-input" required placeholder="Email">
          <span class="text-sm text-red-500 font-semibold flex justify-start mt-1" v-if="errors && errors.email">{{ errors.email }}</span>
        </div>
        <!-- form element -->

        <div class="form-element">
          <textarea type="text" v-model="form.message" class="form-input" required placeholder="Message" :rows="small ? 2 : 5"></textarea>
          <span class="text-sm text-red-500 font-semibold flex justify-start mt-1" v-if="errors && errors.message">{{ errors.message }}</span>
        </div>

        <!-- Captcha Start -->
        <div class="select-none transition-all duration-100 focus:outline-none active:outline-none active:border-none group flex flex-wrap items-center h-full">
          <span :class="captcha.status ? 'bg-green-200' : 'bg-gray-300'" class="bg-opacity-75 px-4 py-2 transition-all rounded-xl block mr-3 flex items-center justify-between space-x-2 w-[50%] md:w-[50%] mb-3 md:mb-0">
            <span class="block">
              {{captcha.num1}}
              {{captcha.opreator}}
              {{captcha.num2}}
            </span>
            <span>
              =
            </span>
            <span>
              <input type="text" v-model="input" :disabled="captcha.status" @input="checkCaptcha" class="w-10 rounded-full text-center focus:outline-none" :class="captcha.status ? 'select-none bg-green-200' : 'bg-gray-50'" placeholder="?">
            </span>
          </span>
          <div v-if="captcha" class="whitespace-nowrap w-full md:w-4/6 select-none font-medium right-0 text-sm text-left" :class=" captcha.success ? 'text-green-500' : captcha.error ? 'text-theme-red' : 'text-gray-600'">
            {{captcha.message}}
          </div>
        </div>
        <!-- Captcha End -->
          
        <div v-if="!isLoading" class="form-element">
          <span v-if="captcha && !captcha.status" class="text-center select-none form-button block rainbow-gray w-full cursor-not-allowed hover:bg-opacity-100"> Submit </span>
          <input v-else type="submit" class="bg-transparent rounded px-5 py-4 w-full focus:outline-none bg-opacity-70 focus:bg-opacity-100 transition-all bg-gradient-to-r from-theme-red via-theme-pink to-theme-purple hover:from-theme-pink hover:via-theme-red hover:to-theme-pink w-full cursor-pointer hover:bg-opacity-100" value="Submit">
        </div>
        <!-- form element -->

        <div v-else>
          <span class="loader">L &nbsp; ading</span>
        </div>
        <!-- loader -->

      </form>
      <div v-else class="py-10 space-y-5 text-center">
        <span class="text-green-500">
            <svg
              class="w-10 h-10 mx-auto fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100.353 100.353"
            >
              <g>
                <path
                  d="M96.747 39.242a1.456 1.456 0 10-2.833.675c.766 3.212 1.155 6.604 1.155 10.083 0 24.85-20.67 45.067-46.078 45.067S2.913 74.85 2.913 50c0-24.852 20.67-45.07 46.078-45.07 10.119 0 19.785 3.202 27.952 9.26a1.456 1.456 0 001.735-2.339C70.006 5.417 59.74 2.018 48.991 2.018 21.977 2.018 0 23.542 0 50c0 26.456 21.977 47.98 48.991 47.98S97.982 76.456 97.982 50c0-3.705-.416-7.324-1.235-10.758z"
                />
                <path
                  d="M47.98 71.683c-.386 0-.756-.153-1.03-.426L19.637 43.948a1.456 1.456 0 012.059-2.06l26.223 26.219 49.538-55.486a1.456 1.456 0 112.173 1.94L49.066 71.197a1.455 1.455 0 01-1.045.486h-.041z"
                />
              </g>
            </svg>
        </span>
        <h1 class="text-xl font-semibold">Thank You</h1>
        <p class="text-sm">
          We have received you message and would like to thank you for
          writing to us. if your inquiry is urgent please use the telephone
          number listed below to talk to one of our staff members.
          Otherwise, we will reply by email as soon as possible.
        </p>
      </div>
  </div>
</template>

<script>

  import _ from 'lodash'

  export default {
    props: ['small'],
    data() {
      return {
        input: null,
        isLoading: false,
        data: {},
        bindProps: {
          mode: "international",
          defaultCountry: "AE",
          placeholder: "Phone number",
          required: true,
          autocomplete: "on",
          styleClasses:"form-input"
        },
        phone: {
          number: "",
          valid: false,
          country: undefined
        },
        form: {
          name: "",
          email: "",
          message: "",
          subject: 'Icon ad subject',
          phone: null,
          phone: ""
        },
        errors: {},
        isSubmitted: false,
        errors: null
      }
    },

    computed: {
      captcha() {
        return _.cloneDeep(this.$store.state.captcha.captcha)
      }
    },

    mounted() {
      this.$store.commit('captcha/generateCaptcha')
    },

    methods: {

      checkCaptcha () {
        this.$store.dispatch('captcha/checkCaptcha', this.input)
      },

      onInput(formattedNumber, { number, valid, country }) {
        this.phone.number = number;
        this.phone.valid = valid;
        this.phone.country = country && country.name;
      },

      async submitForm() {
        let config = {
          headers: {
            Accept: "json",
            "Content-Type": "application/json"
          }
        };

        this.isLoading = true;

        this.$axios.$post(`https://drupal.icon-ad.com/webform_rest/submit/?_format=json`, {
              webform_id: "contact",
              name: this.form.name,
              email: this.form.email,
              subject: this.form.subject,
              phone: this.form.phone,
              message: this.form.message,
            },
            config
          )
          .then(response => {
            this.isLoading = false;
            if (response.sid) {
              this.form = []
              this.isSubmitted = true
            }
          })
          .catch(error => {
            this.errors = error.response.data.error
            this.isLoading = false
          });
      }


    },
  }
</script>


<style>




  .vti__input:focus {
    /* box-shadow: none !important; */
    /* color: white; */
  }

  .vti__input {
    /* color: white!important; */
  }

  .vti__input-exclude {
    /* color: rgba(74, 85, 104, 1)!important; */
  }

  .vue-tel-input {
    border: none !important;
  }

  .vti__dropdown-list, .vti__dropdown.disabled, .vti__dropdown.open {
    border: none!important;
  }

  .vti__dropdown-list, .vti__dropdown.disabled, .vti__dropdown.open::-webkit-scrollbar {
    width: 12px;
  }
  .vti__dropdown-list, .vti__dropdown.disabled, .vti__dropdown.open::-webkit-scrollbar-thumb {
    background-color: rgba(209, 213, 219, 1)!important;
    border-radius: 5px;
    box-shadow: 2px 4px 8px rgba(209, 213, 219, 0.5)!important;;
  }


  .vti__dropdown-item.highlighted {
    background-color: rgba(156, 163, 175, 1)!important;
  }

  .vti__dropdown {
    border-radius: 5px;
  }

  .vti__dropdown:hover, .vti__dropdown:focus, .vti__dropdown:active {
    background-color: rgba(156, 163, 175, 1)!important;
    outline: none;
    box-shadow: none;
  }

  .vue-tel-input:focus-within {
    box-shadow: none!important;
  }
  input.vti__input {
    background: transparent!important;
  }
</style>
