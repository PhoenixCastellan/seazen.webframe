<template>
  <div class="upload_file">
    <ul class="fileList flex flex-wrap">
      <li v-for="(item, index) in fileList" :key="index">
        <el-image
          style="width: 100px; height: 100px"
          :src="item"
          :preview-src-list="fileList"
        >
        </el-image>
        <i class="deletIcon el-icon-error" @click="deleteImg(index)"></i>
      </li>
      <li>
        <el-upload class="upload-demo" action="" :http-request="upload">
          <div
            class="
              uploadHandle
              el-icon-plus
              bd
              flex flex-center flex-align-center
            "
          ></div>
        </el-upload>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [
        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
          'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
          'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
          'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
          'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
          'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
          'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
      ],
    };
  },
  methods: {
    upload(obj) {
      console.log("obj", obj);
    },
    deleteImg(index){
      this.fileList.splice(index,1)
    }
  },
};
</script>

<style lang="less" >
.upload_file {
  .fileList {
    li {
      width: 100px;
      height: 100px;
      margin: 0 10px 10px 0;
      border-radius: 4px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .deletIcon {
        position: absolute;
        right: -6px;
        top: -6px;
        color: red;
        font-size: 20px;
        cursor: pointer;
      }
    }
  }
  .uploadHandle {
    border-radius: 4px;
    width: 100px;
    height: 100px;
    border-style: dashed;
    font-size: 20px;
    color: #999;
  }
  .el-upload-list{
    display: none;
  }
}
</style>