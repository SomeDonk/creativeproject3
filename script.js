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
        this.endinput = "";
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
        resist()
        {
            this.message = "";
            this.stage++;
        },
        scream()
        {
            this.message = "You've always been dangerously enamored by dogs like these, and now that their cuteness is lethal you don't stand a chance.";
            this.message += " This is the last image you saw before you blacked out."
            this.stage = -1;
        },
        knife()
        {
            this.message = "It's useless, you try to stab one of the dogs but you just can't bring yourself to do it.";
            this.message += " This is the last image you saw before you blacked out."
            this.stage = -1;
        },
        senses()
        {
            this.message = "";
            this.stage++;
        },
        endGame()
        {
            this.message = "\"" + this.endinput + "\"?? Are you serious? What were you thinking? Honestly though how did you even expect to be able to do anything with a blindfold on. Anyways, you try to \"" + this.endinput + "\" and in the process your blindfold comes off and you fail horribly. This is the last image you see before you black out.";
            this.stage = -1;
        },
        news()
        {
            this.message = "All the channels are dead, the dogs must have gotten to them. The power has been going out a lot lately as well.";
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
