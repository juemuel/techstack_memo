
import { getSideBar } from 'vitepress-plugin-autobar'// 使用了vitepress-plugin-autobar
let sidebar = getSideBar("./docs");
sidebar.reduce(function(previousValue,currentValue){
	switch(currentValue.text)
	{
	  case "Weekly":
		currentValue.text = "灵动周刊";
		break;
	  case "Tech":
		currentValue.text = "技术研习";
		break;
	  case "Interview":
		currentValue.text = "前端面试";
		break;
	} 
	currentValue.collapsible=true;
	currentValue.collapsed=true;
	currentValue.items.reverse();
},0)
console.log(sidebar);

export default sidebar;