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
		title: 'Namecheap Panel',
		drawer: null,
		dark: true,
		domains: [{ domain: 'Loading...', prevent: true }],
		domains_expand: true
	},
	methods:
	{
		fetchAPI(command,data)
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
			return fetch(api.url,
			{
				method: 'POST',
				headers:
				{
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				body: Object.keys(data)
					.map(k=>encodeURIComponent(k)+'='+encodeURIComponent(data[k]))
					.join('&')
			})
			.then(data=>data.text())
			.then(text=>(new window.DOMParser()).parseFromString(text,'text/xml'))
			.then(xml=>
			{
				// TODO: Warnings?
				var errors=xml.querySelectorAll('Errors > Error');
				if(errors.length!=0)
				{
					var message='Request Failed';
					errors.forEach(e=>
					{
						message+='\n'+e.innerHTML+' ('+e.attributes.Number.value+')';
					});
					window.alert(message);
					return null;
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
	watch:
	{
		$route()
		{
			this.title='Namecheap Panel';
		}
	},
	created()
	{
		this.fetchAPI('namecheap.domains.getList')
			.then(data=>
			{
				this.domains=[];
				data.querySelectorAll('DomainGetListResult > Domain').forEach(e=>
				{
					e=e.attributes;
					if(e.IsOurDNS.value=='true')
					{
						this.domains.push(
						{
							'domain': e.Name.value,
							'icon': e.IsExpired.value=='true'?'warning':''
						})
					}
				});
			});
	},
	el: '#app',
	router,
	render: h=>h(App)
});
