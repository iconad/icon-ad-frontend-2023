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

        <div id="popup" class="fixed bottom-24 right-5 h-auto w-[80%] sm:w-96 rounded-lg overflow-hidden shadow-lg z-[999999] bg-white">

            <div class="w-full bg-theme-gray-dark text-white flex items-center p-4">
                <AssetsLogoWhite options="w-20"/>
                <!-- logo -->
            </div>
            <!-- popup header -->

            <div class="popup-chat h-full py-6 px-4 space-y-2">
                <h3 class="text-xl font-semibold pb-2 text-center">Get In Touch</h3>
                <FormsFormChatbot :small="true" />

            </div>
            <!-- popup-chat -->
        </div>
        <!-- chatbot popup -->

    </div>
</template>

<script>
export default {
  data() {
    return {
        isPopupActive: false,
        chat: [
        {
            order: 1,
            name: 'service',
            services: ['advertising', 'digital', 'branding', 'web developent', 'web design', 'PPC', 'SEO', 'Social Marketing'],
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
            question: 'And finally, what is your phone number ?',
            isAnswered: false
        },
        {
            order: 5,
            name: 'thankyou',
            question: 'Thank you. Unfortunately there are no specialists online right now. But if you send a message back, a specialist will email you at test@test.com when they come back online.',
            isAnswered: false
        },
        ]
    }
  },

  mounted() {
    // const elements = this.gsap.utils.toArray('.atos');    
    let q = this.gsap.utils.selector(this.$el);
    const closePopup = q("#closePopup")
    const popup = q("#popup")
    this.gsap.set(closePopup, { autoAlpha: 0, rotation: 180})
    this.gsap.set(popup, { autoAlpha: 0, y: 20})

  },

  methods:{
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
    }
  }
}
</script>

<!-- <style>
#closePopup, #popup {
  visibility: hidden;
  opacity: 0;
}
</style> -->