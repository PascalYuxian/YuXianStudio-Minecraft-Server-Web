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