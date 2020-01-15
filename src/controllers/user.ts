import User from '../model'
import UserService from '../service/user';

export default {
  async signUp (ctx: any) {

  },
  async signIn (ctx: any, next: any) {
    let result: Object = {
      success: false,
      message: '用户不存在'
    }
    // 接收参数
    const { username, password } = ctx.request.body;
    // 检查数据库中是否存在该用户名
    const userInfo = await UserService.findUsername(username);
   
    
    if (!userInfo) {
      ctx.body=result
    } else {
      ctx.body = userInfo
    }
    next()
  },
}
