<template>
	<v-container class="pa-3">
		<v-layout wrap>
			<v-flex xs12>
				<h2 class="mb-2 mx-2">DNS Records</h2>
			</v-flex>
			<v-flex xs12>
				<v-data-table :headers="headers" :items="records" :loading="loading" :no-data-text="error==null?'Loading...':error" :rows-per-page-items="[-1]" disable-initial-sort class="elevation-2">
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
								{{ s.item.host }}
								<template v-slot:input>
									<v-text-field @change="changed = true" v-model="s.item.host" label="Host" single-line></v-text-field>
								</template>
							</v-edit-dialog>
						</td>
						<td>
							<v-edit-dialog :return-value="s.item.value" lazy>
								{{ s.item.value }}
								<template v-slot:input>
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
						<v-btn flat color="white" :disabled="!changed" @click="saveRecords()">SAVE</v-btn>
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
		domain: '',
		sld: '',
		tld: '',
		headers: [
			{ text: 'Type', value: 'type' },
			{ text: 'Host', value: 'host' },
			{ text: 'Value', value: 'value' },
			{ text: 'TTL', value: 'ttl' },
			{ text: 'Action', sortable: false }
		],
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
			60,
			300,
			1200,
			1800,
			3600
		],
		records: [],
		emailType: '',
		changed: false,
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
			this.changed=false;
			this.loading=true;
			this.$root.fetchAPI('namecheap.domains.dns.getHosts',
			{
				SLD: this.sld,
				TLD: this.tld
			}).then(data=>
			{
				this.emailType=data.querySelector('DomainDNSGetHostsResult').attributes.EmailType.value;
				data.querySelectorAll('DomainDNSGetHostsResult > host').forEach(e=>
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
			});
		},
		deleteRecord(record)
		{
			var index=this.records.indexOf(record);
			if(index!==-1)
			{
				this.records.splice(index,1);
			}
			else
			{
				// TODO: Alert user
				console.error('WTF');
			}
		},
		saveRecords()
		{
			var data=
			{
				SLD: this.sld,
				TLD: this.tld,
				EmailType: this.emailType // TODO
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
				console.info(data);
			});
		}
	}
}
</script>
