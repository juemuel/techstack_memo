import{_ as s,c as n,o as a,N as l}from"./chunks/framework.35977300.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"09.Configure/主页配置.md","lastUpdated":1681151990000}'),p={name:"09.Configure/主页配置.md"},e=l(`<p>参考如下</p><p><img src="https://s2.loli.net/2023/04/08/xap4Jl2tb7rFQIT.png" alt="image-20230408133551926"></p><div class="language-markdown line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#F07178;">layout</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">home</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Vite</span></span>
<span class="line"><span style="color:#F07178;">titleTemplate</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Next Generation Frontend Tooling</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">hero</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Vite // 网站的左上角标题</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Next Generation Frontend Tooling // 最中间的文字</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">tagline</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Get ready for a development environment that can finally catch up with you. // 最中间的文字</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">image</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">src</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/logo-with-shadow.png // 页面中最大的那个图标，默认地址 /public，放在public中无需写完整路径</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">alt</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Vite</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">actions</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">// 对应页面上，vite英文介绍下面的三个按钮</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">theme</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">brand</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Get Started</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">link</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/guide/</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">... // 省略一部分</span></span>
<span class="line"><span style="color:#F07178;">features</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">// 页面中下位置的文字介绍</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">icon</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">💡</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Instant Server Start</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">details</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">On demand file serving over native ESM, no bundling required!</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">icon</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">⚡️</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Lightning Fast HMR</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">details</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Hot Module Replacement (HMR) that stays fast regardless of app size.</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">... // 省略一部分</span></span>
<span class="line"><span style="color:#A6ACCD;">---</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div>`,3),o=[e];function r(t,c,i,y,D,C){return a(),n("div",null,o)}const b=s(p,[["render",r]]);export{F as __pageData,b as default};
