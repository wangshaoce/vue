<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="UDID" width="95">
        <template slot-scope="scope">
          {{ scope.row.uuid }}
        </template>
      </el-table-column>
      <el-table-column label="设备名称" width="200">
        <template slot-scope="scope">
          {{ scope.row.mobile_name }}
        </template>
      </el-table-column>
      <el-table-column label="设备品牌" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.mobile_brand }}</span>
        </template>
      </el-table-column>
      <el-table-column label="设备平台" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.platform }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="设备分辨率" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.resolution_radio }}
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="设备版本" width="200">
        <template slot-scope="scope">
          {{ scope.row.version }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="设备状态" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="远程访问" width="200" align="center">
        <template slot-scope="scope">
          <el-button type="primary" round @click="gotoscrcpy(scope.row.scrcpy_url)">操作</el-button>
<!--          {{ scope.row.scrcpy_url }}-->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/table'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        0: 'success',
        draft: 'gray',
        1: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true,
      url: null
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      var that = this
      getList().then(response => {
        console.log(response.data.items.scrcpy_url)
        that.list = response.data.items
        // that.url = response.data.items.scrcpy_url
        that.listLoading = false
      })
    },
    gotoscrcpy(scrc) {
      // window.alert(scrc)
      window.open(scrc, '_blank')
    }
  }
}
</script>
