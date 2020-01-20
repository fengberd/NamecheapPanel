<template>
	<v-app :dark="$root.dark">
		<v-toolbar app clipped-left color="primary">
			<v-toolbar-side-icon class="hidden-md-and-up" @click.stop="$root.drawer=!$root.drawer"></v-toolbar-side-icon>
			<v-toolbar-title class="white--text">{{ $root.title }}</v-toolbar-title>
		</v-toolbar>
		<v-navigation-drawer app clipped :mobile-break-point="960" v-model="$root.drawer" style="overflow: hidden;" ref="drawer">
			<v-toolbar flat class="hidden-md-and-up">
				<v-toolbar-title>{{ $root.title }}</v-toolbar-title>
			</v-toolbar>
			<v-list>
				<v-list-tile @click="$router.push({ path: '/' });">
					<v-list-tile-action>
						<v-icon>home</v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title>Home</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>
				<v-list-group active-class="" v-model="$root.domains_expand" prepend-icon="language" no-action>
					<template v-slot:activator>
						<v-list-tile>
							<v-list-tile-content>
								<v-list-tile-title>Domains</v-list-tile-title>
							</v-list-tile-content>
						</v-list-tile>
					</template>
					<v-list-tile v-for="d in $root.domains" :key="d.domain" :to="d.prevent?'':'/domain/' + d.domain" :value="$route.params.domain==d.domain">
						<v-list-tile-content>
							<v-list-tile-title>{{ d.domain.toUpperCase() }}</v-list-tile-title>
						</v-list-tile-content>
						<v-list-tile-action v-if="d.icon">
							<v-icon>{{ d.icon }}</v-icon>
						</v-list-tile-action>
					</v-list-tile>
				</v-list-group>
			</v-list>
		</v-navigation-drawer>
		<v-content>
			<router-view></router-view>
		</v-content>
	</v-app>
</template>
