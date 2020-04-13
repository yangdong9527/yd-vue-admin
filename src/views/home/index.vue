<template>
  <div class="home-wrap">
    <div class="card-wrap">
      <el-row :gutter="30">
        <el-col :span="6">
          <litter-card :styleObj="{backgroundColor: '#ff3b30'}" title="今日收入" :number="101">
            <template #img>
              <img src="../../assets/images/laohu.png" alt />
            </template>
          </litter-card>
        </el-col>
        <el-col :span="6">
          <litter-card :styleObj="{backgroundColor: '#ff9500'}" title="今日支出" :number="201">
            <template #img>
              <img src="../../assets/images/ciwei.png" alt />
            </template>
          </litter-card>
        </el-col>
        <el-col :span="6">
          <litter-card :styleObj="{backgroundColor: '#67676b'}" title="捡钱" :number="10">
            <template #img>
              <img src="../../assets/images/shizi.png" alt />
            </template>
          </litter-card>
        </el-col>
        <el-col :span="6">
          <litter-card :styleObj="{backgroundColor: '#333333'}" title="剩余" :number="-90">
            <template #img>
              <img src="../../assets/images/lu.png" alt />
            </template>
          </litter-card>
        </el-col>
      </el-row>
    </div>
    <el-row>
      <el-col :span="18">
        <myCard title="一周收支">
          <template #content>
            <lineChard height="350px"></lineChard>
          </template>
        </myCard>
      </el-col>
      <el-col :span="6">
        <myCard title="今日支出">
          <template #content>
            <pieChard height="350px"></pieChard>
          </template>
        </myCard>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <myCard title="一周消费">
          <template #content>
            <barChard height="350px"></barChard>
          </template>
        </myCard>
      </el-col>
      <el-col :span="12">
        <myCard title="好看的东西">
          <template #content>
            <el-carousel indicator-position="none" height="350px">
              <el-carousel-item v-for="item in imgList" :key="item.id">
                <img class="carouse-img" :src="item.src" alt />
              </el-carousel-item>
            </el-carousel>
          </template>
        </myCard>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import myCard from "@/components/myCard/index.vue";
import LitterCard from "@/components/litterCard/index";
import pieChard from "@/components/echarts/pieChard";
import lineChard from "@/components/echarts/lineChard";
import barChard from "@/components/echarts/barChard";
export default {
  name: "home",
  components: {
    myCard,
    LitterCard,
    pieChard,
    lineChard,
    barChard
  },
  data() {
    return {
      imgList: [
        {
          id: 1,
          src: require('../../assets/images/swiper1.jpg')
        },
        {
          id: 2,
          src: require('../../assets/images/swiper2.jpg')
        },
        {
          id: 3,
          src: require('../../assets/images/swiper3.jpg')
        }
      ]
    }
  }
};
</script>

<style scoped lang="scss">
.home-wrap {
  .card-wrap {
    padding: 0 15px;
    box-sizing: border-box;
    margin-top: 10px;
  }
  .carouse-img {
    width: 100%;
    height: 350px;
    object-fit: cover;
  }
}
</style>
