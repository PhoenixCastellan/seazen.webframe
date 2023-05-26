<template>
  <div class="case">
    <banner img="../assets/img/bgtop.jpg" />
    <div class="case-product">
      <div class="case-product-content">
        <img v-lazy="imgserver + caseIdList.Img" alt />
        <p class="product-title">{{ caseIdList.Title }}</p>
        <p class="product-time">{{ caseIdList.CreateTime }}</p>
        <p class="product-content">{{ caseIdList.Content }}</p>
      </div>
      <div class="case-product-table">
        <el-table :data="caseIdList.Specification">
          <el-table-column label="产量" prop="id" align="center"></el-table-column>
          <el-table-column label="进料粒度" prop="name" align="center"></el-table-column>
          <el-table-column label="出料粒度" prop="ctime" align="center"></el-table-column>
        </el-table>
      </div>

      <div class="case-product-content">
        <el-carousel indicator-position="outside" style="width:100%;" :interval="2000" >
          <el-carousel-item v-for="item in 4" :key="item">
            <img :src="caseIdList.IllustratedBook[item-1]">
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- <div class="case-product">
      <div class="case-product-content">
        <img v-lazy="imgserver + caseIdList.Img" alt />
        <p class="product-title">{{ caseIdList.Title }}</p>
        <p class="product-time">{{ caseIdList.CreateTime }}</p>
        <p class="product-content">{{ caseIdList.Content }}</p>
      </div>
    </div> -->
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner";
import BaseData from "../data/data"
export default {
  components: {
    Banner
  },
  data() {
    return {
      pid: 0,
      caseIdList: BaseData.ProductList[this.$route.params.id - 1],
      currentIndex: 0,
      timer: null
    };
  },
  created() {
    this.pid = this.$route.params.id;
    window.console.log(this.pid);
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      //   this.$http
      //     .get(`Cases/GetCasesById/${this.pid}`)
      //     .then(response => {
      //       //console.log(response);
      //       this.caseIdList = response.data;
      //       window.console.log(this.caseIdList);
      //     })
      //     .catch(function(error) {
      //       window.console.log(error);
      //     });
    },
    gotoPage(index) {
      this.currentIndex = index
    },
    runInv() {
      this.timer = setInterval(() => {
        this.gotoPage(this.nextIndex)
      }, 3000)
    },
  },
  computed: {
    prevIndex() {
      if (this.currentIndex === 0) {
        return this.caseIdList.IllustratedBook.length - 1
      } else {
        return this.currentIndex - 1
      }
    },
    nextIndex() {
      if (this.currentIndex === this.caseIdList.IllustratedBook.length - 1) {
        return 0
      } else {
        return this.currentIndex + 1
      }
    }
  }
};
</script>

<style lang="less" >
.case {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #14679f;

  &-product {
    width: 1240px;
    margin: 0 auto;
    background-color: #fff;

    //border: 1px solid red;
    &-content {
      width: 760px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 50px 0;

      img {
        width: 100%;
        height: 430px;
      }

      .product-title {
        font-size: 25px;
        color: #e13834;
        padding: 20px 0;
      }

      .product-content {
        font-size: 17px;
        font-weight: bolder;
        padding: 20px 0;
      }
    }

    &-table {
      width: 760px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 50px 0;
    }
  }


.banner {
  position: relative;
  margin-bottom: 0.7rem;

  .current {
    color: #ff6700;
  }

  .page {
    background: rgba(0, 0, 0, .5);
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;

    ul {
      float: right;
    }
  }

  ul li {
    list-style: none;
    float: left;
    width: 30px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
    color: rgba(255, 255, 255, .8);
    font-size: 14px;
  }
}

.banner img {
  width: 100%;
  max-height: 680px;
}

.el-table td.el-table__cell,
.el-table th.el-table__cell.is-leaf,
.el-table::before {
  border: none;
  background: transparent;
}

th {
  font-size: 18px;
  color: #000;
}
.el-carousel__container{
  height: 430px;
  img{
    height: 430px;
  }
}

}
</style>