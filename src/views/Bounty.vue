<template>
  <div class="page-bounty">
    <div class="page-bounty-header">
      <div class="page-bounty-assets">
        <div class="title">当前可提现赏金(元)</div>
        <div class="content">
          <p class="coin"><b class="num udc-bold">0</b></p>
        </div>
        <button class="btn com-btn-small btn-go-exchange">
          点击提现
        </button>
      </div>
      <button class="btn-rule">赏金规则</button>
      <div class="page-bounty-data">
        <ul class="list">
          <li class="item">
            <span class="name">累计收益</span>
            <b class="number"
              ><span class="udc-medium">0</span> <span class="unit">元</span></b
            >
          </li>
          <li class="item">
            <span class="name">累计订单</span>
            <b class="number"
              ><span class="udc-medium">0</span> <span class="unit">单</span></b
            >
          </li>
          <li class="item">
            <span class="name">累计推广人数</span>
            <b class="number"
              ><span class="udc-medium">0</span> <span class="unit">人</span></b
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="page-bounty-section page-bounty-step">
      <div class="page-bounty-section-header">
        <div class="left">
          <div class="title">
            获得赏金
          </div>
        </div>
        <div class="right"></div>
      </div>
      <i class="icon"></i>
    </div>
    <section class="page-bounty-section page-bounty-record">
      <div class="page-bounty-section-header">
        <div class="left">
          <div class="title">
            赏金记录
          </div>
        </div>
        <div class="right"></div>
      </div>
      <div class="page-bounty-record-list"></div>
      <p class="not-record">暂无更多记录</p>
    </section>
    <div class="page-coinRecord-fixed-footer">
      <button class="com-btn-main btn">
        点击继续邀请好友
      </button>
    </div>
  </div>
</template>

<style lang="less" scoped>
.page-bounty {
  min-height: 100vh;
  padding: 0 0 1.333333rem;
  box-sizing: border-box;

  &:before {
    content: "";
    position: fixed;
    z-index: -1;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      -180deg,
      #ff5c6c,
      #f03346 50%,
      #ecedee 0,
      #ecedee
    );
  }
}

.page-bounty-header {
  background: linear-gradient(135deg, #ff5c6c, #f03346);
  padding: 0 0 0.933333rem;

  .btn-rule {
    position: absolute;
    z-index: 1;
    top: 0.6rem;
    right: 0;
    width: 1.866667rem;
    padding: 0.106667rem 0;
    border-radius: 1.333333rem 0 0 1.333333rem;
    background: linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0.9) 80%);
    font-size: 0.32rem;
    color: #f03346;
    font-weight: 700;
    line-height: 1.3;
  }
}

.page-bounty-assets {
  padding: 0.666667rem 0 0;
  text-align: center;

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.32rem;
    color: hsla(0, 0%, 100%, 0.9);
    font-weight: 400;
    line-height: 1.5;
  }

  .content {
    display: flex;
    justify-content: center;
  }

  .coin {
    margin: -0.133333rem 0 0;
    align-items: baseline;
  }

  .num {
    font-size: 1.04rem;
    color: #fff;
    font-weight: 400;
    line-height: 1.5;
  }

  .btn {
    margin: 0.133333rem auto 0;
    padding: 0.093333rem 0.4rem;
    font-size: 0.32rem;
    background: #ffe7c3;
    color: #f03346;
    box-shadow: 0 0.266667rem 0.266667rem -0.266667rem rgba(196, 30, 46, 0.4);
  }
}

.page-bounty-data {
  margin: 0.533333rem 0 0;

  .list {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0.4rem;
  }

  .item {
    width: 100%;
    margin: 0 0.066667rem;
    padding: 0.2rem 0 0.066667rem;
    border-radius: 0.106667rem;
    background: hsla(0, 0%, 100%, 0.97);
    text-align: center;
    box-shadow: 0 0.066667rem 0.2rem rgba(180, 25, 41, 0.4);
  }

  .name {
    display: block;
    font-size: 0.32rem;
    color: #958d8c;
    font-weight: 400;
    line-height: 1.5;
  }

  .number {
    display: flex;
    align-items: baseline;
    justify-content: center;
    margin: -0.133333rem 0 0;
    padding: 0.093333rem 0;
    font-size: 0.64rem;
    color: #332a2a;
    font-weight: 400;
    line-height: 1.5;
  }

  .unit {
    font-size: 0.373333rem;
    font-weight: 700;
  }
}

.page-bounty-step {
  background: #fff;

  .icon {
    display: block;
    width: 7.8rem;
    height: 2.106667rem;
    margin: 0 auto;
    background: url(../assets/images/bounty-step.svg) no-repeat 50%;
    background-size: contain;
  }
}

.page-bounty-section {
  margin: -0.466667rem 0 0;
  padding: 0 0 0.933333rem;
  border-radius: 0.466667rem 0.466667rem 0 0;
  background: #fff;
}

.page-bounty-section-header,
.page-bounty-section-header .left {
  display: flex;
  align-items: center;
}

.page-bounty-section-header {
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 0.333333rem 0;

  .left {
    padding: 0 0 0 0.4rem;

    .title {
      display: flex;
      align-items: center;
      font-size: 0.373333rem;
      color: #332a2a;
      font-weight: 700;
      line-height: 1.5;

      &:before {
        content: "";
        flex-shrink: 0;
        margin: 0 0.133333rem 0 0;
        width: 0.08rem;
        height: 0.4rem;
        background: linear-gradient(180deg, rgba(240, 51, 70, 0.7), #f03346);
        border-radius: 1.333333rem;
      }
    }
  }

  .right {
    padding: 0 0.4rem 0 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}

.page-bounty-record {
  background: #faf7f8;
  min-height: calc(100vh - 12.26667rem);
}

.page-bounty-record-list {
  margin: 0 0.4rem;
}

.page-bounty .not-record {
  padding: 0.4rem 0;
  font-size: 0.32rem;
  color: #958d8c;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
}

.page-coinRecord-fixed-footer {
  position: fixed;
  z-index: 10;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.266667rem 0.533333rem;
  box-sizing: border-box;
  width: 100%;
  background: hsla(0, 0%, 100%, 0.98);
  border-radius: 0.266667rem 0.266667rem 0 0;
  box-shadow: 0 -0.093333rem 0.2rem rgba(0, 0, 0, 0.05);

  .btn {
    background: #f03346;
    border-radius: 1.333333rem;
  }
}
</style>
