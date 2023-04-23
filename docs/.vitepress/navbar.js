let navbar = 
	[ //右侧导航，link跳转地址，activeMatch保持高亮
		{
			text: '首页',
			link: '/',
			activeMatch: '/index'
		},
		{
			text: '灵动月刊',
			link: '/01.Monthly/index',
		},
		{
			text: '技术研习',
			link: '/02.Tech/index'
		},
		{
			text: '前端面试',
			link: '/03.Interview/index'
		},  
		{
			text: '组件库',
			items: [
				{ text: 'Vitepress引用组件', link: '/04.Component/VitePressUI' },
			  { text: '通用组件库', link: '/04.Component/OriUI' },
			  { text: 'JueMUI', link: '/04.Component/JueMUI' },
			]
		},  
	]
;

export {navbar};