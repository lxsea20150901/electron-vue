import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import World from '@/components/World';

Vue.use(Router);

const router = new Router({
	// mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Hello',
			meta: {title: 'Hello',},
			component: Hello
		},
		{
			path: '/world',
			name: 'World',
			meta: {title: 'World',},
			component: World
		}
	],
	scrollBehavior(to, from, savedPosition) {
		if (to.hash) {
			return {
				selector: to.hash
			}
		} else {
			if (savedPosition) {
				return savedPosition
			} else {
				return {x: 0, y: 0}
			}
		}
	},
});

router.afterEach(function (route) {
	if (route.meta && route.meta.title) {
		document.title = route.meta.title;
	}
});

export default router;

