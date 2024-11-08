<template>

    <el-card class="chat-box">
      <transition-group name="fade" tag="div">
        <div v-for="(message, index) in messages" :key="index" class="message">
          <!-- 机器人头像和类别信息 -->
          <transition name="fade-slide">
            <div v-if="visibleIndices.includes(index) && showMessage[index]" class="robot-info">
              <img :src="message.avatar" style="height: 80%; margin: 10px"/>
              <div class="robot-details">
                <div class="robot-name">{{ message.name }}</div>
              </div>
            </div>
          </transition>
          <!-- 机器人对话框 -->
          <transition name="fade-slide">
            <div v-if="visibleIndices.includes(index) && showContent[index]" class="message-content" @click="handleContentClick(index)"  style="cursor: pointer;">
              <p style="color: #C2D1D9;">{{ displayedMessages[index] }}</p>
            </div>
          </transition>
        </div>
      </transition-group>
        
      <el-dialog
        :key="dialogKey"
        append-to-body
      v-if="isa"
      v-model="dialogVisible"
        style=" font-weight: bold;
        font-size: 15px; /* 增大字体 */
        height: 70%;
        z-index: 2000; /* 确保对话框在最上层 */
        /* overflow-y:auto; */
        border-radius: 15px;
        "
       
        title="标注机器人详细信息"
        width="40%"
     
          @before-close="handleBeforeClose"
          destroy-on-close=true
    >
    <!-- :before-close="handleClose" -->

    <div class="main1"  >
    <transition-group name="fade" tag="div">
        <div v-for="(message, index) in messages2" :key="index" class="message">
          <!-- 机器人头像和类别信息 -->
          <transition name="fade-slide">
            <div v-if="visibleIndices2.includes(index) && showMessage2[index]" class="robot-info" >
              <img :src="message.avatar" style="height: 80%; margin: 10px"/>
              <div class="robot-details">
                <div class="robot-name" style="color:black">{{ message.name }}</div>
              </div>
            </div>
          </transition>
          <!-- 机器人对话框 -->
          <transition name="fade-slide">
            <div v-if="visibleIndices2.includes(index) && showContent2[index]" class="message-content"  >
              <p :style="{ color: '#C2D1D9', whiteSpace: 'pre-wrap' }">{{ displayedMessages2[index] }}</p>
            </div>
          </transition>
        </div>
        
      </transition-group>
    </div>

    <div class=""style="margin-bottom: 10px;">
        
        <span class="dialog-footer" style="margin-bottom: 10px; display: flex;">
            <el-input style="margin-right: 5px" v-model="input" placeholder="Please input" />
            <el-button type="primary" @click="onSubmit">Create</el-button>
        </span>
      

      </div>
    </el-dialog>
    </el-card>
  </template>
  
  <script setup>
  import { ref, onMounted, nextTick ,watch} from 'vue';
  import check2 from '../assets/images/check2.png';
  import check from '../assets/images/check.png';
  import eva from '../assets/images/eva.png';
  const input = ref([]);
  const messages = ref([
    { name: '标注机器人1号 正在对【556】号文档进行标注', avatar: check2, text: '标注机器人正在对法律文书进行详细标注。我们从文书的开头到结尾逐页进行处理，首先识别出所有的法律条款，包括但不限于《民法典》、《刑法》等法律文献中的具体条文。接下来，我们会特别注意案件编号、原告和被告的基本信息，并将其准确标记，以确保所有的法律元素都得到妥善处理。我们还会对涉及到的关键术语和法律术语进行标记，例如“证据法则”、“合同义务”等。这个过程确保了文书中的所有重要信息都被提取并标注，方便后续的审核和分析工作。当前，我们已经完成了初步标注工作，接下来会对标注的准确性进行详细检查。如果在标注过程中发现任何异常情况，我们会及时进行调整和修正，确保最终的标注结果符合法律文书处理的标准和要求。请稍等，我们会尽快完成这项工作...' },
    { name: '审查机器人1号 正在对【23】号文档进行审查', avatar: check, text: '审核机器人现在开始对之前标注机器人的工作进行全面审核。我们的任务是确保所有的标注内容都准确无误，包括所有法律条款、案件编号以及关键术语。我们会逐条核对标注的内容，与原始法律文书进行对照，确保每一项标注都符合实际情况。如果发现任何标注错误或遗漏，我们会立即进行修正，并记录下问题以供后续跟踪。审核过程中，我们还会对标注的一致性进行检查，确保相同的法律条款或术语在整个文书中被标注的一致。我们的目标是提升文书的标注质量，使其达到高标准的法律处理要求。请您耐心等待，我们会在审核完成后提供详细的反馈和改进建议...' },
    { name: '质量机器人2号 正在对【55】号文档进行结果评审', avatar: eva, text: '质量评价机器人正在进行对标注和审核工作的全面质量评价。我们的工作是对标注和审核的整体效果进行评估，确保所有的处理都符合质量标准。我们会从几个方面进行评价，包括标注的准确性、一致性和完整性。同时，我们还会检查标注过程中是否存在任何潜在的问题，如遗漏、重复标注或标注不一致的情况。通过对比实际文书内容与标注结果，我们可以识别出标注过程中可能存在的误差，并提供改进建议。此外，我们还会评估审核机器人的工作效果，确保审核过程中的每一步都得到了充分的执行。如果发现质量问题，我们将为后续的改进提供具体建议，以确保标注和审核工作能够达到最佳效果。请稍等，我们会在评估完成后将结果反馈给相关团队，并提出优化建议...' },
  ]);

  const messages2 = ref([
    { name: '标注机器人', avatar: check2, 
    text: 
   `贵州省施秉县人民法院\n
民事判决书\n
（2023）黔2623民初490号\n
原告\n
    龙艳兰\n
    女性\n
    1990年2月14日生\n
    苗族\n
    贵州省施秉县\n
    身份证号码：522623199002143622\n
    住址：贵州省施秉县双井镇龙塘村七组\n
被告\n
    龙清华\n
    男性\n
    1989年6月10日生\n
    苗族\n
    贵州省施秉县\n
    身份证号码：522623198906103637\n
    住址：贵州省施秉县双井镇龙塘村七组\n
案件\n
    离婚纠纷\n
    2023年8月29日受理\n
    简易程序\n
    缺席审理\n
诉讼请求\n
    离婚判决\n
    婚生女儿龙婷婷\n
    选择跟随父母一方生活\n
婚姻状况\n
    2011年结婚\n
    2012年领取结婚证\n
    2010年4月19日生育女儿\n
    2017年提出协议离婚\n
    分居多年\n
    无房产、财产纠纷、外债\n
庭审\n
    原告到庭\n
    被告未到庭\n
    电话联系被告\n
    被告不同意离婚\n
法院意见\n
    夫妻感情基础较好\n
    家庭矛盾属正常\n
    感情尚有和好可能\n
    未完全破裂\n
判决\n
    不准离婚\n
    案件受理费200元，减半收取100元\n
    由原告负担\n
上诉\n
    上诉期限15日\n
    上诉法院：贵州省黔东南苗族侗族自治州中级人民法院` },
    // { name: 'xx机器人', avatar: check2, text: '法院在判决书中引用了《中华人民共和国民法典》和《中华人民共和国民事诉讼法》的相关条款，这是判决的法律依据。标注这一部分有助于理解法院做出判决的法律基础，以及判决的合法性。' },
    // { name: 'xx机器人', avatar: check2, text: '这一部分是判决书的核心结论，法院判决不准离婚并说明了理由。标注这一部分可以帮助清楚地理解法院的最终决定及其依据。' },
  ]);
  
  const displayedMessages = ref(messages.value.map(() => ''));
  const displayedMessages2 = ref(messages2.value.map(() => ''));
  const visibleIndices = ref([]);
  const visibleIndices2 = ref([]);
  const showMessage = ref(messages.value.map(() => false));
  const showContent = ref(messages.value.map(() => false));
  const showMessage2 = ref(messages2.value.map(() => false));
  const showContent2 = ref(messages2.value.map(() => false));
  const dialogVisible = ref(false)
  const dialogKey = ref(0); // 初始化 key 值
  const isa = ref(false)
const clearDialogMessages =  async ()=> {
  // 清空显示的消息内容和相关的状态

  await nextTick(); // 等待 DOM 更新完成
  displayedMessages2.value = messages2.value.map(() => '');
  visibleIndices2.value = [];
  showMessage2.value = messages2.value.map(() => false);
  showContent2.value = messages2.value.map(() => false);
  
 
  dialogKey.value = new Date().getTime(); // 每次调用时增加 key 值
  dialogVisible.value =false
  isa.value = false
  console.log("结束",displayedMessages2.value)
};
  const typeMessage = (message, index) => {
    return new Promise((resolve) => {
      let i = 0;
      const interval = setInterval(() => {
        if (i < message.text.length) {
          displayedMessages.value[index] += message.text[i];
          i++;
        } else {
          clearInterval(interval);
          resolve(); // 完成打字效果后，通知继续执行
        }
      }, 50); // 控制字母出现的速度
    });
  };
  const typeMessage2 = (message, index) => {
    return new Promise((resolve) => {
      let i = 0;
      const interval = setInterval(() => {
        if (i < message.text.length) {
          displayedMessages2.value[index] += message.text[i];
          i++;
        } else {
          clearInterval(interval);
          resolve(); // 完成打字效果后，通知继续执行
        }
      }, 50); // 控制字母出现的速度
    });
  };
  
  const showNextMessage = async (index) => {
    if (index >= messages.value.length) return;
  
    // 显示当前机器人的信息
    visibleIndices.value.push(index);
    showMessage.value[index] = true;
  
    // 等待头像和名称完全显示
    await nextTick();
    await new Promise(resolve => setTimeout(resolve, 500));
  
    // 显示对话框内容
    showContent.value[index] = true;
  
    // 延迟后逐字显示对话框内容
    await typeMessage(messages.value[index], index);
    
    // 延迟后显示下一个机器人
    await new Promise(resolve => setTimeout(resolve, 1000));
    showNextMessage(index + 1);
  };
  const showNextMessage2 = async (index) => {
    if (index >= messages2.value.length) return;
  
    // 显示当前机器人的信息
    visibleIndices2.value.push(index);
    showMessage2.value[index] = true;
  
    // 等待头像和名称完全显示
    await nextTick();
    await new Promise(resolve => setTimeout(resolve, 500));
  
    // 显示对话框内容
    showContent2.value[index] = true;
  
    // 延迟后逐字显示对话框内容
    await typeMessage2(messages2.value[index], index);
    
    // 延迟后显示下一个机器人
    await new Promise(resolve => setTimeout(resolve, 1000));
    showNextMessage2(index + 1);
  };
  
  onMounted(() => {
    showNextMessage(0); // 从第一个机器人开始
  });

//   onMounted(() => {
//     showNextMessag2(0); // 从第一个机器人开始
//   });
const clearDialogMessages1 = async () => {
  // 停止所有未完成的定时器
  await nextTick();

  displayedMessages2.value = messages2.value.map(() => '');
  visibleIndices2.value = [];
  showMessage2.value = messages2.value.map(() => false);
  showContent2.value = messages2.value.map(() => false);

  dialogKey.value = new Date().getTime(); // 强制重新渲染
  dialogVisible.value = false;
  isa.value = false;
  console.log("结束", displayedMessages2.value);
};
const handleBeforeClose = async (done) => {
  await clearDialogMessages(); // 确保状态和定时器被清理
  done(); // 关闭对话框
};
// 监听对话框打开状态，启动逐字显示效果
watch(dialogVisible, (newValue) => {
  
    console.log("变化：",displayedMessages2.value)
  if (newValue) {
    displayedMessages2.value = messages2.value.map(() => '');
    visibleIndices2.value = [];
    showMessage2.value = messages2.value.map(() => false);
    showContent2.value = messages2.value.map(() => false);
    
 
    dialogKey.value = new Date().getTime(); // 每次调用时增加 key 值
    // clearDialogMessages1();
    showNextMessage2(0); // 从第一个消息开始
    console.log("又tmd开始继续发消息了")
    
    return
  }
  
});
    const handleContentClick = (index) => {
    console.log('Clicked message index:', index);
    if (index===0) {

        // idx = messages.value[index].name
      isa.value = true
      dialogVisible.value = true
      console.log("点击对话框",dialogVisible.value)
    }
  };
  </script>
  
  <style scoped>
  .main1{
    overflow-x: hidden;
    overflow-y: auto; 
    /* height: 80%; */
    height: 490px;
    margin-bottom: 5px;
    margin-top: 5px;
  }
  .chat-box {
    width: 800px; /* 调整宽度 */
    height: 600px; /* 调整高度 */
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 10px;
    overflow-y: auto; /* 使内容区域可滚动 */
  }
  
  .message {
    margin-bottom: 20px;
  }
  
  .robot-info {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    width: 400px;
    height: 50px;
    background-color: #B1D9E5;
    border-radius: 10px; /* 圆角边框 */
    box-shadow: 2px 2px 6px rgb(0, 0, 0); /* 较浅且较短的阴影 */
  }
  
  .avatar {
    width: 60px; /* 增大头像 */
    height: 60px; /* 增大头像 */
    margin-right: 15px; /* 增加头像与文本的间距 */
  }
  
  .robot-details {
    display: flex;
    flex-direction: column;
  }
  
  .robot-name {
    font-weight: bold;
    font-size: 15px; /* 增大字体 */
  }
  
  .message-content {
    background-color: #4C7620;
    padding: 15px; /* 增加内边距 */
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border: 1px solid #000000; /* 细线边框，1px 宽度，黑色 */
  }
  
  .message-content p {
    margin: 0;
    white-space: pre-wrap;
    word-break: break-word;
  }
  
  /* Fade and slide transition */
  .fade-slide-enter-active, .fade-slide-leave-active {
    transition: all 0.5s ease;
  }
  .fade-slide-enter-from, .fade-slide-leave-to {
    transform: translateY(20px);
    opacity: 0;
  }
  .fade-slide-enter-to, .fade-slide-leave-from {
    transform: translateY(0);
    opacity: 1;
  }
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
  .fade-enter-to, .fade-leave-from {
    opacity: 1;
  }
  </style>