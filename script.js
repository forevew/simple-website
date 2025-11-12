// 回到顶部按钮
document.addEventListener('DOMContentLoaded', function () {
    // 创建回到顶部按钮
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.id = 'backToTopBtn';
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        font-size: 20px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    `;
    document.body.appendChild(backToTopBtn);

    // 显示/隐藏按钮
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.visibility = 'visible';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.visibility = 'hidden';
        }
    });

    // 点击回到顶部
    backToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 导航链接平滑滚动
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 图片悬停效果
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        img.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
        });
    });

    // 页面加载动画
    const main = document.querySelector('main');
    if (main) {
        main.style.opacity = '0';
        main.style.transform = 'translateY(20px)';
        setTimeout(() => {
            main.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            main.style.opacity = '1';
            main.style.transform = 'translateY(0)';
        }, 100);
    }

    // 移动端菜单（如果需要）
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');

    if (window.innerWidth <= 768) {
        // 创建汉堡菜单按钮
        const menuBtn = document.createElement('button');
        menuBtn.innerHTML = '☰';
        menuBtn.id = 'menuBtn';
        menuBtn.style.cssText = `
            background: none;
            border: none;
            color: var(--secondary-color);
            font-size: 24px;
            cursor: pointer;
            margin-right: 1rem;
        `;

        header.insertBefore(menuBtn, nav);

        nav.style.cssText = `
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: rgba(255, 255, 255, 0.95);
            flex-direction: column;
            padding: 1rem 0;
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        `;

        menuBtn.addEventListener('click', function () {
            const isOpen = nav.style.visibility === 'visible';
            if (isOpen) {
                nav.style.transform = 'translateY(-100%)';
                nav.style.opacity = '0';
                nav.style.visibility = 'hidden';
            } else {
                nav.style.transform = 'translateY(0)';
                nav.style.opacity = '1';
                nav.style.visibility = 'visible';
            }
        });

        // 调整头部布局
        header.style.flexDirection = 'row';
        header.style.justifyContent = 'space-between';
    }
});