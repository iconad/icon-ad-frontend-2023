
<template>
    <div>
        
        <div @click="openPopup()" class="w-16 h-16 bg-theme-gray-dark shadow-lg hover:shadow-xl cursor-pointer text-white rounded-full fixed z-[999999] right-5 bottom-5 transition-all hover:-translate-y-1 duration-400">
            <div id="openPopup" class="flex absolute inset-0 flex items-center justify-center ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-9 h-9">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
            </div>
            <div id="closePopup" class="flex absolute inset-0 flex items-center justify-center ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-9 h-9">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>            
        </div>
        <!-- chatbot ICON -->

        <div id="popup" class="flex flex-col justify-between fixed bottom-24 right-5 h-[30rem] w-[80%] sm:w-96 rounded-lg overflow-hidden shadow-lg z-50 bg-white">

            <div @click="openPopup()"  class="w-full bg-theme-gray-dark text-white flex items-center p-4 relative cursor-pointer">

                <AssetsLogoWhite options="w-20"/>
                <!-- logo -->

                <div class="absolute top-[100%] left-0 bg-red-500 text-white px-3 py-1 text-sm w-full text-center" v-if="validationError"> {{validationMessage}} </div>

            </div>
            <!-- popup header -->


            <div class="popup-chat h-full overflow-y-scroll py-6 px-4 space-y-8" ref="chatContainer">
                
                <div v-for="(chat, i) in conversation" :key="i" class="chat flex space-x-3" :class="chat.type == 'question' ? '' : 'space-x-reverse'">
                    <div class="1/5" :class="chat.type == 'question' ? 'order-1' : 'order-2'">
                        <div class="w-10 h-10 border border-gray-500 rounded-full flex items-center justify-center">
                            <AssetsLogo options="w-6"/>
                        </div>
                    </div>
                    <div class="w-full space-y-1" :class="chat.type == 'question' ? 'order-2' : 'order-1 flex flex-col items-end' ">
                        <div class="text-sm font-bold text-gray-800" > {{  chat.type == 'question' ? 'ICON Team' :  'Client'  }} </div>
                        <div v-if="chat.order == 1 && chat.type == 'question'" class="text-sm bg-gray-100 text-black rounded-2xl p-3 space-y-1 w-auto inline-block">
                            <div class="font-medium">hey there!</div>
                        </div>
                        <div class="text-sm bg-gray-100 text-black rounded-2xl p-3 space-y-2 w-auto inline-block">
                            <div class="font-medium">{{chat.text}}</div>
                            <ul class="flex items-center flex-wrap gap-1" v-if="chat.services">
                                <li class="capitalize w-auto px-2 py-1 border rounded-full border border-gray-300 hover:bg-theme-gray-dark hover:text-white transition-all bg-gray-200" v-for="service in chat.services">
                                    <span v-if="nextQuestion.order == 1 && !nextQuestion.isAnswered" @click="submitChat(newChat = service)" class="cursor-pointer">{{ service }}</span>
                                    <span v-else>{{ service }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- icon team chat -->

                <p v-if="adminTyping" class="text-sm font-semibold p-5 italic text-gray-500 tracking-wider">
                    <span>Typing </span>
                    <span class="spinner inline-block mt-1">
                        <span class="bounce1"></span>
                        <span class="bounce2"></span>
                        <span class="bounce3"></span>
                    </span>
                </p>


            </div>
            <!-- popup-chat -->

            <!-- bg-gradient-to-t from-white via-white -->
            <div v-if="!allAnswered" :class="validationError ? 'border-red-400' : 'border-gray-300'" class="w-4/5 mx-auto my-4 rounded-full overflow-hidden relative border flex bg-gray-100 items-center justify-between">
                <input @keyup.enter="submitChat()" v-model="newChat" type="text" class="w-[88%] text-sm h-14 px-3 bg-gray-100 focus:outline-none active:outline-none" placeholder="Start Typing...">

                <div class="h-full w-10 flex items-center justify-center cursor-pointer z-10 absolute right-0 top-0" @click="submitChat()">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                </div>
            </div>
        <!-- chat input -->

        </div>
        <!-- chatbot popup -->

    </div>
</template>

<script>

export default {
    data() {
        return {
            answers: {},
            conversation: [],
            newChat: null,
            adminTyping: false,
            validationError: false,
            validationMessage: null,
            form: {
                name: null,
                email: null,
                phone: null,
                message: null,
            },
            chat: [
                {
                    order: 1,
                    name: 'service',
                    services: ['branding', 'advertising', 'digital marketing', 'website developent', 'video production'],
                    question: 'What would you like to do?',
                    isAnswered: false
                },
                {
                    order: 2,
                    name: 'elaborate',
                    question: 'can you please elaborate this?',
                    isAnswered: false
                },
                {
                    order: 3,
                    name: 'name',
                    question: 'Before we get started, what is  your name?',
                    isAnswered: false
                },
                {
                    order: 4,
                    name: 'email',
                    question: 'Thank you! Can I get your email address in case we get disconnected?',
                    isAnswered: false
                },
                {
                    order: 4,
                    name: 'phone',
                    question: 'And finally, what is your phone number?',
                    isAnswered: false
                },
                {
                    order: 5,
                    name: 'thankyou',
                    question: null,
                    isAnswered: false
                },
            ]
        }
    },

    computed: {

        isPopupActive: {
            get: function () {
                return this.$store.state.isPopupActive
            },
            set: function (value) {
                this.$store.commit('isPopupActive', value)
            }
        },

        isPopupOnce: {
            get: function () {
                return this.$store.state.isPopupOnce
            },
            set: function (value) {
                this.$store.commit('isPopupOnce', value)
            }
        },

        userEmail() {
            let emailAnswer = this.conversation.find(chat => chat.name === 'email' && chat.type === 'answer');
            return emailAnswer ? emailAnswer.text : null;
        },

        thankYouMessage() {
            if (this.userEmail) {
                return `Thank you. Our specialist will contact you at ${this.userEmail} / ${this.form.phone} as soon as possible.`;
            } else {
                return '';
            }
        },

        allAnswered() {
            let name = this.conversation.find(chat => chat.name === 'name' && chat.type === 'answer');
            let email = this.conversation.find(chat => chat.name === 'email' && chat.type === 'answer');
            let phone = this.conversation.find(chat => chat.name === 'phone' && chat.type === 'answer');
            let service = this.conversation.find(chat => chat.name === 'service' && chat.type === 'answer');
            let elaborate = this.conversation.find(chat => chat.name === 'elaborate' && chat.type === 'answer');

            this.form.name = name ? name.text : null 
            this.form.email = email ? email.text : null 
            this.form.phone = phone ? phone.text : null 
            this.form.message = elaborate ? service.text + " - " + elaborate.text : null 

        // Check if every question in the chat array has been answered
            return this.chat.slice(0, -1).every(chat => chat.isAnswered);
        },

        nextQuestion() {
            //finds the first question that is not answered and returns it
            this.chat.find(chat => !chat.isAnswered)
            return this.chat.find(chat => !chat.isAnswered)
        },

    },

    mounted() {
        
        this.conversation.push({
            type: 'question',
            order: this.nextQuestion.order,
            name: this.nextQuestion.name,
            text: this.nextQuestion.question,
            services: this.nextQuestion.services ? this.nextQuestion.services : null
        });
                
        let q = this.gsap.utils.selector(this.$el);
        const closePopup = q("#closePopup")
        const popup = q("#popup")
        this.gsap.set(closePopup, { autoAlpha: 0, rotation: 180})
        this.gsap.set(popup, { autoAlpha: 0, y: 20})


        this.$nextTick(() => {
            setTimeout(() => {  
            if(!this.isPopupActive && !this.isPopupOnce) {
                this.openPopup()
                this.isPopupOnce = true
            }
            }, 8000); // Set delay as per your need
        }); 

    },

    methods:{


        validateEmail(email) {
            let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        },

        validatePhone(phone) {
            let re = /^(\+\d{1,2}\s?)?((\(\d{3}\))|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;
            return re.test(String(phone));
        },

        submitChat () {

            let nextQuestion = this.nextQuestion


            // Validting Phone & Email

            if (nextQuestion.name === 'email' && !this.validateEmail(this.newChat)) {
                this.validationError = true
                this.validationMessage = 'Please enter a valid email address'
                return;
            } else if (nextQuestion.name === 'phone' && !this.validatePhone(this.newChat)) {
                this.validationError = true
                this.validationMessage = 'Please enter a valid phone number'
                return;
            }

            this.validationError = false

            let answer = {
                type: 'answer',
                order: nextQuestion.order,
                name: nextQuestion.name,
                text: this.newChat,
                servies: nextQuestion.services ? nextQuestion.services : null
            }
            this.conversation.push(answer);


            let questionIndex = this.chat.findIndex(chat => chat.name === nextQuestion.name)
            this.$set(this.chat[questionIndex], 'isAnswered', true)


            this.newChat = null


            if (this.nextQuestion && this.nextQuestion.name === 'thankyou') {
                this.adminTyping = true;
                this.scrollDown()
                setTimeout(() => {
                    this.adminTyping = false;
                    this.conversation.push({
                        type: 'question',
                        order: this.nextQuestion.order,
                        name: this.nextQuestion.name,
                        text: this.thankYouMessage,
                        services: this.nextQuestion.services ? this.nextQuestion.services : null
                    });
                this.scrollDown()
                this.sendEmail()
                }, 2000); // Set delay as per your need
            }

            if (this.nextQuestion && this.nextQuestion.name !== 'thankyou') {
                this.adminTyping = true;
                this.scrollDown()
                setTimeout(() => {
                    this.adminTyping = false;
                    this.conversation.push({
                        type: 'question',
                        order: this.nextQuestion.order,
                        name: this.nextQuestion.name,
                        text: this.nextQuestion.question,
                        services: this.nextQuestion.services ? this.nextQuestion.services : null
                    });          
                this.scrollDown()
                }, 1000); // Set delay as per your need
            }


        },

        scrollDown () {
            this.$nextTick(() => {
                let container = this.$refs.chatContainer;
                container.scrollTop = container.scrollHeight;
            }); 
        },

        answerQuestion(answer) {

            let question = this.nextQuestion
            
            if(question) {
                this.answers[question.name] = answer
                question.isAnswered = true
            }
        },

        openPopup() {
            const popup = this.isPopupActive = !this.isPopupActive
            let q = this.gsap.utils.selector(this.$el);

            const openPopup = q("#openPopup")
            const closePopup = q("#closePopup")
            const popupChat = q("#popup")

            var tl = this.gsap.timeline();

            if(popup) {
                tl.to(openPopup, 0.2, { autoAlpha: 0, rotation: -180, ease: "ease-in-out" }, 'one')
                .to(closePopup, 0.2, { autoAlpha: 1, rotation: 0, ease: "ease-in-out"}, 'one')
                .to(popupChat, 0.2, { autoAlpha: 1, y: 0, ease: "ease-in-out"}, 'one-=0.01')
            }else{
                tl.to(openPopup, 0.2, { autoAlpha: 1, rotation: 0, ease: "ease-in-out" }, 'one')
                .to(closePopup, 0.2, { autoAlpha: 0, rotation: 180, ease: "ease-in-out"}, 'one')
                .to(popupChat,0.2 ,{ autoAlpha: 0, y: 20, ease: "ease-in-out"}, 'one')

            }
        },

        async sendEmail() {
            let config = {
            headers: {
                Accept: "json",
                "Content-Type": "application/json"
            }
            };

            this.isLoading = true;

            this.$axios.$post(`https://drupal.icon-ad.com/webform_rest/submit/?_format=json`, {
                webform_id: "contact",
                type: 'chatbot',
                name: this.form.name,
                email: this.form.email,
                subject: 'inquiry from website chatbot',
                phone: this.form.phone,
                message: this.form.message,
                },
                config
            )
            .then(response => {
                this.isLoading = false;
                if (response.sid) {
                this.form = []
                }
            })
            .catch(error => {
                this.errors = error.response.data.error
                this.isLoading = false
            });
        }
    }
}
</script>

<style>
#closePopup, #popup {
  visibility: hidden;
  opacity: 0;
}
.popup-chat::-webkit-scrollbar {
  width: 0px;
}
.popup-chat::-webkit-scrollbar-track {
  background: transparent;
}

.spinner > span {
  width: 5px;
  height: 5px;
  background-color: #333;

  border-radius: 100%;
  display: inline-block;
  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

.spinner .bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.spinner .bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

@-webkit-keyframes sk-bouncedelay {
  0%, 80%, 100% { -webkit-transform: scale(0) }
  40% { -webkit-transform: scale(1.0) }
}

@keyframes sk-bouncedelay {
  0%, 80%, 100% { 
    -webkit-transform: scale(0);
    transform: scale(0);
  } 40% { 
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
  }
} 
      
</style>