function titleInfo()
{
const OriginTitle = document.title;
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        document.title = '(●—●)喔哟，崩溃啦！';
    } else {
        document.title = '(/≧▽≦/)咦！又好了！';
        setTimeout(function() { document.title = OriginTitle;
        }, 2000);
    } });
}
titleInfo();

function show_date_time(){
window.setTimeout("show_date_time()", 1000);
BirthDay=new Date("1/1/2015 00:00:00");//月，日，年，小时，分钟，秒
today=new Date();
timeold=(today.getTime()-BirthDay.getTime());
sectimeold=timeold/1000
secondsold=Math.floor(sectimeold);
msPerDay=24*60*60*1000
e_daysold=timeold/msPerDay
daysold=Math.floor(e_daysold);
e_hrsold=(e_daysold-daysold)*24;
hrsold=setzero(Math.floor(e_hrsold));
e_minsold=(e_hrsold-hrsold)*60;
minsold=setzero(Math.floor((e_hrsold-hrsold)*60));
seconds=setzero(Math.floor((e_minsold-minsold)*60));
span_uptime.innerHTML="极不稳定的运行了"+daysold+"天"+hrsold+"小时"+minsold+"分"+seconds+"秒";
}
function setzero(i){
if (i<10)
{i="0" + i};
return i;
}
show_date_time();

console.log("222222222222          22          2222222222        22222222          22        22222222      ")
console.log("  2222    2222      222222      2222      2222    2222    2222      222222        2222        ")
console.log("  2222    2222    2222  2222    2222      2222  2222        22    2222  2222      2222        ")
console.log("  2222    2222  2222      2222    2222          2222            2222      2222    2222        ")
console.log("  2222222222    2222      2222      222222      2222            2222      2222    2222        ")
console.log("  2222          22222222222222          2222    2222            22222222222222    2222        ")
console.log("  2222          2222      2222            2222  2222            2222      2222    2222        ")
console.log("  2222          2222      2222  2222      2222  2222        22  2222      2222    2222      22")
console.log("  2222          2222      2222  2222      2222    2222    2222  2222      2222    2222    2222")
console.log("22222222        2222      2222    2222222222        22222222    2222      2222  22222222222222")
console.log("")
console.log("  3333    3333  3333      3333  3333      3333      33333333          33        3333      3333")
console.log("  3333    3333  3333      3333  3333      3333        3333          333333      333333    3333")
console.log("  3333    3333  3333      3333    3333  3333          3333        3333  3333    33333333  3333")
console.log("  3333    3333  3333      3333    3333333333          3333      3333      3333  33333333333333")
console.log("    33333333    3333      3333      333333            3333      3333      3333  3333  33333333")
console.log("      3333      3333      3333      333333            3333      33333333333333  3333    333333")
console.log("      3333      3333      3333    3333333333          3333      3333      3333  3333      3333")
console.log("      3333      3333      3333    3333  3333          3333      3333      3333  3333      3333")
console.log("      3333      3333      3333  3333      3333        3333      3333      3333  3333      3333")
console.log("    33333333      3333333333    3333      3333      33333333    3333      3333  3333      3333")