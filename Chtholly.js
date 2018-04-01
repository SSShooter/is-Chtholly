/* reference 
 * http://sukasuka-anime.com/chara/chtholly.html#c_list_block_0002
 * http://suka-suka.wikia.com/wFairy Soldier Grade Siki/Chtholly/Kutori_Nota_Seniorious
 */

const Chtholly = {
  fullName: 'Chtholly Nota Seniorious',
  age: 15,
  race: 'Leprechaun',
  gender: 'Female',
  eyeColor: 'Ocean Blue',
  hairColor: 'Sky Blue',
  occupation: 'Fairy Soldier Grade S',
  cv: 'Azusa Tadokoro'
}

const is = () => ({
  Chtholly: () => {
    let question = {}
    for (key in Chtholly) {
      let val = Chtholly[key]
      question[key] = answer => {
        if (typeof answer === 'number') return answer === val
        return answer.toLowerCase() === String(val).toLowerCase()
      }
    }
    return question
  }
})

const 柯朵莉constructor = () => {
  let question = {}
  let info = {
    全名: '珂朵莉·诺塔·瑟尼欧里斯',
    年龄: '15',
    种族: '黄金妖精族',
    性别: '女',
    瞳色: '海蓝',
    发色: '天蓝',
    所属: '成体妖精兵',
    声优: '田所梓'
  }
  for (key in info) {
    let val = info[key]
    question[key] = answer => {
      return {
        吗() {
          return answer[0].toLowerCase() === String(val).toLowerCase()
        }
      }
    }
  }
  return question
}

const 柯朵莉 =  柯朵莉constructor()