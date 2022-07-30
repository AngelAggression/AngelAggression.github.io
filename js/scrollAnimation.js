const cards = document.querySelectorAll('.index-card')
if (cards.length) {
    document.querySelector('.row').setAttribute('style', 'overflow: hidden;')
    const coefficient = document.documentElement.clientWidth > 768 ? .5 : .3
    const origin = document.documentElement.clientHeight - cards[0].getBoundingClientRect().height * coefficient

    function throttle(fn, wait) {
        let timer = null;
        return function () {
            const context = this;
            const args = arguments;
            if (!timer) {
                timer = setTimeout(function () {
                    fn.apply(context, args);
                    timer = null;
                }, wait)
            }
        }
    }

    function handle() {
        cards.forEach(card => {
            card.setAttribute('style', `--state: ${(card.getBoundingClientRect().top - origin) < 0 ? 1 : 0};`)
        })
    }


    document.addEventListener("scroll", throttle(handle, 100));
}

/* <div class="col-12 col-md-4 m-auto index-img">
    <a href="/2022/07/30/test2/" target="_self">
        <img src="https://api.ixiaowai.cn/api/api.php?random=7" alt="test2">
    </a>
</div> */