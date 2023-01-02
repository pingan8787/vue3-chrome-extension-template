import { onMessage, sendMessage } from 'webext-bridge';

// 卸载拓展时执行
chrome.runtime.onSuspend.addListener(() => {
   // TODO
})

// 监听拓展加载完成
chrome.runtime.onInstalled.addListener(async (result: { reason: string; }) => {
   if (result.reason === 'install') {
      console.log('[安装成功]')
   }
});

// 点击拓展图标的监听
chrome.action.onClicked.addListener(async (tab: { id: string; }) => {
   if (tab.id) {
      // https://github.com/zikaari/webext-bridge#destination
   }
});

// 获取用户 oauth token
// chrome.identity.getAuthToken({ interactive: true }, function (token) {
//    console.log('[token]', token)
// });

// 获取用户邮箱和 id
// chrome.identity.getProfileUserInfo({ accountStatus: 'ANY' } as any, async (userInfo: UserInfo) => {
//    console.log('[userInfo]', userInfo)
// })

// 监听插件快捷键触发
chrome.commands.onCommand.addListener((command: any) => {
   console.log('[command]', command)
});

// 初始化监听插件事件
const listener = () => {
   chrome.runtime.onMessage.addListener((request: { action: any; type: any; data: any; }, sender: any, sendResponse: (arg0: { success: boolean; data?: any; msg?: string; }) => void) => {
      const { action, type, data } = request;
      console.log('[request]', request)

   });
}

listener();