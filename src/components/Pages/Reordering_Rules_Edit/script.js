import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
    return {
        nextactivity: "Reordering Rules / OP/00001",
        btnlinks: {
            createbtnlink:"#/app/newuser",
            importbtnlink:"#/app/imported",
            discardbtnlink:"#/app/inventory/reordering_rules_table",
            savebtnlink:"#/app/inventory/reordering_rules_table"
        },
        tableheader: [
            "Name",
            "Product",
            "Minimum Quantity",
            "Maximum Quantity",



        ],
        tabledata: {
            "row": {
                "data": [
                    "OP/0001",
                    "[PROD_DEL02] Datacard",
                    "5.000",
                    "10.000",



                ],
                "url": "/#/app/inventory/reordering_rules_table"

            },
            "row1": {
                "data": [
                    "OP/0001",
                    "[PROD_DEL02] Datacard",
                    "5.000",
                    "10.000",



                ],
                "url": "/#/app/inventory/reordering_rules_table"

            },
            "row2": {
                "data": [
                    "OP/0001",
                    "[PROD_DEL02] Datacard",
                    "5.000",
                    "10.000",



                ],
                "url": "/#/app/inventory/reordering_rules_table"

            },

        }
    }
},


components: {
    DashboardController,
        TableMain
}
}