<template>
    <div class="homeGroup">
        <div class="header">
            <div class="mainTitleGroup">
                <h2>OVERVIEW</h2>
            </div>
            <div class="fitlerGroup">
                <div class="dateGroup">
                    <span class="fromDate">2018/6/13</span>
                    <i class="fas fa-caret-right"></i>
                    <span class="endDate">2018/6/13</span>
                </div>
                <div class="datePeriod">
                    <dropdownList 
                        :toggle.sync="$store.state.showPeriodList" 
                        :list="periodList"
                        @clickLi="clickPeriodList"
                    >
                        <p slot="showContent" class="title">{{ nowPeriod }}</p>
                    </dropdownList>
                </div>
            </div>
        </div>
        <ul class="totalNumberGroup">
            <li class="card">
                <div class="titleGroup">
                    <i class="fas fa-hand-holding-usd"></i>
                    <h3>TOTAL REVENUE</h3>
                </div>
                <p class="number">54540</p>
            </li>
            <li class="card">
                <div class="titleGroup">
                    <i class="fas fa-toolbox"></i>
                    <h3>TOTAL COST</h3>
                </div>
                <p class="number">54540</p>
            </li>
            <li class="card">
                <div class="titleGroup">
                    <i class="fas fa-money-bill-alt"></i>
                    <h3>NET INCOME</h3>
                </div>
                <p class="number">54540</p>
            </li>
        </ul>
        <div class="activityDiagram card">
            <h3>Activity</h3>
            <div class="chart">
                <VeLine :data="chartData"></VeLine>
            </div>
        </div>
        <div class="bottomGroup">
            <div class="webGroup card">
                <h3>Transaction Website</h3>
                <ul>
                    <li v-for="web in webList" class="borderBottom">
                        <div class="leftGroup">
                            <i :class="web.icon"></i>
                            <p class="name">{{ web.name }}</p>
                        </div>
                        <div class="rightGroup">
                            <p class="number">{{ web.number }}</p>
                            <div class="scale" :class="web.scale">
                                <span>{{ web.porpotion }}%</span>
                                <i class="fas fa-long-arrow-alt-up" v-if="web.scale == 'increase'"></i>
                                <i class="fas fa-long-arrow-alt-down" v-else></i>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="latestOrderGroup card">
                <h3>Lastest Orders</h3>
                <ul>
                    <li v-for="order in orderList" class="borderBottom">
                        <div class="leftGroup">
                            <div class="pic" :style="{ backgroundImage : `url('${order.pic}')` }"></div>
                            <div class="infoGroup">
                                <h5>{{ order.name }}</h5>
                                <div class="timeGroup item">
                                    <i class="fas fa-clock"></i>
                                    <span>{{ order.time }}</span>
                                </div>
                                <div class="manGroup item">
                                    <i class="fas fa-male"></i>
                                    <span>{{ order.member }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="priceGroup">
                            <p>total</p>
                            <p class="price">{{ order.price }}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import VeLine from 'v-charts/lib/line.common'
export default {
    data() {
        return {
            periodList : [],
            emptyPeriodList : [
                { name : 'Daily', value : false },
                { name : 'Weekly', value : false },
                { name : 'Monthly', value : false },
                { name : 'Yearly', value : false },
                { name : 'Custom', value : false },
            ],
            webList: [
                {
                    name : 'facebook.com',
                    number : 45836,
                    porpotion : 20,
                    scale : 'increase',
                    icon : 'fab fa-facebook'
                },
                {
                    name : 'google.com',
                    number : 23582,
                    porpotion :12,
                    scale : 'increase',
                    icon : 'fab fa-google'
                },
                {
                    name : 'Shopify.com',
                    number : 2489,
                    porpotion :15,
                    scale : 'decrease',
                    icon : 'fas fa-shopping-bag'

                },
                {
                    name : 'Worldpress.com',
                    number : 1057,
                    porpotion :30,
                    scale : 'decrease',
                    icon : 'fab fa-wordpress'
                },
            ],
            orderList : [
                {
                    name : 'Vintage T-shirt',
                    time: '2018/06/13 13:42',
                    member : 'Belle Willis',
                    price : 3200,
                    pic : 'https://picsum.photos/1500/1000?image=0'
                },
                {
                    name : 'Cowboy Jacket',
                    time: '2018/06/13 10:45',
                    member : 'Andrian Cummings',
                    price : 2800,
                    pic : 'https://picsum.photos/1500/1000?image=1'
                },
                {
                    name : 'Coach Coat',
                    time: '2018/06/13 8:26',
                    member : 'Lura Holland',
                    price : 1600,
                    pic : 'https://picsum.photos/1500/1000?image=2'
                },
            ],
            chartData: {
                columns: ['date', 'Total revenue','Total cost','New Income'],
                rows: [
                    { 'date': '6 JUN', 'Total revenue': 1231 , 'Total cost': 7123 , 'New Income' :3123 },
                    { 'date': '7 JUN', 'Total revenue': 1223 , 'Total cost': 1231 , 'New Income' : 7123},
                    { 'date': '8 JUN', 'Total revenue': 2123 , 'Total cost': 1223 , 'New Income' : 1231},
                    { 'date': '9 JUN', 'Total revenue': 4123 , 'Total cost': 2123 , 'New Income' : 1223},
                    { 'date': '10 JUN', 'Total revenue': 3123 , 'Total cost':4123  , 'New Income' :2123 },
                    { 'date': '11 JUN', 'Total revenue': 7123 , 'Total cost': 3123 , 'New Income' : 4123 }
                ]
            }
        }
    },
    components: {
        VeLine
    },
    computed: {
        nowPeriod() {
            let text = '';
            this.periodList.map(period => { if(period.value) text = period.name; })
            return text;
        }
    },
    created() {
        this.periodList = this.emptyPeriodList;
        this.periodList[0].value = true;
    },
    methods: {
        clickPeriodList(i) {
            this.periodList = this.emptyPeriodList;
            this.periodList[i].value = true;
            this.$store.state.showPeriodList = false;
        },
    }
}
</script>
<style lang="scss">
    .homeGroup{
        .card{
            background-color: #fff;
            border-radius: 5px;
            padding: 20px;
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
        }
        li.borderBottom{
            border-bottom: 1px solid #ebebeb;
            &:last-child{
                border-bottom: none;
            }
        }
        .header{
            width: 100%;
            display: flex;
            justify-content: space-between;
            margin: 0 0 10px 0;
            .mainTitleGroup{

            }
            .fitlerGroup{
                display: flex;
                color: #9B9B9B;
                .dateGroup{
                    .fa-caret-right{
                        margin: 0 5px;
                        color: #000;
                    }
                }
                .datePeriod{
                    margin: 0 0 0 10px;
                }
            }
        }
        .totalNumberGroup{
            display: flex;
            justify-content: space-between;
            li{
                flex: 1;
                margin: 0 10px 0 0;
                text-align: center;
                &:last-child{
                    margin: 0;
                }
                .titleGroup{
                    display: flex;
                    width: 100%;
                    justify-content: center;
                    align-items: center;
                    i{
                        font-size: 20px;
                        margin: 0 10px 0 0;
                    }
                    h3{
                        font-size: 16px;
                    }
                }
                .number{
                    margin: 10px 0 0 0;
                    font-size: 28px;
                }
            }
        }
        .activityDiagram{
            margin: 10px 0;
        }
        .bottomGroup{
            display: flex;
            width: 100%;
            .card{
                flex: 1;
                margin: 0 10px 0 0;
                &:last-child{
                    margin: 0;
                }
            }
            .webGroup{
                ul{
                    li{
                        display: flex;
                        padding: 20px 0;
                        align-items: center;
                        justify-content: space-between;
                        .leftGroup{
                            display: flex;
                            align-items: center;
                            i{
                                font-size: 30px;
                            }
                            p.name{
                                margin: 0 0 0 10px;
                            }
                        }
                        .rightGroup{
                            display: flex;
                            p.number{
                                margin: 0 10px 0 0;
                            }
                            .scale{
                                &.increase{
                                    color: #7ED321;
                                }
                                &.decrease{
                                    color: #D0021B;
                                }
                            }
                        }
                    }
                }
            }
            .latestOrderGroup{
                ul{
                    li{
                        display: flex;
                        align-items: flex-end;
                        justify-content: space-between;
                        padding: 10px 0;
                        .leftGroup{
                            display: flex;
                            align-items:center; 
                            .pic{   
                                width: 100px;
                                height: 100px;
                                background-size: cover;
                                background-position: center;
                            }
                            .infoGroup{
                                margin: 0 10px;
                                display: flex;
                                flex-direction: column;
                                h5{
                                    font-size: 18px;
                                    margin: 0 0 5px 5px;
                                }
                                .item{
                                    display: flex;
                                    color: #9b9b9b;
                                    margin: 0 0 5px 0;
                                    i{
                                        color: #757575;
                                        width: 25px;
                                        text-align: center;
                                    }
                                }
                            }
                        }
                        .priceGroup{
                            text-align: right;
                            .price{
                                font-size: 20px;
                                font-weight: bold;
                            }
                        }
                    }
                }
            }
        }

    }
</style>

