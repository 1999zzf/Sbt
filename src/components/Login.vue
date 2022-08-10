<template>
  <div class="wrapper">
    <v_headerTitle />
    <div
      v-show="lll == false"
      :class="[LLL == true ? 'animate__animated animate__backOutDown' : '']"
      class="loginTips"
    >
      <div
        v-if="settingValue.smlx != '星程吉月五面扫RFID'"
        @mouseenter="startOpen()"
        @mouseleave="stopOpen()"
        @click="showLogin()"
        :class="[
          mouseOn == '1'
            ? 'startDiv2 animate__animated animate__rubberBand animate__infinite '
            : 'startDiv',
        ]"
      >
        <div class="animate__animated animate__rotateIn animate__delay-1s">
          {{ lang === "zh" ? "开始" : "Start" }}
        </div>
      </div>
      <div
        v-if="settingValue.smlx == '星程吉月五面扫RFID'"
        @mouseenter="startOpen()"
        @mouseleave="stopOpen()"
        @click="get5sLogin()"
        :class="[
          mouseOn == '1'
            ? 'startDiv2 animate__animated animate__rubberBand animate__infinite '
            : 'startDiv',
        ]"
      >
        <div class="animate__animated animate__rotateIn animate__delay-1s">
          {{ lang === "zh" ? "重试" : "Retry" }}
        </div>
      </div>
    </div>
    <div
      v-show="lll == true"
      :class="[lll == true ? 'animate__animated animate__backInDown' : '']"
      class="login_box"
    >
      <div class="login-box-bg" v-show="huaqin === false">
        <div class="login-box-bg-top">
          {{
            lang == "zh"
              ? "易丰科技上包台管理软件"
              : "YiFeng technology management software"
          }}
        </div>
        <div class="login-box-bg-tops">
          {{
            lang == "zh"
              ? "分流分拣系统操作端"
              : "The operator of the sorting system"
          }}
        </div>
        <div style="border: 1px solid #f1f1f1"></div>
        <div class="login-box-bg-body">
          <div class="input-login">
            <div class="input-login-left">
              {{ lang == "zh" ? "账 号" : "account" }}:
            </div>
            <div class="input-login-right">
              <input
                @keyup.enter="get_in()"
                :class="{ user: usernone }"
                v-model="user"
                :placeholder="
                  lang == 'zh'
                    ? '请输入您的账号'
                    : 'Please enter your account number'
                "
                type="text"
                class="input"
              />
            </div>
          </div>
        </div>

        <div style="border: 1px solid #f1f1f1"></div>
        <div class="get-in">
          <el-button style="width: 50%" @click="get_in()" type="primary">{{
            lang == "zh" ? "登 录" : "Sign in"
          }}</el-button>
        </div>
      </div>

      <div class="login-box-bg" v-show="huaqin === true">
        <div class="login-box-bg-top">
          {{
            lang == "zh"
              ? "易丰科技上包台管理软件"
              : "YiFeng technology management software"
          }}
        </div>
        <div class="login-box-bg-tops">
          {{
            lang == "zh"
              ? "分流分拣系统操作端"
              : "The operator of the sorting system"
          }}
        </div>
        <div style="border: 1px solid #f1f1f1"></div>
        <div class="login-box-bg-body">
          <div class="input-login">
            <div class="input-login-left">
              {{ lang == "zh" ? "账 号" : "account" }}:
            </div>
            <div class="input-login-right">
              <input
                @keyup.enter="get_in1()"
                :class="{ user: usernone }"
                v-model="user1"
                :placeholder="
                  lang == 'zh'
                    ? '请输入您的账号'
                    : 'Please enter your account number'
                "
                type="text"
                class="input"
              />
            </div>
          </div>
          <div class="input-login">
            <div class="input-login-left">
              {{ lang == "zh" ? "密 码" : "password" }}:
            </div>
            <div class="input-login-right">
              <input
                @keyup.enter="get_in1()"
                :class="{ pwd: pwdnone }"
                v-model="pwd"
                :placeholder="
                  lang == 'zh' ? '请输入您的密码' : 'Please enter your password'
                "
                type="password"
                class="input"
              />
            </div>
          </div>
        </div>

        <div style="border: 1px solid #f1f1f1"></div>
        <div class="get-in">
          <el-button style="width: 50%" @click="get_in1()" type="primary">{{
            lang == "zh" ? "登 录" : "Sign in"
          }}</el-button>
        </div>
      </div>
    </div>
    <div class="needsFix">
      <el-button @click="settingShow()" icon="el-icon-setting">{{
        lang === "zh" ? "设置" : "set up"
      }}</el-button>
    </div>
    <div class="needsFixL">
      <el-button type="info" plain @click="changeLang()">{{
        lang === "zh" ? "English/en" : "中文/zh"
      }}</el-button>
    </div>
    <div :style="backgroundDiv" class="bgVideo">
      <!-- <video :style="fixStyle" muted autoplay="autoplay" loop class="fillWidth">
        <source src="../assets/loginbg.mp4" type="video/mp4" />
      </video> -->
      <!-- <img class="img-bg" :src="img_bg"/> -->
    </div>
    <div class="videoUp"></div>
    <div class="showSetting">
      <el-dialog :title="pz" :visible.sync="setting" width="60%">
        <el-row>
          <el-col :span="24">
            <el-form
              ref="settingValue"
              :rules="rule"
              :model="settingValue"
              :label-width="lang == 'zh' ? '110px' : '155px'"
            >
              <el-row>
                <el-col :span="12">
                  <el-form-item
                    prop="fwqip"
                    :label="lang == 'zh' ? '服务器IP' : 'Server IP'"
                  >
                    <el-input
                      clearable
                      :placeholder="
                        lang == 'zh'
                          ? '请输入服务器IP地址'
                          : 'Please enter the server IP'
                      "
                      v-model="settingValue.fwqip"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item
                    prop="fwqdk"
                    :label="lang == 'zh' ? '服务器端口' : 'Server interface'"
                  >
                    <el-input
                      clearable
                      :placeholder="
                        lang == 'zh'
                          ? '请输入服务器端口'
                          : 'Please enter the Server interface'
                      "
                      v-model="settingValue.fwqdk"
                    ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="12">
                  <el-form-item
                    prop="sbtip"
                    :label="lang == 'zh' ? '上包台IP' : 'Infeed Table'"
                  >
                    <el-input
                      clearable
                      :placeholder="
                        lang == 'zh'
                          ? '请输入上包台IP'
                          : 'Please input the IP address of the loading station'
                      "
                      v-model="settingValue.sbtip"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item
                    prop="sbtbh"
                    :label="lang == 'zh' ? '上包台编号' : 'Table NO'"
                  >
                    <el-select
                      filterable
                      style="width: 100%"
                      clearable
                      v-model="settingValue.sbtbh"
                      :placeholder="
                        lang == 'zh'
                          ? '请选择上包台编号'
                          : 'Please select the Table NO'
                      "
                    >
                      <el-option
                        v-for="(i, index) in settingValue.sbtbhoptions"
                        :key="index"
                        :label="i.label"
                        :value="i.value"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="8">
                  <el-form-item
                    prop="czdk"
                    :label="lang == 'zh' ? '称重端口' : 'Weighing interface'"
                  >
                    <el-select
                      style="width: 100%"
                      clearable
                      v-model="settingValue.czdk"
                      :placeholder="
                        lang == 'zh'
                          ? '请选择称重端口'
                          : 'Please select weighing port'
                      "
                      @click.native="getList()"
                    >
                      <el-option
                        v-for="(i, index) in settingValue.czdkoptions"
                        :key="index"
                        :label="i"
                        :value="i"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item
                    prop="dz"
                    :label="lang == 'zh' ? '设置底重' : 'Set Min weight'"
                  >
                    <el-input
                      clearable
                      :placeholder="
                        lang == 'zh' ? '请输入底重' : 'Please Set Min weight'
                      "
                      v-model="settingValue.dz"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item
                    prop="zlsx"
                    :label="lang == 'zh' ? '设置重量上限' : 'Set Max weight'"
                  >
                    <el-input
                      clearable
                      :placeholder="
                        lang == 'zh'
                          ? '请输入重量上限'
                          : 'Please Set Max weight'
                      "
                      v-model="settingValue.zlsx"
                    ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12">
                  <el-form-item
                    prop="smlx"
                    :label="lang == 'zh' ? '扫描类型' : 'Scan type'"
                  >
                    <el-select
                      style="width: 100%"
                      clearable
                      v-model="settingValue.smlx"
                      :placeholder="
                        lang == 'zh'
                          ? '请选择扫描类型'
                          : 'Please select Scan type'
                      "
                      @click.native="getScanList()"
                    >
                      <el-option
                        v-for="(i, index) in settingValue.smlxoptions"
                        :key="index"
                        :label="i.desc"
                        :value="i.desc"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item
                    prop="ywcj"
                    :label="lang == 'zh' ? '业务类型' : 'businessType'"
                  >
                    <el-select
                      style="width: 100%"
                      clearable
                      @input="getBusinessTypeValue"
                      v-model="settingValue.ywcj"
                      :placeholder="
                        lang == 'zh'
                          ? '请选择业务场景'
                          : 'Please select a business scenario'
                      "
                    >
                      <el-option
                        v-for="(i, index) in settingValue.ywcjxoptions"
                        :key="index"
                        :label="i.desc"
                        :value="i.code"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-form-item
                prop="xjxh"
                :label="lang == 'zh' ? '相机序号' : 'Camera No'"
              >
                <el-input
                  clearable
                  :placeholder="
                    lang == 'zh' ? '请输入相机序号' : 'Please input Camera No'
                  "
                  v-model="settingValue.xjxh"
                ></el-input>
              </el-form-item>

              <el-row>
                <el-col :span="12">
                  <el-form-item
                    prop="bctplx"
                    :label="lang == 'zh' ? '保存图片类型' : 'Keep Photo'"
                  >
                    <el-select
                      style="width: 100%"
                      clearable
                      v-model="settingValue.bctplx"
                      :placeholder="
                        lang == 'zh'
                          ? '请选择保存图片类型'
                          : 'Please select the Keep Photo'
                      "
                    >
                      <el-option
                        v-for="(i, index) in settingValue.bctplxoptions"
                        :key="index"
                        :label="i.label"
                        :value="i.value"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item
                    prop="jcglx"
                    :label="lang == 'zh' ? '进出港类型' : 'Arrival/Dispatch'"
                  >
                    <el-select
                      style="width: 100%"
                      clearable
                      v-model="settingValue.jcglx"
                      :placeholder="
                        lang == 'zh'
                          ? '请选择进出港类型'
                          : 'Please select the Arrival/Dispatch'
                      "
                    >
                      <el-option
                        v-for="(i, index) in settingValue.jcglxoptions"
                        :key="index"
                        :label="i.label"
                        :value="i.value"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-form-item
                :label="lang == 'zh' ? '拦截(;隔开)' : 'Intercept (; separate)'"
              >
                <el-input
                  clearable
                  :placeholder="
                    lang == 'zh'
                      ? '请输入拦截码'
                      : 'Please enter the intercept code'
                  "
                  v-model="settingValue.lj"
                ></el-input>
              </el-form-item>

              <el-row>
                <el-col :span="12">
                  <el-form-item
                    prop="xckz"
                    :label="lang == 'zh' ? '小车控制' : 'carDriverType'"
                  >
                    <el-select
                      style="width: 100%"
                      clearable
                      @input="getCarDriverTypeValue"
                      v-model="settingValue.xckz"
                      :placeholder="
                        lang == 'zh'
                          ? '请选择小车控制'
                          : 'Please select car control'
                      "
                    >
                      <el-option
                        v-for="(i, index) in settingValue.xckzxoptions"
                        :key="index"
                        :label="i.desc"
                        :value="i.code"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </el-col>
        </el-row>
        <span slot="footer" class="dialog-footer">
          <el-button @click="setting = false">{{
            lang == "zh" ? "取 消" : "Cancel"
          }}</el-button>
          <el-button type="primary" @click="settingCheck('settingValue')">{{
            lang == "zh" ? "确 定" : "determine"
          }}</el-button>
        </span>
      </el-dialog>
    </div>
    <div class="showSetting-cf">
      <el-dialog :title="cccf" :visible.sync="showcccf" width="50%">
        <el-row>
          <el-col :span="24">
            <el-form
              ref="cccfSetting"
              :rules="cccfRule"
              :model="cccfSetting"
              :label-width="lang == 'zh' ? '110px' : '155px'"
            >
              <el-row>
                <el-col :span="24">
                  <el-form-item
                    prop="rfidPort"
                    :label="lang == 'zh' ? 'RFID端口' : 'rfidPort'"
                  >
                    <el-select
                      style="width: 100%"
                      clearable
                      v-model="cccfSetting.rfidPort"
                      :placeholder="
                        lang == 'zh'
                          ? '请选择RFID端口'
                          : 'Please select RFID port'
                      "
                    >
                      <el-option
                        v-for="(i, index) in cccfSetting.rfidPortoptions"
                        :key="index"
                        :label="i"
                        :value="i"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </el-col>
        </el-row>
        <span slot="footer" class="dialog-footer">
          <el-button @click="showcccf = false">取 消</el-button>
          <el-button type="primary" @click="getRfidPort('cccfSetting')"
            >确 定</el-button
          >
        </span>
      </el-dialog>
    </div>
    <div class="showSetting-qd">
      <el-dialog :title="plc" :visible.sync="showplc" width="50%">
        <el-row>
          <el-col :span="24">
            <el-form
              ref="plcSetting"
              :rules="plcRule"
              :model="plcSetting"
              :label-width="lang == 'zh' ? '110px' : '155px'"
            >
              <el-row>
                <el-col :span="24">
                  <el-form-item
                    prop="driverPort"
                    :label="lang == 'zh' ? '驱动端口' : 'driverPort'"
                  >
                    <el-select
                      style="width: 100%"
                      clearable
                      v-model="plcSetting.driverPort"
                      :placeholder="
                        lang == 'zh'
                          ? '请选择驱动端口'
                          : 'Please select driverPort'
                      "
                    >
                      <el-option
                        v-for="(i, index) in plcSetting.driverPortoptions"
                        :key="index"
                        :label="i"
                        :value="i"
                      ></el-option>
                    </el-select>
                  </el-form-item>

                  <el-form-item
                    prop="rdirection"
                    :label="lang == 'zh' ? '滚动方向' : 'Rolling direction'"
                  >
                    <el-select
                      style="width: 100%"
                      clearable
                      v-model="plcSetting.rdirection"
                      :placeholder="
                        lang == 'zh'
                          ? '请选择滚动方向'
                          : 'Please select direction'
                      "
                      @click.native="getDirectionList()"
                    >
                      <el-option
                        v-for="(i, index) in plcSetting.rdirectionoptions"
                        :key="index"
                        :label="i.desc"
                        :value="i.desc"
                      ></el-option>
                    </el-select>
                  </el-form-item>

                  <el-tooltip
                    content="推荐 800-1000"
                    placement="bottom"
                    effect="light"
                  >
                    <el-form-item
                      prop="scrollSpeed"
                      :label="lang == 'zh' ? '滚动速度' : 'scrollSpeed'"
                    >
                      <el-input
                        clearable
                        :placeholder="
                          lang == 'zh'
                            ? '请输入滚动速度'
                            : 'Please enter the scrollSpeed'
                        "
                        v-model="plcSetting.scrollSpeed"
                      ></el-input>
                    </el-form-item>
                  </el-tooltip>

                  <el-tooltip
                    content="推荐 10-20"
                    placement="bottom"
                    effect="light"
                  >
                    <el-form-item
                      prop="deceleration"
                      :label="lang == 'zh' ? '滚动减速带' : 'deceleration'"
                    >
                      <el-input
                        clearable
                        :placeholder="
                          lang == 'zh'
                            ? '请输入滚动减速度'
                            : 'Please enter the deceleration'
                        "
                        v-model="plcSetting.deceleration"
                      ></el-input>
                    </el-form-item>
                  </el-tooltip>
                  <el-tooltip
                    content="推荐 54-55"
                    placement="bottom"
                    effect="light"
                  >
                    <el-form-item
                      prop="scrollNumber"
                      :label="lang == 'zh' ? '滚动圈数' : 'scrollNumber'"
                    >
                      <el-input
                        clearable
                        :placeholder="
                          lang == 'zh'
                            ? '请输入滚动圈数'
                            : 'Please enter the scrollNumber'
                        "
                        v-model="plcSetting.scrollNumber"
                      ></el-input>
                    </el-form-item>
                  </el-tooltip>
                  <el-tooltip
                    content="推荐 10-30"
                    placement="bottom"
                    effect="light"
                  >
                    <el-form-item
                      prop="acceleration"
                      :label="lang == 'zh' ? '滚动加速带' : 'acceleration'"
                    >
                      <el-input
                        clearable
                        :placeholder="
                          lang == 'zh'
                            ? '请输入滚动加速度'
                            : 'Please enter the acceleration'
                        "
                        v-model="plcSetting.acceleration"
                      ></el-input>
                    </el-form-item>
                  </el-tooltip>
                </el-col>
              </el-row>
            </el-form>
          </el-col>
        </el-row>
        <span slot="footer" class="dialog-footer">
          <el-button @click="showplc = false">取 消</el-button>
          <el-button type="primary" @click="getPlcSetting('plcSetting')"
            >确 定</el-button
          >
        </span>
      </el-dialog>
    </div>
    <!-- <div class="showSuccess">
      <el-dialog :title="cqjcg" :visible.sync="loginData" width="40%">
        <el-form
          ref="carCode"
          :model="carCode"
          :rules="rules"
          :label-width="lang == 'zh' ? '100px' : '155px'"
        >
          <el-form-item
            prop="jcgmd"
            :label="lang == 'zh' ? '进出港面单' : 'Arrival/Dispatch Bill'"
          >
            <el-radio-group v-model="carCode.jcgmd">
              <el-radio
                border
                v-for="i in carCode.jcgmdoptions"
                :key="i.value"
                :label="i.value"
                :value="i.value"
                >{{ i.label }}</el-radio
              >
            </el-radio-group>
          </el-form-item>
          <el-form-item
            prop="lxxz"
            :label="lang == 'zh' ? '方式选择' : 'Express Name'"
          >
            <el-radio-group v-model="carCode.lxxz">
              <el-radio
                border
                v-for="i in carCode.lxxzoptions"
                :key="i.code"
                :label="i.code"
                :value="i.code"
                >{{ i.desc }}</el-radio
              >
            </el-radio-group>
          </el-form-item>
          <el-form-item
            prop="hdzl"
            :label="lang == 'zh' ? '恒定重量' : 'Steady Weight'"
          >
            <el-row>
              <el-col :span="4">
                <el-switch
                  @change="clearhdzl()"
                  v-model="switchOff"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                ></el-switch>
              </el-col>
              <el-col :span="20">
                <el-input
                  v-show="switchOff"
                  clearable
                  :placeholder="
                    lang == 'zh'
                      ? '请输入重量值'
                      : 'Please enter the weight value'
                  "
                  v-model="carCode.hdzl"
                ></el-input>
              </el-col>
            </el-row>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="loginData = false">{{
            lang == "zh" ? "取 消" : "Cancel"
          }}</el-button>
          <el-button type="primary" @click="goNext('carCode')">{{
            lang == "zh" ? "确 定" : "determine"
          }}</el-button>
        </span>
      </el-dialog>
    </div> -->
  </div>
</template>

<script>
let that;
// history.pushState(null, null, document.URL);
// window.addEventListener("popstate", function () {
//   history.pushState(null, null, document.URL);
// });
import v_headerTitle from "./headerTitle.vue";
export default {
  inject: ["reload"],
  components: { v_headerTitle },
  name: "login",
  props: {},

  data() {
    return {
      backgroundDiv: {
        backgroundImage: "url(" + require("../assets/img_bg.png") + ")",
      },
      lll: false,
      LLL: false,
      huaqin: false,
      mouseOn: "0",
      lang: "",
      pz: "",
      // cqjcg: "",
      user: "",
      user1: "",
      usernone: false,
      pwd: "",
      pwdnone: false,

      isopen: "", //判断是否需要展开侧边栏
      fixStyle: "",

      websock: null,

      setting: false,
      // loginData: false,
      switchOff: false,
      settingValue: {
        fwqip: "",
        fwqdk: "",
        sbtbh: "",
        sbtbhoptions: [
          { label: "1", value: "1" },
          { label: "2", value: "2" },
          { label: "3", value: "3" },
          { label: "4", value: "4" },
          { label: "5", value: "5" },
          { label: "6", value: "6" },
          { label: "7", value: "7" },
          { label: "8", value: "8" },
          { label: "9", value: "9" },
          { label: "10", value: "10" },
          { label: "11", value: "11" },
          { label: "12", value: "12" },
          { label: "13", value: "13" },
          { label: "14", value: "14" },
          { label: "15", value: "15" },
          { label: "16", value: "16" },
          { label: "17", value: "17" },
          { label: "18", value: "18" },
          { label: "19", value: "19" },
          { label: "20", value: "20" },
        ],
        sbtip: "",
        czdk: "",
        czdkoptions: [],
        zlsx: "",
        dz: "",
        xjxh: "",
        smlx: "",
        smlxoptions: [],
        bctplx: "",
        bctplxoptions: [],
        jcglx: "",
        jcglxoptions: [],
        lj: "",
        ywcj: "",
        ywcjname: "",
        ywcjxoptions: [],
        xckz: "",
        xckzname: "",
        xckzxoptions: [],
      },
      rule: {},
      // carCode: {
      //   jcgmd: "",
      //   jcgmdoptions: [],
      //   lxxz: "",
      //   lxxzoptions: [],
      //   hdzl: "",
      // },
      rules: {},
      cccfSetting: {
        rfidPort: "",
        rfidPortoptions: [],
      },
      cccfRule: {
        rfidPort: [
          { required: true, message: "请选择rfidPort", trigger: "change" },
        ],
      },
      plcSetting: {
        driverPort: "",
        rdirection: "",
        rdirectionId: "",
        rdirectionoptions: [],
        driverPortoptions: [],
        scrollSpeed: "",
        deceleration: "",
        scrollNumber: "",
        acceleration: "",
      },
      plcRule: {
        driverPort: [
          { required: true, message: "请选择rfid端口", trigger: "change" },
        ],
        rdirection: [
          { required: true, message: "请选择滚动方向", trigger: "change" },
        ],
        rdirectionId: [
          { required: true, message: "请选择滚动方向", trigger: "change" },
        ],
        scrollSpeed: [
          { required: true, message: "请输入转动速度", trigger: "change" },
        ],
        deceleration: [
          { required: true, message: "请输入滚动减速度", trigger: "change" },
        ],
        scrollNumber: [
          { required: true, message: "请输入滚动圈数", trigger: "change" },
        ],
        acceleration: [
          { required: true, message: "请输入滚动加速度", trigger: "change" },
        ],
      },
      ws: "",

      tableData: [],

      cccf: "",
      showcccf: false,
      plc: "",
      showplc: false,
      img_bg: require("../assets/img_bg.png"),
    };
  },
  watch: {},
  computed: {},
  methods: {
    showLogin() {
      that.LLL = true;
      setTimeout(() => {
        that.lll = true;
      }, 500);
    },
    startOpen() {
      that.mouseOn = "1";
      localStorage.removeItem("哈哈");
    },
    stopOpen() {
      that.mouseOn = "0";
      localStorage.removeItem("哈哈");
    },
    changeLang() {
      if (localStorage.getItem("lang") == "en") {
        localStorage.setItem("lang", "zh");
        that.reload();
      } else {
        localStorage.setItem("lang", "en");
        that.reload();
      }
    },
    //获取滚动方向接口参数
    getDirectionList() {
      that.$post("property/getScrollDirectionList", {}).then(function (data) {
        that.plcSetting.rdirectionoptions = data.data;
      });
    },
    //获取扫描类型接口参数
    getScanList() {
      that.$post("property/getScanTypeList", {}).then(function (data) {
        if (data.code == "0000") {
          that.settingValue.smlxoptions = data.data;
        }
      });
    },
    getList() {
      that.$post("serialPort/getComList", {}).then(function (data) {
        that.settingValue.czdkoptions = data.data;
      });
    },
    getSettings() {
      that.$post("property/getPropertyInfo", {}).then(function (data) {
        if (data.code == "0000") {
          that.settingValue.fwqip = data.data.serverIp;
          that.settingValue.fwqdk = data.data.serverPort;
          that.settingValue.sbtip = data.data.tableIp;
          that.settingValue.sbtbh = data.data.tableNo;
          that.settingValue.dz = data.data.baseWeight;
          that.settingValue.zlsx = data.data.maxWeight;
          that.settingValue.smlx = data.data.scanTypeName;
          that.settingValue.xjxh = data.data.cameraNo;
          that.settingValue.ywcj = data.data.businessTypeName;
          that.settingValue.xckz = data.data.carDriverTypeName;
          that.settingValue.ywcjname = data.data.businessType;
          that.settingValue.xckzname = data.data.carDriverType;
          that.cccfSetting.rfidPort = data.data.rfidPort;
          that.plcSetting.driverPort = data.data.driverPort;
          that.plcSetting.rdirectionId = data.data.scrollDirection;
          that.plcSetting.rdirection = data.data.scrollDirectionName;
          that.plcSetting.scrollSpeed = data.data.scrollSpeed;
          that.plcSetting.deceleration = data.data.deceleration;
          that.plcSetting.scrollNumber = data.data.scrollNumber;
          that.plcSetting.acceleration = data.data.acceleration;
          if (that.lang == "zh") {
            that.settingValue.bctplx =
              data.data.imageSaveType == 1 ? "保存到本地" : "保存到服务器";
            that.settingValue.jcglx =
              data.data.flowDirection == 1 ? "进港" : "出港";
          } else {
            that.settingValue.bctplx =
              data.data.imageSaveType == 1 ? "Local" : "Server";
            that.settingValue.jcglx =
              data.data.flowDirection == 1 ? "Arrival" : "Dispatch";
          }
          that.settingValue.lj = data.data.regexStr;
          that.settingValue.czdk = data.data.weightPort;
          that.getBusinessType();
          that.getCarDriverType();
          if (that.settingValue.smlx == "星程吉月五面扫RFID") {
            that.get5sLogin();
          }
        } else {
          that.$message({
            message: data.msg,
            type: "error",
          });
        }
      });
    },
    //获取业务类型接口
    getBusinessType() {
      that.$post("property/getBusinessTypeList", {}).then(function (data) {
        that.settingValue.ywcjxoptions = data.data;
      });
    },
    //获取小车控制
    getCarDriverType() {
      that.$post("property/getCarDriverTypeList", {}).then(function (data) {
        that.settingValue.xckzxoptions = data.data;
      });
    },
    // clearhdzl() {
    //   if (!that.switchOff) {
    //     that.carCode.hdzl = "";
    //   } else if (that.switchOff) {
    //     that.carCode.hdzl = 0;
    //   }
    // },
    // goNext(carCode) {
    //   this.$refs[carCode].validate((valid) => {
    //     if (valid) {
    //       that
    //         .$post("sortingSet/editSortingSet", {
    //           currentFlowDirection: that.carCode.jcgmd,
    //           sortingExpressType: that.carCode.lxxz,
    //           weightFlag: that.switchOff ? 1 : 0,
    //           weight: that.carCode.hdzl == "" ? 0 : that.carCode.hdzl,
    //         })
    //         .then(function (data) {
    //           if (data.code == "0000") {
    // let newObj = {
    //   jcgmd: that.carCode.jcgmd == 1 ? "进港面单" : "出港面单",
    //   user: that.user,
    //   sbtip: that.settingValue.sbtip,
    //   sbtbh: that.settingValue.sbtbh,
    // };
    // sessionStorage.setItem("login", JSON.stringify(newObj));

    // that.$router.push({
    //   name: "Inout",
    //   params: {
    //     jcgmd: that.carCode.jcgmd,
    //     user: that.user,
    //     sbtip: that.settingValue.sbtip,
    //   },
    // });
    //           } else {
    //             that.$message({
    //               message: data.msg,
    //               type: "error",
    //             });
    //           }
    //         });
    //     } else {
    //       return false;
    //     }
    //   });
    // },
    //选择业务场景点击事件
    getBusinessTypeValue() {
      // console.log(that.settingValue.ywcjname);

      that.settingValue.ywcjname = that.settingValue.ywcj;
      for (var i = 0; i < that.settingValue.ywcjxoptions.length; i++) {
        if (
          that.settingValue.ywcjname == that.settingValue.ywcjxoptions[i].code
        ) {
          if (that.settingValue.ywcjxoptions[i].desc == "仓储粗分") {
            that.$post("serialPort/getComList", {}).then(function (data) {
              that.cccfSetting.rfidPortoptions = data.data;
              that.showcccf = true;
            });
          }
        }
      }
    },
    //选择rfid端口确定事件
    getRfidPort(cccfSetting) {
      this.$refs[cccfSetting].validate((valid) => {
        if (valid) {
          that.showcccf = false;
          console.log(that.cccfSetting);
        } else {
          return false;
        }
      });
    },
    //小车控制点击事件获取值
    getCarDriverTypeValue() {
      that.settingValue.xckzname = that.settingValue.xckz;
      for (var i = 0; i < that.settingValue.xckzxoptions.length; i++) {
        if (
          that.settingValue.xckzname == that.settingValue.xckzxoptions[i].code
        ) {
          if (that.settingValue.xckzxoptions[i].desc == "软件控制") {
            that.$post("serialPort/getComList", {}).then(function (data) {
              that.plcSetting.driverPortoptions = data.data;
              that.showplc = true;
            });
          }
        }
      }
    },
    //选择软件控制确定事件
    getPlcSetting(plcSetting) {
      this.$refs[plcSetting].validate((valid) => {
        if (valid) {
          that.showplc = false;
          // console.log(that.plcSetting);
          that.getDirectionList();
        } else {
          return false;
        }
      });
    },
    // settingValue
    settingCheck(settingValue) {
      console.log(that.settingValue.ywcj);
      if (that.settingValue.ywcj === "05"||that.settingValue.ywcj==="华勤物流") {
        that.huaqin = true;
      } else {
        that.huaqin = false;
      }
      for (var ii = 0; ii < this.plcSetting.rdirectionoptions.length; ii++) {
        if (
          that.plcSetting.rdirection ==
          that.plcSetting.rdirectionoptions[ii].desc
        ) {
          that.plcSetting.rdirectionId =
            that.plcSetting.rdirectionoptions[ii].code;
        }
      }
      var lxsmCode = "";
      for (var i = 0; i < that.settingValue.smlxoptions.length; i++) {
        if (that.settingValue.smlx == that.settingValue.smlxoptions[i].desc) {
          lxsmCode = that.settingValue.smlxoptions[i].code;
        }
      }
      this.$refs[settingValue].validate((valid) => {
        if (valid) {
          if (that.lang == "zh") {
            that
              .$post("property/editPropertyInfo", {
                serverIp: that.settingValue.fwqip,
                serverPort: that.settingValue.fwqdk,
                tableIp: that.settingValue.sbtip,
                tableNo: that.settingValue.sbtbh,
                weightPort: that.settingValue.czdk,
                baseWeight: that.settingValue.dz,
                maxWeight: that.settingValue.zlsx,
                cameraNo: that.settingValue.xjxh,
                scanType: lxsmCode,
                scanTypeName: that.settingValue.smlx,
                imageSaveType: that.settingValue.bctplx == "保存到本地" ? 1 : 2,
                flowDirection: that.settingValue.jcglx == "进港" ? 1 : 0,
                regexStr: that.settingValue.lj,
                businessType: that.settingValue.ywcjname,
                carDriverType: that.settingValue.xckzname,
                rfidPort: that.cccfSetting.rfidPort,
                driverPort: that.plcSetting.driverPort,
                scrollDirection: that.plcSetting.rdirectionId,
                scrollDirectionName: that.plcSetting.rdirection,
                scrollSpeed: that.plcSetting.scrollSpeed,
                deceleration: that.plcSetting.deceleration,
                acceleration: that.plcSetting.acceleration,
                scrollNumber: that.plcSetting.scrollNumber,
              })
              .then(function (data) {
                if (data.code == "0000") {
                  that.setting = false;
                  that.$message({
                    message: "编辑成功",
                    type: "success",
                  });
                  that.getSettings();
                } else {
                  that.$message({
                    message: data.msg,
                    type: "error",
                  });
                }
              });
          } else {
            that
              .$post("property/editPropertyInfo", {
                serverIp: that.settingValue.fwqip,
                serverPort: that.settingValue.fwqdk,
                tableIp: that.settingValue.sbtip,
                tableNo: that.settingValue.sbtbh,
                weightPort: that.settingValue.czdk,
                baseWeight: that.settingValue.dz,
                maxWeight: that.settingValue.zlsx,
                cameraNo: that.settingValue.xjxh,
                scanType: lxsmCode,
                scanTypeName: that.settingValue.smlx,
                imageSaveType: that.settingValue.bctplx == "Local" ? 1 : 2,
                flowDirection: that.settingValue.jcglx == "Arrival" ? 1 : 0,
                regexStr: that.settingValue.lj,
                businessType: that.settingValue.ywcjname,
                carDriverType: that.settingValue.xckzname,
                rfidPort: that.cccfSetting.rfidPort,
                driverPort: that.plcSetting.driverPort,
                scrollDirection: that.plcSetting.rdirectionId,
                scrollDirectionName: that.plcSetting.rdirection,
                scrollSpeed: that.plcSetting.scrollSpeed,
                deceleration: that.plcSetting.deceleration,
                acceleration: that.plcSetting.acceleration,
                scrollNumber: that.plcSetting.scrollNumber,
              })
              .then(function (data) {
                if (data.code == "0000") {
                  that.setting = false;
                  that.$message({
                    message: "edit success",
                    type: "success",
                  });
                  that.getSettings();
                } else {
                  that.$message({
                    message: data.msg,
                    type: "error",
                  });
                }
              });
          }
        } else {
          return false;
        }
      });
    },
    //登录
    get_in() {
      // debugger
      that.$router.push({
        //路由跳转
        name: "Inout",
        params: {
          // jcgmd: that.carCode.jcgmd,
          user: that.user,
          sbtip: that.settingValue.sbtip,
        },
      });
      let newObj = {
        // jcgmd: that.carCode.jcgmd == 1 ? "进港面单" : "出港面单",
        // jcgmd:"单面扫",
        user: that.user,
        sbtip: that.settingValue.sbtip,
        sbtbh: that.settingValue.sbtbh,
      };
      sessionStorage.setItem("login", JSON.stringify(newObj));
      if (that.user) {
        that
          .$post2(
            "http://" +
              that.settingValue.fwqip +
              ":" +
              that.settingValue.fwqdk +
              "/sorting_web/" +
              "employeeInfo/tableLogin",
            {
              tableAccount: that.user,
            }
          )
          .then(function (data) {
            if (data.code == "0000") {
              that
                .$post("sortingSet/getSortingExpressTypeList", {})
                .then(function () {
                  // that.carCode.lxxzoptions = data.data;
                  that.createSocket(
                    "ws://" + that.settingValue.sbtip + ":8099"
                  );
                  // that
                  //   .$post("serialPort/initSerialPort", {})
                  //   .then(function (data) {
                  if (data.code == "0000") {
                    if (that.settingValue.smlx == "星程吉月五面扫RFID") {
                      let newObj = {
                        jcgmd: that.settingValue.smlx,
                        user: that.user,
                        sbtip: that.settingValue.sbtip,
                        sbtbh: that.settingValue.sbtbh,
                      };
                      sessionStorage.setItem("login", JSON.stringify(newObj));
                      that.$router.push({
                        name: "Inout",
                        params: {
                          // jcgmd: that.carCode.jcgmd,
                          user: that.user,
                          sbtip: that.settingValue.sbtip,
                        },
                      });
                      if (that.lang == "zh") {
                        that.$message({
                          message: "登陆成功",
                          type: "success",
                        });
                      } else {
                        that.$message({
                          message: "Successful login",
                          type: "success",
                        });
                      }
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
                          message:
                            "The serial port is initialized successfully",
                          type: "success",
                          duration: 2000,
                        });
                      }
                      sessionStorage.setItem("init", data.code);
                    } else {
                      if (that.lang == "zh") {
                        // that.loginData = true;
                        that.$message({
                          message: "登陆成功",
                          type: "success",
                        });
                      } else {
                        // that.loginData = true;
                        that.$message({
                          message: "Successful login",
                          type: "success",
                        });
                      }
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
                          message:
                            "The serial port is initialized successfully",
                          type: "success",
                          duration: 2000,
                        });
                      }
                      sessionStorage.setItem("init", data.code);
                    }
                  } else {
                    // if (that.lang == "zh") {
                    //   that.$notify({
                    //     title: "警告",
                    //     message: "初始化串口失败",
                    //     type: "warning",
                    //     duration: 0,
                    //   });
                    // } else {
                    //   that.$notify({
                    //     title: "warning",
                    //     message: "Failed to initialize serial port",
                    //     type: "warning",
                    //     duration: 0,
                    //   });
                    // }
                    sessionStorage.setItem("init", data.code);
                  }
                });
              // });
            } else {
              that.$message({
                message: "employeeInfo/tableLogin接口报错",
                type: "error",
              });
            }
          });
      } else {
        if (that.lang == "zh") {
          that.$message({
            message: "请填写您的工号",
            type: "warning",
          });
          that.usernone = true;
        } else {
          that.$message({
            message: "Please fill in your job number",
            type: "warning",
          });
          that.usernone = true;
        }
      }
    },
    get_in1() {
       that.$router.push({
        //路由跳转
        name: "Inout",
        params: {
          // jcgmd: that.carCode.jcgmd,
          user: that.user1,
          password:that.pwd,
          sbtip: that.settingValue.sbtip,
        },
      });
      let newObj = {
        // jcgmd: that.carCode.jcgmd == 1 ? "进港面单" : "出港面单",
        // jcgmd:"单面扫",
        user: that.user1,
        password:that.pwd,
        sbtip: that.settingValue.sbtip,
        sbtbh: that.settingValue.sbtbh,
      };
      sessionStorage.setItem("login", JSON.stringify(newObj));
      if (that.user1 && that.pwd) {
        that
          .$post2(
            "http://" +
              that.settingValue.fwqip +
              ":" +
              that.settingValue.fwqdk +
              "/sorting_web/" +
              "huaQin/huaQinLogin",
            {
              account: that.user1,
              password: that.pwd,
            }
          )
          .then(function (data) {
            console.log(data);
          });
      } else {
        if (that.lang == "zh") {
          that.$message({
            message: "请填写您的账号或者密码",
            type: "warning",
          });
          that.usernone = true;
        } else {
          that.$message({
            message: "Please fill in your number or password",
            type: "warning",
          });
          that.usernone = true;
        }
      }
    },
    settingShow() {
      that.setting = true;
    },
    //5s直接登录
    get5sLogin() {
      that
        .$post2(
          "http://" +
            that.settingValue.fwqip +
            ":" +
            that.settingValue.fwqdk +
            "/sorting_web/" +
            "employeeInfo/tableLogin",
          {
            tableAccount: "666666",
          }
        )
        .then(function (data) {
          if (data.code == "0000") {
            that
              .$post("sortingSet/getSortingExpressTypeList", {})
              .then(function () {
                // that.carCode.lxxzoptions = data.data;

                that.createSocket("ws://" + that.settingValue.sbtip + ":8099");
                // that
                //   .$post("serialPort/initSerialPort", {})
                //   .then(function (data) {
                if (data.code == "0000") {
                  if (localStorage.getItem("哈哈") != 1) {
                    if (that.settingValue.smlx == "星程吉月五面扫RFID") {
                      let newObj = {
                        jcgmd: that.settingValue.smlx,
                        user: "666666",
                        sbtip: that.settingValue.sbtip,
                        sbtbh: that.settingValue.sbtbh,
                      };
                      sessionStorage.setItem("login", JSON.stringify(newObj));
                      that.$router.push({
                        name: "Inout",
                        params: {
                          // jcgmd: that.carCode.jcgmd,
                          user: that.user,
                          sbtip: that.settingValue.sbtip,
                        },
                      });
                      if (that.lang == "zh") {
                        that.$message({
                          message: "登陆成功",
                          type: "success",
                        });
                      } else {
                        that.$message({
                          message: "Successful login",
                          type: "success",
                        });
                      }
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
                          message:
                            "The serial port is initialized successfully",
                          type: "success",
                          duration: 2000,
                        });
                      }
                      sessionStorage.setItem("init", data.code);
                    }
                  }
                } else {
                  // if (that.lang == "zh") {
                  //   that.$notify({
                  //     title: "警告",
                  //     message: "初始化串口失败",
                  //     type: "warning",
                  //     duration: 0,
                  //   });
                  // } else {
                  //   that.$notify({
                  //     title: "warning",
                  //     message: "Failed to initialize serial port",
                  //     type: "warning",
                  //     duration: 0,
                  //   });
                  // }
                  sessionStorage.setItem("init", data.code);
                }
                // });
              });
          } else {
            that.$message({
              message: data.msg,
              type: "error",
            });
          }
        });
    },
  },
  created() {
    that = this;
    that.$post("jdSorting/startSorting", {}).then(function (data) {
      if (data.code == "0000") {
        console.log("进入页面");
      }
    });
  },
  mounted() {
    that = this;
    that.getSettings();
    that.getScanList();
    that.$post("sortingSet/deleteSortingSet", {}).then(function (data) {
      if (data.code == "0000") {
        sessionStorage.clear();
        that.closeSocket();
      }
    });
    that.lang = localStorage.getItem("lang");
    that.pz = that.lang == "zh" ? "配置" : "Configure";
    that.cccf = that.lang == "zh" ? "仓储粗分" : "Coarse storage";
    // that.cqjcg = that.lang == "zh" ? "进出港" : "Arrival/Dispatch";
    that.plc = that.lang == "zh" ? "PLC控制" : "PLC control";
    that.settingValue.bctplxoptions =
      that.lang == "zh"
        ? [
            { label: "保存到本地", value: "保存到本地" },
            { label: "保存到服务器", value: "保存到服务器" },
          ]
        : [
            { label: "Local", value: "Local" },
            { label: "Server", value: "Server" },
          ];
    that.settingValue.jcglxoptions =
      that.lang == "zh"
        ? [
            { label: "进港", value: "进港" },
            { label: "出港", value: "出港" },
          ]
        : [
            { label: "Arrival", value: "Arrival" },
            { label: "Dispatch", value: "Dispatch" },
          ];
    that.rule =
      that.lang == "zh"
        ? {
            fwqip: [
              { required: true, message: "请填写服务器IP", trigger: "change" },
            ],
            fwqdk: [
              {
                required: true,
                message: "请填写服务器端口",
                trigger: "change",
              },
            ],
            sbtip: [
              { required: true, message: "请填写上包台IP", trigger: "change" },
            ],
            sbtbh: [
              {
                required: true,
                message: "请选择上包台编号",
                trigger: "change",
              },
            ],
            czdk: [
              { required: true, message: "请填写称重端口", trigger: "change" },
            ],
            dz: [{ required: true, message: "请填写底重", trigger: "change" }],
            zlsx: [
              { required: true, message: "请填写重量上限", trigger: "change" },
            ],
            smlx: [
              { required: true, message: "请选择扫描类型", trigger: "change" },
            ],
            xjxh: [
              { required: true, message: "请填写相机序号", trigger: "change" },
            ],
            bctplx: [
              {
                required: true,
                message: "请选择保存图片类型",
                trigger: "change",
              },
            ],
            jcglx: [
              {
                required: true,
                message: "请选择进出港类型",
                trigger: "change",
              },
            ],
            ywcj: [
              {
                required: true,
                message: "请选择业务场景",
                trigger: "change",
              },
            ],
            xckz: [
              {
                required: true,
                message: "请选择小车控制",
                trigger: "change",
              },
            ],
          }
        : {
            fwqip: [
              {
                required: true,
                message: " enter the Server IP",
                trigger: "change",
              },
            ],
            fwqdk: [
              {
                required: true,
                message: " enter the Server interface",
                trigger: "change",
              },
            ],
            sbtip: [
              {
                required: true,
                message: " enter the Infeed Table",
                trigger: "change",
              },
            ],
            sbtbh: [
              {
                required: true,
                message: " enter the Table NO",
                trigger: "change",
              },
            ],
            czdk: [
              {
                required: true,
                message: " Weighing interface",
                trigger: "change",
              },
            ],
            dz: [
              {
                required: true,
                message: " enter Min weight",
                trigger: "change",
              },
            ],
            zlsx: [
              {
                required: true,
                message: " enter Max weight",
                trigger: "change",
              },
            ],
            smlx: [
              {
                required: true,
                message: "select scan type",
                trigger: "change",
              },
            ],
            xjxh: [
              {
                required: true,
                message: " enter the Camera No",
                trigger: "change",
              },
            ],
            bctplx: [
              {
                required: true,
                message: " enter the Keep Photo",
                trigger: "change",
              },
            ],
            jcglx: [
              {
                required: true,
                message: " enter the Arrival/Dispatch",
                trigger: "change",
              },
            ],
            ywcj: [
              {
                required: true,
                message: "Please select a business scenario",
                trigger: "change",
              },
            ],
            xckz: [
              {
                required: true,
                message: "Please select car control",
                trigger: "change",
              },
            ],
          };
    // that.carCode.jcgmdoptions =
    //   that.lang == "zh"
    //     ? [
    //         { value: "1", label: "进港面单" },
    //         { value: "0", label: "出港面单" },
    //       ]
    //     : [
    //         { value: "1", label: "Arrival Bill" },
    //         { value: "0", label: "Dispatch Bill" },
    //       ];

    // that.rules =
    //   that.lang == "zh"
    //     ? {
    //         jcgmd: [
    //           {
    //             required: true,
    //             message: "请选择进出港面单",
    //             trigger: "change",
    //           },
    //         ],
    //         lxxz: [
    //           { required: true, message: "请选择类型", trigger: "change" },
    //         ],
    //         hdzl: [
    //           { required: false, message: "请输入恒定重量", trigger: "change" },
    //         ],
    //       }
    //     : {
    //         jcgmd: [
    //           {
    //             required: true,
    //             message: "Select Arrival/Dispatch Bill",
    //             trigger: "change",
    //           },
    //         ],
    //         lxxz: [
    //           {
    //             required: true,
    //             message: "Select Express Name",
    //             trigger: "change",
    //           },
    //         ],
    //         hdzl: [
    //           {
    //             required: false,
    //             message: "Enter Steady Weight",
    //             trigger: "change",
    //           },
    //         ],
    //       };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/Login.scss";
</style>