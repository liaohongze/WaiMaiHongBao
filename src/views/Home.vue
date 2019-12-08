<template>
  <div id="page-home">
    <div id="page-home-body">
      <div class="page-home-header">
        <div class="top">
          <div class="project-name">免费外卖券</div>
          <div class="project-desc">一键领取最大红包</div>
        </div>
      </div>
      <div id="page-home-card">
        <div class="top">
          <div class="left">
            <div class="user_info">
              <div class="desc">
                <figure class="avatar com-img-wrapper">
                  <img
                    src="http://thirdwx.qlogo.cn/mmopen/vtnuMBibofcae3JX7F4u7rCUTBOn8x9e7lCQYOuglKjjdb0jh4mfEeEDFV5EQem2YlgWRc6dGnJ9rl8wbC7Y5yJTqC7UFicsIT/132"
                    class="img"
                  />
                </figure>
                <b class="text">陈文龙</b>
              </div>
            </div>
            <p class="coin-balance coin-ani-finish">
              <i class="icon com-coin"></i> <b class="num din">19</b>
            </p>
            <button class="btn-go-coin-record">
              粮票明细<i class="com-icon-next"></i>
            </button>
            <!---->
          </div>
          <div class="btn-go-charge-wrapper">
            <button class="com-btn-main btn-go-charge">粮票充值</button>
          </div>
        </div>
      </div>
    </div>

    <section
      class="com-page-section page-home-section page-home-packages-section"
    >
      <h5 class="section-title" style="width: max-content;">
        请选择您要领取的红包类型
      </h5>
      <div class="section-container">
        <div class="page-home-packages">
          <section class="page-home-package-list">
            <article
              v-for="item in redBags"
              :key="item.id"
              @click="changeRedbag(item.id)"
              :class="[
                'page-home-package-item',
                item.id === activeBag && 'page-home-package-item-on'
              ]"
            >
              <header class="header">
                <h3 class="title">
                  {{ item.title }}
                  <span v-if="item.isNew" class="tip">NEW</span>
                </h3>
                <div class="score">
                  <span class="udc-medium">{{item.price}}</span>粮票<span class="times"
                    >/次</span
                  >
                </div>
              </header>
              <p class="desc">
                {{item.desc}}
              </p>
              <i class="icon-done"></i>
            </article>
          </section>
          <section class="page-home-package-form">
            <div class="container">
              <div class="container-box">
                <b class="container-title">
                  请输入饿了么手机号
                </b>
                <div class="container-form">
                  <div class="input-box">
                    <input
                      id="container-phone-input"
                      maxlength="13"
                      placeholder="请输入手机号"
                      type="tel"
                      data-id="phone"
                      data-input-handle="onPhoneInput"
                      class="input"
                    />
                    <button class="btn-clear">
                      <i class="icon com-icon-close"></i>
                    </button>
                    <!---->
                  </div>
                  <!---->
                </div>
              </div>
              <div class="page-home-packages-footer">
                <button class="com-btn-main">
                  立即领取
                </button>
              </div>
            </div>
            <!---->
          </section>
          <section class="page-home-package-rule">
            <h3 class="page-home-package-rule-title">
              领取规则
            </h3>
            <div class="page-home-package-rule-content">
              <p>
                1、领取【品质联盟35-5】需消耗5粮票
              </p>
              <p>
                2、如红包金额都低于5元算领取失败，不扣粮票
              </p>
              <p>
                3、此红包可以叠加店铺满减优惠一起使用
              </p>
              <p>
                4、每个手机号每天限领1次/部分异常账号无法领取，请更换手机号领取
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "home",
  data() {
    return {
      redBags: [
        {
          id: 1,
          title: "品质联盟35-5",
          price: 5,
          isNew: false,
          desc:
            "大概率出1个35-5的品质红包，附带1个10-2的品质红包。每个手机号每天限领1次，低于5元不扣粮票"
        },
        {
          id: 2,
          title: "全场通用35-5",
          price: 5,
          isNew: true,
          desc:
            "此红包为满35-5的通用红包，所有店铺都可用，每个手机号每天限领1次，低于5元不扣粮票"
        },
        {
          id: 3,
          title: "4合1红包礼包",
          price: 5,
          isNew: false,
          desc:
            "必出一个5元品质联盟红包。此礼包一般包含4个红包，分别为：全场通用(25-4)、品质联盟(25或30-5)、下午茶红包(30-5)和夜宵红包(45-6)"
        },
        {
          id: 4,
          title: "全场通用45-6",
          price: 5,
          isNew: false,
          desc:
            "出一个满45-6的通用红包。【领取后有效期为15分钟】如不是马上点外卖请勿领取！！！每个手机号每天限领1次，低于6元不扣粮票"
        },
        {
          id: 5,
          title: "全场通用45-5",
          price: 5,
          isNew: false,
          desc:
            "出一个满45-5的通用红包，所有店铺都可用，每个手机号每天限领1次，低于5元不扣粮票"
        },
        {
          id: 6,
          title: "品质联盟组合大包",
          price: 5,
          isNew: false,
          desc:
            "大概率出3个品质联盟【40-6，50-7和90-14】、1个【通用红包30-4】和1个【星巴克专送红包20-9】，每个手机号每天限领1次，低于5元不扣粮票"
        }
      ],

      activeBag: 1
    };
  },

  methods: {
    changeRedbag(id) {
      this.activeBag = id
    }
  }
};
</script>

<style lang="less">
#page-home {
  background: #f3f8f9;
  min-height: 100vh;
  padding: 0 0 1.866667rem;

  &:after,
  &:before {
    position: fixed;
    z-index: -1;
    left: 0;
    width: 100%;
  }

  &:before {
    position: fixed;
    z-index: -1;
    left: 0;
    width: 100%;
  }

  &:after {
    content: ":)";
    top: 0;
    height: 5.333333rem;
    background: #5587fc;
    text-align: center;
    font-size: 0.32rem;
    color: hsla(0, 0%, 100%, 0.3);
    font-weight: 400;
    line-height: 2.666667rem;
  }
}

.page-home-header {
  position: relative;
  z-index: 0;
  width: 100%;
  padding: 0 0 1.066667rem;

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    left: 0;
    bottom: -1.066667rem;
    width: 100%;
    height: 2.133333rem;
    background: #2967fe;
    border-radius: 100%;
  }

  &:after {
    content: "";
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url(../assets/images/header_bg.svg) no-repeat top,
      linear-gradient(-175deg, #5787ff 6%, #2462fe 99%);
    background-size: 100% auto;
  }

  .top {
    margin: 0 0.533333rem;
    padding: 0.533333rem 0;

    .project-name {
      font-size: 0.746667rem;
      color: #fff;
      font-weight: 700;
      line-height: 1.5;
    }

    .project-desc {
      font-size: 0.373333rem;
      color: hsla(0, 0%, 100%, 0.5);
      font-weight: 400;
      line-height: 1.5;
    }
  }
}

#page-home-card {
  position: relative;
  z-index: 3;
  margin: -1.066667rem 0.533333rem 0;
  padding: 0 0 0.4rem;
  border-radius: 0.2rem;
  background: #fff;
  background-image: linear-gradient(
    135deg,
    #fff,
    #f5fbfd 15%,
    #fff 0,
    #fff 63%,
    #f5fbfd 0,
    #fff
  );
  box-shadow: 0 0.133333rem 0.266667rem 0 rgba(140, 141, 142, 0.1);

  .top {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin: 0 0.666667rem;
    padding: 0.533333rem 0 0.266667rem;

    .btn-go-charge-wrapper {
      flex-shrink: 0;
      margin: 0.4rem 0 0;
    }

    .btn-go-charge {
      width: 2.666667rem;
    }

    .coin-balance {
      display: flex;
      align-items: center;
      margin: 0.066667rem 0 0;
      opacity: 0.8;
      transform: scale(0.98);
      transform-origin: 50%;
      animation: page-top-up-header-coin 0.3s ease-in-out infinite;

      &.coin-ani-finish {
        animation: none;
        opacity: 1;
        transform: scale(1);
      }

      .icon {
        width: 1.066667rem;
        height: 0.826667rem;
      }

      .num {
        font-size: 0.96rem;
        color: #272121;
        line-height: 1.44rem;
        margin: 0 0 0 0.2rem;
      }
    }

    .btn-go-coin-record {
      font-size: 0.32rem;
      color: #8c8f95;
      line-height: 0.48rem;
    }
  }

  .user_info {
    .desc {
      display: -webkit-box;
      display: flex;
      -webkit-box-align: center;
      align-items: center;

      .avatar {
        width: 0.426667rem;
        height: 0.426667rem;
        border-radius: 0.426667rem;
        margin: 0 0.2rem 0 0;
      }

      .text {
        font-size: 0.346667rem;
        color: #4e515c;
        line-height: 0.52rem;
      }
    }
  }
}

.page-home-section {
  position: inherit;
  margin: 0.4rem 0 0;
  background: transparent;
}

.com-page-section {
  position: relative;
  z-index: 1;
  background: #fff;

  .section-title {
    position: relative;
    z-index: 1;
    font-size: 0.346667rem;
    color: #4e515c;
    font-weight: 400;
    line-height: 0.52rem;
    margin: 0 0 0 0.533333rem;
    padding: 0.333333rem 0 0;
  }

  .section-container {
    margin-top: 0.133333rem;
  }
}

.page-home-packages {
  border-radius: 0.333333rem;
  background: #edeff2;
  box-shadow: inset 0 0.133333rem 0.466667rem rgba(3, 79, 111, 0.1);
}

.page-home-package-item {
  padding: 0.266667rem 0.333333rem;
  margin: 0 0 0.2rem;
  border-radius: 0.266667rem;
  border: 0.026667rem solid transparent;
  background: #f9fafc;

  .bg-light {
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(40, 100, 250, 0.05);
    border-radius: 0.333333rem;
    opacity: 1;
    transform: scale(1);
    animation: page-home-package-item-bg-list 0.5s ease-out forwards;
  }

  .header,
  .title {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }

  .header {
    -webkit-box-pack: justify;
    justify-content: space-between;
  }

  .title {
    font-size: 0.373333rem;
    color: #5c4f4e;
    font-weight: 700;
    line-height: 0.746667rem;
  }

  .score {
    font-size: 0.373333rem;
    color: #2864fa;
    font-weight: 400;
    line-height: 1.5;
    opacity: 0.8;

    .times {
      font-size: 0.346667rem;
      font-weight: 400;
    }
  }

  .tip {
    display: block;
    width: max-content;
    margin: 0 0 0 0.066667rem;
    padding: 0.026667rem 0.2rem;
    background: linear-gradient(90deg, rgba(227, 74, 36, 0.8), #e34a24);
    font-size: 0.32rem;
    color: #fff;
    font-weight: 400;
    line-height: 1.5;
    border-radius: 1.333333rem 1.333333rem 1.333333rem 0;
    transform: scale(0.7);
    transform-origin: 0 0;
  }

  .desc {
    display: none;
    margin: 0.066667rem 0 0;
    padding: 0.133333rem 0;
    font-size: 0.32rem;
    color: #7e7271;
    font-weight: 400;
    line-height: 1.5;
  }
}

.page-home-package-item-on {
  border-color: #2864fa;
  box-shadow: 0 0.093333rem 0.2rem rgba(40, 100, 250, 0.1);
  background: #fff;
  animation: page-home-package-item-on 0.5s ease-out forwards;

  .title {
    color: #2052e2;
    font-size: 0.426667rem;
  }

  .score {
    font-weight: 700;
    opacity: 1;
  }

  .desc {
    display: block;
  }
}

.page-home-package-list {
  padding: 0.533333rem 0.4rem;
}

.page-home-package-form {
  margin: -0.266667rem 0 0;
  padding: 0.4rem;
  background: #fff;
  border-radius: 0.333333rem 0.333333rem 0 0;

  .container-title {
    display: block;
    font-size: 0.373333rem;
    color: #5c4f4e;
    font-weight: 700;
    line-height: 1.5;
  }

  .container-form {
    margin: 0.266667rem 0 0;
  }

  .input-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.133333rem 0.333333rem;
    margin: 0.2rem 0;
    min-height: 0.986667rem;
    background: #f7f8fa;
    border-radius: 0.2rem;
  }

  .input {
    display: block;
    padding: 0.133333rem 0;
    width: 100%;
    font-size: 0.48rem;
    color: #13100f;
    font-weight: 400;
    line-height: 0.72rem;
  }

  .btn-clear {
    flex-shrink: 0;
    margin: 0 0.266667rem;
    width: 0.48rem;
    height: 0.48rem;
    border-radius: 1.333333rem;
    background: #c7c8ca;
  }

  .page-home-packages-footer {
    margin: 0.466667rem 0 0;
  }
}

.page-home-package-rule {
  padding: 0.266667rem 0 0;
  background: #fff;
  border-radius: 0 0 0.333333rem 0.333333rem;
}

.page-home-package-rule-title {
  margin: 0 0.4rem;
  padding: 0.4rem 0 0;
  border-top: 0.013333rem dashed #dadcdf;
  font-size: 0.373333rem;
  color: #7e7271;
  font-weight: 700;
  line-height: 1.5;
}

.page-home-package-rule-content {
  margin: 0.266667rem 0.4rem 0;
  padding: 0 0 0.533333rem;
  font-size: 0.346667rem;
  color: #5c4f4e;
  font-weight: 400;
  line-height: 1.5;

  p {
    margin: 0 0 0.066667rem;
  }
}

@keyframes page-home-package-item-on {
  0% {
    -webkit-transform: scale(0.95);
    transform: scale(0.95);
  }

  90% {
    -webkit-transform: scale(1.06);
    transform: scale(1.06);
  }

  to {
    -webkit-transform: scale(1.04);
    transform: scale(1.04);
  }
}

@keyframes page-home-package-item-bg-lists {
  99% {
    opacity: 0;
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }

  to {
    opacity: 0;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
</style>
