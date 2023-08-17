export default {
  name: "HelloWorld",
  dbzg: {
    ProductList: [
      {
        Id: 1,
        Img: require("../assets/img/product/1.jpg"), //"/imagestore/2020/0605/439332ec-11c0-440c-8800-d94b0479c22c.jpg",
        Title: "欧版颚式破碎机",
        Content:
          "欧版颚式破碎机又叫PEW颚式破碎机,PEW新型颚式破碎机。欧版颚式破碎机是在PE颚式破碎机的基础上研发而成的新一代破碎机，欧版颚式破碎机具有调节简单，抗压性强，使用寿命增长，产量高等优点。",
        Del: null,
        TechImg: require("../assets/img/product/0.jpg"),
        CreateTime: "2020-06-05T21:12:45.387",
        IllustratedBook: [
          require("../assets/img/product/0.jpg"),
          require("../assets/img/product/1.jpg"),
          require("../assets/img/product/2.jpg"),
        ],
      },
      {
        Id: 2,
        Img: require("../assets/img/product/2.jpg"), //"/imagestore/2020/0605/fcebfcd1-7b8c-4214-9fc4-c9c275ccaaf0.jpg",
        Title: "颚式破碎机",
        Content:
          "丁博重工颚式破碎机主要有PE颚式粗型破碎机，PEX细型颚式破碎机，PEW欧版颚式破碎机等型号。颚式破碎机俗称颚破，丁博重工生产的颚式破碎机主要有钢板铸造等类型，由动颚和静颚两块颚板组成破碎腔，物料在动鄂和静鄂的挤压作用下完成物料的破碎过程。颚式破碎机目前广泛运用于采石场，矿山制造、建材、公路、铁路、水利和化工、建筑垃圾处理、等行业中各种矿石与大块物料的破碎。被破碎物料的最高抗压强度为320Mpa。",
        Del: null,
        CreateTime: "2020-06-05T21:05:45.157",
        Imgs: [
          require("../assets/img/product/0.jpg"),
          require("../assets/img/product/1.jpg"),
          require("../assets/img/product/2.jpg"),
          require("../assets/img/product/3.jpg"),
        ],
      },
      {
        Id: 3,
        Img: require("../assets/img/product/3.jpg"), //"Img":"/imagestore/2020/0605/e6cad4d5-0f76-4241-a112-8660acf8c281.jpg",
        Title: "反击式破碎机",
        Content:
          "反击式破碎机适宜于破碎各种矿石、矿渣和混凝土等中高硬度脆性物料，因其破碎比大、产品中立方体颗粒含量高，比表面积大，被广泛应用于冶金、矿山、化工、水泥、建筑、耐火材料及陶瓷等行业的中细碎和细碎作业中。",
        Del: null,
        CreateTime: "2020-06-05T21:02:05.567",
        Imgs: [
          require("../assets/img/product/0.jpg"),
          require("../assets/img/product/1.jpg"),
          require("../assets/img/product/2.jpg"),
          require("../assets/img/product/3.jpg"),
        ],
      },
      {
        Id: 4,
        Img: require("../assets/img/product/4.jpg"), //"Img":"/imagestore/2020/0605/0c6fa4a8-94da-4fc5-bac4-76c59d52c2b2.jpg",
        Title: "欧版反击式破碎机",
        Content:
          "欧版反击式破碎机又叫ZCF反击式破碎机,ZCF新型反击式破碎机。欧版反击式破碎机是在PF反式破碎机的基础上研发而成的新一代破碎机，欧版颚式破碎机具有调节简单，抗压性强，使用寿命增长，产量高等优点。欧版反击式破碎机提供了全新的安全性和效率水平。能够应用于各种石料生产的初级或二级破碎中。",
        Del: null,
        CreateTime: "2020-06-05T20:58:05.57",
        Imgs: [],
      },
    ],
  },
  products: [
    {
      id:1,
      kind: "db",
      name: "PEW欧版颚式破碎机",
      DESC:
        "欧版颚式破碎机又叫PEW颚式破碎机,PEW新型颚式破碎机。欧版颚式破碎机是在PE颚式破碎机的基础上研发而成的新一代破碎机，欧版颚式破碎机具有调节简单，抗压性强，使用寿命增长，产量高等优点。",
      mainimg: require("../assets/img/dbzg/oubaneshiposuiji1.webp"),
      techimg: require("../assets/img/dbzg/oubaneshiposuiji1.png"),
    },
    {
      id:2,
      kind: "db",
      name: "复合圆锥破碎机",
      DESC:
        "圆锥破碎机适用于冶金、建筑、筑路、化学及硅酸盐行业中原料的破碎，根据破碎原理的不同和海量产品颗粒大小不同，又分为很多型号。破碎机广泛运用于矿山、冶炼、建材、公路、铁路、水利和化学工业等众多部门。圆锥破碎机破碎比大、效率高、能耗低，产品粒度均匀，适合中碎和细碎各种矿石，岩石。",
      mainimg: require("../assets/img/dbzg/fu_he_yuan_zhui_po_sui_ji2.webp"),
      techimg: require("../assets/img/dbzg/fu_he_yuan_zhui_po_sui_ji2.jpeg"),
    },
    {
      id:3,
      kind: "db",
      name: "VSI制砂机",
      DESC:
        "VSI制砂机也叫立轴式破碎机，立轴冲击式破碎机，5x制砂机，第五代制砂机，是丁博新型的制砂机型。它可以把各种岩石、砂石，河卵石制成附和各种粒度的建筑用砂，砂质粒度均匀、耐压强度高，远比天然砂、普通锤式打砂机生产的砂更符合建筑要求，更能提高建筑质量。设备具有性能可靠、设计合理、操作方便、工作效率高等特点。",
      mainimg: require("../assets/img/dbzg/1685419391-vsizhishaji1.webp"),
      techimg: require("../assets/img/dbzg/1685419391-vsizhishaji1.jpg"),
    },
    {
      id:4,
      kind: "db",
      name: "雷蒙磨粉机",
      DESC:
        "雷蒙磨粉机又称雷蒙磨、雷蒙机，是代替球磨机加工矿石粉末的一种高效制粉磨粉机。产品具有系统性强、通筛率高、传动平稳、耐磨性高、维护方便等突出优势。普遍应用于矿山、建材、冶金、化工等领域矿产品物料的粉磨加工。雷蒙磨粉机广泛适用于重晶石、方解石、钾长石、滑石、大理石、石灰石、陶瓷、玻璃等莫氏硬度不大于7级，湿度在6%以下的非易燃易爆物料的制粉加工。",
      mainimg: require("../assets/img/dbzg/lei-meng-mo-fen-ji.webp"),
      techimg: require("../assets/img/dbzg/lei-meng-mo-fen-ji.png"),
    },
    {
      id:5,
      kind: "db",
      name: "轮胎式移动破碎站",
      DESC:
        "轮胎式移动破碎站,又称轮胎式破碎机、液压驱动轮胎式移动破碎站，它是一种高效率的破碎设备，采用自行驱动方式，技术先进，功能齐全。具有优异的工位移动机动性和作业场地适应性，无需固定式破碎站安装就位前所需的各种前期准备，可在短时间内完成工位调整，随时进入工作状态。",
      mainimg: require("../assets/img/dbzg/1685427664-lun_tai_shi_yi_dong_po_sui_zhan1.webp"),
      techimg: require("../assets/img/dbzg/1685427664-lun_tai_shi_yi_dong_po_sui_zhan1.png"),
    },
    {
      id:6,
      kind: "db",
      name: "细砂回收机",
      DESC:
        "上海丁博细砂回收机，是吸收国外的先进技术，结合砂粉的实际情况而设计的具有先进水平的细料提取装置，广泛应用于水电站砂石骨料加工系统、玻璃原料加工系统、人工制砂生产线、选煤厂粗煤泥的回收及环保工程（泥浆净化）等，可有效解决细砂回收问题。",
      mainimg: require("../assets/img/dbzg/1685426394-xishahuishouji2.webp"),
      techimg:  require("../assets/img/dbzg/1685426394-xishahuishouji2.png"),
    },
    {
      id:7,
      kind: "sh",
      name: "带式过滤机",
      DESC: "",
      mainimg: require("../assets/img/sh/0543d294-5fd4-4bbf-a507-a352ccbb2890.jpeg"),
      techimg: "",
    },
    {
      id:8,
      kind: "sh",
      name: "NZ/NG系列浓缩机",
      DESC:
        "浓缩机主要由圆形浓缩池和耙式刮板机两部分组成。浓缩池里悬浮于矿浆中的固体颗粒在重力作用下沉降，上部则成为澄清水，使固液得以分离。沉积于浓缩池底部的矿泥由耙式刮板连续地刮集到池底中心排矿口排出，而澄清水则由浓缩池上沿溢出。",
      mainimg: require("../assets/img/sh/f93b9975-89cb-4c08-b222-21b96efed315.jpg_1180xaf.jpg"),
      techimg: require("../assets/img/sh/f93b9975-89cb-4c08-b222-21b96efed315.jpg_1180xaf.png"),
    },
    {
      id:9,
      kind: "sh",
      name: "YTS系列圆筒滚动筛",
      DESC:
        "圆筒滚动筛，由滚筒、机架、漏斗、减速器、电动机五个部分组成。破碎的物料进入滚筒后，一方面随着滚筒转动而被筛选，靠滚筒旋转的离心力及跳汰作用来筛分物料。一方面粒度大的物料沿着滚筒的斜度向前流动，通过不同网目的筛网而被筛出。不大的石料筛出后落入各自的漏斗，然后由人工运出或自流送往成品堆。",
      mainimg: require("../assets/img/sh/86944e54-2933-4563-8742-78b27f71be7c.jpg_1180xaf.jpg"),
      techimg: require("../assets/img/sh/86944e54-2933-4563-8742-78b27f71be7c.jpg_1180xaf.png"),
    },
    {
      id:10,
      kind: "sh",
      name: "CTY系列永磁湿式预选机",
      DESC: "CTY系列永磁湿式预选机是为磁性矿磨前跑尾设计的湿式磁选机",
      mainimg: require("../assets/img/sh/c85e0b54-64a5-445c-9c6f-811cbf9d1cca.jpg_1180xaf.jpg"),
      techimg: require("../assets/img/sh/c85e0b54-64a5-445c-9c6f-811cbf9d1cca.jpg_1180xaf.png"),
    },
    {
      id:11,
      kind: "sh",
      name: "RCDB系列干式电磁除铁器 PDC系列盘式电磁除铁器",
      DESC:
        "用于破碎机前及输送机胶带上的任何物料除铁，可适用于各种恶劣的环境条件。",
      mainimg: require("../assets/img/sh/4b9eea51-550c-4276-8169-15453adf8a04.jpg_1180xaf.jpg"),
      techimg: require("../assets/img/sh/4b9eea51-550c-4276-8169-15453adf8a04.jpg_1180xaf.png"),
    },
    {
      id:12,
      kind: "sh",
      name: "JYG-B系列金属探测仪",
      DESC:
        "JYG-B系列金属探测仪适用于有磁性和非磁性散状物料皮带输送及处理系统的各行业。",
      mainimg: require("../assets/img/sh/9b09d032-3509-4a58-8163-8eddc5573b31.jpg_1180xaf.jpg"),
      techimg: require("../assets/img/sh/9b09d032-3509-4a58-8163-8eddc5573b31.jpg_1180xaf.png"),
    },
  ],
};
