<script>
export default {
	onLaunch: function () {
		uni.hideTabBar()
		// console.log('App Launch')
	},
	onShow: function () {
		// console.log('App Show')
	},
	onHide: function () {
		// console.log('App Hide')
	}
}
</script>

<style>
@import '@/uni_modules/tuniaoui-vue3/index.css';

page {
	padding-top: var(--status-bar-height);
	background: linear-gradient(#E1F5F8 0%, #EEF2F8 50%, #EDF4FC 100%);
	height: 100vh;
}
</style>
