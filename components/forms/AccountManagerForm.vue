<template>
    <div>
         <form @submit.prevent="submitResume" class="form">
  
          <div class="form-element mt-6">
            <label for="" class="mb-2 ml-1 font-medium block">Full Name</label>
            <input type="text" v-model="form.name" required class="form-input-white">
          </div>
          <!-- form element -->
  
          <div class="form-element mt-6">
            <label for="" class="mb-2 ml-1 font-medium block">Mobile Number</label>
            <client-only>
              <vue-tel-input
                class="form-element mt-6"
                required
                :valid-characters-only="true"
                @input="onInput"
                v-bind="bindProps"
                v-model="form.phone"
              ></vue-tel-input>
            </client-only>
          </div>
          <!-- form element -->
  
         <div class="form-element mt-6">
          <label for="" class="mb-2 ml-1 font-medium block">Email</label>
            <input type="email" v-model="form.email" required class="form-input-white" placeholder="Email">
          </div>
          <!-- form element -->
  
  
  
          <div class="form-element mt-6">
            <label for="" class="mb-2 ml-1 font-medium block">Tell us why you are the perfect candidate for the job.</label>
            <textarea type="text" class="form-input-white" v-model="form.perfect" rows="5"></textarea>
          </div>
  
    
          <div class="form-element mt-10">
            <label for="" class="mb-2 ml-1 font-medium block">Are you currently based in Dubai UAE?</label>
            <div class="radion">
              <span class="ml-1">Yes</span>
              <input type="radio" name="uae" v-model="form.are_you_in_uae" class="w-4" value="yes">
            </div>
            <div class="radion">
              <span class="ml-1">No</span>
              <input type="radio" name="uae" v-model="form.are_you_in_uae" class="w-4" value="no">
            </div>
          </div>
  
    
  
          <div class="form-element mt-6">
            <label for="" class="mb-2 ml-1 font-medium block">Cover letter (upload pdf)</label>
  
            <div>
              <input type="file" required id="selectCover" @change="addCover" class="hidden" placeholder="Upload Your Resume">
  
              <div class="form-input-white space-x-3">
                  <label for="selectCover" class="cursor-pointer bg-gray-300 hover:bg-gray-400 px-5 py-3 rounded">
                    {{ dropFilesCover.name ? 'Change Cover letter' :  'Upload Cover letter' }} </label>
                  <span id="custom-file-label" :class="dropFilesCover.name && dropFilesCover.name.length > 27 ? 'mt-5 black' :  'black'"> {{ dropFilesCover.name ? this.dropFilesCover.name :  'No file chosen' }} </span>
              </div>
            </div>
  
          </div>
          <!-- form element -->


          <div class="form-element mt-6">
            <label for="" class="mb-2 ml-1 font-medium block">CV (upload pdf)</label>
  
            <div>
              <input type="file" required id="selectResume" @change="addResume" class="hidden" placeholder="Upload Your Resume">
  
              <div class="form-input-white space-x-3">
                  <label for="selectResume" class="cursor-pointer bg-gray-300 hover:bg-gray-400 px-5 py-3 rounded">
                    {{ dropFiles.name ? 'Change CV' :  'Upload CV' }} </label>
                  <span id="custom-file-label" :class="dropFiles.name && dropFiles.name.length > 27 ? 'mt-5 black' :  'black'"> {{ dropFiles.name ? this.dropFiles.name :  'No file chosen' }} </span>
              </div>
            </div>
  
          </div>
          <!-- form element -->
  
          <div v-if="!isLoading" class="form-element mt-6 flex justify-center w-full">
            <input type="submit" class="mx-auto form-button rainbow cursor-pointer hover:bg-opacity-100" value="Submit">
          </div>
          <div v-else>
            <span class="loader black">L &nbsp; ading</span>
          </div>
          <!-- form element -->
  
        </form>
    </div>
  </template>
  
  <script>
    export default {
      data() {
        return {
          isLoading: false,
          dropFiles: {},
          dropFilesCover: {},
          formToken: "",
          bindProps: {
            mode: "international",
            defaultCountry: "AE",
            placeholder: "Phone number",
            required: true,
            autocomplete: "on",
            styleClasses:"form-input-white text-gray-700"
          },
          phone: {
            number: "",
            valid: false,
            country: undefined
          },
  
          form: {
            name: "",
            email: "",
            subject: "Account Manger application from ICON website form",
            perfect: "",
            favorite: "",
            are_you_in_uae: "",
            portfolio_link: "",
            phone: ""
          },
  
  
          errors: {},
          isSubmitted: false
        }
      },
      methods: {
  
        selectCover () {
          this.$refs['selectCover'].click();
        },
  
        selectResume () {
          this.$refs['selectResume'].click();
        },
  
        addResume (e) {
          this.dropFiles = e.target.files[0];
        },
        addCover (e) {
          this.dropFilesCover = e.target.files[0];
        },
  
        onInput(formattedNumber, { number, valid, country }) {
          this.phone.number = number;
          this.phone.valid = valid;
          this.phone.country = country && country.name;
        },
  
  
        async submitResume() {
  
          const formData = new FormData();
          formData.append("image", this.dropFiles, this.dropFiles.name);
  
          this.isLoading = true;
  
          this.$axios
          .$post(
            "https://drupal.icon-ad.com/webform_rest/join_the_team/upload/resume?_format=json",
            this.dropFiles,
            {
              headers: {
              Accept: "json",
                "Content-Type": "application/octet-stream",
                "Content-Disposition":
                  'file; filename="' + this.dropFiles.name + '"'
              }
            }
          )
          .then(resumeResponse => {

            this.$axios
          .$post(
            "https://drupal.icon-ad.com/webform_rest/join_the_team/upload/resume?_format=json",
            this.dropFilesCover,
            {
              headers: {
              Accept: "json",
                "Content-Type": "application/octet-stream",
                "Content-Disposition":
                  'file; filename="' + this.dropFilesCover.name + '"'
              }
            }
          )
            .then(coverResponse => {

              this.submitForm(resumeResponse, coverResponse)              
            });

          });
  
  
        },
  
      submitForm (resume, cover) {
  
        let config = {
            headers: {
              Accept: "json",
              "Content-Type": "application/json"
            }
          };
  
          this.$axios.$post(`https://drupal.icon-ad.com/webform_rest/submit/?_format=json`, {
                webform_id: "join_the_team",
                name: this.form.name,
                email: this.form.email,
                phone: this.form.phone,
                subject: this.form.subject,
                why_perfect: this.form.perfect,
                are_you_in_uae: this.form.are_you_in_uae,
                resume: resume.fid[0].value,
                cover_letter: cover.fid[0].value
              },
              config
            )
            .then(response => {
              this.isLoading = false;
              if (response.sid) {
                this.form = []
                this.$router.push({
                  path: "/job-thank-you"
                });
              }
            })
            .catch(error => {
              this.errors = error.response.data.error
              this.isLoading = false
            });
        },
  
      },
  
    }
  </script>
  
  
  <style>
  .vue-tel-input {
    border: none!important;
  }
  .vti__input {
    background: transparent!important;
  }
  .form-input-white input.vti__input {
    color: black!important;
  }
  </style>
  