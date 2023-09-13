<template>
    <div class="pb-16">

        <div class="w-full px-[5%] pt-8 md:pt-20 space-y-12">
            
            <div class="flex items-center flex-wrap lg:flex-nowrap lg:space-x-10 space-y-5 lg:space-y-0">
                <div class="w-full">
                    <div class="space-y-10 py-5 h-full flex flex-col justify-center lg:pr-16">
                        <div class="space-y-5">
                            <div class="space-y-4">
                                <h1 class="text-3xl 3xl:text-5xl font-semibold">Looking for Branding & Design Agency In Dubai? <span class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-theme-sky via-theme-purple to-theme-pink"> Explore ICON Branding </span></h1>
                                <h2 class="font-semibold bg-gray-100 text-lg p-3 rounded-2xl"> 
                                    Boost Your Brand with ICON: Dubai's Leading Branding and Design Agency
                                </h2>
                            </div>
                            <div class="text-base lg:text-sm xl:text-base space-y-3">
                                <p>
                                    At ICON Branding Agency in Dubai, we don't just create logos; we sculpt brand identities that thrive. Our mastery lies in designing for branding, bringing your company's essence to life through captivating visuals. With expertise in company profile design in Dubai, we're not just a design agency; we're your brand's creative partner.
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

                        <div class="rounded-2xl overflow-hidden">
                            <client-only>
                                <vimeo-player
                                ref="player"
                                :options="options1"
                                video-id="766097376"
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
                            <p class="text-3xl font-semibold">
                                Looking for comprehensive Branding solutions in Dubai and UAE?
                            </p>
                        </div>
                        <div class="space-y-4">
                            <p>
                                Are you ready to take your brand to the next level? Look no further than ICON Branding Agency, your partner in creating impactful brand identities that resonate. With a focus on branding with a logo and design for branding, we are your gateway to success in the competitive business landscape.
                            </p>
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
                            <h2 class="text-lg font-semibold group-hover:text-theme-red">Brand Strategy</h2>        
                            <div class="space-y-4 text-sm">
                                <p>
                                    At ICON Branding Agency, we meticulously craft brand strategies that resonate. Our experts leverage market insights to create strategic pathways that elevate your brand above the competition. We turn visions into roadmaps for success, ensuring your brand stands strong and captures your audience's attention.
                                </p>
                            </div>            
                        </div>
                        <!-- #item -->
                        
                        <div class="w-full lg:w-72 xl:w-96 lg:mr-auto group space-y-3 border p-5 rounded-2xl duration-400 hover:shadow-2xl hover:shadow-theme-purple/30 transition-all">
                            <h2 class="text-lg font-semibold  group-hover:text-theme-purple">Brand Identity</h2>        
                            <div class="space-y-4 text-sm">
                                <p>
                                    Unveil your brand's essence through our unparalleled design expertise. We specialize in breathing life into brands with captivating logos, designs, and company profiles. Our Dubai-based design agency crafts visual identities that leave a lasting impact, aligning your business with innovation and recognition.
                                </p>
                            </div>            
                        </div>
                        <!-- #item -->

                        <div class="w-full lg:w-72 xl:w-96 lg:ml-auto group space-y-3 border p-5 rounded-2xl duration-400 hover:shadow-2xl hover:shadow-theme-sky/30 transition-all">
                            <h2 class="text-lg font-semibold group-hover:text-theme-sky">PR Services</h2>        
                            <div class="space-y-4 text-sm">
                                <p>
                                    Amplify your brand's voice with our comprehensive PR services. We understand that brand perception is key. Our Dubai team crafts compelling narratives, fosters media relationships, and ensures your brand story resonates across platforms. Let us shape perceptions and build connections that propel your brand forward.
                                </p>
                            </div>            
                        </div>
                        <!-- #item -->

                        <div class="w-full lg:w-72 xl:w-96 lg:mr-auto group space-y-3 border p-5 rounded-2xl duration-400 hover:shadow-2xl hover:shadow-theme-pink/30 transition-all">
                            <h2 class="text-lg font-semibold group-hover:text-theme-pink">Brand Management</h2>        
                            <div class="space-y-4 text-sm">
                                <p>
                                    Trust us to safeguard and elevate your brand's reputation. Our brand management services in Dubai encompass meticulous monitoring, proactive strategies, and adaptable solutions. From crisis management to brand evolution, we're the guardians of your brand's integrity, ensuring it thrives in an ever-evolving market.
                                </p>
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

            <div class="w-[278px] relative rounded-2xl overflow-hidden group">
                <img src="https://drupal.icon-ad.com/sites/default/files/styles/project_thumbnail/public/2022-12/buffalo_1.png?itok=AUpT8xRs" alt="slider 3" class="h-full">
            </div>
            <div class="w-[400px] relative rounded-2xl overflow-hidden group">
                <img src="https://drupal.icon-ad.com/sites/default/files/styles/project_thumbnail/public/2023-03/cover-01_0.jpg?itok=kJs5Wpol" alt="slider 2" class="h-full">
            </div>
            <div class="w-[708px] relative rounded-2xl overflow-hidden group">
                <img src="https://drupal.icon-ad.com/sites/default/files/styles/project_thumbnail/public/2023-01/Seaside%20Hills%20Concepts%20by%20ICON%20BrandingStudio_page-0009_0.jpg?itok=eZCdhnhJ" alt="slider 1" class="h-full">                
            </div>
            <div class="w-[313px] relative rounded-2xl overflow-hidden group">
                <img src="https://drupal.icon-ad.com/sites/default/files/styles/project_thumbnail/public/2022-12/yarn_1.png?itok=66CHB-gm" alt="slider 1" class="h-full">
            </div>
            <div class="w-[400px] relative rounded-2xl overflow-hidden group">
                <img src="https://drupal.icon-ad.com/sites/default/files/styles/project_thumbnail/public/2022-12/thumb_8.png?itok=FqQU92wh" alt="slider 1" class="h-full">                
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
                            Why should I choose ICON for my branding <br> needs?
                        </h4>
                        </div>
                    </button>
                    <div v-show="openFaq1" class="faq-content pl-[62px]">
                        <p class="py-3 text-base leading-relaxed text-body-color">
                            ICON Branding Agency stands out as a leading design agency in Dubai with a strong reputation for creating captivating brand identities. Our skilled team crafts unique logos, designs for branding, and company profiles that resonate with your target audience, giving your brand a competitive edge in the market.
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
                        How does ICON approach branding and <br> marketing?
                    </h4>
                    </div>
                </button>
                <div v-show="openFaq4" class="faq-content pl-[62px]">
                    <p class="py-3 text-base leading-relaxed text-body-color">
                        At ICON, we believe in the power of holistic branding and marketing strategies. We offer comprehensive solutions that integrate branding, design, and marketing to create a cohesive and effective brand presence. This approach ensures that your brand communicates a consistent message across various platforms.
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
                            What sets ICON apart from other design agencies in Dubai?
                        </h4>
                        </div>
                    </button>
                    <div v-show="openFaq2" class="faq-content pl-[62px]">
                        <p class="py-3 text-base leading-relaxed text-body-color">
                            ICON Branding Agency boasts a team of creative experts with deep industry knowledge and a proven track record. We've successfully delivered top-notch branding, design, and marketing solutions to numerous clients. Our commitment to excellence and innovative thinking makes us a preferred choice.
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
                            Can ICON help with digital marketing in Abu Dhabi and other UAE regions?
                        </h4>
                        </div>
                    </button>
                    <div v-show="openFaq5" class="faq-content pl-[62px]">
                        <p class="py-3 text-base leading-relaxed text-body-color">
                            Certainly! While we're based in Dubai, our digital marketing services extend across the UAE. We have experience working with clients in various regions, including Abu Dhabi. Our goal is to amplify your brand's online presence and drive tangible results.
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
                    <div class="space-y-10 pb-5">
                        <div class="space-y-4">
                            <p class="text-3xl 3xl:text-4xl font-semibold">Why Choose ICON for Branding Services?</p>
                        </div>
                        <div class="space-y-4 text-base lg:text-sm xl:text-base">
                            <ul class="list-disc space-y-2 ml-5">
                                <li><b>Cutting-Edge Marketing Integration:</b> At ICON we make it the go-to choice for clients looking to merge traditional branding with the digital landscape. </li>
                                <li><b>Strategic Collaborations with Agencies:</b> We have established strong partnerships with renowned advertising agencies in the UAE, creating a synergy that receives maximum exposure.</li>
                                <li><b>Expert Logo and Design</b> ICON's dedicated team of logo and design experts specializes in creating captivating and memorable brand assets. </li>
                                <li><b>Trendsetting Branding Strategies:</b> ICON continuously adapts to emerging trends and incorporates them into your branding strategy. We stay ahead of the curve.</li>
                            </ul>
                        </div>
                        <div class="flex items-center space-x-2">
                            <a href="#contact" class="bg-gradient-to-r from-theme-purple to-theme-red py-2 md:py-2.7 px-5 text-white capitalize font-semibold rounded-lg flex items-center justify-center inline-block">Let's Connect</a>                            
                        </div>
                    </div>

                </div>
                <div class="w-full relative ">
                    <FormsLandingForm thankyou="/branding/thank-you" type="Branding Landing Page" :isBudget="true" />
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
                    title: `Creative Branding & Communication Agency In Dubai & Abu Dhabi - ICON`,
                    meta: [
                        { charset: 'utf-8' },
                        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                        {
                            hid: 'description',
                            name: 'description',
                            content: 'Uplift your brand with ICON, a Dubai-based agency specializing in logo design, company profiles, and effective brand marketing strategies.'
                        }
                    ],
                    link: [
                        {
                        rel: 'canonical',
                        href: 'https://icon-ad.com/branding/make-your-brand-stand-out',
                        ref: 'noopener noreferrer' // Added ref attribute
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
                                        "name": "Why should I choose ICON for my branding needs?",
                                        "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "ICON Branding Agency stands out as a leading design agency in Dubai with a strong reputation for creating captivating brand identities. Our skilled team crafts unique logos, designs for branding, and company profiles that resonate with your target audience, giving your brand a competitive edge in the market."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "What sets ICON apart from other design agencies in Dubai?",
                                        "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "ICON Branding Agency boasts a team of creative experts with deep industry knowledge and a proven track record. We've successfully delivered top-notch branding, design, and marketing solutions to numerous clients. Our commitment to excellence and innovative thinking makes us a preferred choice."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "How does ICON approach branding and marketing?",
                                        "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "At ICON, we believe in the power of holistic branding and marketing strategies. We offer comprehensive solutions that integrate branding, design, and marketing to create a cohesive and effective brand presence. This approach ensures that your brand communicates a consistent message across various platforms."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Can ICON help with digital marketing in Abu Dhabi and other UAE regions?",
                                        "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Certainly! While we're based in Dubai, our digital marketing services extend across the UAE. We have experience working with clients in various regions, including Abu Dhabi. Our goal is to amplify your brand's online presence and drive tangible results."
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