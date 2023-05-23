<template>
  <div
    :ref="`WEditor${resetID}`"
  ></div>
</template>

<script>
import { UploadImageApi } from '../request/api'
import E from "wangeditor";
export default {
  props: {
    resetID: {
      type: String,
      default: ''
    },
    dec: {
      type: String,
      default: ''
    },
    placeholderTxt:{
       type: String,
      default: '请编辑内容'
    }
  },
  name: "WangEditor",
  data () {
    return {
      editor: null
    }
  },
  mounted () {
    this.initeditor();
  },
  methods: {
    initeditor () {
      const _this = this;
      if (this.editor != null) {
        return;
      }
      _this.editor = new E(this.$refs[`WEditor${this.resetID}`]);
      _this.editor.config.placeholder = _this.placeholderTxt;
      _this.editor.config.zIndex = 1;
      _this.editor.config.menus = [
        //工具栏配置
        "head",
        "bold",
        "fontSize",
        "fontName",
        "italic",
        "underline",
        "strikeThrough",
        "indent",
        "lineHeight",
        "foreColor",
        "backColor",
        // "link",
        "list",
        "todo",
        "justify",
        "quote",
        "emoticon",
        "image",
        // "video",
        "table",
        "code",
        "splitLine",
        "undo",
        "redo",
      ];
      _this.editor.config.showLinkImg = false;
      _this.editor.config.plan = false;
      _this.editor.config.uploadImgMaxLength = 1;
      _this.editor.config.height = 200;
      _this.editor.config.focus = false;
      _this.editor.config.showFullScreen = false
      _this.editor.config.customUploadImg = function (
        resultFiles,
        insertImgFn
      ) {
        //上传图片
        // resultFiles 是 input 中选中的文件列表
        // insertImgFn 是获取图片 url 后，插入到编辑器的方法
        // 上传图片，返回结果，将图片插入到编辑器中
        _this.UploadImage(resultFiles[0]).then((res) => {
          if (res.state == 'SUCCESS') {
            insertImgFn(res.url);
          } else {
            _this.$message.error('图片上传失败');
          }
        });
      };
      _this.editor.create();

      //   设置内容
      // _this.editor.txt.html('<p>用 JS 设置的内容</p>')
      //   需要的时候调用获取内容
      _this.editor.config.onchange = (html) => {
        _this.$emit("SetDescribeValue", html);
      };
    },

    async UploadImage (file) {
      var upfile = new FormData()
      upfile.append('upfile', file)
      return await UploadImageApi(upfile);
    },
    clear () {
      this.editor.txt.html('') // 重新设置编辑器内容
    }
  },
  // watch: {
  //   dec: {
  //     immediate: true,
  //     handler (val) {
  //       setTimeout(() => {
  //         this.editor.txt.html(val) // 重新设置编辑器内容
  //       });
  //     }
  //   }
  // }
};
</script>

<style lang='less' scoped>
#WEditor {
  width: 774px;
}
</style>
<style lang='less' >
.w-e-text ol {
  list-style: decimal;
}
.w-e-text ul {
  list-style: disc;
}
.w-e-toolbar {
  display: none;
  border: none !important;
  .w-e-menu {
    width: 34px !important;
  }
}
.w-e-toolbar p, .w-e-text-container p, .w-e-menu-panel p ,.w-e-text-container .placeholder{
    font-size: 12px !important;
}
.w-e-text-container {
  height: 100px !important;
  border: none !important;
}
</style>