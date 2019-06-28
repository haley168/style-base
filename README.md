# 原子级的样式库

## [测试页面一](test/test.html)
## 概述
这是一个原子级的样式库，主要用于修正样式。当然也可以直接通过拼积木的方式来拼接出想要的效果。
目前还处在建设整理阶段，欢迎同行前来补充。
## 约定描述
1. -px 表示已px为单位
1. -percent 表示以百分比为单位
1. _5 表示负值
1. 大部分都是以原来样式单词的首字母+数值作为class的名称,比如w5表示width:5px,h5表示height:5px;m5表示margin:5px;ml5表示margin-left:5px;当然可能会存在某两个词首字母一样，目前还没遇到，如果遇到会采用将不常用的那个多加一个字母来处理
## 样式库组成
### style-base.css  总文件  
### base.css  --> 一些较常用的样式   
1. float  浮动  
1. align  对齐方式  
1. overflow

#### flex.css  
### ellipsis  裁剪  
### > 大小类  
####  margin-px   --> margin，以px为单位3
####  padding-px   --> padding，以px为单位  
####  position-px   --> 定位，以px为单位  
####  position-percent  -->定位，以百分比为单位 
####  fontSize-px  --> 字体大小，以px为单位  
####  height-px  -->高度，以px为单位 
 
####  width-px  
以px为单位的宽度，从0至150px，间隔为5px；样式举例：w5表示5px,w50表示50px
####  width-percent  
百分比宽度，从0至100%，间隔为0.5%；样式举例：w5p表示5%；w5d5p表示5.5%

### text  
### other  

## 赞赏
<p align="center"><img src="/static/images/contribution/code.png" alt="" style="max-width:100%;" width="600"></p>



