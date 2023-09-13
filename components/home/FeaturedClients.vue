<template>
    <div>
        <div class="md:space-y-20">
            
        <div class="space-y-10">

            <div class="section-title font-bold">
                <span class="block">Our</span>
                <span class="block">Clients</span>
            </div>

            <ul class="flex items-center gap-5 overflow-x-auto no-scroll-bar min-w-full">
                <li v-for="(industry, i) in industries" :key="i" v-if="industry != ''">
                    <button @click="selectIndustry(industry)" :class="selectedIndustry !== industry ? 'bg-stone-700 bg-opacity-75' : 'rainbow-border-1'" class="rounded-full p-[1px] group overflow-hidden inline-block">
                        <span class="bg-black inline-block text-white rounded-full px-8 py-1 text-sm group-hover:text-white group-hover:bg-transparent whitespace-nowrap">{{ industry }}</span>
                    </button>    
                </li>
            </ul>
        </div>

        <div class="flex flex-wrap items-center">
            <!-- Only show clients from the selected industry -->
            <div class="w-1/2 md:w-1/4" v-for="(client, i) in selectedClients" :key="i">
                <UtilsProjectImage :options="`object-contain h-48 p-1 w-full`" :mini="client.image_mini_white" :image="client.white_logo" />
            </div>            
        </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            clients: [],
            clientData: {},
            industries: [],
            selectedIndustry: null  // This will be updated after fetching the data.
        };
    },
    computed: {
        selectedClients() {
            // Return the clients for the selected industry
            return this.selectedIndustry ? this.clientData[this.selectedIndustry] : [];
        }
    },
    async mounted() {
        try {
            const response = await this.$axios.$get('/featured-clients');
            this.clients = response;
            this.transformData(response);
            
            // Set the first industry as selected by default
            if (this.industries.length > 0) {
                this.selectedIndustry = this.industries[0];
            }
        } catch (error) {
            console.error("Error fetching clients data:", error);
        }
    },
    methods: {
        transformData(data) {
            let transformedData = {};
            let uniqueIndustries = new Set();  

            data.forEach(item => {
                if (item.related_data !== null) {
                    if (!transformedData[item.industry]) {
                        transformedData[item.industry] = [];
                    }
                    transformedData[item.industry].push(item);

                    uniqueIndustries.add(item.industry);  
                }
            });

            this.clientData = transformedData;
            this.industries = [...uniqueIndustries];
        },
        selectIndustry(industry) {
            this.selectedIndustry = industry;
        }
    }
};
</script>
