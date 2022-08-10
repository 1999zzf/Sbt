<!--  -->
<template>
  <div class="content">
    <v_headerTitle />
    <div class="content-body">
      <div class="c-body-left">
        <!-- 非5面 -->
        <div style="width: 350px">
          <el-row v-show="fromParams.jcgmd != '星程吉月五面扫RFID'">
            <el-col style="height: 100%" :span="24">
              <el-row style="height: 100%">
                <el-col style="height: 100%" :span="24">
                  <el-form
                    style="padding: 5px 10px; margin: 10px 10px"
                    :label-width="lang == 'zh' ? '100px' : '110px'"
                  >
                    <!-- <el-form-item :label="lang == 'zh' ? '当前面单' : 'Bill'">
                      <div v-show="lang == 'zh'" class="span-change">
                        {{ fromParams.jcgmd }}
                      </div>
                      <div v-show="lang == 'en'" class="span-change">
                        {{
                          fromParams.jcgmd == "1"
                            ? "Arrival Bill"
                            : "Dispatch Bill"
                        }}
                      </div>
                    </el-form-item> -->
                    <el-form-item :label="lang == 'zh' ? '员工号' : 'EMID'">
                      <el-input
                        :disabled="true"
                        :placeholder="lang == 'zh' ? '员工号' : 'EMID'"
                        v-model="fromParams.user"
                      ></el-input>
                    </el-form-item>
                    <el-form-item
                      :label="lang == 'zh' ? '指定格口' : 'Set Direction'"
                    >
                      <el-input
                        :disabled="true"
                        :placeholder="lang == 'zh' ? '暂无数据' : 'No Data'"
                        v-model="zdgk"
                      ></el-input>
                    </el-form-item>

                    <el-form-item
                      :label="lang == 'zh' ? '运单编号' : 'Bill Number'"
                    >
                      <el-input
                        :disabled="true"
                        :placeholder="lang == 'zh' ? '暂无数据' : 'No Data'"
                        v-model="ydbh"
                        type="textarea"
                      ></el-input>
                    </el-form-item>
                    <el-form-item :label="lang == 'zh' ? '重量值' : 'Weight'">
                      <el-input
                        :disabled="true"
                        :placeholder="lang == 'zh' ? '暂无数据' : 'No Data'"
                        v-model="upzlz"
                      ></el-input>
                    </el-form-item>
                    <el-form-item
                      :label="lang == 'zh' ? '分拣条数' : 'Total quantity'"
                    >
                      <el-input
                        :disabled="true"
                        :placeholder="
                          lang == 'zh' ? '分拣条数' : 'Total quantity'
                        "
                        v-model="count"
                      ></el-input>
                    </el-form-item>
                  </el-form>
                </el-col>
                <el-col :span="24">
                  <div class="button-change">
                    <el-button
                      @click="goLast()"
                      style="color: #fff; width: 300px"
                      type="danger"
                      >{{ lang == "zh" ? "退 出" : "sign out" }}</el-button
                    >
                  </div>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </div>
        <!-- 5面 -->
        <div style="width: 350px">
          <el-row v-show="fromParams.jcgmd == '星程吉月五面扫RFID'">
            <el-col style="height: 100%" :span="24">
              <el-row>
                <el-col style="height: 100%" :span="24">
                  <el-form
                    :inline="true"
                    style="margin: 10px 10px"
                    :label-width="lang == 'zh' ? '100px' : '110px'"
                  >
                    <!-- <el-form-item :label="lang == 'zh' ? '当前面单' : 'Bill'">
                      <div v-show="lang == 'zh'" class="span-change">
                        {{ fromParams.jcgmd }}
                      </div>
                      <div v-show="lang == 'en'" class="span-change">
                        {{
                          fromParams.jcgmd == "1"
                            ? "Arrival Bill"
                            : "Dispatch Bill"
                        }}
                      </div>
                    </el-form-item> -->
                    <el-form-item :label="lang == 'zh' ? '员工号' : 'EMID'">
                      <el-input
                        :disabled="true"
                        :placeholder="lang == 'zh' ? '员工号' : 'EMID'"
                        v-model="fromParams.user"
                      ></el-input>
                    </el-form-item>

                    <el-form-item
                      :label="lang == 'zh' ? '运单编号' : 'Bill Number'"
                    >
                      <el-input
                        :disabled="true"
                        :placeholder="lang == 'zh' ? '暂无数据' : 'No Data'"
                        v-model="ydbh"
                        type="textarea"
                      ></el-input>
                    </el-form-item>
                    <el-form-item
                      :label="lang == 'zh' ? 'RFID编号' : 'RFID number'"
                    >
                      <el-input
                        :disabled="true"
                        :placeholder="lang == 'zh' ? '暂无数据' : 'No Data'"
                        v-model="rfid"
                      ></el-input>
                    </el-form-item>
                    <el-form-item
                      :label="lang == 'zh' ? '容器编号' : 'Container number'"
                    >
                      <el-input
                        :disabled="true"
                        :placeholder="lang == 'zh' ? '暂无数据' : 'No Data'"
                        v-model="rqbh"
                      ></el-input>
                    </el-form-item>

                    <el-form-item
                      :label="lang == 'zh' ? '任务号' : 'Task number'"
                    >
                      <el-input
                        :disabled="true"
                        :placeholder="lang == 'zh' ? '任务号' : 'Task number'"
                        v-model="taskNo"
                      ></el-input>
                    </el-form-item>
                    <el-form-item
                      :label="lang == 'zh' ? '分拣条数' : 'Total quantity'"
                    >
                      <el-input
                        :disabled="true"
                        :placeholder="
                          lang == 'zh' ? '分拣条数' : 'Total quantity'
                        "
                        v-model="count"
                      ></el-input>
                    </el-form-item>
                  </el-form>
                </el-col>
                <el-col :span="24">
                  <div class="button-change">
                    <el-button
                      @click="goLast()"
                      style="color: #fff; width: 300px"
                      type="danger"
                      >{{ lang == "zh" ? "退 出" : "sign out" }}</el-button
                    >
                  </div>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="body-right">
        <!-- 非5面 -->
        <div
          v-show="fromParams.jcgmd != '星程吉月五面扫RFID'"
          :style="{ height: '450px', width: tableHeightNonWidth + 'px' }"
          class="on-video"
        >
          <img
            style="width: 100%; height: 100%"
            :src="bmpImg"
            :alt="lang == 'zh' ? '相机连接失败' : 'Camera connecting failure'"
          />
        </div>
        <div
          style="margin-top: 10px; margin-bottom: 5px"
          v-show="fromParams.jcgmd != '星程吉月五面扫RFID'"
          :style="{
            height: tableHeightNonHeight + 'px',
            width: tableHeightNonWidth + 'px',
          }"
        >
          <el-table :height="tableHeightNonHeight" :data="tableData" stripe>
            <el-table-column
              align="center"
              prop="ydbh"
              :label="lang == 'zh' ? '运单编号' : 'Bill Number'"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="sbth"
              :label="lang == 'zh' ? '上包台号' : 'Table Number'"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="zlz"
              :label="lang == 'zh' ? '重量值' : 'Weight'"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="sbsj"
              :label="lang == 'zh' ? '上包时间' : 'Time'"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="gk"
              :label="lang == 'zh' ? '指定格口' : 'latticeNo'"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="pstp"
              :label="lang == 'zh' ? '拍摄图片' : 'Picture'"
            ></el-table-column>
          </el-table>
        </div>
        <!-- 5面扫 -->
        <div
          v-show="fromParams.jcgmd == '星程吉月五面扫RFID'"
          :style="{
            height: tableHeight5Height + 'px',
            width: tableHeight5Width + 'px',
          }"
          class="body-down"
        >
          <el-table :height="tableHeight5Height" :data="tableData2" stripe>
            <el-table-column
              align="center"
              prop="ydbh"
              :label="lang == 'zh' ? '运单编号' : 'Bill Number'"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="sbth"
              :label="lang == 'zh' ? '上包台号' : 'Table Number'"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="rfid"
              :label="lang == 'zh' ? 'RFID编号' : 'RFID number'"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="rqbh"
              :label="lang == 'zh' ? '容器编号' : 'Container number'"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="rwh"
              :label="lang == 'zh' ? '任务号' : 'Task number'"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="sbsj"
              :label="lang == 'zh' ? '上包时间' : 'Time'"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="gk"
              :label="lang == 'zh' ? '指定格口' : 'latticeNo'"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="sjgk"
              :label="lang == 'zh' ? '实际格口' : 'actLatticeNo'"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="pstp"
              :label="lang == 'zh' ? '拍摄图片' : 'Picture'"
            >
              <template slot-scope="scope">
                <el-button
                  @click="handleClick(scope.row), (dialogVisible = true)"
                  type="text"
                  size="small"
                  >查看</el-button
                >
                <el-dialog
                  :visible.sync="dialogVisible"
                  :append-to-body="true"
                  width="30%"
                >
                  <img
                    :src="`${url + '?' + now}`"
                    alt=""
                    width="544"
                    height="364"
                  />
                </el-dialog>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <!-- <el-image  :src="require('D://table//images//1121.jpg')" style="width: 100px;height:100px;display: block;margin-bottom: 20px" /> -->
    <!-- <div class="table-audio">
      <div class="iclose">
        是否开启声音
        <i
          style="float:right;height:40px;line-height: 40px;cursor: pointer;"
          class="el-icon-close"
        ></i>
      </div>
      <audio style="height: 0" controls="controls" id="audio" preload>
        <source src="../assets/tips.wav" />
      </audio>
      <div class="content-word">
        <span @click="aplayAudio">确定</span>
      </div>
    </div>-->
  </div>
</template>

<script>
let that;
import v_headerTitle from "./headerTitle.vue";
export default {
  inject: ["reload"],
  components: { v_headerTitle },
  data() {
    return {
      fromParams: {},
      zdgk: "",
      ts: "",
      ydbh: "",
      taskNo: "",
      zlz: "",
      upzlz: "",
      url: "",
      tableHeight: "",
      tableHeight2: "",
      pstp: "",
      dialogVisible: false,
      tableData: [],
      tableData2: [
        // {
        //   ydbh: "194955751268,194955751268,194955751268",
        //   sbth: "887878787878787",
        //   rfid: "487878787878",
        //   rqbh: "48787878787",
        //   rwh: "1121",
        //   sbsj: "2021/10/26 17:10:04",
        // },
        //  {
        //   ydbh: "194955751268,194955751268,194955751268",
        //   sbth: "887878787878787",
        //   rfid: "487878787878",
        //   rqbh: "48787878787",
        //   rwh: "1123",
        //   sbsj: "2021/10/26 17:10:04",
        // },
      ],
      // imgs: [{ pstp: require("@/assets/1121.jpg") }],
      count: sessionStorage.getItem("length"),
      nowDateTime: "",
      bmpImg: "",
      ydname: "",
      updateTime: "",
      table: [],
      lang: "zh",
      audio: "",
      gk: "",
      sjgk: "",
      rfid: "",
      rqbh: "",
      tableHeight5Height: document.documentElement.clientHeight - 41,
      tableHeight5Width: document.documentElement.clientWidth - 355,
      tableHeightNonHeight: document.documentElement.clientHeight - 503,
      tableHeightNonWidth: document.documentElement.clientWidth - 420,
    };
  },
  computed: {
    now() {
      return Date.now();
    },
  },

  // watch: {
  //   tableHeight5(val) {
  //     let that = this;
  //     console.log("实时屏幕高度：", val, that.tableHeight5);
  //   },
  //   windowWidth(val) {
  //     let that = this;
  //     console.log("实时屏幕宽度：", val, that.windowHeight);
  //   },
  // },

  mounted() {
    that = this;
    window.onresize = () => {
      return (() => {
        window.fullHeight = document.documentElement.clientHeight;
        window.fullWidth = document.documentElement.clientWidth;
        that.tableHeight5Height = window.fullHeight - 41;
        that.tableHeight5Width = window.fullWidth - 355;
        that.tableHeightNonHeight = window.fullHeight - 503;
        that.tableHeightNonWidth = window.fullWidth - 420;
      })();
      // if (that.fromParams.jcgmd == "星程吉月五面扫RFID") {
      //   return (() => {
      //     that.tableHeight = window.innerHeight - 45;
      //   })();
      // } else {
      //   return (() => {
      //     that.tableHeight =
      //       window.innerHeight - window.innerHeight * 0.55 - 40;
      //     that.tableHeight2 =
      //       window.innerHeight - window.innerHeight * 0.45 - 30;
      //   })();
      // }
    };

    // setInterval(function () {
    //   that.audio.play();
    //   that.audio.currentTime = 0;
    //   console.log('ding')
    // }, 4000);

    // this.$notify({
    //   title: "是否播放提示音?",
    //   dangerouslyUseHTMLString: true,
    //   message:
    //     "<strong @click='aplayAudio' style='cursor:pointer'>播放</strong>",
    //   duration: 0,
    // });
    that.fromParams = JSON.parse(sessionStorage.getItem("login"));
    that.clearCount(23, 59, 59);
    that.createSocket(
      "ws://" + JSON.parse(sessionStorage.getItem("login")).sbtip + ":8099"
    );
    this.sendMsg((ev) => {
      if (that.fromParams.jcgmd == "星程吉月五面扫RFID") {
        //5面扫逻辑判断
        if (JSON.parse(sessionStorage.getItem("table")) === null) {
          that.tableData2 = [];
        } else {
          that.tableData2 = JSON.parse(sessionStorage.getItem("table"));
        }
        if (sessionStorage.getItem("length") === null) {
          sessionStorage.setItem("length", 0);
        }
        // that.bmpImg = JSON.parse(ev.data).image;
        that.taskNo = JSON.parse(ev.data).taskNo
          ? JSON.parse(ev.data).taskNo
          : "暂无数据";
        that.ydbh = JSON.parse(ev.data).waybillNoList
          ? JSON.parse(ev.data).waybillNoList[0]
          : "暂无数据";
        // that.upzlz = JSON.parse(ev.data).weight;
        that.rfid = JSON.parse(ev.data).rfidCode
          ? JSON.parse(ev.data).rfidCode
          : "暂无数据";
        that.rqbh = JSON.parse(ev.data).containerCode
          ? JSON.parse(ev.data).containerCode
          : "暂无数据";

        if (that.tableData2 && that.tableData2.length < 450) {
          if (JSON.parse(ev.data).waybillNoList) {
            for (
              var i2 = 0;
              i2 < JSON.parse(ev.data).waybillNoList.length;
              i2++
            ) {
              that.ydname += JSON.parse(ev.data).waybillNoList[i2] + ",";
            }
            let date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();
            let week = date.getDay();
            let weekArr = [
              "星期日",
              "星期一",
              "星期二",
              "星期三",
              "星期四",
              "星期五",
              "星期六",
            ];
            let hour = date.getHours();
            hour = hour < 10 ? "0" + hour : hour;
            let minute = date.getMinutes();
            minute = minute < 10 ? "0" + minute : minute;
            let second = date.getSeconds();
            second = second < 10 ? "0" + second : second;
            that.updateTime = `${year}/${month}/${day} ${hour}:${minute}:${second} ${weekArr[week]}`;
            if (that.tableData2.length && that.tableData2.length > 0) {
              if (JSON.parse(ev.data).type === 0) {
                that.tableData2.unshift({
                  ydbh: that.ydname.substring(0, that.ydname.length - 1),
                  sbth: JSON.parse(sessionStorage.getItem("login")).sbtbh,
                  rwh: JSON.parse(ev.data).taskNo
                    ? JSON.parse(ev.data).taskNo
                    : "暂无数据",
                  // zlz: JSON.parse(ev.data).weight,
                  rfid: JSON.parse(ev.data).rfidCode
                    ? JSON.parse(ev.data).rfidCode
                    : "暂无数据",
                  rqbh: JSON.parse(ev.data).containerCode
                    ? JSON.parse(ev.data).containerCode
                    : "暂无数据",
                  sbsj: that.updateTime,
                });
              } else if (JSON.parse(ev.data).type === 1) {
                const table = JSON.parse(sessionStorage.getItem("table"));
                // const {} = data; // 返回数据
                let str = table;
                for (let i = 0; i < str.length; i++) {
                  if (JSON.parse(ev.data).taskNo === str[i].rwh) {
                    if (str[i].gk === undefined && str[i].sjgk === undefined) {
                      str[i].gk = JSON.parse(ev.data).latticeNo;
                      str[i].sjgk = JSON.parse(ev.data).actLatticeNo;
                    } else if (
                      str[i].gk !== undefined &&
                      str[i].sjgk === undefined
                    ) {
                      str[i].sjgk = JSON.parse(ev.data).actLatticeNo;
                    } else if (
                      str[i].gk === undefined &&
                      str[i].sjgk !== undefined
                    ) {
                      str[i].gk = JSON.parse(ev.data).latticeNo;
                    }
                  }
                }
                sessionStorage.setItem("table", JSON.stringify(str));
                that.tableData2 = JSON.parse(sessionStorage.getItem("table"));
              }
              //不再添加指定格口
              // zdgk: JSON.parse(ev.data).latticeNo,
              // that.tableData2.unshift({
              //   ydbh: that.ydname.substring(0, that.ydname.length - 1),
              //   sbth: JSON.parse(sessionStorage.getItem("login")).sbtbh,
              //   rwh: JSON.parse(ev.data).taskNo
              //     ? JSON.parse(ev.data).taskNo
              //     : "暂无数据",
              //   // zlz: JSON.parse(ev.data).weight,
              //   rfid: JSON.parse(ev.data).rfidCode
              //     ? JSON.parse(ev.data).rfidCode
              //     : "暂无数据",
              //   rqbh: JSON.parse(ev.data).containerCode
              //     ? JSON.parse(ev.data).containerCode
              //     : "暂无数据",
              //   sbsj: that.updateTime,
              // });
              sessionStorage.setItem(
                "length",
                parseInt(sessionStorage.getItem("length")) + 1
              ); //每次添加缓存数据加一
              that.ydbh = that.tableData2[0].ydbh;
              // that.zdgk = that.tableData[0].zdgk;
              that.count = that.tableData2.length;
              that.ydname = "";
              sessionStorage.setItem("table", JSON.stringify(that.tableData2));
            } else {
              // 修改不再添加格口信息
              // zdgk: JSON.parse(ev.data).latticeNo,
              that.tableData2.unshift({
                ydbh: that.ydname.substring(0, that.ydname.length - 1),
                sbth: JSON.parse(sessionStorage.getItem("login")).sbtbh,
                zlz: JSON.parse(ev.data).weight,
                rwh: JSON.parse(ev.data).taskNo
                  ? JSON.parse(ev.data).taskNo
                  : "暂无数据",
                rfid: JSON.parse(ev.data).rfidCode
                  ? JSON.parse(ev.data).rfidCode
                  : "暂无数据",
                rqbh: JSON.parse(ev.data).containerCode
                  ? JSON.parse(ev.data).containerCode
                  : "暂无数据",
                sbsj: that.updateTime,
              });
              sessionStorage.setItem(
                "length",
                parseInt(sessionStorage.getItem("length")) + 1
              ); //每次添加缓存数据加一

              that.ydbh = that.tableData2[0].ydbh;
              that.count = that.tableData2.length;
              // that.zdgk = that.tableData[0].zdgk;
              that.ydname = "";
              sessionStorage.setItem("table", JSON.stringify(that.tableData2));
            }
          } else {
            let date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();
            let week = date.getDay();
            let weekArr = [
              "星期日",
              "星期一",
              "星期二",
              "星期三",
              "星期四",
              "星期五",
              "星期六",
            ];
            let hour = date.getHours();
            hour = hour < 10 ? "0" + hour : hour;
            let minute = date.getMinutes();
            minute = minute < 10 ? "0" + minute : minute;
            let second = date.getSeconds();
            second = second < 10 ? "0" + second : second;
            that.updateTime = `${year}/${month}/${day} ${hour}:${minute}:${second} ${weekArr[week]}`;
            if (that.tableData2.length && that.tableData2.length > 0) {
              if (JSON.parse(ev.data).type === 0) {
                that.tableData2.unshift({
                  ydbh: that.ydname.substring(0, that.ydname.length - 1),
                  sbth: JSON.parse(sessionStorage.getItem("login")).sbtbh,
                  rwh: JSON.parse(ev.data).taskNo
                    ? JSON.parse(ev.data).taskNo
                    : "暂无数据",
                  // zlz: JSON.parse(ev.data).weight,
                  rfid: JSON.parse(ev.data).rfidCode
                    ? JSON.parse(ev.data).rfidCode
                    : "暂无数据",
                  rqbh: JSON.parse(ev.data).containerCode
                    ? JSON.parse(ev.data).containerCode
                    : "暂无数据",
                  sbsj: that.updateTime,
                });
              } else if (JSON.parse(ev.data).type === 1) {
                // console.log(JSON.parse(ev.data).actLatticeNo)
                // console.log(JSON.parse(ev.data).latticeNo)
                const table = JSON.parse(sessionStorage.getItem("table"));
                // const {} = data; // 返回数据
                let str = table;
                for (let i = 0; i < str.length; i++) {
                  if (JSON.parse(ev.data).taskNo === str[i].rwh) {
                    if (str[i].gk === undefined && str[i].sjgk === undefined) {
                      str[i].gk = JSON.parse(ev.data).latticeNo;
                      str[i].sjgk = JSON.parse(ev.data).actLatticeNo;
                    } else if (
                      str[i].gk !== undefined &&
                      str[i].sjgk === undefined
                    ) {
                      str[i].sjgk = JSON.parse(ev.data).actLatticeNo;
                    } else if (
                      str[i].gk === undefined &&
                      str[i].sjgk !== undefined
                    ) {
                      str[i].gk = JSON.parse(ev.data).latticeNo;
                    }
                  }
                }
                sessionStorage.setItem("table", JSON.stringify(str));
                that.tableData2 = JSON.parse(sessionStorage.getItem("table"));
              }
              sessionStorage.setItem(
                "length",
                parseInt(sessionStorage.getItem("length")) + 1
              ); //每次添加缓存数据加一
              that.ydbh = that.tableData2[0].ydbh;
              // that.zdgk = that.tableData[0].zdgk;
              that.count = that.tableData2.length;
              that.ydname = "";
              sessionStorage.setItem("table", JSON.stringify(that.tableData2));
            } else {
              // 修改不再添加格口信息
              // zdgk: JSON.parse(ev.data).latticeNo,
              that.tableData2.unshift({
                ydbh: that.ydname.substring(0, that.ydname.length - 1),
                sbth: JSON.parse(sessionStorage.getItem("login")).sbtbh,
                zlz: JSON.parse(ev.data).weight,
                rwh: JSON.parse(ev.data).taskNo
                  ? JSON.parse(ev.data).taskNo
                  : "暂无数据",
                rfid: JSON.parse(ev.data).rfidCode
                  ? JSON.parse(ev.data).rfidCode
                  : "暂无数据",
                rqbh: JSON.parse(ev.data).containerCode
                  ? JSON.parse(ev.data).containerCode
                  : "暂无数据",
                sbsj: that.updateTime,
              });
              sessionStorage.setItem(
                "length",
                parseInt(sessionStorage.getItem("length")) + 1
              ); //每次添加缓存数据加一

              that.ydbh = that.tableData2[0].ydbh;
              that.count = that.tableData2.length;
              // that.zdgk = that.tableData[0].zdgk;
              that.ydname = "";
              sessionStorage.setItem("table", JSON.stringify(that.tableData2));
            }
          }
        } else {
          if (JSON.parse(ev.data).waybillNoList) {
            for (
              var ii2 = 0;
              ii2 < JSON.parse(ev.data).waybillNoList.length;
              ii2++
            ) {
              that.ydname += JSON.parse(ev.data).waybillNoList[ii2] + ",";
            }
            let date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();
            let week = date.getDay();
            let weekArr = [
              "星期日",
              "星期一",
              "星期二",
              "星期三",
              "星期四",
              "星期五",
              "星期六",
            ];
            let hour = date.getHours();
            hour = hour < 10 ? "0" + hour : hour;
            let minute = date.getMinutes();
            minute = minute < 10 ? "0" + minute : minute;
            let second = date.getSeconds();
            second = second < 10 ? "0" + second : second;
            that.updateTime = `${year}/${month}/${day} ${hour}:${minute}:${second} ${weekArr[week]}`;
            // //zdgk: JSON.parse(ev.data).latticeNo,去除指定格口判断
            that.tableData2.unshift({
              ydbh: that.ydname.substring(0, that.ydname.length - 1),
              sbth: JSON.parse(sessionStorage.getItem("login")).sbtbh,
              zlz: JSON.parse(ev.data).weight,
              rwh: JSON.parse(ev.data).taskNo
                ? JSON.parse(ev.data).taskNo
                : "暂无数据",
              rfid: JSON.parse(ev.data).rfidCode
                ? JSON.parse(ev.data).rfidCode
                : "暂无数据",
              rqbh: JSON.parse(ev.data).containerCode
                ? JSON.parse(ev.data).containerCode
                : "暂无数据",
              sbsj: that.updateTime,
            });
            sessionStorage.setItem(
              "length",
              parseInt(sessionStorage.getItem("length")) + 1
            ); //每次添加缓存数据加一

            that.ydbh = that.tableData2[0].ydbh;
            // that.zdgk = that.tableData[0].zdgk;
            that.count = that.tableData2.length;
            that.ydname = "";
            sessionStorage.setItem("table", JSON.stringify(that.tableData2));
            that.tableData2.pop();
          } else {
            let date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();
            let week = date.getDay();
            let weekArr = [
              "星期日",
              "星期一",
              "星期二",
              "星期三",
              "星期四",
              "星期五",
              "星期六",
            ];
            let hour = date.getHours();
            hour = hour < 10 ? "0" + hour : hour;
            let minute = date.getMinutes();
            minute = minute < 10 ? "0" + minute : minute;
            let second = date.getSeconds();
            second = second < 10 ? "0" + second : second;
            that.updateTime = `${year}/${month}/${day} ${hour}:${minute}:${second} ${weekArr[week]}`;
            // //zdgk: JSON.parse(ev.data).latticeNo,去除指定格口判断
            that.tableData2.unshift({
              ydbh: that.ydname.substring(0, that.ydname.length - 1),
              sbth: JSON.parse(sessionStorage.getItem("login")).sbtbh,
              zlz: JSON.parse(ev.data).weight,
              rwh: JSON.parse(ev.data).taskNo
                ? JSON.parse(ev.data).taskNo
                : "暂无数据",
              rfid: JSON.parse(ev.data).rfidCode
                ? JSON.parse(ev.data).rfidCode
                : "暂无数据",
              rqbh: JSON.parse(ev.data).containerCode
                ? JSON.parse(ev.data).containerCode
                : "暂无数据",
              sbsj: that.updateTime,
            });
            sessionStorage.setItem(
              "length",
              parseInt(sessionStorage.getItem("length")) + 1
            ); //每次添加缓存数据加一

            that.ydbh = that.tableData2[0].ydbh;
            // that.zdgk = that.tableData[0].zdgk;
            that.count = that.tableData2.length;
            that.ydname = "";
            sessionStorage.setItem("table", JSON.stringify(that.tableData2));
            that.tableData2.pop();
          }
        }
      } else {
        //非5面扫逻辑判断
        if (JSON.parse(sessionStorage.getItem("table")) === null) {
          that.tableData = [];
        } else {
          that.tableData = JSON.parse(sessionStorage.getItem("table"));
        }
        if (sessionStorage.getItem("length") === null) {
          sessionStorage.setItem("length", 0);
        }
        that.bmpImg = JSON.parse(ev.data).image;
        that.ydbh = JSON.parse(ev.data).waybillNoList
          ? JSON.parse(ev.data).waybillNoList[0]
          : "暂无数据";
        that.upzlz = JSON.parse(ev.data).weight;
        that.rfid = JSON.parse(ev.data).rfidCode
          ? JSON.parse(ev.data).rfidCode
          : "暂无数据";
        that.rqbh = JSON.parse(ev.data).containerCode
          ? JSON.parse(ev.data).containerCode
          : "暂无数据";

        if (that.tableData && that.tableData.length < 450) {
          if (JSON.parse(ev.data).waybillNoList) {
            for (var i = 0; i < JSON.parse(ev.data).waybillNoList.length; i++) {
              that.ydname += JSON.parse(ev.data).waybillNoList[i] + ",";
            }
            let date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();
            let week = date.getDay();
            let weekArr = [
              "星期日",
              "星期一",
              "星期二",
              "星期三",
              "星期四",
              "星期五",
              "星期六",
            ];
            let hour = date.getHours();
            hour = hour < 10 ? "0" + hour : hour;
            let minute = date.getMinutes();
            minute = minute < 10 ? "0" + minute : minute;
            let second = date.getSeconds();
            second = second < 10 ? "0" + second : second;
            that.updateTime = `${year}/${month}/${day} ${hour}:${minute}:${second} ${weekArr[week]}`;
            if (that.tableData.length && that.tableData.length > 0) {
              if (
                that.ydname.substring(0, that.ydname.length - 1) ==
                that.tableData[0].ydbh
              ) {
                //不再依据指定格口判断
                that.tableData[0].zdgk = JSON.parse(ev.data).latticeNo;
                that.ydbh = that.tableData[0].ydbh;
                // that.zdgk = that.tableData[0].zdgk;
                that.ydname = "";
                // if (that.tableData[0].zdgk == null) {
                //   that.tableData[0].zdgk = JSON.parse(ev.data).latticeNo;
                //   that.ydbh = that.tableData[0].ydbh;
                //   that.zdgk = that.tableData[0].zdgk;
                //   that.ydname = "";
                // }
              } else {
                //不再添加指定格口
                // zdgk: JSON.parse(ev.data).latticeNo,
                if (JSON.parse(ev.data).type === 0) {
                  that.tableData.unshift({
                    ydbh: that.ydname.substring(0, that.ydname.length - 1),
                    sbth: JSON.parse(sessionStorage.getItem("login")).sbtbh,
                    zlz: JSON.parse(ev.data).weight,
                    // rfid: JSON.parse(ev.data).rfidCode
                    //   ? JSON.parse(ev.data).rfidCode
                    //   : "暂无数据",
                    // rqbh: JSON.parse(ev.data).containerCode
                    //   ? JSON.parse(ev.data).containerCode
                    //   : "暂无数据",
                    sbsj: that.updateTime,
                  });
                } else if (JSON.parse(ev.data).type === 1) {
                  const table = JSON.parse(sessionStorage.getItem("table"));
                  let str = table;
                  for (let i = 0; i < str.length; i++) {
                    if (str[i].gk === undefined) {
                      str[i].gk = JSON.parse(ev.data).latticeNo;
                    }
                  }
                  sessionStorage.setItem("table", JSON.stringify(str));
                  that.tableData = JSON.parse(sessionStorage.getItem("table"));
                }
                that.tableData.unshift({
                  ydbh: that.ydname.substring(0, that.ydname.length - 1),
                  sbth: JSON.parse(sessionStorage.getItem("login")).sbtbh,
                  zlz: JSON.parse(ev.data).weight,
                  // rfid: JSON.parse(ev.data).rfidCode
                  //   ? JSON.parse(ev.data).rfidCode
                  //   : "暂无数据",
                  // rqbh: JSON.parse(ev.data).containerCode
                  //   ? JSON.parse(ev.data).containerCode
                  //   : "暂无数据",
                  sbsj: that.updateTime,
                });
                sessionStorage.setItem(
                  "length",
                  parseInt(sessionStorage.getItem("length")) + 1
                ); //每次添加缓存数据加一
                that.ydbh = that.tableData[0].ydbh;
                // that.zdgk = that.tableData[0].zdgk;
                that.count = that.tableData.length;
                that.ydname = "";
                sessionStorage.setItem("table", JSON.stringify(that.tableData));
              }
            } else {
              // 修改不再添加格口信息
              // zdgk: JSON.parse(ev.data).latticeNo,
              that.tableData.unshift({
                ydbh: that.ydname.substring(0, that.ydname.length - 1),
                sbth: JSON.parse(sessionStorage.getItem("login")).sbtbh,
                zlz: JSON.parse(ev.data).weight,
                // rfid: JSON.parse(ev.data).rfidCode
                //   ? JSON.parse(ev.data).rfidCode
                //   : "暂无数据",
                // rqbh: JSON.parse(ev.data).containerCode
                //   ? JSON.parse(ev.data).containerCode
                //   : "暂无数据",
                sbsj: that.updateTime,
              });
              sessionStorage.setItem(
                "length",
                parseInt(sessionStorage.getItem("length")) + 1
              ); //每次添加缓存数据加一

              that.ydbh = that.tableData[0].ydbh;
              that.count = that.tableData.length;
              // that.zdgk = that.tableData[0].zdgk;
              that.ydname = "";
              sessionStorage.setItem("table", JSON.stringify(that.tableData));
            }
          }
          // else {
          //   let date = new Date();
          //   let year = date.getFullYear();
          //   let month = date.getMonth() + 1;
          //   let day = date.getDate();
          //   let week = date.getDay();
          //   let weekArr = [
          //     "星期日",
          //     "星期一",
          //     "星期二",
          //     "星期三",
          //     "星期四",
          //     "星期五",
          //     "星期六",
          //   ];
          //   let hour = date.getHours();
          //   hour = hour < 10 ? "0" + hour : hour;
          //   let minute = date.getMinutes();
          //   minute = minute < 10 ? "0" + minute : minute;
          //   let second = date.getSeconds();
          //   second = second < 10 ? "0" + second : second;
          //   that.updateTime = `${year}/${month}/${day} ${hour}:${minute}:${second} ${weekArr[week]}`;
          //   if (that.tableData.length && that.tableData.length > 0) {
          //     if (
          //       that.ydname.substring(0, that.ydname.length - 1) ==
          //       that.tableData[0].ydbh
          //     ) {
          //       //不再依据指定格口判断
          //       that.tableData[0].zdgk = JSON.parse(ev.data).latticeNo;
          //       that.ydbh = that.tableData[0].ydbh;
          //       // that.zdgk = that.tableData[0].zdgk;
          //       that.ydname = "";
          //       // if (that.tableData[0].zdgk == null) {
          //       //   that.tableData[0].zdgk = JSON.parse(ev.data).latticeNo;
          //       //   that.ydbh = that.tableData[0].ydbh;
          //       //   that.zdgk = that.tableData[0].zdgk;
          //       //   that.ydname = "";
          //       // }
          //     } else {
          //       //不再添加指定格口
          //       // zdgk: JSON.parse(ev.data).latticeNo,
          //       if (JSON.parse(ev.data).type === 0) {
          //         that.tableData.unshift({
          //           ydbh: that.ydname.substring(0, that.ydname.length - 1),
          //           sbth: JSON.parse(sessionStorage.getItem("login")).sbtbh,
          //           zlz: JSON.parse(ev.data).weight,
          //           // rfid: JSON.parse(ev.data).rfidCode
          //           //   ? JSON.parse(ev.data).rfidCode
          //           //   : "暂无数据",
          //           // rqbh: JSON.parse(ev.data).containerCode
          //           //   ? JSON.parse(ev.data).containerCode
          //           //   : "暂无数据",
          //           sbsj: that.updateTime,
          //         });
          //       } else if (JSON.parse(ev.data).type === 1) {
          //         const table = JSON.parse(sessionStorage.getItem("table"));
          //         let str = table;
          //         for (let i = 0; i < str.length; i++) {
          //           if (str[i].gk === undefined) {
          //             str[i].gk = JSON.parse(ev.data).latticeNo;
          //           }
          //         }
          //         sessionStorage.setItem("table", JSON.stringify(str));
          //         that.tableData = JSON.parse(sessionStorage.getItem("table"));
          //       }
          //       // that.tableData.unshift({
          //       //   ydbh: that.ydname.substring(0, that.ydname.length - 1),
          //       //   sbth: JSON.parse(sessionStorage.getItem("login")).sbtbh,
          //       //   zlz: JSON.parse(ev.data).weight,
          //       //   // rfid: JSON.parse(ev.data).rfidCode
          //       //   //   ? JSON.parse(ev.data).rfidCode
          //       //   //   : "暂无数据",
          //       //   // rqbh: JSON.parse(ev.data).containerCode
          //       //   //   ? JSON.parse(ev.data).containerCode
          //       //   //   : "暂无数据",
          //       //   sbsj: that.updateTime,
          //       // });
          //       sessionStorage.setItem(
          //         "length",
          //         parseInt(sessionStorage.getItem("length")) + 1
          //       ); //每次添加缓存数据加一
          //       that.ydbh = that.tableData[0].ydbh;
          //       // that.zdgk = that.tableData[0].zdgk;
          //       that.count = that.tableData.length;
          //       that.ydname = "";
          //       sessionStorage.setItem("table", JSON.stringify(that.tableData));
          //     }
          //   } else {
          //     // 修改不再添加格口信息
          //     // zdgk: JSON.parse(ev.data).latticeNo,
          //     that.tableData.unshift({
          //       ydbh: that.ydname.substring(0, that.ydname.length - 1),
          //       sbth: JSON.parse(sessionStorage.getItem("login")).sbtbh,
          //       zlz: JSON.parse(ev.data).weight,
          //       // rfid: JSON.parse(ev.data).rfidCode
          //       //   ? JSON.parse(ev.data).rfidCode
          //       //   : "暂无数据",
          //       // rqbh: JSON.parse(ev.data).containerCode
          //       //   ? JSON.parse(ev.data).containerCode
          //       //   : "暂无数据",
          //       sbsj: that.updateTime,
          //     });
          //     sessionStorage.setItem(
          //       "length",
          //       parseInt(sessionStorage.getItem("length")) + 1
          //     ); //每次添加缓存数据加一

          //     that.ydbh = that.tableData[0].ydbh;
          //     that.count = that.tableData.length;
          //     // that.zdgk = that.tableData[0].zdgk;
          //     that.ydname = "";
          //     sessionStorage.setItem("table", JSON.stringify(that.tableData));
          //   }
          // }
        } else {
          if (JSON.parse(ev.data).waybillNoList) {
            for (
              var ii = 0;
              ii < JSON.parse(ev.data).waybillNoList.length;
              ii++
            ) {
              that.ydname += JSON.parse(ev.data).waybillNoList[ii] + ",";
            }
            let date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();
            let week = date.getDay();
            let weekArr = [
              "星期日",
              "星期一",
              "星期二",
              "星期三",
              "星期四",
              "星期五",
              "星期六",
            ];
            let hour = date.getHours();
            hour = hour < 10 ? "0" + hour : hour;
            let minute = date.getMinutes();
            minute = minute < 10 ? "0" + minute : minute;
            let second = date.getSeconds();
            second = second < 10 ? "0" + second : second;
            that.updateTime = `${year}/${month}/${day} ${hour}:${minute}:${second} ${weekArr[week]}`;
            if (
              that.ydname.substring(0, that.ydname.length - 1) ==
              that.tableData[0].ydbh
            ) {
              //不再依据指定格口判断
              that.tableData[0].zdgk = JSON.parse(ev.data).latticeNo;
              that.ydbh = that.tableData[0].ydbh;
              // that.zdgk = that.tableData[0].zdgk;
              that.ydname = "";
              // if (that.tableData[0].zdgk == null) {
              //   that.tableData[0].zdgk = JSON.parse(ev.data).latticeNo;
              //   that.ydbh = that.tableData[0].ydbh;
              //   that.zdgk = that.tableData[0].zdgk;
              //   that.ydname = "";
              // }
            } else {
              //zdgk: JSON.parse(ev.data).latticeNo,去除指定格口判断
              that.tableData.unshift({
                ydbh: that.ydname.substring(0, that.ydname.length - 1),
                sbth: JSON.parse(sessionStorage.getItem("login")).sbtbh,
                zlz: JSON.parse(ev.data).weight,
                // rfid: JSON.parse(ev.data).rfidCode
                //   ? JSON.parse(ev.data).rfidCode
                //   : "暂无数据",
                // rqbh: JSON.parse(ev.data).containerCode
                //   ? JSON.parse(ev.data).containerCode
                //   : "暂无数据",
                sbsj: that.updateTime,
              });
              sessionStorage.setItem(
                "length",
                parseInt(sessionStorage.getItem("length")) + 1
              ); //每次添加缓存数据加一

              that.ydbh = that.tableData[0].ydbh;
              // that.zdgk = that.tableData[0].zdgk;
              that.count = that.tableData.length;
              that.ydname = "";
              sessionStorage.setItem("table", JSON.stringify(that.tableData));
            }
            that.tableData.pop();
          }
          // else {
          //   let date = new Date();
          //   let year = date.getFullYear();
          //   let month = date.getMonth() + 1;
          //   let day = date.getDate();
          //   let week = date.getDay();
          //   let weekArr = [
          //     "星期日",
          //     "星期一",
          //     "星期二",
          //     "星期三",
          //     "星期四",
          //     "星期五",
          //     "星期六",
          //   ];
          //   let hour = date.getHours();
          //   hour = hour < 10 ? "0" + hour : hour;
          //   let minute = date.getMinutes();
          //   minute = minute < 10 ? "0" + minute : minute;
          //   let second = date.getSeconds();
          //   second = second < 10 ? "0" + second : second;
          //   that.updateTime = `${year}/${month}/${day} ${hour}:${minute}:${second} ${weekArr[week]}`;
          //   if (
          //     that.ydname.substring(0, that.ydname.length - 1) ==
          //     that.tableData[0].ydbh
          //   ) {
          //     //不再依据指定格口判断
          //     that.tableData[0].zdgk = JSON.parse(ev.data).latticeNo;
          //     that.ydbh = that.tableData[0].ydbh;
          //     // that.zdgk = that.tableData[0].zdgk;
          //     that.ydname = "";
          //     // if (that.tableData[0].zdgk == null) {
          //     //   that.tableData[0].zdgk = JSON.parse(ev.data).latticeNo;
          //     //   that.ydbh = that.tableData[0].ydbh;
          //     //   that.zdgk = that.tableData[0].zdgk;
          //     //   that.ydname = "";
          //     // }
          //   } else {
          //     //zdgk: JSON.parse(ev.data).latticeNo,去除指定格口判断
          //     that.tableData.unshift({
          //       ydbh: that.ydname.substring(0, that.ydname.length - 1),
          //       sbth: JSON.parse(sessionStorage.getItem("login")).sbtbh,
          //       zlz: JSON.parse(ev.data).weight,
          //       // rfid: JSON.parse(ev.data).rfidCode
          //       //   ? JSON.parse(ev.data).rfidCode
          //       //   : "暂无数据",
          //       // rqbh: JSON.parse(ev.data).containerCode
          //       //   ? JSON.parse(ev.data).containerCode
          //       //   : "暂无数据",
          //       sbsj: that.updateTime,
          //     });
          //     sessionStorage.setItem(
          //       "length",
          //       parseInt(sessionStorage.getItem("length")) + 1
          //     ); //每次添加缓存数据加一

          //     that.ydbh = that.tableData[0].ydbh;
          //     // that.zdgk = that.tableData[0].zdgk;
          //     that.count = that.tableData.length;
          //     that.ydname = "";
          //     sessionStorage.setItem("table", JSON.stringify(that.tableData));
          //   }
          //   that.tableData.pop();
          // }
        }
      }
      // that.reload();
    });
    // debugger
    console.log(sessionStorage.getItem('init'))
    if (sessionStorage.getItem("init") !== "0000") {
      that.initSerial();
    }
    that.lang = localStorage.getItem("lang");
  },
  methods: {
    handleClick(row) {
      // row.rwh=1121
      this.url = "http://127.0.0.1/images/" + row.rwh + ".jpg";
      console.log(this.url);
      // document.write(this.url)
    },
    initSerial() {
      that.$post("serialPort/initSerialPort", {}).then(function (data) {
        if (data.code == "0000") {
          if (that.lang == "zh") {
            that.$notify({
              title: "成功",
              message: "初始化串口成功",
              type: "success",
              duration: 2000,
            });
          } else {
            that.$notify({
              title: "success",
              message: "The serial port is initialized successfully",
              type: "success",
              duration: 2000,
            });
          }
          sessionStorage.setItem("init", data.code);
        } else {
          if (that.lang == "zh") {
            that.$notify({
              title: "警告",
              message: "初始化串口失败",
              type: "warning",
              duration: 0,
            });
          } else {
            that.$notify({
              title: "warning",
              message: "Failed to initialize serial port",
              type: "warning",
              duration: 0,
            });
          }
          sessionStorage.setItem("init", data.code);
        }
        // if (location.href.indexOf("#reloaded") == -1) {
        //   location.href = location.href + "#reloaded";
        //   location.reload();
        // }
        sessionStorage.setItem("init","0000")
        that.reload()
      });
    },
    clearCount(h, m, s) {
      let nowTime = new Date();
      nowTime.setHours(h);
      nowTime.setMinutes(m);
      nowTime.setSeconds(s);
      let timeDiff = nowTime.getTime() - new Date().getTime();
      timeDiff = timeDiff > 0 ? timeDiff : timeDiff + 24 * 60 * 60 * 1000;
      setTimeout(function () {
        sessionStorage.removeItem("length");
        that.clearCount(23, 59, 59);
      }, timeDiff);
    },

    goLast() {
      that.$router.push({
        path: "/",
      });
      localStorage.setItem("哈哈", 1);
      sessionStorage.clear();
      that.closeSocket();
      that.$post("sortingSet/deleteSortingSet", {}).then(function (data) {
        if (data.code == "0000") {
          console.log("退出成功");
        }
      });
    },
    // getHeight() {
    //   if (that.fromParams.jcgmd == "星程吉月五面扫RFID") {
    //     if (JSON.parse(sessionStorage.getItem("table")) === null) {
    //       that.tableData2 = [];
    //     } else {
    //       that.tableData2 = JSON.parse(sessionStorage.getItem("table"));
    //     }
    //     if (sessionStorage.getItem("length") === null) {
    //       sessionStorage.setItem("length", 0);
    //     }
    //     that.tableHeight = window.innerHeight - 45;
    //   } else {
    //     that.tableHeight = window.innerHeight - window.innerHeight * 0.55 - 40;
    //     that.tableHeight2 = window.innerHeight - window.innerHeight * 0.45 - 30;
    //   }
    // },
  },
};
</script>
<style lang='scss' scoped>
@import "../assets/css/Inout.scss";
</style>