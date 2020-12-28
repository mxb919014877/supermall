<template>
  <div>
    <scroll class="content">
      <ul>
        <li>个人信息1</li>
        <li>个人信息2</li>
        <li>个人信息3</li>
        <li>个人信息4</li>
        <li>个人信息5</li>
        <li>个人信息6</li>
        <li>个人信息7</li>
        <li>个人信息8</li>
        <li>个人信息9</li>
        <li>个人信息10</li>
        <li>个人信息11</li>
        <li>个人信息12</li>
        <li>个人信息13</li>
        <li>个人信息14</li>
        <li>个人信息15</li>
        <li>个人信息16</li>
        <li>个人信息17</li>
        <li>个人信息18</li>
        <li>个人信息19</li>
        <li>个人信息20</li>
      </ul>
    </scroll>
  </div>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'
  export default {
    name: "Profile",
    components: {
      Scroll
    }
  }
</script>

<style scoped>
  .content {
    height: 300px;
    background-color: #bfa;
    overflow: hidden;
  }
</style>