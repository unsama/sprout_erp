import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Pivot from "./../../partials/Pivot/Pivot.vue"
import Imported from "./../Imported/Imported.vue"

export default{
    created: function(){
        document.title = this.title;
        $(function(){
            $('.samobuttopcontroller2').off('click');
            $('.samobuttopcontroller2').on('click', function () {
                let check = $('#customerform').css("display");
                if(check == "none"){
                    $('#customerform').show();
                    $('#customeredit').hide();
                }else{
                    $('#customerform').hide();
                    $('#customeredit').show();
                }

            });

            $("button.samosearchicon").click(function () {
                $(".samodropdownbutton2").toggle();
            });
        });
    },
    data () {
    return {
        nextactivity: "Manufacturing Orders",
        title: "Manufacturing Orders - Sprout",
        btnlinks: {
            createbtnlink: "#/app/sales/salescustomercreate",
            discardbtnlink: "#/app/sales/salescustomeredit",
            importbtnlink: "#/app/sales/salesofinvoiceimport",
            cancelbtnlink: "#/app/sales/salesofinvoices",
        },
    }
},
components: {
    DashboardController,
        Imported,
        Pivot
}
}