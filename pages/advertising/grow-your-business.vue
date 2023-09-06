<template>
    <div class="pb-16">

        <div class="w-full px-[5%] pt-8 md:pt-20 space-y-12">
            
            <div class="flex items-center flex-wrap lg:flex-nowrap lg:space-x-10 space-y-5 lg:space-y-0">
                <div class="w-full">
                    <div class="space-y-10 py-5 h-full flex flex-col justify-center lg:pr-16">
                        <div class="space-y-5">
                            <div class="space-y-4">
                                <h1 class="text-3xl 3xl:text-5xl font-semibold">Looking for Advertising Solutions in Dubai? <span class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-theme-sky via-theme-purple to-theme-pink">Explore ICON Advertising</span>   </h1>
                                <h2 class="font-semibold bg-gray-100 text-lg p-3 rounded-2xl">Supercharge Your Campaigns with ICON: Dubai's Advertising Powerhouse</h2>
                            </div>
                            <div class="text-base lg:text-sm xl:text-base space-y-3">
                                <p>
                                    In the realm of digital marketing, we shine as the best digital marketing agency in the UAE. With an emphasis on innovation and strategy, we transcend the ordinary, charting a course to amplify your brand's presence. Among the advertising agencies in the UAE, Icon Advertising is a trailblazer. Our collaboration with clients is a journey, where your brand becomes our brand and your success, our mission.
                                </p>
                            </div>                            
                        </div>
                        <div class="space-y-5 ">
                            
                            <div class="flex items-center space-x-2 text-sm lg:text-base">
                                <a href="#contact" class="bg-gradient-to-r from-theme-purple to-theme-red py-2 md:py-2.7 px-5 text-white capitalize font-semibold rounded-lg flex items-center justify-center inline-block">Let's Connect</a>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="w-full">
                    
                    <div class="relative w-full group">

                        <!-- <a href="https://www.adsoftheworld.com/campaigns/develop-a-powerful-tomorrow-today" target="_blank">
                            <img src="https://icon-ad.com/assets/ads.svg" class="absolute -top-8 right-10 w-[180px] z-[1]" alt="ads">
                            <span class="font-medium">Our Digital Campaign Featured on AdsOfTheWorld!</span>
                        </a> -->

                        <div class="rounded-2xl overflow-hidden">
                            <client-only>
                                <vimeo-player
                                ref="player"
                                :options="options1"
                                video-id="465010762"
                                ></vimeo-player>
                            </client-only>
                        </div>
                    </div>
                </div>
                <!--cover image -->
            </div>
            <!-- cover -->

        </div>

        <div class="marquee-wrapper my-10 py-10 lg:py-32 text-center bg-gray-100"> 

            <div class="space-y-12">
                <div class="space-y-4">
                    <h3 class="text-3xl font-bold">OUR CLIENTS</h3>
                    <P>We consider ourselves privileged to be an active participant in our clients' <br> journeys, helping to shape their success stories every step of the way. </P>
                </div>

                <div class="marquee flex space-x-4">
                    <div v-for="client in clients" :key="client.id" class="w-72">
                        <div class="w-72 rounded-xl border-2 border-gray-300">
                            <UtilsProjectImage options="h-64 select-none object-contain mx-auto" :mini="client.image_mini" :image="client.logo_black" :title="client.title" />
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <!-- Clients End -->

        <div class="w-full px-[5%]">

            <div class="flex flex-wrap lg:flex-nowrap justify-between space-x-0 lg:space-x-10 space-y-5 lg:space-y-0">
                <div class="w-full lg:w-1/2 3xl:w-1/3">
                    <div class="space-y-10 py-5">
                        <div class="space-y-3">
                            <h2 class="text-3xl font-semibold">
                                Are you on the hunt for a leading-edge creative advertising agency in Dubai and UAE? 
                            </h2>
                            <!-- <h2 class="text-2xl font-semibold">
                                Catering to all your digital marketing needs
                            </h2> -->
                        </div>
                        <div class="space-y-4">
                            <p>Are you searching for one of the top-notch advertising companies in Dubai and the UAE? Look no further than ICON Advertising Agency. As a prominent marketing agency, we specialize in crafting impactful advertising campaigns that resonate with your target audience. Among the numerous advertising agencies in Dubai, we stand out by consistently delivering exceptional results that align with your business goals.</p>
                        </div>
                        <div>
                            <div class="flex items-center space-x-2 ">
                                <a href="#contact" class="bg-gradient-to-r from-theme-purple to-theme-red py-2 md:py-2.7 px-5 text-white capitalize font-semibold rounded-lg flex items-center justify-center inline-block">Let's Connect</a>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="w-full 2xl:w-1/2">

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div label="Trumpet" class="w-full lg:w-72 xl:w-96 lg:ml-auto group space-y-3 border p-5 rounded-2xl duration-400 hover:shadow-2xl hover:shadow-theme-red/30 transition-all">
                            <h2 class="text-lg font-semibold group-hover:text-theme-red">Creative Campaign Development</h2>        
                            <div class="space-y-4 text-sm">
                                <p>
                                    Our talented team of creatives and copywriters work closely to craft compelling advertisements that capture attention, convey your brand's unique value proposition, and leave a lasting impression on your target audience.
                                </p>
                            </div>            
                        </div>
                        <!-- #item -->
                        
                        <div class="w-full lg:w-72 xl:w-96 lg:mr-auto group space-y-3 border p-5 rounded-2xl duration-400 hover:shadow-2xl hover:shadow-theme-purple/30 transition-all">
                            <h2 class="text-lg font-semibold  group-hover:text-theme-purple">Digital Advertising</h2>        
                            <div class="space-y-4 text-sm">
                                <p>
                                    In today's digital era, we specialize in creating impactful digital advertising campaigns across various platforms, including search engines, social media, display networks, and video advertising. Our data-driven approach ensures precision targeting and measurable results.
                                </p>
                            </div>            
                        </div>
                        <!-- #item -->

                        <div class="w-full lg:w-72 xl:w-96 lg:ml-auto group space-y-3 border p-5 rounded-2xl duration-400 hover:shadow-2xl hover:shadow-theme-sky/30 transition-all">
                            <h2 class="text-lg font-semibold group-hover:text-theme-sky">Print and Outdoor Advertising</h2>        
                            <div class="space-y-4 text-sm">
                                <p>
                                    We excel in creating captivating print and outdoor advertisements that effectively communicate your brand message to a wide audience. From billboards and transit ads to magazine spreads and print collateral, we ensure your brand stands out from the competition.                                </p>
                            </div>            
                        </div>
                        <!-- #item -->

                        <div class="w-full lg:w-72 xl:w-96 lg:mr-auto group space-y-3 border p-5 rounded-2xl duration-400 hover:shadow-2xl hover:shadow-theme-pink/30 transition-all">
                            <h2 class="text-lg font-semibold group-hover:text-theme-pink">Media Planning and Buying</h2>        
                            <div class="space-y-4 text-sm">
                                <p>
                                    With our expertise in media planning and buying, we identify the most effective channels and platforms to reach your target audience. We negotiate competitive rates and optimize your media spend to maximize the impact of your advertising campaigns.                                </p>
                            </div>            
                        </div>
                        <!-- #item -->

                    </div>
                </div>
            </div>
            
                        

        </div>
        <!-- cover wrapper -->

        
        
        <div class="mt-10 py-10 md:py-16 lg:py-32 space-y-12 bg-gray-100 mb-10 lg:mb-20">

            <div class="space-y-4 text-center ">
                <h3 class="text-2xl lg:text-3xl font-bold">A Look at Our Impressive <br> Achievements</h3>
                <!-- <P>In this section, we'll highlight some of our most notable achievements in social <br> media marketing and how we can help your business thrive in this crucial channel.</P> -->
            </div>


            <!-- carousel start -->
            <carousel v-if="isNuxtReady" :nav="false" :dots="false" :items="3" :autoplay="false" :margin="20" :autoWidth="true" :loop="true">

            <div class="w-[500px] relative rounded-2xl overflow-hidden group">
                <nuxt-link to="/advertising/projects/the-rise-of-dubai">
                    <img src="https://drupal.icon-ad.com/sites/default/files/styles/project_thumbnail/public/2022-04/WJVnAyT8zriKJf6S291P.jpeg?itok=7SdFxPea" alt="slider 3" class="h-full">
                </nuxt-link>
            </div>
            <div class="w-[335px] relative rounded-2xl overflow-hidden group">
                <nuxt-link to="/advertising/projects/mercedes-benz-truck">
                    <img src="https://drupal.icon-ad.com/sites/default/files/styles/project_thumbnail/public/2022-12/thumb_9.png?itok=M-nbnpS1" alt="slider 2" class="h-full">
                </nuxt-link>
            </div>
            <div class="w-[463px] relative rounded-2xl overflow-hidden group">
                <nuxt-link to="/advertising/projects/noon-daily-grocery">
                    <img src="https://drupal.icon-ad.com/sites/default/files/styles/project_thumbnail/public/2022-12/why-noon-1.jpg?itok=nFDMhBXh" alt="slider 1" class="h-full">                
                </nuxt-link>
            </div>
            <div class="w-[500px] relative rounded-2xl overflow-hidden group">
                <nuxt-link to="/advertising/projects/this-is-my-barbican">
                    <img src="https://drupal.icon-ad.com/sites/default/files/styles/project_thumbnail/public/2022-04/NCEH2o6X72arv5Pv4jB1.jpeg?itok=-RGofw-C" alt="slider 1" class="h-full">
                </nuxt-link>
            </div>
            <div class="w-[470px] relative rounded-2xl overflow-hidden group">
                <nuxt-link to="/advertising/projects/tomorrow-brings-us-all-closer">
                    <img src="https://drupal.icon-ad.com/sites/default/files/styles/project_thumbnail/public/2022-04/C2s1cRg6Ui65yR6QC7f1.jpeg?itok=HOFQQFZD" alt="slider 1" class="h-full"></img>
                </nuxt-link> 
            </div>


            </carousel>
            <!-- carousel end -->

        </div>



        <!-- ====== FAQ Section Start -->
        <section class="relative z-20 overflow-hidden bg-white py-20"
        >
        <div class="container mx-auto">
            <div class="-mx-4 flex flex-wrap">
            <div class="w-full px-4">
                <div class="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
                <p  class="mb-4 text-2xl lg:text-3xl font-bold" >
                    FAQs
                </p>
                </div>
            </div>
            </div>
            <div class="-mx-4 flex flex-wrap">
                <div class="w-full px-4 lg:w-1/2">
                    <div class="single-faq mb-8 w-full rounded-lg border border-gray-200 bg-white p-4 sm:p-8 lg:px-6 xl:px-8" >
                    <button
                        class="faq-btn flex w-full text-left"
                        @click="openFaq1 = !openFaq1"
                    >
                        <div
                        class="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-gray-500"
                        >
                        <svg
                            width="17"
                            height="10"
                            viewBox="0 0 17 10"
                            class="icon fill-current"
                        >
                            <path
                            d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                            fill="#3056D3"
                            stroke="#3056D3"
                            />
                        </svg>
                        </div>
                        <div class="w-full">
                        <h4 class="text-lg font-semibold text-black">
                            What sets ICON Advertising apart from other advertising companies in Dubai?
                        </h4>
                        </div>
                    </button>
                    <div v-show="openFaq1" class="faq-content pl-[62px]">
                        <p class="py-3 text-base leading-relaxed text-body-color">
                            ICON Advertising stands out due to its innovative approach, experienced team of marketers, and a proven track record of successful campaigns. Our commitment to delivering exceptional results and creative excellence makes us the top choice.
                        </p>
                    </div>
                    </div>
                    <div class="single-faq mb-8 w-full rounded-lg border border-gray-200 bg-white p-4 sm:p-8 lg:px-6 xl:px-8">
                <button
                    class="faq-btn flex w-full text-left"
                    @click="openFaq4 = !openFaq4"
                >
                    <div
                    class="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-gray-500"
                    >
                    <svg
                        width="17"
                        height="10"
                        viewBox="0 0 17 10"
                        class="icon fill-current"
                    >
                        <path
                        d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                        fill="#3056D3"
                        stroke="#3056D3"
                        />
                    </svg>
                    </div>
                    <div class="w-full">
                    <h4 class="text-lg font-semibold text-black">
                        What expertise does ICON Advertising offer in Print and Outdoor Advertising?
                    </h4>
                    </div>
                </button>
                <div v-show="openFaq4" class="faq-content pl-[62px]">
                    <p class="py-3 text-base leading-relaxed text-body-color">
                        Our agency recognizes the enduring value of print and outdoor advertising. With a keen eye for design and an understanding of the local market, we craft visually appealing and strategically placed print and outdoor ads that leave a lasting impression.
                    </p>
                </div>
                </div>
                    
                </div>
                <div class="w-full px-4 lg:w-1/2">
                    <div class="single-faq mb-8 w-full rounded-lg border border-gray-200 bg-white p-4 sm:p-8 lg:px-6 xl:px-8">
                    <button
                        class="faq-btn flex w-full text-left"
                        @click="openFaq2 = !openFaq2"
                    >
                        <div
                        class="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-gray-500"
                        >
                        <svg
                            width="17"
                            height="10"
                            viewBox="0 0 17 10"
                            class="icon fill-current"
                        >
                            <path
                            d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                            fill="#3056D3"
                            stroke="#3056D3"
                            />
                        </svg>
                        </div>
                        <div class="w-full">
                        <h4 class="text-lg font-semibold text-black">
                            What advantages does ICON Advertising's experience in Dubai offer?
                        </h4>
                        </div>
                    </button>
                    <div v-show="openFaq2" class="faq-content pl-[62px]">
                        <p class="py-3 text-base leading-relaxed text-body-color">
                            As a prominent Dubai-based agency, ICON understands the local culture, consumer behavior, and market dynamics. This expertise enables us to create campaigns that resonate with the target audience, resulting in higher engagement and conversion rates.
                        </p>
                    </div>
                    </div>
                
                <div class="single-faq mb-8 w-full rounded-lg border border-gray-200 bg-white p-4 sm:p-8 lg:px-6 xl:px-8">
                    <button
                        class="faq-btn flex w-full text-left"
                        @click="openFaq5 = !openFaq5"
                    >
                        <div
                        class="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-gray-500"
                        >
                        <svg
                            width="17"
                            height="10"
                            viewBox="0 0 17 10"
                            class="icon fill-current"
                        >
                            <path
                            d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                            fill="#3056D3"
                            stroke="#3056D3"
                            />
                        </svg>
                        </div>
                        <div class="w-full">
                        <h4 class="text-lg font-semibold text-black">
                            How does ICON Advertising leverage its association with Abu Dhabi and the UAE?
                        </h4>
                        </div>
                    </button>
                    <div v-show="openFaq5" class="faq-content pl-[62px]">
                        <p class="py-3 text-base leading-relaxed text-body-color">
                            Our expertise extends beyond Dubai, encompassing Abu Dhabi and the UAE. We are a leading digital marketing agency in Abu Dhabi, allowing us to tap into a wider market and provide seamless services across the Emirates.
                        </p>
                    </div>
                </div>
                </div>
                <div class="w-full px-4">
                    <div class="single-faq mb-8 w-full rounded-lg border border-gray-200 bg-white p-4 sm:p-8 lg:px-6 xl:px-8">
                        <button
                            class="faq-btn flex w-full text-left"
                            @click="openFaq3 = !openFaq3"
                        >
                            <div
                            class="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-gray-500"
                            >
                            <svg
                                width="17"
                                height="10"
                                viewBox="0 0 17 10"
                                class="icon fill-current"
                            >
                                <path
                                d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                                fill="#3056D3"
                                stroke="#3056D3"
                                />
                            </svg>
                            </div>
                            <div class="w-full">
                            <h4 class="text-lg font-semibold text-black">
                                How can I get in touch with ICON Advertising to discuss my marketing needs?
                            </h4>
                            </div>
                        </button>
                        <div v-show="openFaq3" class="faq-content pl-[62px]">
                            <p class="py-3 text-base leading-relaxed text-body-color">
                                Getting in touch is easy! You can reach out to us through our website, give us a call, or visit our office. Our team is ready to understand your requirements and provide tailored solutions to elevate your brand through our expertise in creative campaign development, digital advertising, print and outdoor advertising, media planning, and buying.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="absolute bottom-0 right-0 z-[-1]">
            <svg
            width="1440"
            height="886"
            viewBox="0 0 1440 886"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                opacity="0.5"
                d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
                fill="url(#paint0_linear)"
            />
            <defs>
                <linearGradient
                id="paint0_linear"
                x1="1308.65"
                y1="1142.58"
                x2="602.827"
                y2="-418.681"
                gradientUnits="userSpaceOnUse"
                >
                <stop stop-color="#3056D3" stop-opacity="0.36" />
                <stop offset="1" stop-color="#F5F2FD" stop-opacity="0" />
                <stop offset="1" stop-color="#F5F2FD" stop-opacity="0.096144" />
                </linearGradient>
            </defs>
            </svg>
        </div>
        </section>
        <!-- ====== FAQ Section End -->


        <div id="contact" class="pt-24"></div>
        <div class="w-full px-[5%] mb-10">
            <div class="flex flex-wrap lg:flex-nowrap lg:space-x-10 space-y-5 lg:space-y-0">
                <div class="w-full flex items-center">
                    <div class="space-y-10 pb-5 w-full lg:w-4/5">
                        <div class="space-y-4">
                            <p class="text-3xl 3xl:text-4xl font-semibold">Why Choose ICON for Advertising Services?</p>
                            <!-- <h2 class="text-3xl font-semibold">Partner with Us for Tailored <br> Strategies and Results!</h2> -->
                        </div>
                        <div class="space-y-4 text-base lg:text-sm xl:text-base">
                            <ul class="list-disc space-y-2 ml-5">
                                <li><b>Experienced team:</b> Our team consists of seasoned advertising professionals with a proven track record of delivering successful campaigns across diverse industries.</li>
                                <li><b>Creativity and innovation:</b> We pride ourselves on our creative approach, constantly pushing boundaries to develop unique and engaging advertising concepts.</li>
                                <li><b>Results-driven approach:</b> Our focus is on achieving tangible results for our clients, whether it's increased brand awareness, higher conversion rates, or improved customer engagement.</li>
                                <li><b>Personalized attention:</b> We value strong client relationships and provide personalized attention to understand your specific needs, ensuring our strategies align with your business objectives.</li>
                            </ul>

                        </div>
                        <div class="flex items-center space-x-2">
                            <a href="#contact" class="bg-gradient-to-r from-theme-purple to-theme-red py-2 md:py-2.7 px-5 text-white capitalize font-semibold rounded-lg flex items-center justify-center inline-block">Let's Connect</a>
                        </div>
                    </div>

                </div>
                <div class="w-full relative ">
                    <FormsLandingForm type="Advertising Landing Page" :isBudget="true" />
                </div>
            </div>
        </div>
        
        


        <div class="landing-container">
            <img src="https://icon-ad.com/assets/partners.png" class="w-4/5 mx-auto pt-20 pb-10" alt="ICON Partners">
        </div>

        <a target="_blank" href="https://wa.me/+971502529223" style="box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 16px;" class="block hover:scale-[1.1] transition-all whatsapp w-14 h-14 p-3 text-white rounded-full bg-green-500 fixed right-8 bottom-10 cursor-pointer z-50">
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>            
        </a>

    </div>
  </template>
    
    <script>
        const carousel = () => window && window !== undefined ? import("vue-owl-carousel") : null;
        import counter from '~/utils/counter'

        export default {
            layout: "landing",

            components: { carousel },
            head() {
                return {
                    htmlAttrs: {
                        class: 'scroll-smooth-html'
                    },
                    title: 'Top Advertising Design & Marketing Agency in Dubai & Abu Dhabi | ICON',
                    meta: [
                        { charset: 'utf-8' },
                        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                        {
                            hid: 'description',
                            name: 'description',
                            content: 'Leading Dubai Advertising Agency delivering top-tier digital marketing solutions Expertise in branding, design, social media, and performance-driven marketing strategies.'
                        }
                    ],
                    link: [
                        {
                        rel: 'canonical',
                        href: 'https://icon-ad.com/advertising/grow-your-business',
                        ref: 'noopener noreferrer'
                        }
                    ],
                    script: [
                        {
                            type: 'application/ld+json',
                            json: {
                                "@context": "https://schema.org",
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "What sets ICON Advertising apart from other advertising companies in Dubai?",
                                        "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "ICON Advertising stands out due to its innovative approach, experienced team of marketers, and a proven track record of successful campaigns. Our commitment to delivering exceptional results and creative excellence makes us the top choice."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "What expertise does ICON Advertising offer in Print and Outdoor Advertising?",
                                        "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Our agency recognizes the enduring value of print and outdoor advertising. With a keen eye for design and an understanding of the local market, we craft visually appealing and strategically placed print and outdoor ads that leave a lasting impression."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "What advantages does ICON Advertising's experience in Dubai offer?",
                                        "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "As a prominent Dubai-based agency, ICON understands the local culture, consumer behavior, and market dynamics. This expertise enables us to create campaigns that resonate with the target audience, resulting in higher engagement and conversion rates."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "How does ICON Advertising leverage its association with Abu Dhabi and the UAE?",
                                        "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Our expertise extends beyond Dubai, encompassing Abu Dhabi and the UAE. We are a leading digital marketing agency in Abu Dhabi, allowing us to tap into a wider market and provide seamless services across the Emirates."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "How can I get in touch with ICON Advertising to discuss my marketing needs?",
                                        "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Getting in touch is easy! You can reach out to us through our website, give us a call, or visit our office. Our team is ready to understand your requirements and provide tailored solutions to elevate your brand through our expertise in creative campaign development, digital advertising, print and outdoor advertising, media planning, and buying."
                                        }
                                    }
                                ]
                            }
                        },
                        {
                        type: 'application/ld+json',
                        json: {
                                "@context": "https://schema.org",
                                "@type": "Organization",
                                "url": "https://www.icon-ad.com",
                                "logo": "https://icon-ad.com/logo.png"
                            }
                        },
                        {
                            type: 'application/ld+json',
                            json: {
                                "@context": "https://schema.org",
                                "@type": "LocalBusiness",
                                "name": "ICON",
                                "address": {
                                    "@type": "PostalAddress",
                                    "streetAddress": "Office 306, Spectrum Building",
                                    "addressLocality": "Oud Metha",
                                    "addressRegion": "AE",
                                    "postalCode": "236013",
                                    "addressCountry": "UAE"
                                },
                                "telephone": "+97142636550",
                                "priceRange": "AED",
                                "image": "https://icon-ad.com/logo.png",
                                "description": "A 360° Integrated Creative, Branding, Marketing and Communications Agency Based in Dubai, UAE.",
                                "openingHours": "Mo-Fr 09:00-18:00",
                                "geo": {
                                    "@type": "GeoCoordinates",
                                    "latitude": 25.232636127422968,
                                    "longitude": 55.31103999267581
                                },
                            }
                        }
                    ]
                }
            },

            data() {
                return {
                    openFaq1: false, 
                    openFaq2: false, 
                    openFaq3: false, 
                    openFaq4: false, 
                    openFaq5: false, 
                    openFaq6: false,   
                    isNuxtReady: false,
                    options1: {
                        muted: true,
                        autoplay:true,
                        responsive:true,
                        controls:true,
                        portrait:false,
                        byline:false,
                        color:"000000",
                        title:false
                    },
                    options: {
                        autoplay:false,
                        responsive:true,
                        controls:true,
                        portrait:false,
                        byline:false,
                        color:"000000",
                        title:false
                    }
                }
            },
            mounted() {
                counter()
                const vm = this;
                if (process.browser) {
                    window.onNuxtReady(app => {
                    console.log("Nuxt ready!");
                    vm.isNuxtReady = true;
                    });
                }
            },

            methods: {
                mutedVideo () {
                    this.options1.muted = false
                    this.options1.autoplay = false
                }
            },

            async asyncData({ $axios }) {
            const clients = await $axios.$get(`/all-clients`)

                return {
                    clients
                }
            },
        }

    </script>



<style>

.marquee-wrapper {
  overflow: hidden;
}

.marquee {
  animation-name: marquee;
  animation-duration: 50s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-direction: alternate;
  transform: translateX(0);
  
}

@media only screen and (max-width: 860px){
    .marquee {
        animation-duration: 22s;
        
    }
}

.marquee img {
    padding: 1em;
}

@keyframes marquee {
  from {transform: translateX(0);}
  to {transform: translateX(-400%);}
}

</style>