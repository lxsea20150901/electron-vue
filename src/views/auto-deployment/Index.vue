<template>
	<Layout class="layout">
		<Content class="content">
			<template v-show="data.length">
				<Card v-for="(item,index) in data" :key="index" style="margin-bottom: 16px">
					<p slot="title">{{item.title}}</p>
					<p slot="extra">共<span style="color: #19be6b">{{item.count}}</span>个文件</p>

					<div class="card-body">
						<p class="path">监听目录：{{item.path}}</p>
						<p class="path">目标目录：{{item.targetpath||'未设置'}}</p>
						<p class="path">上传命令：{{item.uploader_cmd||'未设置'}}</p>
					</div>

					<Row class="action">
						<Col span="6">
							<Tooltip content="重新设置目录" style="color: #ff9900">
								<Dropdown @on-click="onSelectPath(item,$event)">
									<Icon type="ios-folder" size="18"/>
									<DropdownMenu slot="list">
										<DropdownItem name="targetpath">
											目标目录
										</DropdownItem>
										<DropdownItem name="uploader_cmd">
											上传命令
										</DropdownItem>
									</DropdownMenu>
								</Dropdown>
							</Tooltip>
						</Col>
						<Col span="6">
							<Tooltip content="删除项目">
								<Icon type="ios-trash-outline" style="color: #ed4014" size="24" @click="onDelete(item)"></Icon>
							</Tooltip>
						</Col>
						<Col span="6">
							<Tooltip content="启动/终止监听目录">
								<Icon type="ios-square" style="color: #ed4014" size="24" @click="onToggle(item)" v-if="item.status"></Icon>
								<Icon type="ios-play" style="color: #19be6b" size="24" @click="onToggle(item)" v-else></Icon>
							</Tooltip>
						</Col>
						<Col span="6">
							<Tooltip content="查看项目文件监听详情" style="color: #2db7f5">
								<router-link tag="Icon" class="ivu-icon-ios-eye" style="font-size: 24px"
										:to="{name:'auto-deployment.detail',query:{id:item.id}}"></router-link>
							</Tooltip>
						</Col>
					</Row>

				</Card>
			</template>
			<div class="empty-tips" v-show="!data.length">
				暂没有创建任何项目！
			</div>
		</Content>
		<Footer class="layout-footer">
			<Button :to="{name:'auto-deployment.add'}" icon="ios-add" type="primary">新增</Button>
		</Footer>
	</Layout>
</template>

<script>
import store from './store';

export default {
	name: "AutoDeployment",
	$store: store,
	data: function() {
		return {
			data: store.getProjectList(),
		};
	},
	mounted() {
	},
	created() {
		// const win = sys.getCurrentWindow();
		// if (win.getSize()[0] < 640) {
		// 	win.setSize(640, 480, true);
		// }
	},
	destroyed() {
		// if (IS_DEV) store.destroy();
	},
	methods: {
		onToggle(row) {
			if (row.status) {
				store.stopProject(row.id);
			} else {
				store.startProject(row.id);
			}
		},
		onDelete: function(row) {
			sys.showModal({
				icon: 'confirm',
				title: '温馨提示',
				content: '你确定要删除这个监听目录吗？',
				onOk: () => {
					store.deleteProject(row.id);
				}
			});
		},
		onSelectPath(row, name) {
			const options = 'uploader_cmd' === name ? {
				properties: ['openFile'],
				filters: [
					{name: '可执行文件', extensions: ['exe', 'bat']},
				]
			} : {
				properties: ['openDirectory'],
			};
			sys.openFileSelectDialog(options).then((files) => {
				store.setProjectAttribute(row.id, name, files[0]);
			});
		},
	}
}
</script>

<style scoped>
	.layout {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
	}

	.content {
		padding: 16px;
		overflow-y: auto;
	}

	.card-body {
		margin-bottom: 16px;
		background-color: rgba(0, 0, 0, 0.05);
		padding: 5px;
	}

	.card-body .path {
		line-height: 1.6;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap
	}

	.layout-footer {
		padding: 8px 16px;
	}

	.empty-tips {
		color: #808695;
		font-size: 24px;
		text-align: center;
		margin-top: 15%;
		font-weight: bold;
	}

	.action {
		text-align: center;
	}
</style>
