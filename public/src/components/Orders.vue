<template>
    <div class="orderGroup" @click="vanishDropDown">
        <div class="header">
            <div class="leftGroup">
                <dropdownList 
                    :toggle.sync="$store.state.showFilterList" 
                    :list="selectList"
                    @clickLi="clickSelectList"
                >
                    <checkbox slot="showContent" :selected="nowSelectFilter"></checkbox>
                </dropdownList> 
            </div>
            <div class="rightGroup">
                <dropdownList 
                    :list="selectionList"
                    @clickLi="clickSectionList"
                >
                    <p slot="showContent">EDIT SECTION</p>
                </dropdownList> 
            </div>
        </div>
        <div class="content">
            <table>
                <thead>
                    <tr>
                        <th v-for="selection in selectionList" v-if="selection.value">{{ selection.name }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="order in orderList">
                        <td v-for="(orderItem,key) in order" v-if="!['product','status'].includes(key)">{{ orderItem }}</td>
                        <td v-else-if="key == 'product'">
                            <ul>
                                <li v-for="product in orderItem" class="productIndfo">
                                    <p class="name">{{ product.name }}</p>
                                    <p class="price">{{ product.price }}</p>
                                </li>
                            </ul>
                        </td>
                        <td v-else-if="key == 'status'">
                            <button class="statusButton">{{ orderItem }}</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            nowSelectFilter : false,
            selectList: [],
            emptySelectList : [
                { name : 'Select All' , value : false },
                { name : 'Unselect All' , value : false },
                { name : 'Paid' , value : false },
                { name : 'Unpaid' , value : false },
                { name : 'Shipping' , value : false },
                { name : 'Done' , value : false },
            ],
            selectionList : [
                { name : 'Order Id' , value : false },
                { name : 'Customer' , value : true },
                { name : 'Product list' , value : true },
                { name : 'Total' , value : true },
                { name : 'Add to chart' , value : true },
                { name : 'Check-out' , value : true },
                { name : 'Address' , value : true },
                { name : 'Phone' , value : false },
                { name : 'Email' , value : false },
                { name : 'Status' , value : true },
            ],
            orderList: [
                { 
                    name : 'Ian' , 
                    product : [{ name : 'vest' , price : 1400 },{ name : 'fusce' , price : 800 }],
                    total : 2200,
                    chartTime : '2018/06/08 13:390',
                    checkTime : '2018/06/08 13:390',
                    address : 'Winder Drives',
                    status : 'Paid'
                },
                { 
                    name : 'Ian' , 
                    product : [{ name : 'vest' , price : 1400 },{ name : 'fusce' , price : 800 }],
                    total : 2200,
                    chartTime : '2018/06/08 13:390',
                    checkTime : '2018/06/08 13:390',
                    address : 'Winder Drives',
                    status : 'Paid'
                },
                { 
                    name : 'Ian' , 
                    product : [{ name : 'vest' , price : 1400 },{ name : 'fusce' , price : 800 }],
                    total : 2200,
                    chartTime : '2018/06/08 13:390',
                    checkTime : '2018/06/08 13:390',
                    address : 'Winder Drives',
                    status : 'Paid'
                },
            ]
        }
    },
    computed: {
        nowSelectFilterContent() {
            let text = '';
            this.selectList.map(select => { if(select.value) text = select.name; })
            return text;
        }
    },
    created() {
        this.selectList = this.emptySelectList;
        this.selectList[0].value = true;
    },
    methods: {
        clickSelectList(i) {
            this.selectList = this.emptySelectList;
            this.selectList[i].value = true;
            this.$store.state.showFilterList = false;
        },
        clickSectionList(i) {
            this.selectionList[i].value = !this.selectionList[i].value;
        },
        vanishDropDown() {
            this.$store.state.showFilterList = false;
        }
    }
}
</script>
<style lang="scss">
    .orderGroup{
        .header{
            display: flex;
            justify-content: space-between;
            .dropdownListGroup{
                .listStyle{
                    left: 0;
                    right: auto;
                }
            }
        }
        .content{
            table{
                tbody{
                    li.productIndfo{
                        padding: 5px 0;
                        p.price{
                            font-size: 12px;
                            color: #9b9b9b
                        }
                    }
                }
            }
        }
    }
</style>


