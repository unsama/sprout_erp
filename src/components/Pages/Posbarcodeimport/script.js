import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Imported from "./../Imported/Imported.vue"

export default{
    created: function(){
        document.title = this.title;
        $(document).ready(function () {
            $("button.samosearchicon").click(function () {
                $(".samodropdownbutton2").toggle();
            });
        });
    },
    data(){
        return {
            head: "Barcode Nomenclatures / Import a File",
            btncancellink: {
                nextactivity: "Payment Methods / Import a File",
                cancelbtnlink:"/pointofsale/posbarcode",

            },

        }
    },

    components: {
        DashboardController,
        Imported
    }
}