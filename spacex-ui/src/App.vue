<template>
	<v-app>
		<v-main class="app-main pa-5 grey lighten-2">
				<v-container class="principal-container">
					<div class="content-wrapper overflow-hidden">
						<launches-list />
						<launch-single />
					</div>
				</v-container>
		</v-main>
	</v-app>
</template>

<script>

import LaunchesList from './components/LaunchesList.vue';
import LaunchSingle from './components/LaunchSingle.vue';

export default {
	name: 'App',

	components: {
		LaunchesList,
		LaunchSingle
	},
};
</script>

<style scoped>
	.app-main {
		height: 100vh;
	}

	.principal-container {
		height: 100%;
	}

	.content-wrapper {
		height: 100%;
	}  
</style>