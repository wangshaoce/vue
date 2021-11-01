<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="140px">
      <el-form-item label="测试计划">
        <el-input v-model="form.name" style="width: 600px"/>
      </el-form-item>
      <el-form-item label="执行时间">
        <el-select v-model="form.region" placeholder="选择执行时长">
          <el-option label="1 小时" value="60" />
          <el-option label="2 小时" value="120" />
          <el-option label="4 小时" value="240" />
          <el-option label="6 小时" value="360" />
          <el-option label="12 小时" value="720" />
          <el-option label="24 小时" value="1440" />
        </el-select>
      </el-form-item>
      <el-form-item label="执行设备">
        <el-select v-model="form.region" placeholder="请选择执行设备">
          <el-option label="1 小时" value="60" />
          <el-option label="2 小时" value="120" />
          <el-option label="4 小时" value="240" />
          <el-option label="6 小时" value="360" />
          <el-option label="12 小时" value="720" />
          <el-option label="24 小时" value="1440" />
        </el-select>
      </el-form-item>
      <el-form-item label="系统权限" width="100px">
        <el-switch v-model="form.delivery" />
      </el-form-item>
      <el-form-item label="执行间隔">
        <el-input v-model="form.gap" width="200" style="width: 200px"/>
        <span style="color: #99a9bf;margin-left: 10px;font-size: 15px">ms/次</span>
      </el-form-item>
      <el-form-item label="是否启用白名单" width="100px">
        <el-switch v-model="form.whitelist" />
        <span style="color: #ff0b2f;margin-left: 20px;font-size: 20px" v-show="form.whitelist!=true">建议启用</span>
      </el-form-item>
      <el-form-item label="页面白名单" v-show="form.whitelist">
        <el-input v-model="form.desc" type="textarea" rows='16'/>
        <p></p>
        <p style=" font-size: 15px;color: crimson">请严格按照预设值设置白名单，否则白名单功能将不可用!</p>
        <p style=" font-size: 15px;color: crimson">非特殊需求请勿修改此处白名单</p>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        whitelist: true,
        type: [],
        resource: '',
        desc: 'com.bilibili.bililive.videoliveplayer.ui.live.LiveAllActivity\n' +
          'com.bilibili.bililive.videoliveplayer.ui.live.area.LiveAreaActivity\n' +
          'com.bilibili.bililive.videoliveplayer.ui.live.area.LiveAreaVideoListActivity\n' +
          'com.bilibili.bililive.videoliveplayer.ui.live.center.LiveExchangeSilverActivity\n' +
          'com.bilibili.bililive.videoliveplayer.ui.live.search.LiveSearchActivity\n' +
          'com.bilibili.bililive.videoliveplayer.ui.live.tag.LiveAllTagActivity\n' +
          'com.bilibili.bililive.videoliveplayer.ui.live.center.LivePayRecordActivity\n' +
          'com.bilibili.bililive.videoliveplayer.ui.livecenter.LiveBp2GoldActivity\n' +
          'com.bilibili.bililive.videoliveplayer.ui.live.center.LiveRenewCardLogActivity\n' +
          'com.bilibili.bililive.videoliveplayer.ui.live.center.LiveAwardsActivity\n' +
          'com.bilibili.bililive.room.ui.roomv3.LiveRoomActivityV3\n' +
          'com.bilibili.bililive.room.ui.record.LiveRecordRoomActivity\n' +
          'com.bilibili.bililive.room.ui.live.roomv3.LiveCopyRightActivity\n' +
          'com.bilibili.bililive.room.ui.live.roomv3.LiveAnchorDescActivity\n' +
          'com.bililive.bililive.infra.hybrid.ui.WebViewActivity\n' +
          'com.bilibili.bililive.console.items.qrcode.activity.CaptureActivity',
        gap: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$message('submit!')
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

