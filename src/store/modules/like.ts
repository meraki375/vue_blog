import { defineStore } from 'pinia';
import { conmentLike } from '@/apis';

interface LikeState {
  likeList: any[];
}

export const useLikeStore = defineStore({
  id: 'User',
  state: (): LikeState => {
    return {
      likeList: JSON.parse(localStorage.getItem('WALINE_LIKE') || '[]'),
    };
  },
  getters: {
    likes(): string[] {
      return this.likeList
    },
  },
  actions: {
    // 点赞评论
    async onLike(id: any) {
      try {
        await conmentLike({ id: id, lang: 'zh-CN', like: true }).then((res: any) => {
          this.likeList.push(id); // 将ID添加到likeList中
          localStorage.setItem('WALINE_LIKE', JSON.stringify(this.likeList)); // 存储更新后的likeList到本地缓存
        });
      } catch (err) {
        throw err;
      }
    },
    // 取消点赞
    async unLike(id: any) {
      try {
        await conmentLike({ id: id, lang: 'zh-CN', like: false }).then((res: any) => {
          this.likeList = this.likeList.filter((item: any) => item !== id); // 从likeList中移除指定的ID
          localStorage.setItem('WALINE_LIKE', JSON.stringify(this.likeList)); // 存储更新后的likeList到本地缓存
        });
      } catch (err) {
        throw err;
      }
    },
  },
});
