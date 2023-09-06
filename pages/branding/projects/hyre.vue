<template>
    <div>
        

        <section class="w-full h-full bg-[#3565BD]">
            <div v-show="options.isReady">
                <client-only>
                    <vimeo-player
                    v-cloak
                    @ready="onReady"
                    ref="player"
                    :options="options"
                    :video-id="`853339560`"
                    ></vimeo-player>
                </client-only>
            </div>
            <div v-if="!options.isReady" class="h-screen text-5xl uppercase text-white flex items-center justify-center blur">
                <img src="https://icon-ad.com/assets/cover.webp" class="w-full object-cover" alt="cover">
            </div>

        </section>
        <!-- video -->    


        <section class="bg-white py-16 md:py-32">
            <div class="home-container space-y-10 md:space-y-20">
                <div class="flex">
                    <div class="w-full md:w-1/2">
                        <div class="space-y-5">
                            <h1 class="text-5xl font-bold">Hyre</h1>
                            <p class="font-semibold text-lg">We rebranded and repositioned "Hyre" into this rad platform that's all about changing the way people work.</p>
                            <p class="text-gray-700 text-lg">But that's just the beginning! We're about to make Hyre super GEN-Z friendly, more accessible, and totally people-centric as we're bringing in a fresh new platform. It's tailor-made for the unstoppable uncompromising generation, who's all about doing things their way, no more following outdated institutions! Work freedom, here we come!</p>
                        </div>
                    </div>
                </div>
                <!-- flex -->
                <div class="flex flex-wrap md:flex-nowrap md:space-x-20 space-y-10 md:space-y-0">
                    <div class="w-full md:w-1/2">
                        <div class="space-y-5">
                            <h1 class="text-2xl font-bold">Scope of work</h1>
                            <p class="text-grau-700 text-lg">A global rebrand, from strategy, identity, UI/UX to delivery across every part of the business. Everywhere.</p>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2">
                        <div class="space-y-5">
                            <h1 class="text-2xl font-bold">Industry and category</h1>
                            <p class="text-grau-700 text-lg">A people-driven digital marketplace where buyers, businesses, sellers, freelancers, and talents collaborate on work opportunities.</p>
                        </div>
                    </div>
                </div>
                <!-- flex -->
            </div>
        </section>
        <!-- section -->

        <section id="section-player-1">
            <client-only>
                <vimeo-player
                v-cloak
                @ready="onReady1"
                ref="player1"
                :options="options1"
                :video-id="`853339584`"
                ></vimeo-player>
            </client-only>
        </section>
        <!-- section video -->


        <section class="bg-white py-16 md:py-32">
            <div class="home-container space-y-20">
                <div class="flex">
                    <div class="w-full md:w-1/2">
                        <div class="space-y-5">
                            <h1 class="text-3xl font-semibold">For the generation who's looking for relevance!</h1>
                            <p class="text-gray-700 text-lg">Hyre was created by Avrioc technologies to disrupt the freelancing status quo, they've changed the way people work and freelance - making it faster, cheaper, and fairer than other well-known platforms.</p> 
                            <p class="text-gray-700 text-lg">At ICON BrandingStudio our goal was, not just creating a dynamic brand identity but rather we wanted to build a new design system and brand experience to disrupt the current freelancing scene. </p>
                            <p class="text-gray-700 text-lg">Our challenge was to take “Hyre” beyond being just a freelancing platform, and to help them build a stand-out brand to make it real for everyone. A reimagined brand for a whole world of Freelancers and talents made by people for people. Whoever they are, wherever they go.</p>
                        </div>
                    </div>
                </div>
                <!-- flex -->
            </div>
        </section>
        <!-- section -->

        <section id="section-player-2">
            <client-only>
                <vimeo-player
                v-cloak
                @ready="onReady2"
                ref="player2"
                :options="options2"
                :video-id="`853339607`"
                ></vimeo-player>
            </client-only>
        </section>
        <!-- section video -->


        <section class="bg-white py-16 md:py-32">
            <div class="home-container space-y-20">
                <div class="flex">
                    <div class="w-full md:w-1/2">
                        <div class="space-y-5">
                            <h1 class="text-3xl font-semibold">Brand Strategy</h1>
                            <p class="text-gray-700 text-lg">The rebrand centres around a singular, universal concept: changing the way people work. It is bold, distinctive, and perfectly tailored to resonate with our target audience, "the new generation." </p> 
                            <p class="text-gray-700 text-lg">This idea permeates every facet of the fresh identity. A vibrant and dynamic brand persona emerges visually and verbally, offering an empowering brand experience that propels individuals to stay ahead of the curve, enabling them to use “Hyre” platform to discover better ways of doing business for good, on their own terms.</p>
                            <p class="text-gray-700 text-lg">To ensure global understanding, we adopted a straightforward witty with a bit of humour tone of voice that transcends language barriers. Adding to its impact, a custom headline typeface is employed, cleverly incorporating Gen-Z script-inspired letterforms.</p>
                        </div>
                    </div>
                </div>
                <!-- flex -->
            </div>
        </section>
        <!-- section -->

        <section class="w-full md:w-[95%] mx-auto" id="section-player-3">
            <div class="flex flex-wrap md:flex-nowrap space-y-10 md:space-y-0">
                <div class="w-full">
                    <client-only>
                        <vimeo-player
                        v-cloak
                        @ready="onReady3"
                        ref="player3"
                        :options="options3"
                        :video-id="`853339628`"
                        ></vimeo-player>
                    </client-only>
                </div>
                <div class="w-full">
                    <client-only>
                        <vimeo-player
                        v-cloak
                        @ready="onReady3"
                        ref="player4"
                        :options="options3"
                        :video-id="`853339667`"
                        ></vimeo-player>
                    </client-only>
                </div>
            </div>
        </section>
        <!-- section video -->


        <section class="bg-white pt-32 pb-12">
            <div class="home-container space-y-20">
                <div class="flex">
                    <div class="w-full md:w-1/2">
                        <div class="space-y-5">
                            <h1 class="text-3xl font-semibold">Brand Identity</h1>
                            <p class="text-gray-700 text-lg">Each element of our graphic approach skilfully melds colors, imagery, and textures, crafting unique narratives of the brand experience. These elements are instantly recognizable and incredibly versatile.</p>
                            <p class="text-gray-700 text-lg">The entire visual and verbal system has been meticulously reimagined, adhering to our new brand strategy principle. Notably, the "Hyre" wordmark has been revamped to emphasize the audacity of the new identity while ensuring legibility across all platforms and Omni-Channels.</p>
                        </div>
                    </div>
                </div>
                <!-- flex -->
            </div>
        </section>
        <!-- section -->

        <section class="w-full md:w-[95%] mx-auto" id="section-player-4">
            <div class="flex">
                <div class="w-full">
                    <client-only>
                        <vimeo-player
                        v-cloak
                        @ready="onReady4"
                        ref="player5"
                        :options="options4"
                        :video-id="`853339701`"
                        ></vimeo-player>
                    </client-only>
                </div>
            </div>
        </section>
        <!-- section video -->


        <section class="bg-white pt-12 pb-12 md:pb-32">
            <div class="home-container space-y-20">
                <div class="flex">
                    <div class="w-full md:w-1/2">
                        <div class="space-y-5">
                            <h1 class="text-3xl font-semibold">A timeless everywhere brand</h1>
                            <p class="text-gray-700 text-lg">Our purpose is to cater to diverse talents, businesses, and sectors across multiple locations. The new design system supports this mission, prioritizing accessibility, and clarity in every design choice. We painstakingly recreated and designed Hyre's entire library of iconography, illustrations, and typography, subjecting them to rigorous testing to ensure their universal understanding. Our aim is to create an atmosphere of acceptance and fellowship, fostering a sense of belonging where each individual feels valued, understood, and rewarded as part of Hyre's platform.</p>
                        </div>
                    </div>
                </div>
                <!-- flex -->
            </div>
        </section>
        <!-- section -->

        <section id="section-player-5">
            <div class="flex flex-wrap md:flex-nowrap">
                <div class="w-full">
                    <client-only>
                        <vimeo-player
                        v-cloak
                        @ready="onReady5"
                        ref="player6"
                        :options="options5"
                        :video-id="`853339736`"
                        ></vimeo-player>
                    </client-only>
                </div>
                <div class="w-full">
                    <client-only>
                        <vimeo-player
                        v-cloak
                        @ready="onReady5"
                        ref="player7"
                        :options="options5"
                        :video-id="`853339761`"
                        ></vimeo-player>
                    </client-only>
                </div>
            </div>
        </section>
        <!-- section video -->


        <section class="bg-white pt-16 md:pt-32 pb-12">
            <div class="home-container space-y-20">
                <div class="flex">
                    <div class="w-full md:w-1/2">
                        <div class="space-y-5">
                            <p class="text-gray-700 text-lg">But defining the brand was only the first step. Collaborating closely with the "Hyre" team, we crafted a brand that thrives from the smallest button to the largest billboard, encompassing the entire globe. Across all product screens, website pages, and cards, in every country, we sought to address customers directly beyond their devices. By extending our presence into spatial environments, we aim to create a more inviting atmosphere, erasing the boundaries between digital and spatial experiences. Our digital brand experience serves as a guiding light for new customers, making their introduction to Hyre feel seamless, warm, and on-brand, dispelling any sense of intimidation.</p>
                        </div>
                    </div>
                </div>
                <!-- flex -->
            </div>
        </section>
        <!-- section -->

        <section id="section-player-6">
            <div class="flex">
                <div class="w-full">
                    <client-only>
                        <vimeo-player
                        v-cloak
                        @ready="onReady6"
                        ref="player8"
                        :options="options4"
                        :video-id="`853339800`"
                        ></vimeo-player>
                    </client-only>
                </div>
            </div>
        </section>
        <!-- section video -->


    </div>
</template>

<script>
    export default {
        mounted () {
            this.setupScrollTrigger1();
            this.setupScrollTrigger2();
            this.setupScrollTrigger3();
            this.setupScrollTrigger4();
            this.setupScrollTrigger5();
            this.setupScrollTrigger6();
        },
        methods: {
            setupScrollTrigger1() {
                this.gsap.to({}, {
                    scrollTrigger: {
                        trigger: '#section-player-1',
                        start: "top center",     
                        end: "bottom center",  
                        toggleActions: "play pause resume reset",
                        onEnter: () => {
                            this.$refs.player1.play();
                        },
                        onLeave: () => {          
                            this.$refs.player1.pause();
                        },
                        onEnterBack: () => {    
                            this.$refs.player1.play();
                        },
                        onLeaveBack: () => {     
                            this.$refs.player1.pause();
                        }
                    }
                });

            },
            setupScrollTrigger2() {
                this.gsap.to({}, {
                    scrollTrigger: {
                        trigger: '#section-player-2',
                        start: "top center",     
                        end: "bottom center",  
                        toggleActions: "play pause resume reset",
                        onEnter: () => {
                            this.$refs.player2.play();
                        },
                        onLeave: () => {          
                            this.$refs.player2.pause();
                        },
                        onEnterBack: () => {    
                            this.$refs.player2.play();
                        },
                        onLeaveBack: () => {     
                            this.$refs.player2.pause();
                        }
                    }
                });

            },
            setupScrollTrigger3() {
                this.gsap.to({}, {
                    scrollTrigger: {
                        trigger: '#section-player-3',
                        start: "top center",     
                        end: "bottom center",  
                        toggleActions: "play pause resume reset",
                        onEnter: () => {
                            this.$refs.player3.play();
                            this.$refs.player4.play();
                        },
                        onLeave: () => {          
                            this.$refs.player3.pause();
                            this.$refs.player4.pause();
                        },
                        onEnterBack: () => {    
                            this.$refs.player3.play();
                            this.$refs.player4.play();
                        },
                        onLeaveBack: () => {     
                            this.$refs.player3.pause();
                            this.$refs.player4.pause();
                        }
                    }
                });

            },
            setupScrollTrigger4() {
                this.gsap.to({}, {
                    scrollTrigger: {
                        trigger: '#section-player-4',
                        start: "top center",     
                        end: "bottom center",  
                        toggleActions: "play pause resume reset",
                        onEnter: () => {
                            this.$refs.player5.play();
                        },
                        onLeave: () => {          
                            this.$refs.player5.pause();
                        },
                        onEnterBack: () => {    
                            this.$refs.player5.play();
                        },
                        onLeaveBack: () => {     
                            this.$refs.player5.pause();
                        }
                    }
                });

            },
            setupScrollTrigger5() {
                this.gsap.to({}, {
                    scrollTrigger: {
                        trigger: '#section-player-5',
                        start: "top center",     
                        end: "bottom center",  
                        toggleActions: "play pause resume reset",
                        onEnter: () => {
                            this.$refs.player6.play();
                            this.$refs.player7.play();
                        },
                        onLeave: () => {          
                            this.$refs.player6.pause();
                            this.$refs.player7.pause();
                        },
                        onEnterBack: () => {    
                            this.$refs.player6.play();
                            this.$refs.player7.play();
                        },
                        onLeaveBack: () => {     
                            this.$refs.player6.pause();
                            this.$refs.player7.pause();
                        }
                    }
                });

            },
            setupScrollTrigger6() {
                this.gsap.to({}, {
                    scrollTrigger: {
                        trigger: '#section-player-6',
                        start: "top center",     
                        end: "bottom center",  
                        toggleActions: "play pause resume reset",
                        onEnter: () => {
                            this.$refs.player8.play();
                        },
                        onLeave: () => {          
                            this.$refs.player8.pause();
                        },
                        onEnterBack: () => {    
                            this.$refs.player8.play();
                        },
                        onLeaveBack: () => {     
                            this.$refs.player8.pause();
                        }
                    }
                });

            },
            onenter() {
                console.log('entering')
            },
            onleave() {
                console.log('leaving')
            },
            onReady (player) {
                player.play() 
                this.options.isReady = true    
            },
            onReady1 (player) {
                player.pause()                
            },
            onReady2 (player) {
                player.pause()                
            },
            onReady3 (player) {
                player.pause()                
            },
            onReady4 (player) {
                player.pause()                
            },
            onReady5 (player) {
                player.pause()                
            },
            onReady6 (player) {
                player.pause()                
            }
        },  
        data() {
            return {
                options: {
                    isReady: false,
                    muted: true,
                    responsive: true,
                    controls: false,
                    portrait: false,
                    byline: false,
                    background: true,
                    loop: true,
                    color: "000000",
                    title: false
                },
                options1: {
                    muted: true,
                    pause: true,
                    responsive: true,
                    controls: false,
                    portrait: false,
                    byline: false,
                    background: true,
                    loop: true,
                    color: "000000",
                    title: false
                },
                options2: {
                    muted: true,
                    responsive: true,
                    controls: false,
                    portrait: false,
                    byline: false,
                    background: true,
                    loop: true,
                    color: "000000",
                    title: false
                },
                options3: {
                    muted: true,
                    autoplay: true,
                    responsive: true,
                    controls: false,
                    portrait: false,
                    byline: false,
                    background: true,
                    loop: true,
                    color: "000000",
                    title: false
                },
                options4: {
                    muted: true,
                    autoplay: true,
                    responsive: true,
                    controls: false,
                    portrait: false,
                    byline: false,
                    loop: true,
                    background: true,
                    color: "000000",
                    title: false
                },
                options5: {
                    muted: true,
                    responsive: true,
                    controls: false,
                    portrait: false,
                    byline: false,
                    background: true,
                    loop: true,
                    color: "000000",
                    title: false
                },
                options6: {
                    muted: true,
                    responsive: true,
                    controls: false,
                    portrait: false,
                    byline: false,
                    background: true,
                    loop: true,
                    color: "000000",
                    title: false
                },
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>