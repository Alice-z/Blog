/**
 * 
 * @param {number} r  时间戳 
 */
export const time = r => new Date(parseInt(r)).toLocaleDateString().replace(/\//g, '-')
/**
 * 
 * @param {array} list 进行分页的列表数据 
 * @param {number} page 需要跳到的页码 
 */
export const paging = (list, page) => list.filter((i, k) => k >= page * 10 && k <= page * 10 + 10)

