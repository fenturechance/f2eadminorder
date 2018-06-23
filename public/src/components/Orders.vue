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

            </div>
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
        vanishDropDown() {
            this.$store.state.showFilterList = false;
        }
    }
}
</script>
<style lang="scss">

</style>


