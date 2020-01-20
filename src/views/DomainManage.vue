<template>
	<v-container class="pa-3">
		<v-layout wrap>
			<v-flex xs12 class="mb-2 mx-2">
				<h2>DNS Records</h2>
			</v-flex>
			<v-flex xs12>
				<v-data-table :headers="recordHeaders" :items="records" :loading="loading" :no-data-text="error==null?'Loading...':error" :rows-per-page-items="[-1]" disable-initial-sort class="elevation-2">
					<template v-slot:items="s">
						<td>
							<v-edit-dialog :return-value="s.item.type" lazy>
								{{ s.item.type }}
								<template v-slot:input>
									<v-select @change="changed = true" :items="domainTypes" v-model="s.item.type" dense></v-select>
								</template>
							</v-edit-dialog>
						</td>
						<td>
							<v-edit-dialog :return-value="s.item.name" lazy>
								{{ s.item.host || 'Click Me' }}
								<template v-slot:input>
									<v-text-field @change="changed = true" v-model="s.item.host" label="Host" single-line></v-text-field>
								</template>
							</v-edit-dialog>
						</td>
						<td>
							<v-edit-dialog :return-value="s.item.value" lazy>
								{{ s.item.value || 'Click Me' }}
								<template v-slot:input>
									<!-- // TODO: Add a select box for CAA record -->
									<v-text-field @change="changed = true" v-model="s.item.value" label="Value" single-line></v-text-field>
								</template>
							</v-edit-dialog>
						</td>
						<td>
							<v-edit-dialog :return-value="s.item.ttl" lazy>
								{{ s.item.ttl }}
								<template v-slot:input>
									<!-- 由于 Editable 太丑了 -->
									<!-- 就不支持自定义了, 要自定义左转NC控制台 -->
									<v-select @change="changed = true" :items="ttlPresets" v-model="s.item.ttl" dense></v-select>
								</template>
							</v-edit-dialog>
						</td>
						<td>
							<v-btn flat icon @click="deleteRecord(s.item);">
								<v-icon>delete</v-icon>
							</v-btn>
						</td>
					</template>
					<template v-slot:actions-append>
						<v-btn flat color="white" @click="newRecord()">NEW</v-btn>
					</template>
				</v-data-table>
			</v-flex>
			<v-flex xs12 class="ma-2">
				<h2>Mail Settings</h2>
			</v-flex>
			<v-flex xs12>
				<v-select :items="emailTypes" v-model="emailType" item-value="key" item-text="name" @change="changed = true" label="DNS Mode" hide-details solo></v-select>
			</v-flex>
			<v-flex xs12 style="text-align: end;" class="my-2">
				<v-btn class="mr-2" :disabled="!forwardChanged" @click="saveForwards()" v-if="this.emailType=='FWD'">↓ SAVE</v-btn>
				<v-btn class="mr-0" :disabled="!changed" @click="saveRecords()">SAVE ↑</v-btn>
			</v-flex>
			<v-flex xs12>
				<v-data-table :headers="forwardHeaders" :items="forwards" :loading="loading" :no-data-text="error==null?'Loading...':error" :rows-per-page-items="[-1]" disable-initial-sort class="elevation-2" v-if="this.emailType=='FWD'">
					<template v-slot:items="s">
						<td>
							<v-edit-dialog :return-value="s.item.mailbox" lazy>
								{{ s.item.mailbox || 'Click Me' }}
								<template v-slot:input>
									<v-text-field @change="forwardChanged = true" v-model="s.item.mailbox" label="MailBox, * for catch-all" single-line></v-text-field>
								</template>
							</v-edit-dialog>
						</td>
						<td>
							<v-edit-dialog :return-value="s.item.target" lazy>
								{{ s.item.target || 'Click Me' }}
								<template v-slot:input>
									<v-text-field @change="forwardChanged = true" v-model="s.item.target" label="Target" single-line></v-text-field>
								</template>
							</v-edit-dialog>
						</td>
						<td>
							<v-btn flat icon @click="deleteForward(s.item);">
								<v-icon>delete</v-icon>
							</v-btn>
						</td>
					</template>
					<template v-slot:actions-append>
						<v-btn flat color="white" @click="newForward()">NEW</v-btn>
					</template>
				</v-data-table>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default
{
	created()
	{
		this.reload();
	},
	data: ()=>(
	{
		domainTypes: [
			'A',
			'AAAA',
			'ALIAS',
			'CAA',
			'CNAME',
			'MX',
			'MXE',
			'NS',
			'TXT',
			'URL',
			'URL301',
			'FRAME'
		],
		ttlPresets: [
			'60',
			'300',
			'1200',
			'1800',
			'3600'
		],
		emailTypes: [
			{ key: 'NONE', name: 'No Email Service' },
			{ key: 'MX', name: 'Custom MX' },
			{ key: 'MXE', name: 'MXE Record' },
			{ key: 'FWD', name: 'Email Forwarding' },
			{ key: 'OX', name: 'Private Email' },
			{ key: 'GMAIL', name: 'Gmail' }
		],
		
		domain: '',
		sld: '',
		tld: '',
		emailType: '',
		
		records: [],
		recordHeaders: [
			{ text: 'Type', value: 'type' },
			{ text: 'Host', value: 'host' },
			{ text: 'Value', value: 'value' },
			{ text: 'TTL', value: 'ttl' },
			{ text: 'Action', sortable: false }
		],
		changed: false,
		
		forwards: [],
		forwardHeaders: [
			{ text: 'MailBox', value: 'mailbox' },
			{ text: 'Target', value: 'target' },
			{ text: 'Action', sortable: false }
		],
		forwardChanged: false,
		
		loading: false,
		error: null
	}),
	watch:
	{
		$route: 'reload'
	},
	methods:
	{
		reload()
		{
			this.domain=this.$route.params.domain;
			this.$root.title='Domain: '+this.domain.toUpperCase();
			var d=this.domain.split('.');
			this.sld=d.shift();
			this.tld=d.join('.');
			this.records=[];
			this.emailType='';
			this.changed=false;
			this.loading=true;
			this.$root.fetchAPI('namecheap.domains.dns.getHosts',
			{
				SLD: this.sld,
				TLD: this.tld
			}).then(data=>
			{
				data=data.querySelector('DomainDNSGetHostsResult');
				if(data.attributes.Domain.value!=this.domain)
				{
					return;
				}
				this.emailType=data.attributes.EmailType.value;
				data.querySelectorAll('host').forEach(e=>
				{
					e=e.attributes;
					e=
					{
						id: e.HostId.value,
						ttl: e.TTL.value,
						type: e.Type.value,
						host: e.Name.value,
						value: e.Address.value,
						mx_preference: e.MXPref.value,
						ddns: e.IsDDNSEnabled.value=='true'
					};
					if(e.ddns)
					{
						// Update API doesn't support DDNS?
						// e.type+=' (DDNS)';
					}
					this.records.push(e);
				});
				this.loading=false;
				this.reloadForward();
			});
		},
		newRecord()
		{
			this.records.push(
			{
				// Don't set id, it's not used actually
				ddns: false,
				ttl: '300',
				type: 'A',
				host: '',
				value: '',
				mx_preference: '10'
			});
		},
		deleteRecord(record)
		{
			var index=this.records.indexOf(record);
			if(index!==-1)
			{
				this.records.splice(index,1);
				this.changed=true;
			}
		},
		saveRecords()
		{
			this.loading=true;
			var data=
			{
				SLD: this.sld,
				TLD: this.tld,
				EmailType: this.emailType
			};
			for(var i=1;i<=this.records.length;i++)
			{
				// TODO: Where's the DDNS flag?
				// https://www.namecheap.com/support/api/methods/domains-dns/set-hosts/
				var rec=this.records[i-1];
				data['HostName'+i]=rec.host;
				data['RecordType'+i]=rec.type;
				data['Address'+i]=rec.value;
				data['MXPref'+i]=rec.mx_preference;
				data['TTL'+i]=rec.ttl;
			}
			this.$root.fetchAPI('namecheap.domains.dns.setHosts',data)
				.then(data=>
				{
					this.emailType=data.querySelector('DomainDNSSetHostsResult').attributes.EmailType.value;
					
					// TODO: Alert user
					console.info(data);
					
					this.loading=false;
					// TODO: Temporary solution for illegal updates that should be verified here
					this.reload();
				})
				.catch(()=>
				{
					this.loading=false;
				});
		},
		reloadForward()
		{
			if(this.emailType!='FWD')
			{
				return;
			}
			this.loading=true;
			this.forwards=[];
			this.$root.fetchAPI('namecheap.domains.dns.getEmailForwarding',
			{
				DomainName: this.domain
			})
			.then(data=>
			{
				data=data.querySelector('DomainDNSGetEmailForwardingResult');
				if(data.attributes.Domain.value!=this.domain)
				{
					return;
				}
				data.querySelectorAll('Forward').forEach(e=>
				{
					this.forwards.push(
					{
						id: e.attributes.mailboxid.value,
						mailbox: e.attributes.mailbox.value,
						target: e.innerHTML
					});
				});
				this.loading=false;
			})
			.catch(()=>
			{
				this.loading=false;
			});
		},
		newForward()
		{
			this.forwards.push(
			{
				// Don't set id, it's not used actually
				mailbox: '',
				target: ''
			});
		},
		deleteForward(forward)
		{
			var index=this.forwards.indexOf(forward);
			if(index!==-1)
			{
				this.forwards.splice(index,1);
				this.forwardChanged=true;
			}
		},
		saveForwards()
		{
			this.loading=true;
			var data=
			{
				DomainName: this.domain
			};
			for(var i=1;i<=this.forwards.length;i++)
			{
				var fwd=this.forwards[i-1];
				data['MailBox'+i]=fwd.mailbox;
				data['ForwardTo'+i]=fwd.target;
			}
			this.$root.fetchAPI('namecheap.domains.dns.setEmailForwarding',data)
				.then(data=>
				{
					// TODO: Alert user
					console.info(data);
					
					this.loading=false;
					this.reloadForward();
				})
				.catch(()=>
				{
					this.loading=false;
				});
		}
	}
}
</script>
