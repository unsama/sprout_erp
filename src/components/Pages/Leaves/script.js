import DashboardController from "./../../partials/DashboardController/DashboardController.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            nextactivity: "Department Leaves",
            btnlinks: {
                createbtnlink:"/leaves/leaves_create",
                importbtnlink:"/leaves/leaves_import"
            },

            tabledata: {
                "row": {
                    "data": [
                        "Starting Inventory",
                        "01/28/2017 19:22:52",
                        "Validated",



                    ],
                    "url": "/#/app/sales/request_quotation_inner"

                },
                "row1": {
                    "data": [
                        "Starting Inventory",
                        "01/28/2017 19:22:52",
                        "Validated",



                    ],
                    "url": "/#/app/sales/request_quotation_inner"

                },
                "row2": {
                    "data": [
                        "Starting Inventory",
                        "01/28/2017 19:22:52",
                        "Validated",



                    ],
                    "url": "/#/app/sales/request_quotation_inner"

                },

            }
        }
    },


    components: {
        DashboardController,
    }
}