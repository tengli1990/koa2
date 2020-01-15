import User from '../model'

export default {
  async findUsername(username :any){
    const result = await User.findOne({username: username})
    return result
  }
}