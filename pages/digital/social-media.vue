<template>
    <div class="pb-16">

        <div class="w-full px-[5%] pt-8 md:pt-20 space-y-12">
            
            <div class="flex items-center flex-wrap lg:flex-nowrap lg:space-x-10 space-y-5 lg:space-y-0">
                <div class="w-full">
                    <div class="space-y-10 py-5 h-full flex flex-col justify-center lg:pr-16">
                        <div class="space-y-5 pt-6 md:pt-0">
                            <div class="space-y-4">
                                <h1 class="text-3xl md:text-4xl 3xl:text-6xl font-semibold">Looking for a Social Media Creative Ads Agency in Dubai? <br> <span class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-theme-sky via-theme-purple to-theme-pink"> Explore ICON </span>   </h1>
                                <h2 class="font-semibold bg-gray-100 text-base md:text-lg p-3 rounded-2xl"> 
                                    Boost Sales & Generate Leads by Dubai's Social Media Marketing Experts
                                </h2>
                            </div>
                            <div class="text-base lg:text-sm xl:text-base space-y-3">
                                <p>We are an experienced Dubai-based digital marketing and social media agency specialized in delivering tailor-made social media and digital marketing plans. Our strategies are aligned with the demands of Dubai's marketplace. We assure enhanced engagement with your brand’s target audiences, strengthened customer loyalties, and most importantly, a higher return on investment (ROI) within Dubai and the wider region.</p>
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
                                video-id="832538706"
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
                    <P>We understand that our clients' success is our success, <br> and we're proud to be a part of their story.</P>
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
                                Dynamic Team of <br> 45+ In-House Experts.
                            </p>
                        </div>
                        <div class="space-y-4">
                            <p>
                                With over 15 years in the industry, ICON excels in Dubai's competitive social media scene. Our in-house team masters digital marketing strategies, design expertise, and e-digital marketing, integrating seamlessly as a social media company in Dubai, Abu Dhabi, and the whole UAE.
                            </p>
                            <p>
                                We shine as a standout among marketing agencies. We're not just another digital marketing company; we're a conduit for success. Crafting campaigns that transcend, we utilize insights from advertising agencies in the UAE, setting new standards.
                            </p>
                        </div>
                        <div>
                            <div class="flex items-center space-x-2 ">
                                <a href="#contact" class="bg-gradient-to-r from-theme-purple to-theme-red py-2 md:py-2.7 px-5 text-white capitalize font-semibold rounded-lg flex items-center justify-center inline-block">Let's Connect</a>
                                <!-- <a href="tel:+97142636550" class="px-4 lg:px-5 3xl:px-8 py-3 border-2 border-gray-800 rounded-lg bg-gray-800 hover:bg-transparent text-gray-100 hover:text-gray-900 transition-all flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>
                                    <span>Call</span>
                                </a>
                                <a href="https://wa.me/+971564034019" class="whitespace-nowrap svg-color-white px-4 lg:px-5 3xl:px-8 py-3 border-2 border-gray-800 rounded-lg bg-gray-800 hover:bg-transparent text-gray-100 hover:text-gray-900 transition-all flex items-center space-x-2">
                                    <svg class="w-5 h-5" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 308 308" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_468_"> <path id="XMLID_469_" d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156 c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687 c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887 c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153 c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348 c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802 c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922 c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0 c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458 C233.168,179.508,230.845,178.393,227.904,176.981z"></path> <path id="XMLID_470_" d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716 c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396 c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188 l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867 C276.546,215.678,222.799,268.994,156.734,268.994z"></path> </g> </g></svg>                                
                                    <span class="whitespace-nowrap block">Whatsapp</span>
                                </a> -->
                            </div>
                        </div>
                    </div>

                </div>
                <div class="w-full 2xl:w-1/2">

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div label="Trumpet" class="w-full lg:w-72 xl:w-96 lg:ml-auto group space-y-6 border p-5 rounded-2xl duration-400 hover:shadow-2xl hover:shadow-theme-red/30 transition-all">
                            <p class="text-lg font-semibold h-14 group-hover:text-theme-red">Content Calendars and Content Strategy</p>        
                            <div class="space-y-4 text-sm">
                                <p>
                                    At ICON Digital, we're not just a social media company; we're your partner in crafting compelling social narratives across platforms like Facebook, Instagram, TikTok, Snapchat, Twitter, and YouTube. Our adept team of content creators and strategists, seasoned in digital marketing, design, and branding, ensures your social media channels are a canvas of high-quality, engaging content. With a meticulous content calendar and strategic prowess, we infuse your brand with a distinctive voice that resonates on every platform. Elevate your social presence with ICON, the best digital marketing agency in the UAE.                                </p>
                            </div>            
                        </div>
                        <!-- #item -->
                        
                        <div class="w-full lg:w-72 xl:w-96 lg:mr-auto group space-y-6 border p-5 rounded-2xl duration-400 hover:shadow-2xl hover:shadow-theme-purple/30 transition-all">
                            <p class="text-lg font-semibold h-14  group-hover:text-theme-purple">Community Management</p>        
                            <div class="space-y-4 text-sm">
                                <p>
                                    ICON's community management is a social media cornerstone. Drawing from expertise in digital marketing, design, and e-marketing, we engage your audience across platforms like Facebook, Instagram, TikTok, Snapchat, Twitter, and YouTube. Collaborating with the best digital marketing agency in the UAE, we infuse your brand's voice to foster meaningful interactions. ICON is where digital marketing meets design finesse, curating an engaging narrative that resonates and stands out. Join us in redefining the landscape. ICON is your partner in digital marketing excellence.
                                </p>
                            </div>            
                        </div>
                        <!-- #item -->

                        <div class="w-full lg:w-72 xl:w-96 lg:ml-auto group space-y-6 border p-5 rounded-2xl duration-400 hover:shadow-2xl hover:shadow-theme-sky/30 transition-all">
                            <p class="text-lg font-semibold h-14 group-hover:text-theme-sky">Paid Media</p>        
                            <div class="space-y-4 text-sm">
                                <p>
                                    We excel as a digital marketing agency in Dubai, crafting paid media campaigns that resonate. With a touch of innovation from our design agency in the UAE, we ensure your brand stands out. As a top social media company in Dubai, we harness the power of Facebook, Instagram, TikTok, Snapchat, Twitter, and YouTube. Our expertise as the best digital marketing agency in the UAE ensures that your message reaches the right audience precisely on time. From concept to execution, our advertising agency in the UAE creates compelling ads, optimized for a strong ROI.
                                </p>
                            </div>            
                        </div>
                        <!-- #item -->

                        <div class="w-full lg:w-72 xl:w-96 lg:mr-auto group space-y-6 border p-5 rounded-2xl duration-400 hover:shadow-2xl hover:shadow-theme-pink/30 transition-all">
                            <p class="text-lg font-semibold h-14 group-hover:text-theme-pink">Campaign Performance Reporting</p>        
                            <div class="space-y-4 text-sm">
                                <p>
                                    At our prestigious Dubai marketing company, we master Campaign Performance Reporting. Seamlessly aligning with our design agency, our expertise spans platforms like Facebook, Instagram, TikTok, Snapchat, Twitter, and YouTube. We delve into intricate metrics—CPC, CPA, Reach, Impressions, KPI, and conversions—setting us apart as the best digital marketing agency in the UAE. In the era of e-digital marketing, ICON is your partner for data-driven decisions that redefine success, from Dubai's marketing agencies to unparalleled achievement.
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
            <carousel v-if="isNuxtReady" :nav="false" :dots="false" :items="3" :autoplay="true" :margin="20" :autoWidth="true" :loop="true">

                <div class="w-[400px] relative rounded-2xl overflow-hidden group">
                    <img src="https://icon-ad.com/assets/digital/1/1.webp" alt="slider 2" class="h-full">
                    <div class="ani-list absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.9)] via-[rgba(0,0,0,0.7)] flex items-end opacity-0 group-hover:opacity-100 transition-all duration-300">                    
                        <div class="text-white p-5 w-full space-y-5">
                            <h3 class="ani-list-child font-semibold text-xl opacity-0 group-hover:opacity-100 transition-all duration-300">Continental Tires</h3>
                            <ul class="w-full text-lg opacity-[0.8]">
                                <li>
                                    <span class="mr-2 inline-block">Reach:</span>
                                    <span class="text-center inline-block">7M</span>
                                </li>
                                <li>
                                    <span class="mr-2 inline-block">Impressions: </span>
                                    <span class="text-center inline-block">9M</span>
                                </li>
                                <li>
                                    <span class="mr-2 inline-block">Traffic: </span>
                                    <span class="text-center inline-block">9K</span>
                                </li>
                                <li>
                                    <span class="mr-2 inline-block">Followers growth: </span>
                                    <span class="text-center inline-block">23%</span>
                                </li>
                                <li>
                                    <span class="mr-2 inline-block">Leads: </span>
                                    <span class="text-center inline-block">600+</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="w-[400px] relative rounded-2xl overflow-hidden group">
                    <img src="https://icon-ad.com/assets/digital/1/2.webp" alt="slider 3" class="h-full">
                    <div class="ani-list absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.9)] via-[rgba(0,0,0,0.7)] flex items-end opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div class="text-white p-5 w-full space-y-5">
                            <h3 class="ani-list-child font-semibold text-xl opacity-0 group-hover:opacity-100 transition-all duration-300">Suzuki</h3>
                            <ul class="w-full text-lg opacity-[0.8]">
                                <li>
                                    <span class="mr-2 inline-block">Reach:</span>
                                    <span class="text-center inline-block">3M</span>
                                </li>
                                <li>
                                    <span class="mr-2 inline-block">Impressions:</span>
                                    <span class="text-center inline-block">4M</span>
                                </li>
                                <li>
                                    <span class="mr-2 inline-block">Traffic: </span>
                                    <span class="text-center inline-block">15K</span>
                                </li>
                                <li>
                                    <span class="mr-2 inline-block">Followers growth: </span>
                                    <span class="text-center inline-block">19%</span>
                                </li>
                                <li>
                                    <span class="mr-2 inline-block">Leads: </span>
                                    <span class="text-center inline-block">1000+</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="w-[400px] relative rounded-2xl overflow-hidden group">
                    <img src="https://icon-ad.com/assets/digital/1/3.webp" alt="slider 1" class="h-full">
                    <div class="ani-list absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.9)] via-[rgba(0,0,0,0.7)] flex items-end opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div class="text-white p-5 w-full space-y-5">
                            <h3 class="ani-list-child font-semibold text-xl opacity-0 group-hover:opacity-100 transition-all duration-300">Ballers</h3>
                            <ul class="w-full text-lg opacity-[0.8]">
                                <li>
                                    <span class="mr-2 inline-block">Reach:</span>
                                    <span class="text-center inline-block">900K</span>
                                </li>
                                <li>
                                    <span class="mr-2 inline-block">Impressions: </span>
                                    <span class="text-center inline-block">1.1M</span>
                                </li>
                                <li>
                                    <span class="mr-2 inline-block">Traffic: </span>
                                    <span class="text-center inline-block">500</span>
                                </li>
                                <li>
                                    <span class="mr-2 inline-block">Followers growth: </span>
                                    <span class="text-center inline-block">15%</span>
                                </li>
                                <li>
                                    <span class="mr-2 inline-block">Leads: </span>
                                    <span class="text-center inline-block">300+</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="w-[400px] relative rounded-2xl overflow-hidden group">
                    <img src="https://icon-ad.com/assets/digital/1/4.webp" alt="slider 1" class="h-full">
                    <div class="ani-list absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.9)] via-[rgba(0,0,0,0.7)] flex items-end opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div class="text-white p-5 w-full space-y-5">
                            <h3 class="ani-list-child font-semibold text-xl opacity-0 group-hover:opacity-100 transition-all duration-300">
                                Geeks Express 
                                <br>
                                In partnership with Apple
                            </h3>
                            <ul class="w-full text-lg opacity-[0.8]">
                                <li>
                                    <span class="mr-2 inline-block">Reach:</span>
                                    <span class="text-center inline-block">2M</span>
                                </li>
                                <li>
                                    <span class="mr-2 inline-block">Impressions: </span>
                                    <span class="text-center inline-block">3.5M</span>
                                </li>
                                <li>
                                    <span class="mr-2 inline-block">Traffic: </span>
                                    <span class="text-center inline-block">3K</span>
                                </li>
                                <li>
                                    <span class="mr-2 inline-block">Leads: </span>
                                    <span class="text-center inline-block">250+</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="w-[400px] relative rounded-2xl overflow-hidden group">
                    <img src="https://icon-ad.com/assets/digital/1/5.webp" alt="slider 1" class="h-full">
                    <div class="ani-list absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.9)] via-[rgba(0,0,0,0.7)] flex items-end opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div class="text-white p-5 w-full space-y-5">
                            <h3 class="ani-list-child font-semibold text-xl opacity-0 group-hover:opacity-100 transition-all duration-300">Dubai Municipality</h3>
                            <ul class="w-full text-lg opacity-[0.8]">
                                <li>
                                    <span class="mr-2 inline-block">Reach:</span>
                                    <span class="text-center inline-block">1.8M</span>
                                </li>
                                <li>
                                    <span class="mr-2 inline-block">Impressions: </span>
                                    <span class="text-center inline-block">5.9M</span>
                                </li>
                                <li>
                                    <span class="mr-2 inline-block">Traffic: </span>
                                    <span class="text-center inline-block">18.5</span>
                                </li>
                                <li>
                                    <span class="mr-2 inline-block">Leads: </span>
                                    <span class="text-center inline-block">200+</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


            </carousel>
            <!-- carousel end -->

        </div>


        <!-- component -->

        <!-- Testimonials -->
        <div class="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center py-5">
            <div class="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-32">
                <div class="w-full max-w-6xl mx-auto space-y-10">
                    <div class="text-center max-w-xl mx-auto">
                        <p  class="mb-4 text-2xl lg:text-3xl font-bold">
                            What people <br>are saying.
                        </p>
                    </div>
                    <div class="testimonials">

                        <carousel v-if="isNuxtReady" :nav="false" :dots="true" :items="1" :autoplay="true" :margin="0" :autoWidth="false" :loop="false">

                                <div class="w-full mx-auto rounded-2xl bg-gray-100 h-auto lg:h-96 flex flex-col justify-center space-y-10 p-10 text-gray-800">
                                    <div class="w-full">
                                        <p class="text-center text-lg"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Working with ICON was a game-changer. Their creativity and commitment brought our brand to new heights. We rely on their comprehensive services and trust their reliability for all our marketing needs. ICON's social media agency in Dubai is unmatched, and their expertise in content creation and management is evident in every project they undertake.<span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                    </div>
                                    <div class="w-full flex mb-4 items-center text-center">
                                        <div class="flex-grow pl-3">
                                            <nuxt-link to="/digital/projects/continental-social-media" class="font-semibold text-gray-600 hover:underline">
                                                Sales & Marketing Manager at Suzuki Cars UAE
                                            </nuxt-link>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full mx-auto rounded-2xl bg-gray-100 h-auto lg:h-96 flex flex-col justify-center space-y-10 p-10 text-gray-800">
                                    <div class="w-full">
                                        <p class="text-center text-lg"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>ICON marketing and advertising agency exceeded our expectations with their creative approach, delivering outstanding results. Their commitment and devotion to our projects were commendable. We trust their reliable services, making them an integral part of our marketing strategy. As a leading digital marketing agency in Dubai, ICON's innovative ideas and strategic approach have yielded remarkable results. Their dedication and reliability make them our go-to agency for impactful social media marketing campaigns.<span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                    </div>
                                    <div class="w-full flex mb-4 items-center text-center">
                                        <div class="flex-grow pl-3">
                                            <nuxt-link to="/digital/projects/continental-tires-b2b-digital-solutions" class="font-semibold text-gray-600 hover:underline">
                                                Digital Marketing Manager at Continental Tires Middle East
                                            </nuxt-link>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full mx-auto rounded-2xl bg-gray-100 h-auto lg:h-96 flex flex-col justify-center space-y-10 p-10 text-gray-800">
                                    <div class="w-full">
                                        <p class="text-center text-lg"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span> ICON's innovative ideas and strategic approach have yielded remarkable results. Their dedication and reliability make them our go-to agency for impactful marketing campaigns. Among the top digital marketing companies in Dubai, ICON's creative and results-driven approach brought us success. Their devotion and professionalism make them a trusted marketing partner. We highly recommend ICON for its outstanding services and effective brand marketing strategies.<span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                    </div>
                                    <div class="w-full flex mb-4 items-center text-center">
                                        <div class="flex-grow pl-3">
                                            <nuxt-link to="/digital/projects/noon-daily-grocery" class="font-semibold text-gray-600 hover:underline">
                                                Creative Manager at Noon Groceries
                                            </nuxt-link>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full mx-auto rounded-2xl bg-gray-100 h-auto lg:h-96 flex flex-col justify-center space-y-10 p-10 text-gray-800">
                                    <div class="w-full">
                                        <p class="text-center text-lg"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Choosing ICON was the best decision for our business. Their creativity and attention to detail transformed our brand's image. We trust their reliability and highly recommend them for results-driven marketing. ICON's expertise in managing Meta ads, Instagram ads, and even TikTok ads is evident in the remarkable impact they've had on our campaigns.<span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                    </div>
                                    <div class="w-full flex mb-4 items-center text-center">
                                        <div class="flex-grow pl-3">
                                            <nuxt-link to="/digital/projects/citroen-social-media" class="font-semibold text-gray-600 hover:underline">
                                                Sales & Marketing Manager - Citroen UAE
                                            </nuxt-link>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full mx-auto rounded-2xl bg-gray-100 h-auto lg:h-96 flex flex-col justify-center space-y-10 p-10 text-gray-800">
                                    <div class="w-full">
                                        <p class="text-center text-lg"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>ICON's creativity and innovation set us apart. Their commitment and reliability make them an invaluable asset. We rely on their services and couldn't be happier with our partnership. With expertise in managing low CPCs in advertising and optimizing brand awareness and reach on platforms like Facebook, ICON has helped us achieve remarkable results.<span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                    </div>
                                    <div class="w-full flex mb-4 items-center text-center">
                                        <div class="flex-grow pl-3">
                                            <nuxt-link to="/digital/projects/ballers-social-media-campaign" class="font-semibold text-gray-600 hover:underline">
                                                Managing Director at Ballers Sports Academy
                                            </nuxt-link>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full mx-auto rounded-2xl bg-gray-100 h-auto lg:h-96 flex flex-col justify-center space-y-10 p-10 text-gray-800">
                                    <div class="w-full">
                                        <p class="text-center text-lg"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>ICON's creative and results-driven approach brought us success. Their devotion and professionalism make them a trusted marketing partner. We highly recommend ICON for its outstanding services. Their proficiency in utilizing platforms like LinkedIn and Twitter for campaigns is impressive, making them stand out among the many ad agencies in Dubai.<span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                    </div>
                                    <div class="w-full flex mb-4 items-center text-center">
                                        <div class="flex-grow pl-3">
                                            <nuxt-link to="/digital/projects/dubai-municipality-front-yard-competition" class="font-semibold text-gray-600 hover:underline">
                                                Marketing & Communications Officer at Dubai Municipality
                                            </nuxt-link>
                                        </div>
                                    </div>
                                </div>
                        </carousel>

                    </div>
                </div>
            </div>
        </div>
        <!-- Testimonials -->

       

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
                            How can I effectively promote my product on social media?
                        </h4>
                        </div>
                    </button>
                    <div v-show="openFaq1" class="faq-content pl-[62px]">
                        <p class="py-3 text-base leading-relaxed text-body-color">
                            At ICON, we specialize in crafting tailor-made social media strategies to promote your product effectively. Our experienced team ensures your brand stands out in Dubai's competitive marketplace, driving engagement and generating results.
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
                        What exactly is social media marketing?
                    </h4>
                    </div>
                </button>
                <div v-show="openFaq4" class="faq-content pl-[62px]">
                    <p class="py-3 text-base leading-relaxed text-body-color">
                        Social media marketing involves leveraging platforms like Facebook, Instagram, TikTok, and more to promote your brand, engage with your audience, and achieve specific business goals. ICON's expertise lies in creating and executing strategies tailored to your brand's unique needs, ensuring you capture the essence of Dubai's market demands.
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
                            What's the difference between social media marketing and digital marketing?
                        </h4>
                        </div>
                    </button>
                    <div v-show="openFaq2" class="faq-content pl-[62px]">
                        <p class="py-3 text-base leading-relaxed text-body-color">
                            Social media marketing is a subset of digital marketing, focusing on platforms like Facebook, Instagram, TikTok, LinkedIn, Twitter, and Snapchat. Digital marketing encompasses a broader range of online strategies. At ICON, we excel in both areas, ensuring your brand gets the right exposure across various platforms.
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
                            Why do I need social media marketing for my brand?
                        </h4>
                        </div>
                    </button>
                    <div v-show="openFaq5" class="faq-content pl-[62px]">
                        <p class="py-3 text-base leading-relaxed text-body-color">
                            Social media marketing is an essential tool to enhance your brand's reach and impact. At ICON, we understand the value of customer loyalty, engagement, and return on investment (ROI). Our strategies not only align with your brand's voice and values but also cater to the demands of Dubai's competitive landscape, ensuring your brand thrives and stands out.

                        </p>
                    </div>
                </div>
                </div>
                <div class="w-full px-4 lg:w-1/2">
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
                                Can you share insights about social media <br class="hidden md:block"> posts?
                            </h4>
                            </div>
                        </button>
                        <div v-show="openFaq3" class="faq-content pl-[62px]">
                            <p class="py-3 text-base leading-relaxed text-body-color">
                                Absolutely! Our dynamic team of in-house experts at ICON knows the art of creating compelling social media posts. We're experienced in formulating content calendars and strategies that guarantee high-quality, engaging posts, driving results and boosting your digital presence.
                            </p>
                        </div>
                    </div>

                </div>
                <div class="w-full px-4 lg:w-1/2">
                    <div class="single-faq mb-8 w-full rounded-lg border border-gray-200 bg-white p-4 sm:p-8 lg:px-6 xl:px-8">
                        <button
                            class="faq-btn flex w-full text-left"
                            @click="openFaq6 = !openFaq6"
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
                                What Role Does Social Media Play in B2B Lead Generation?
                            </h4>
                            </div>
                        </button>
                        <div v-show="openFaq6" class="faq-content pl-[62px]">
                            <p class="py-3 text-base leading-relaxed text-body-color">
                                Social Media Marketing is pivotal in B2B lead generation. It establishes credibility, trust, and recognition, making your business memorable. As a leading marketing company in Dubai, our digital marketing agency employs strategic branding to boost B2B lead generation. Partnering with us means leveraging design excellence, e-digital marketing, and social media mastery. Our expertise extends across platforms like Google, Facebook, Instagram, TikTok, Snapchat, Twitter, and YouTube. Through cohesive branding and targeted social media strategies, we are the driving force that transforms prospects into valuable leads, setting you ahead in the competitive landscape.
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
                            <p class="text-3xl 3xl:text-4xl font-semibold">Why Choose ICON for Social Media Services?</p>
                            <!-- <h2 class="text-3xl font-semibold">Partner with Us for Tailored <br> Strategies and Results!</h2> -->
                        </div>
                        <div class="space-y-4 text-base lg:text-sm xl:text-base">
                            <ul class="list-disc space-y-2 ml-5">
                                <li><b>Expertise Across Social Media:</b> ICON excels in leveraging the power of social media platforms such as Facebook, Instagram, Snapchat, YouTube and Twitter. </li>
                                <li><b>Strategic Paid Media and PPC Campaigns:</b> ICON boasts a stellar track record in designing and executing paid media and Pay-Per-Click (PPC) campaigns. We align your campaigns with your business goals.</li>
                                <li><b>Creative Design and Visual Storytelling:</b> ICON offers top-notch e-design services, including logo design, branding, and creative content creation. We craft visually stunning graphics and content that resonate with your audience.</li>
                                <li><b>Complete Social Media Services:</b> ICON stands out as a 360 digital marketing agency in Dubai, providing end-to-end social media solutions. From content creation to community management, manage every aspect of  social media.</li>
                            </ul>
                        </div>
                        <div class="flex items-center space-x-2">
                            <a href="#contact" class="bg-gradient-to-r from-theme-purple to-theme-red py-2 md:py-2.7 px-5 text-white capitalize font-semibold rounded-lg flex items-center justify-center inline-block">Let's Connect</a>                            
                        </div>
                    </div>

                </div>
                <div class="w-full relative ">
                    <FormsLandingForm type="Social Media Landing Page" :isBudget="true" />
                </div>
            </div>
        </div>
        
        


        <div class="landing-container">
            <img src="https://icon-ad.com/assets/partners.png" class="w-4/5 mx-auto pt-20 pb-10" alt="ICON Partners">
        </div>

        <a target="_blank" href="https://wa.me/+971564034019" style="box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 16px;" class="block hover:scale-[1.1] transition-all whatsapp w-14 h-14 p-3 text-white rounded-full bg-green-500 fixed right-8 bottom-10 cursor-pointer z-50">
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
                    title: 'Top Social Media Creative Ads Agency in Dubai & Abu Dhabi - ICON',
                    meta: [
                        { charset: 'utf-8' },
                        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                        {
                            hid: 'description',
                            name: 'description',
                            content: 'Leading Dubai creative agency offering digital social media marketing expertise including Facebook, Instagram, Snapchat, and TikTok Ads to elevate your business.'
                        }
                    ],
                    link: [
                        {
                        rel: 'canonical',
                        href: 'https://icon-ad.com/digital/social-media',
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
                                        "name": "What Role Does Social Media Play in B2B Lead Generation?",
                                        "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Social Media Marketing is pivotal in B2B lead generation. It establishes credibility, trust, and recognition, making your business memorable. As a leading marketing company in Dubai, our digital marketing agency employs strategic branding to boost B2B lead generation. Partnering with us means leveraging design excellence, e-digital marketing, and social media mastery. Our expertise extends across platforms like Google, Facebook, Instagram, TikTok, Snapchat, Twitter, and YouTube. Through cohesive branding and targeted social media strategies, we are the driving force that transforms prospects into valuable leads, setting you ahead in the competitive landscape."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "How can I effectively promote my product on social media?",
                                        "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "At ICON, we specialize in crafting tailor-made social media strategies to promote your product effectively. Our experienced team ensures your brand stands out in Dubai's competitive marketplace, driving engagement and generating results."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "What's the difference between social media marketing and digital marketing?",
                                        "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Social media marketing is a subset of digital marketing, focusing on platforms like Facebook, Instagram, TikTok, LinkedIn, Twitter, and Snapchat. Digital marketing encompasses a broader range of online strategies. At ICON, we excel in both areas, ensuring your brand gets the right exposure across various platforms."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Can you share insights about social media posts?",
                                        "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Absolutely! Our dynamic team of in-house experts at ICON knows the art of creating compelling social media posts. We're experienced in formulating content calendars and strategies that guarantee high-quality, engaging posts, driving results and boosting your digital presence."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "What exactly is social media marketing?",
                                        "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Social media marketing involves leveraging platforms like Facebook, Instagram, TikTok, and more to promote your brand, engage with your audience, and achieve specific business goals. ICON's expertise lies in creating and executing strategies tailored to your brand's unique needs, ensuring you capture the essence of Dubai's market demands."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Why do I need social media marketing for my brand?",
                                        "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Social media marketing is an essential tool to enhance your brand's reach and impact. At ICON, we understand the value of customer loyalty, engagement, and return on investment (ROI). Our strategies not only align with your brand's voice and values but also cater to the demands of Dubai's competitive landscape, ensuring your brand thrives and stands out."
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