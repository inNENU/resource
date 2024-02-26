import{_ as d,r as c,o as p,c as o,a as n,b as e,d as t,w as i,e as a}from"./app-BcCpAv4j.js";const u={},r=a('<p>本部分将手把手引领您完成一个页面的制作，其中会涉及最常见的组件。</p><h2 id="材料准备" tabindex="-1"><a class="header-anchor" href="#材料准备"><span>材料准备</span></a></h2><p>假定您已经获得以下材料:</p><ul><li>统一身份认证登录 <img src="https://mp.innenu.com/img/account/authserver.jpg" alt="统一身份认证登录"></li><li>修改密码页面截图 <img src="https://mp.innenu.com/img/account/reset-password.jpg" alt="修改密码页面截图"></li><li>别名管理页面截图 <img src="https://mp.innenu.com/img/account/email-address.jpg" alt="别名管理页面截图"></li></ul>',4),v={class:"hint-container details"},m=n("summary",null,"相关材料",-1),k=n("p",null,[e("一、"),n("strong",null,"获得学号")],-1),b=n("p",null,"学号是 10 位数字，您收到的录取通知书证书编号和日后发放的校园卡 💳 卡号即是学号。",-1),y=n("p",null,[e("二、"),n("strong",null,"获得邮箱(别名)")],-1),g={href:"https://authserver.nenu.edu.cn/authserver/login",target:"_blank",rel:"noopener noreferrer"},h=n("li",null,"使用学号与默认密码进行登录。",-1),x=n("li",null,"登录后，您可以在“别名管理中”中通过别名获得自己的邮箱号 ✉",-1),_=n("li",null,"邮箱地址统一为 “别名” + “@nenu.edu.cn”",-1),f=n("p",null,"默认密码: Nenu + 身份证后六位，X 用 1 代替",-1),N=n("p",null,"修改密码及密保绑定",-1),E={href:"https://authserver.nenu.edu.cn/authserver/login",target:"_blank",rel:"noopener noreferrer"},j=n("li",null,"点击“修改密码”，修改初始密码。",-1),B=n("p",null,"提示",-1),w=n("ul",null,[n("li",null,"为了您找回密码时的便捷，建议您在个人资料处绑定其他邮箱或绑定手机，便于密码遗忘后自助找回。"),n("li",null,"由于身份证号可能被他人获得，为了您的资金、消费以及课程成绩安全 🔐，⚠ 请您务必更换默认密码 🔑。")],-1),U=n("h2",{id:"创建页面配置文件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#创建页面配置文件"},[n("span",null,"创建页面配置文件")])],-1),z=n("p",null,[e("打开 VSCode 并选择“文件”-“新建文件”，并立即保存文件为 "),n("code",null,"authorize.yml"),e("。")],-1),S=n("h2",{id:"编写总体结构",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#编写总体结构"},[n("span",null,"编写总体结构")])],-1),q=a(`<details class="hint-container details"><summary>总体结构</summary><table><thead><tr><th>参数</th><th style="text-align:center;">必填</th><th style="text-align:center;">值类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>title</td><td style="text-align:center;">是</td><td style="text-align:center;"><code>string</code></td><td>导航栏标题</td><td>一般不超过八个字，六字及以下为佳</td></tr><tr><td>desc</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>页面描述</td><td>会显示在页脚</td></tr><tr><td>author</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>页面的作者</td><td>会显示在页脚</td></tr><tr><td>time</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>页面更新时间</td><td>会显示在页脚</td></tr><tr><td>grey</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>boolean</code></td><td>使用灰色背景</td><td>默认为白色背景</td></tr><tr><td>cite</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string | string[]</code></td><td>页面引用链接</td><td></td></tr><tr><td>content</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>ComponentConfig[]</code></td><td>页面的内容</td><td>数组的每个对象会最终渲染为一个组件</td></tr><tr><td>from</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>左上角返回按钮文字</td><td>设置左上角文字，默认为上一级页面标题</td></tr><tr><td>outdated</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>boolean</code></td><td>是否已过时</td><td>可展示一条“页面过时”提示</td></tr><tr><td>shareable</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>boolean</code></td><td>是否可被分享</td><td>是否可以使用小程序的界面分享，默认为 <code>false</code></td></tr><tr><td>contact</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>boolean</code></td><td>“联系开发者”按钮</td><td>是否在分享菜单中显示“联系开发者”，默认为 <code>true</code></td></tr></tbody></table></details><p>参照上述说明，你可以很轻松的编写如下内容:</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">title</span><span class="token punctuation">:</span> 统一身份认证
<span class="token key atrule">author</span><span class="token punctuation">:</span> 张三
<span class="token key atrule">date</span><span class="token punctuation">:</span> 2021年11月1日
<span class="token key atrule">shareable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">content</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这里，<code>content</code> 暂时被设置成了空数组，它表示页面的内容，接下来我们就需要丰富和完善它。</p><h2 id="添加第一个组件——标题" tabindex="-1"><a class="header-anchor" href="#添加第一个组件——标题"><span>添加第一个组件——标题</span></a></h2>`,5),C=a(`<blockquote><p><code>content</code> 的每个元素都为一个对象，该对象会最终渲染为一个组件。</p><p>每个配置对象有一个固定的键 <code>tag</code> 来决定渲染的组件。有效的 <code>tag</code> 值及对应的渲染结果如下:</p><ul><li><a href="#title">title</a>: 大标题</li><li>...</li></ul></blockquote><p>现在，我们需要为小程序页面添加第一个组件——标题。</p><p>为让小程序渲染它，我们需要为 content 数组添加第一个元素。为了让这个元素渲染为标题组件，我们需要设置元素为一个对象，并设置 <code>tag</code> 键的值为 <code>title</code>:</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">title</span><span class="token punctuation">:</span> 统一身份认证
<span class="token key atrule">author</span><span class="token punctuation">:</span> 张三
<span class="token key atrule">date</span><span class="token punctuation">:</span> 2021年11月1日
<span class="token key atrule">shareable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">content</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">tag</span><span class="token punctuation">:</span> title
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),$=a(`<details class="hint-container details"><summary>title 参数</summary><table><thead><tr><th>参数</th><th style="text-align:center;">必填</th><th style="text-align:center;">值类型</th><th>内容</th></tr></thead><tbody><tr><td>text</td><td style="text-align:center;">是</td><td style="text-align:center;"><code>string</code></td><td>大标题文字</td></tr></tbody></table></details><p>可以看到，我们需要使用 <code>text</code> 来设置标题组件的文字:</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">title</span><span class="token punctuation">:</span> 统一身份认证
<span class="token key atrule">author</span><span class="token punctuation">:</span> 张三
<span class="token key atrule">date</span><span class="token punctuation">:</span> 2021年11月1日
<span class="token key atrule">shareable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">content</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">tag</span><span class="token punctuation">:</span> title
    <span class="token key atrule">text</span><span class="token punctuation">:</span> 获得学号
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="添加第二个组件文本" tabindex="-1"><a class="header-anchor" href="#添加第二个组件文本"><span>添加第二个组件文本</span></a></h2><p>查阅参数表可知，小程序提供了标题组件，以及段落、无序列表、有序列表三个文字组件。</p><p>对于 “学号是 10 位数字，您收到的录取通知书证书编号和日后发放的校园卡 💳 卡号即是学号。” 这段文字来说，它显然不够充当一个段落，因此，我们选择文本组件。而文本组件的 <code>tag</code> 是 <code>text</code>，其参数如下:</p><details class="hint-container details"><summary>文本组件参数</summary><table><thead><tr><th>参数</th><th style="text-align:center;">必填</th><th style="text-align:center;">值类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>heading</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code> | <code>boolean</code></td><td>标题</td><td></td></tr><tr><td>text</td><td style="text-align:center;">是</td><td style="text-align:center;"><code>string</code> | <code>string[]</code></td><td>文字内容</td><td></td></tr><tr><td>type</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>&#39;tip&#39;</code> | <code>&#39;warn&#39;</code> | <code>&#39;danger&#39;</code> | <code>&#39;info&#39;</code></td><td>文字块样式</td><td>不填无额外样式</td></tr><tr><td>align</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>&#39;left&#39;</code> | <code>&#39;right&#39;</code> | <code>&#39;center&#39;</code> | <code>&#39;justify&#39;</code></td><td>段落对齐方式</td><td>默认为 <code>&#39;justify&#39;</code></td></tr></tbody></table></details><p>我们显然不需要对其设置额外的样式，默认的两端对齐也可以满足要求，那么我们只需要通过 <code>text</code> 属性设置文字:</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">title</span><span class="token punctuation">:</span> 统一身份认证
<span class="token key atrule">author</span><span class="token punctuation">:</span> 张三
<span class="token key atrule">date</span><span class="token punctuation">:</span> 2021年11月1日
<span class="token key atrule">shareable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">content</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">tag</span><span class="token punctuation">:</span> title
    <span class="token key atrule">text</span><span class="token punctuation">:</span> 获得学号

  <span class="token punctuation">-</span> <span class="token key atrule">tag</span><span class="token punctuation">:</span> text
    <span class="token key atrule">text</span><span class="token punctuation">:</span> 学号是 10 位数字，您收到的录取通知书证书编号和日后发放的校园卡 💳 卡号即是学号。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这里，我们注意到 <code>text</code> 同时接收 string 和 string 数组，这是因为文字可以有一个或多个段落，所以如果我们需要添加一个新行，我们需要将其改为:</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">title</span><span class="token punctuation">:</span> 统一身份认证
<span class="token key atrule">author</span><span class="token punctuation">:</span> 张三
<span class="token key atrule">date</span><span class="token punctuation">:</span> 2021年11月1日
<span class="token key atrule">shareable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">content</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">tag</span><span class="token punctuation">:</span> title
    <span class="token key atrule">text</span><span class="token punctuation">:</span> 获得学号

  <span class="token punctuation">-</span> <span class="token key atrule">tag</span><span class="token punctuation">:</span> text
    <span class="token key atrule">text</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 学号是 10 位数字，您收到的录取通知书证书编号和日后发放的校园卡 💳 卡号即是学号。
      <span class="token punctuation">-</span> 这里的文字另起了新行<span class="token punctuation">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文本排版" tabindex="-1"><a class="header-anchor" href="#文本排版"><span>文本排版</span></a></h2><p>对于同样的排版，您可以有多种方式来实现。假定我们想实现以下文字:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>春眠不觉晓
处处闻啼鸟
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>借用文字组件，以下写法的显示并无不同:</p><ul><li><p>使用数组创建多个段落</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">tag</span><span class="token punctuation">:</span> text
  <span class="token key atrule">text</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> 春眠不觉晓
    <span class="token punctuation">-</span> 处处闻啼鸟
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用多行字符串</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">tag</span><span class="token punctuation">:</span> text
  <span class="token key atrule">text</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token punctuation">-</span>
    春眠不觉晓
    处处闻啼鸟
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">tag</span><span class="token punctuation">:</span> text
  <span class="token key atrule">text</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token punctuation">|</span><span class="token punctuation">-</span>
      春眠不觉晓
      处处闻啼鸟
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用换行符</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">tag</span><span class="token punctuation">:</span> text
  <span class="token key atrule">text</span><span class="token punctuation">:</span> <span class="token string">&quot;春眠不觉晓\\n处处闻啼鸟&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">tag</span><span class="token punctuation">:</span> text
  <span class="token key atrule">text</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token string">&quot;春眠不觉晓\\n处处闻啼鸟&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>所以您完全可以根据自己的习惯去进行编辑，不过 Mr.Hope 还是推荐前两种，因为他们更为直观。</p><h2 id="媒体文件存放" tabindex="-1"><a class="header-anchor" href="#媒体文件存放"><span>媒体文件存放</span></a></h2><p>由于 YAML 是纯文本文件，所有的图片、文件等需单独列出，并在对应的配置项处填入对应的网址。</p><p>inNENU 服务器文件结构如下:</p><ul><li>文件: 存放在 <code>https://mp.innenu.com/file/</code>，可以用 <code>$file</code> 索引</li><li>图片: 存放在 <code>https://mp.innenu.com/img/</code>，可以用 <code>$img</code> 索引</li><li>页面 YAML: 存放在 <code>https://mp.innenu.com/pages/</code></li><li>图标: 存放在 <code>https://mp.innenu.com/data/icon/</code></li></ul>`,21),L={class:"hint-container info"},T=n("p",{class:"hint-container-title"},"相关信息",-1),M={href:"https://github.com/inNENU/resource",target:"_blank",rel:"noopener noreferrer"},O=a(`<p>对于本页面，您可以获得的图片按照内容进行命名:</p><ul><li>统一身份认证登录: <code>authserver.jpg</code></li><li>修改密码页面截图: <code>reset-password.jpg</code></li><li>别名管理页面截图: <code>email-address.jpg</code></li></ul><p>同时，您需要在对应的配置项填入:</p><ul><li><code>$img/account/authserver.jpg</code></li><li><code>$img/account/reset-password.jpg</code></li><li><code>$img/account/email-address.jpg</code></li></ul><p>提交时，直接提交下列压缩包结构。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>├─ img
|  └─ account
|     ├─ authserver.jpg
|     ├─ reset-passwor.jpg
|     └─ email-address.jpg
└─ res
   └─ guide
       └─ account
           └─ authorize.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="继续完成页面" tabindex="-1"><a class="header-anchor" href="#继续完成页面"><span>继续完成页面</span></a></h2><p>类似的，通过添加新元素设置 <code>tag</code> 选定组件，并查表添加对应参数后，您很容易就可以得到如下的页面:</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">title</span><span class="token punctuation">:</span> 统一身份认证
<span class="token key atrule">author</span><span class="token punctuation">:</span> 张三
<span class="token key atrule">date</span><span class="token punctuation">:</span> 2021年11月1日
<span class="token key atrule">shareable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">content</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">tag</span><span class="token punctuation">:</span> title
    <span class="token key atrule">text</span><span class="token punctuation">:</span> 获得学号

  <span class="token punctuation">-</span> <span class="token key atrule">tag</span><span class="token punctuation">:</span> text
    <span class="token key atrule">text</span><span class="token punctuation">:</span> 学号是 10 位数字，您收到的录取通知书证书编号和日后发放的校园卡💳卡号即是学号。

  <span class="token punctuation">-</span> <span class="token key atrule">tag</span><span class="token punctuation">:</span> title
    <span class="token key atrule">text</span><span class="token punctuation">:</span> 获得邮箱(别名)

  <span class="token punctuation">-</span> <span class="token key atrule">tag</span><span class="token punctuation">:</span> ul
    <span class="token key atrule">text</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 访问 https<span class="token punctuation">:</span>//authserver.nenu.edu.cn/authserver/login

  <span class="token punctuation">-</span> <span class="token key atrule">tag</span><span class="token punctuation">:</span> copy
    <span class="token key atrule">text</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//authserver.nenu.edu.cn/authserver/login

  <span class="token punctuation">-</span> <span class="token key atrule">tag</span><span class="token punctuation">:</span> ul
    <span class="token key atrule">text</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 使用学号与默认密码进行登录。
      <span class="token punctuation">-</span> 登录后，您可以在“别名管理中”中通过别名获得自己的邮箱号✉
      <span class="token punctuation">-</span> 邮箱地址统一为 “别名” + “@nenu.edu.cn”

  <span class="token punctuation">-</span> <span class="token key atrule">tag</span><span class="token punctuation">:</span> img
    <span class="token key atrule">src</span><span class="token punctuation">:</span> $img/account/email<span class="token punctuation">-</span>address.jpg
    <span class="token key atrule">desc</span><span class="token punctuation">:</span> 本例中邮箱为 &quot;mr<span class="token punctuation">-</span>hope@nenu.edu.cn&quot;

  <span class="token punctuation">-</span> <span class="token key atrule">tag</span><span class="token punctuation">:</span> text
    <span class="token key atrule">type</span><span class="token punctuation">:</span> info
    <span class="token key atrule">heading</span><span class="token punctuation">:</span> 默认密码
    <span class="token key atrule">text</span><span class="token punctuation">:</span> Nenu + 身份证后六位，X 用 1 代替

  <span class="token punctuation">-</span> <span class="token key atrule">tag</span><span class="token punctuation">:</span> img
    <span class="token key atrule">src</span><span class="token punctuation">:</span> $img/account/authserver.jpg

  <span class="token punctuation">-</span> <span class="token key atrule">tag</span><span class="token punctuation">:</span> title
    <span class="token key atrule">text</span><span class="token punctuation">:</span> 修改密码及密保绑定

  <span class="token punctuation">-</span> <span class="token key atrule">tag</span><span class="token punctuation">:</span> ul
    <span class="token key atrule">text</span><span class="token punctuation">:</span> 请您访问 https<span class="token punctuation">:</span>//authserver.nenu.edu.cn/authserver/login 进行登录。

  <span class="token punctuation">-</span> <span class="token key atrule">tag</span><span class="token punctuation">:</span> copy
    <span class="token key atrule">text</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//authserver.nenu.edu.cn/authserver/login

  <span class="token punctuation">-</span> <span class="token key atrule">tag</span><span class="token punctuation">:</span> ul
    <span class="token key atrule">text</span><span class="token punctuation">:</span> 点击“修改密码”，修改初始密码。

  <span class="token punctuation">-</span> <span class="token key atrule">tag</span><span class="token punctuation">:</span> img
    <span class="token key atrule">src</span><span class="token punctuation">:</span> $img/account/reset<span class="token punctuation">-</span>password.jpg

  <span class="token punctuation">-</span> <span class="token key atrule">tag</span><span class="token punctuation">:</span> ul
    <span class="token key atrule">type</span><span class="token punctuation">:</span> tip
    <span class="token key atrule">heading</span><span class="token punctuation">:</span> Mr.Hope の 友情提示
    <span class="token key atrule">text</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 为了您找回密码时的便捷，建议您在个人资料处绑定其他邮箱或绑定手机，便于密码遗忘后自助找回。
      <span class="token punctuation">-</span> 由于身份证号可能被他人获得，为了您的资金、消费以及课程成绩安全🔐，⚠请您务必更换默认密码🔑。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样您就创建出了一个简单的页面。</p><h2 id="使用列表进行导航" tabindex="-1"><a class="header-anchor" href="#使用列表进行导航"><span>使用列表进行导航</span></a></h2><p>小程序主要使用列表和网格组件导航至其他页面，当然部分其他组件也有类似功能。</p><p>如果您同时提交了多个文件，或者您编写的页面想要导航至其他页面，您就需要创建列表来构建“页面跳转”。</p><p>列表组件因为含有多个子项目，其 <code>items</code> 属性的值和文件的根键值 <code>content</code> 很像。您需要为数组中的每个元素设置文字与可选的图标、描述和链接。</p><details class="hint-container details"><summary>列表参数</summary><table><thead><tr><th>参数</th><th style="text-align:center;">必填</th><th style="text-align:center;">值类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>header</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code> | <code>boolean</code></td><td>头部标题</td><td>不填会在标题所在处留空占位，设置为 <code>false</code> 来取消留空占位</td></tr><tr><td>footer</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>尾部标题</td><td></td></tr><tr><td>items</td><td style="text-align:center;">是</td><td style="text-align:center;"><code>SimpleList[]</code></td><td>列表内容</td><td></td></tr></tbody></table><p>列表每一项参数如下:</p><table><thead><tr><th>参数</th><th style="text-align:center;">必填</th><th style="text-align:center;">值类型</th><th>内容</th></tr></thead><tbody><tr><td>icon</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>列表图标的简称或在线网址</td></tr><tr><td>text</td><td style="text-align:center;">是</td><td style="text-align:center;"><code>string</code></td><td>列表项文字</td></tr><tr><td>desc</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>列表项描述，显示在尾部</td></tr><tr><td>path</td><td style="text-align:center;">否</td><td style="text-align:center;"><code>string</code></td><td>对应配置文件的相对或绝对路径(不带后缀名)，以 <code>/</code> 结尾默认为 <code>index</code></td></tr></tbody></table></details><p>假定我们需要提交如下的页面结构:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>└─ res
   ├─ intro
   |    ...
   └─ guide
       └─ account
            ├─ mail
            |  ├─ intro.yml  (邮箱介绍)
            |  ├─ ios.yml  (iOS 邮箱设置)
            |  └─ android.yml (安卓邮箱设置)
            |
            ├─ authorize.yml (统一身份认证)
            └─ index.yml (账号主页)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code>index.yml</code> 中，我们可以设置如下的列表项:</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">title</span><span class="token punctuation">:</span> 账号
<span class="token key atrule">content</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">tag</span><span class="token punctuation">:</span> list
    <span class="token key atrule">header</span><span class="token punctuation">:</span> 了解更多
    <span class="token key atrule">items</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> 统一身份认证

  <span class="token punctuation">-</span> <span class="token key atrule">tag</span><span class="token punctuation">:</span> list
    <span class="token key atrule">header</span><span class="token punctuation">:</span> 校园邮箱
    <span class="token key atrule">items</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> 邮箱介绍

      <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> 安卓邮箱客户端设置

      <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> iOS 邮箱客户端设置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),A=n("code",null,"icon",-1),V={href:"https://github.com/inNENU/resource/blob/main/data/icon/",target:"_blank",rel:"noopener noreferrer"},D=n("code",null,"icon",-1),H=n("code",null,".svg",-1),R=a(`<div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">title</span><span class="token punctuation">:</span> 账号
<span class="token key atrule">content</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">tag</span><span class="token punctuation">:</span> list
    <span class="token key atrule">header</span><span class="token punctuation">:</span> 了解更多
    <span class="token key atrule">items</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> 统一身份认证
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> authorize

  <span class="token punctuation">-</span> <span class="token key atrule">tag</span><span class="token punctuation">:</span> list
    <span class="token key atrule">header</span><span class="token punctuation">:</span> 校园邮箱
    <span class="token key atrule">items</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> 邮箱介绍
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> email

      <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> 安卓邮箱客户端设置
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> android

      <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> iOS 邮箱客户端设置
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> apple
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，我们需要通过 <code>path</code> 设置路径。我们使用 <code>/</code> 来分割目录，所以 <code>intro.yml</code> 相对 <code>index.yml</code> 的路径为 <code>mail/intro</code>。(这里同样省略万年不变的后缀 <code>.yml</code>)</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">title</span><span class="token punctuation">:</span> 账号
<span class="token key atrule">content</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">tag</span><span class="token punctuation">:</span> list
    <span class="token key atrule">header</span><span class="token punctuation">:</span> 了解更多
    <span class="token key atrule">items</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> 统一身份认证
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> authorize
        <span class="token key atrule">path</span><span class="token punctuation">:</span> authorize

  <span class="token punctuation">-</span> <span class="token key atrule">tag</span><span class="token punctuation">:</span> list
    <span class="token key atrule">header</span><span class="token punctuation">:</span> 校园邮箱
    <span class="token key atrule">items</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> 邮箱介绍
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> email
        <span class="token key atrule">path</span><span class="token punctuation">:</span> mail/intro

      <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> 安卓邮箱客户端设置
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> android
        <span class="token key atrule">path</span><span class="token punctuation">:</span> mail/android

      <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> iOS 邮箱客户端设置
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> apple
        <span class="token key atrule">path</span><span class="token punctuation">:</span> mail/ios
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时，小程序就可以渲染出正确的列表项，并在您点击“邮箱介绍”时跳转到新页面渲染 <code>intro.yml</code> 文件。</p><div class="hint-container tip"><p class="hint-container-title">回退上一层和从根目录访问</p><p>有些时候，您可能需要从 <code>intro.yml</code> 跳转到 <code>index.yml</code> 中去，这就涉及到表示父目录的方式。我们使用 <code>../</code> 表示父目录，所以对于 <code>intro.yml</code> 来说，<code>index.yml</code> 的路径可写为 <code>../index</code>，而参数表中提到 <code>index</code> 为默认文件，所以可以简写为 <code>../</code>。</p><p>有些时候您能想从根目录开始描述路径，这种情况下，请以 <code>/</code> 开头设置 path，此时您会从 <code>pages/</code> 文件夹下开始进行路径的匹配。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>└─ pages
   ├─ intro
   |   ...
   └─ guide
       └─ account
          ├─ mail
          |  ├─ intro.yml  (邮箱介绍)
          |  ├─ ios.yml  (iOS 邮箱设置)
          |  └─ android.yml (安卓邮箱设置)
          |
          ├─ authorize.yml (统一身份认证)
          └─ index.yml (账号主页)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>比如，对于所有文件来说，他们都可以通过 <code>/guide/account/mail/intro</code> 访问 <code>intro.yml</code>。</p></div><p>至此，您应该能够独自完成大部分的页面编辑工作了。</p>`,6);function Z(I,X){const s=c("ExternalLinkIcon"),l=c("RouteLink");return p(),o("div",null,[r,n("details",v,[m,k,b,y,n("ol",null,[n("li",null,[e("访问 "),n("a",g,[e("https://authserver.nenu.edu.cn/authserver/login"),t(s)])]),h,x,_]),f,N,n("ol",null,[n("li",null,[e("访问 "),n("a",E,[e("https://authserver.nenu.edu.cn/authserver/login"),t(s)])]),j]),B,w]),n("p",null,[e("接下来您就需要按照 "),t(l,{to:"/contributing/maintainance/tag-list.html"},{default:i(()=>[e("参数表")]),_:1}),e(" 进行页面的创建。")]),U,z,S,n("p",null,[e("按照 "),t(l,{to:"/contributing/maintainance/tag-list.html#%E6%80%BB%E4%BD%93%E7%BB%93%E6%9E%84"},{default:i(()=>[e("参数表 → 总体结构")]),_:1}),e(" 完成页面的基础信息添加。页面的标题可以起为“统一身份认证”，假定当天是 2021 年 11 月 1 日，您叫张三。")]),q,n("p",null,[e("如 "),t(l,{to:"/contributing/maintainance/tag-list.html#%E6%94%AF%E6%8C%81%E7%9A%84%E7%BB%84%E4%BB%B6"},{default:i(()=>[e("参数表 → 支持的组件")]),_:1}),e(" 所说:")]),C,n("p",null,[e("接下来，我们需要参阅 "),t(l,{to:"/contributing/maintainance/tag-list.html#title"},{default:i(()=>[e("参数表 → title 参数")]),_:1}),e("，设置更多参数描述组件。")]),$,n("div",L,[T,n("p",null,[e("关于完整的服务器文件结构，请访问 "),n("a",M,[e("https://github.com/inNENU/resource"),t(s)])])]),O,n("p",null,[e("我们可以添加额外的 "),A,e(" 属性来设置一个美观的图标。当前可用的全部图标请详见 "),n("a",V,[e("https://github.com/inNENU/resource/blob/main/data/icon/"),t(s)]),e("。 我们可以直接找到相应图标并设置 "),D,e(" 为文件名 (不带 "),H,e(" 后缀)。")]),R])}const F=d(u,[["render",Z],["__file","get-started.html.vue"]]),J=JSON.parse('{"path":"/contributing/maintainance/get-started.html","title":"inNENU 快速上手","lang":"zh-CN","frontmatter":{"title":"inNENU 快速上手","icon":"lightbulb","category":"小程序","description":"本部分将手把手引领您完成一个页面的制作，其中会涉及最常见的组件。 材料准备 假定您已经获得以下材料: 统一身份认证登录 统一身份认证登录 修改密码页面截图 修改密码页面截图 别名管理页面截图 别名管理页面截图 相关材料 一、获得学号 学号是 10 位数字，您收到的录取通知书证书编号和日后发放的校园卡 💳 卡号即是学号。 二、获得邮箱(别名) 访问 h...","head":[["meta",{"property":"og:url","content":"https://innenu.com/contributing/maintainance/get-started.html"}],["meta",{"property":"og:site_name","content":"inNENU"}],["meta",{"property":"og:title","content":"inNENU 快速上手"}],["meta",{"property":"og:description","content":"本部分将手把手引领您完成一个页面的制作，其中会涉及最常见的组件。 材料准备 假定您已经获得以下材料: 统一身份认证登录 统一身份认证登录 修改密码页面截图 修改密码页面截图 别名管理页面截图 别名管理页面截图 相关材料 一、获得学号 学号是 10 位数字，您收到的录取通知书证书编号和日后发放的校园卡 💳 卡号即是学号。 二、获得邮箱(别名) 访问 h..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mp.innenu.com/img/account/authserver.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-20T06:58:23.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"inNENU 快速上手"}],["meta",{"property":"article:modified_time","content":"2023-12-20T06:58:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"inNENU 快速上手\\",\\"image\\":[\\"https://mp.innenu.com/img/account/authserver.jpg\\",\\"https://mp.innenu.com/img/account/reset-password.jpg\\",\\"https://mp.innenu.com/img/account/email-address.jpg\\"],\\"dateModified\\":\\"2023-12-20T06:58:23.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"材料准备","slug":"材料准备","link":"#材料准备","children":[]},{"level":2,"title":"创建页面配置文件","slug":"创建页面配置文件","link":"#创建页面配置文件","children":[]},{"level":2,"title":"编写总体结构","slug":"编写总体结构","link":"#编写总体结构","children":[]},{"level":2,"title":"添加第一个组件——标题","slug":"添加第一个组件——标题","link":"#添加第一个组件——标题","children":[]},{"level":2,"title":"添加第二个组件文本","slug":"添加第二个组件文本","link":"#添加第二个组件文本","children":[]},{"level":2,"title":"文本排版","slug":"文本排版","link":"#文本排版","children":[]},{"level":2,"title":"媒体文件存放","slug":"媒体文件存放","link":"#媒体文件存放","children":[]},{"level":2,"title":"继续完成页面","slug":"继续完成页面","link":"#继续完成页面","children":[]},{"level":2,"title":"使用列表进行导航","slug":"使用列表进行导航","link":"#使用列表进行导航","children":[]}],"git":{"createdTime":1699102491000,"updatedTime":1703055503000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2}]},"readingTime":{"minutes":10.6,"words":3181},"filePathRelative":"contributing/maintainance/get-started.md","localizedDate":"2023年11月4日","autoDesc":true,"excerpt":"<p>本部分将手把手引领您完成一个页面的制作，其中会涉及最常见的组件。</p>\\n"}');export{F as comp,J as data};
