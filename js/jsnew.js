document.addEventListener('DOMContentLoaded', function() {
    // Banner 1: Slideshow
    let currentSlide = 0;
    const slides = document.querySelectorAll('.banner .slides img');
    const dots = document.querySelectorAll('.banner .dots .dot');
    const totalSlides = slides.length;

    if (totalSlides > 0 && dots.length > 0) {
        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
                dots[i].classList.toggle('active', i === index);
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        }

        setInterval(nextSlide, 3000);
    }

    // Banner 2: Slideshow for secondary banner
    let currentSlideSecondary = 0;
    const slidesSecondary = document.querySelectorAll('.banner-secondary .slides-secondary img');
    const dotsSecondary = document.querySelectorAll('.banner-secondary .dots-secondary .dot-secondary');
    const totalSlidesSecondary = slidesSecondary.length;
    if (totalSlidesSecondary > 0 && dotsSecondary.length > 0) {
        function showSlideSecondary(index) {
            slidesSecondary.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
                dotsSecondary[i].classList.toggle('active', i === index);
            });
        }

        function nextSlideSecondary() {
            currentSlideSecondary = (currentSlideSecondary + 1) % totalSlidesSecondary;
            showSlideSecondary(currentSlideSecondary);
        }

        setInterval(nextSlideSecondary, 3000);
    }

    // Banner 3: Customer feedback slideshow
    let currentIndexThird = 0;
    const feedbackItems = document.querySelectorAll('.banner3 .customer-feedback');
    const dotsThird = document.querySelectorAll('.banner3 .dots3 .dot3');
    const totalFeedback = feedbackItems.length;

    if (totalFeedback > 0 && dotsThird.length > 0) {
        function showSlideThird(index) {
            feedbackItems.forEach((item, i) => {
                item.classList.toggle('active-slide', i === index);
                dotsThird[i].classList.toggle('active', i === index);
            });
        }

        function nextSlideThird() {
            currentIndexThird = (currentIndexThird + 1) % totalFeedback;
            showSlideThird(currentIndexThird);
        }

        setInterval(nextSlideThird, 5000);
    }

    // Menu: Filter food items based on category
    const menuLinks = document.querySelectorAll('.menu-list li a');
    menuLinks.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();

            menuLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');

            const category = this.getAttribute('data-category');
            const foodCards = document.querySelectorAll('.food-card');

            if (category === "all") {
                foodCards.forEach(card => {
                    card.style.display = 'flex';
                });
            } else {
                foodCards.forEach(card => {
                    card.style.display = 'none';
                });

                const filteredCards = document.querySelectorAll(`.food-card[data-category="${category}"]`);
                filteredCards.forEach(card => {
                    card.style.display = 'flex';
                });
            }
        });
    });
    window.onscroll = function() {
        const backToTopButton = document.getElementById("backToTop");
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            backToTopButton.style.display = "block"; // Hiện nút
        } else {
            backToTopButton.style.display = "none"; // Ẩn nút
        }
    };
    
    document.getElementById("backToTop").onclick = function() {
        // Sử dụng phương thức scrollTo để cuộn về đầu trang
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Thêm hiệu ứng mượt
        });
    };
    
});
