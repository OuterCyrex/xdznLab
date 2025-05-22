<template>
  <div class="introduction-container">
    <div id="team-introduction">
      <div class="title">团队介绍</div>
      <div class="description">
        <p>
          <strong>虚动智能</strong> 团队组建于2019年，是一个年轻而又具有活力的团队，团队学习方向广泛，鼓励队员们自由发展，成员之间积极交流经验，互相学习沟通。</p>

          <p>无论你是刚刚入门的编程小白，还是有一定经验的技术达人，只要你对技术充满热爱，对未来充满期待，<strong>虚动智能</strong> 欢迎你的加入。在这大学四年，和我们一起挑战自我，突破极限，共同创造无限可能！期待你的加入，让我们一起编写未来的代码。</p>

        <div class="subsection">
          <div class="subtitle">研究方向</div>
          <ul>
            <li>人工智能与机器学习（AI & Machine Learning）</li>
            <li>计算机图形学与可视化（Computer Graphics & Visualization）</li>
            <li>Unity 游戏开发（Game Development with Unity）</li>
            <li>Web 前端开发（Web Frontend Development）</li>
            <li>Java / Golang 后端开发（Java / Golang Backend & DevOps）</li>

          </ul>
        </div>

        <div class="subsection">
          <div class="subtitle">成员特色</div>
          <ul>
            <li>由计算机与软件学院优秀本科生组成</li>
            <li>参与多个国家级/省级竞赛并取得优异成绩</li>
            <li>具备扎实的编程能力与科研素养</li>
            <li>团队氛围融洽，注重协作与分享</li>
          </ul>
        </div>

        <div class="subsection">
          <div class="subtitle">奖项与成绩</div>
          <ul>
            <li>泰迪杯全国一等奖，蓝桥杯全国二等奖，大学生数学建模全国二等奖，ISCC全国三等奖，四川省大学生国际创业大赛，服务外包，校级开放性实验重点项目，盛特杯等众多奖项</li>
            <li>部分优秀成员进入了 四川大学、电子科技大学、西南交通大学 等众多知名学府深造</li>
            <li>部分优秀成员加入了 字节跳动、百度、中国联通 等业界领先企业并获得了高薪且具有发展前景的职位</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.introduction-container {
  min-width: 56vw;
  padding: 40px;
  border-radius: 12px;
  font-family: "Segoe UI", "PingFang SC", sans-serif;
  color: #333;
  line-height: 1.8;
}

#team-introduction {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.title {
  margin-bottom: 24px;
  font-size: 28px;
  font-weight: 700;
  color: #2c3e50;
  border-left: 6px solid #00c4cc;
  padding-left: 12px;
}

.description {
  font-size: 16px;
  color: #444;
  max-width: 880px;
}

.description p {
  margin-bottom: 16px;
  text-indent: 2em;
}

.subsection {
  margin-top: 24px;
}

.subtitle {
  font-size: 20px;
  font-weight: 600;
  color: #008080;
  margin-bottom: 12px;
}

ul {
  padding-left: 2em;
  margin: 0;
}

ul li {
  margin-bottom: 8px;
}
</style>

