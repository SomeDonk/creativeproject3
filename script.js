/*global Vue, moment, axios*/
Vue.component('star-rating', VueStarRating.default);

let app = new Vue(
{
    el: '#app',
    data:
    {
        stage: 0,
        message: "",
        current: {},
        img: "",
    },
    created()
    {
        this.getShibe();
        this.message = "";
    },
    computed:
    {
        month()
        {
            var month = new Array;
            if (this.current.month === undefined)
                return '';
            month[0] = "January";
            month[1] = "February";
            month[2] = "March";
            month[3] = "April";
            month[4] = "May";
            month[5] = "June";
            month[6] = "July";
            month[7] = "August";
            month[8] = "September";
            month[9] = "October";
            month[10] = "November";
            month[11] = "December";
            return month[this.current.month - 1];
        },
    },
    watch:
    {
        
    },
    methods:
    {
        sandwich()
        {
            console.log("in sandwich");
            this.message = "The dogs can smell your smelly sandwich smell.";
            this.message += " This is the last image you saw before you blacked out."
            this.stage = -1;
        },
        async getShibe()
        {
            try
            {
                this.loading = true;
                var myurl = "https://cors-anywhere.herokuapp.com";
                myurl += "/shibe.online/api/shibes";
                const response = await axios.get(myurl);
                this.current = response.data;
                this.img = this.current[0];
                this.loading = false;
                this.number = response.data.num;
            }
            catch (error)
            {
                this.number = this.max;
            }
        },
    }
});
