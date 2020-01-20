import 'babel-polyfill'
import 'isomorphic-fetch'

import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '@/plugins/vuetify'

Vue.config.productionTip=false;

new Vue(
{
    data:
	{
		title: 'A Cute Title',
		drawer: null,
		dark: true,
		domains: ['Loading...'],
		domains_expand: true
	},
	methods:
	{
		fetchAPI(command,data,options)
		{
			if(!data)
			{
				data={};
			}
			var api=JSON.parse(localStorage.api);
			data.ApiKey=api.key;
			data.ApiUser=api.user;
			data.UserName=api.userName;
			data.Command=command;
			data='?'+Object.keys(data)
				.map(k=>encodeURIComponent(k)+'='+encodeURIComponent(data[k]))
				.join('&');
			return fetch(api.url+data,options)
				.then(data=>data.text())
				.then(text=>(new window.DOMParser()).parseFromString(text,'text/xml'))
				.then(xml=>
				{
					if(xml.querySelectorAll('Error').count!=0)
					{
						// gg
					}
					return xml.querySelector('CommandResponse');
				});
		},
		newWindow(url)
		{
			window.open(process.env.BASE_URL+url);
		},
		changeLocation(url)
		{
			location.href=process.env.BASE_URL+url;
		}
	},
	created()
	{
		this.fetchAPI('namecheap.domains.getList')
			.then(data=>
			{
				this.domains=[];
				data.querySelectorAll('Domain').forEach(e=>
				{
					if(e.attributes.IsOurDNS.value=='true')
					{
						var d=e.attributes.Name.value.split('.');
						this.domains.push(
						{
							'sld': d.shift(),
							'tld': d.join('.'),
							'icon': e.attributes.IsExpired.value=='true'?'warning':''
						})
					}
				});
			});
	},
	el: '#app',
	router,
	render: h=>h(App)
});
