class observerClass {
    constructor(el,binding) {
        this.el = el;
        this.binding = binding;
    }
    init() {
        this.cacheImg = this.el.src; // 缓存当前`src`
        this.el.setAttribute('src', this.binding.value)
        this.setObserve()
        this.observer.observe(this.el)
    }
    
    setObserve(){
        this.observer = new IntersectionObserver(entries => {
            // console.log('交叉观察器数组？',entries)
            for (let i = 0; i < entries.length; i++) {
                const item = entries[i];
                // console.log('判断是否进入可视区域',item.isIntersecting)
                if (item.isIntersecting) {
                    console.log('进入可视区域')
                    this.loadImage(item.target);
                }
            }
        })
    }

    loadImage() {
        this.el.src = this.cacheImg;
        this.observer.unobserve(this.el);
    }
}

export const lazyLoadDirective = {
    lazy: {
        // 指令的定义
        inserted: function (el, binding) {
            const ObserverClass = new observerClass(el,binding)
            ObserverClass.init()
            // console.log('绑定指令的dom',el,binding)
        }
    }
}
