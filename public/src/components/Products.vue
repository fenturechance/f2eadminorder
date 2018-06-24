<template>
    <div class="productGroup">
        <div class="header">
            <div class="leftGroup">
                <dropdownList>
                    <checkbox slot="showContent"></checkbox>
                </dropdownList> 
            </div>
            <div class="rightGroup">
                <button>
                    <span>Add New Product</span>
                    <i class="fas fa-plus"></i>
                </button>
            </div>
        </div>
        <div class="content">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th v-for="item in productItem">{{ item }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in productList">
                        <td>
                            <checkbox></checkbox>
                        </td>
                        <td>
                            <div class="pic" :style="{backgroundImage: `url('${product.pic}')`}"></div>
                            <p>{{ product.name }}</p>
                        </td>
                        <td>
                            <p>{{ product.original }}</p>
                        </td>
                        <td>
                            <p>{{ product.discount }}</p>
                        </td>
                        <td class="size">
                            <ul>
                                <li v-for="(inven,key) in product.inventory">{{ key }}</li>
                            </ul>
                        </td>
                        <td class="color">
                            <ul v-for="(inven,key) in product.inventory">
                                <li v-for="(price,color) in inven">{{ color }}</li>
                            </ul>
                        </td>
                        <td class="inventory">
                            <ul v-for="(inven,key) in product.inventory">
                                <li v-for="(price,color) in inven">{{ price }}</li>
                            </ul>
                        </td>
                        <td>
                            <button>{{ product.status }}</button>
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
            productItem: ['Product','Original','Discount','Size','Color','Inventory','Status'],
            productList : [
                {
                    click : false,
                    name : 'Mauris',
                    original : 3200,
                    discount : 2800,
                    inventory : {
                        L : {
                            Gray : 15,
                            Black : 20
                       },
                        M : {
                            Gray : 15,
                            Black : 20
                       },
                        S : {
                            Gray : 15,
                            Black : 20
                       },
                    },
                    pic : 'https://picsum.photos/1500/1000?image=1',
                    status : 'publish'
                },
                {
                    click : false,
                    name : 'Mauris',
                    original : 3200,
                    discount : 2800,
                    inventory : {
                        L : {
                            Gray : 15,
                            Black : 20
                       },
                        M : {
                            Gray : 15,
                            Black : 20
                       },
                        S : {
                            Gray : 15,
                            Black : 20
                       },
                    },
                    pic : 'https://picsum.photos/1500/1000?image=2',
                    status : 'publish'
                },
                {
                    click : false,
                    name : 'Mauris',
                    original : 3200,
                    discount : 2800,
                    inventory : {
                        L : {
                            Gray : 15,
                            Black : 20
                       },
                        M : {
                            Gray : 15,
                            Black : 20
                       },
                        S : {
                            Gray : 15,
                            Black : 20
                       },
                    },
                    pic : 'https://picsum.photos/1500/1000?image=3',
                    status : 'publish'
                },
            ]
        }
    }
}
</script>
<style lang="scss">
    .productGroup{
        .header{
            display: flex;
            justify-content: space-between;
            .rightGroup{
                button{
                    background-color: #000;
                }
            }
        }
        .content{
            tbody{
                tr{
                    td{
                        %borderBottom{
                            border-bottom: 1px solid #fff;
                            height: 40px;
                            &:last-child{
                                border: none;
                            }
                        }
                        &.size{
                            li{
                                @extend %borderBottom;
                                line-height: 40px;
                            }
                        }
                        &.color{
                            ul{
                                @extend %borderBottom;
                            }
                        }
                        &.inventory{
                            ul{
                                @extend %borderBottom;
                            }
                        }
                    }
                }
            }
        }
    }
</style>

