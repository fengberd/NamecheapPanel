<template>
	<v-container class="pa-2">
		<v-layout wrap justify-center>
			<v-flex xs12 md6 class="pa-2">
				<v-card class="elevation-4">
					<v-toolbar color="primary">
						<v-toolbar-title>API Configuration</v-toolbar-title>
					</v-toolbar>
					<v-card-text>
						<v-text-field placeholder="Proxy" prepend-icon="link" v-model="api.url"></v-text-field>
						<v-text-field placeholder="API User" prepend-icon="account_circle" v-model="api.user"></v-text-field>
						<v-text-field placeholder="API Key" prepend-icon="lock" v-model="api.key" type="password"></v-text-field>
					</v-card-text>
					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn flat @click="saveApi()">
							Save
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default
{
	data: ()=>(
	{
		api:
		{
			url: '',
			key: '',
			user: '',
			userName: ''
		}
	}),
	mounted()
	{
		if(localStorage.api)
		{
			this.api=JSON.parse(localStorage.api);
		}
	},
	methods:
	{
		saveApi()
		{
			// Let user input less, but if advanced users needed this,
			// they can change it from localStorage
			this.api.userName=this.api.user;
			localStorage.api=JSON.stringify(this.api);
		}
	}
}
</script>
