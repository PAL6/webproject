//格式化时间

export function DateFormatMethod(time){
    let date =new Date(parseInt(time*1000));
    let year = date.getFullYear();
    let m = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1);
    let d = (date.getDate()<10?'0'+date.getDate():date.getDate());
    return year + '-' + m + '-' + d;
}