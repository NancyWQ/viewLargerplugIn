# viewLargerplugIn
这是一个使用JQuery编写的查看大图的插件
使用方法：
html部分
    请用a标签包裹img元素，并以a标签的href属性值作为大图的链接
    <a href="大图地址">
      <img src="小图地址"/>
    </a>
JS部分
  请首先在html引入JQuery函数文件，之后引入插件
  $("#element").preview(大图的宽度（数字）)
 本插件是对网上插件的改进
