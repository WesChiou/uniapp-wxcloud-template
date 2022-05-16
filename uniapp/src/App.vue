<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app';

// Note: Change you config in .env, .env.production, env.development file.

onLaunch(async () => {
  wx.cloud.init({
    env: import.meta.env.VITE_WXCLOUD_ENVID,
    traceUser: true,
  });

  const wxContext = await wx.cloud.callFunction({
    name: 'main',
    data: {
      $url: '[GET]wxcontext',
    },
  });

  console.log(wxContext);
});

onShow(async () => {

});

onHide(() => {

});
</script>

<style>

</style>
