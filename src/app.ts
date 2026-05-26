interface ClubEvent {
    title: string;
    statusTag: string;
    description: string;
    date: string;
    location: string;
}

const nextEventData: ClubEvent = {
    title: "Premium Beginner Session 2026",
    statusTag: "UPCOMING EVENT",
    description: "新入生・未経験者を対象とした、クリーンかつ安全に配慮したサバゲー体験会です。各種装備一式はサークル側で完全レンタル可能。手ぶらで最高の非日常を体験してください。",
    date: "2026年6月中旬 開催予定",
    location: "首都圏近郊 インドアフィールド"
};

function initializeSite(): void {
    const titleEl = document.getElementById("site-title");
    if (titleEl) titleEl.innerText = "SPAC.";

    const eventContainer = document.getElementById("event-container");
    if (eventContainer) {
        eventContainer.innerHTML = `
            <div class="premium-card">
                <span class="card-tag">${nextEventData.statusTag}</span>
                <h3>${nextEventData.title}</h3>
                <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 20px;">
                    ${nextEventData.description}
                </p>
                <div class="premium-card-meta">
                    <div>📅 日時: ${nextEventData.date}</div>
                    <div style="margin-top: 4px;">📍 場所: ${nextEventData.location}</div>
                </div>
            </div>
        `;
    }

    setupGallery();
    setupScrollAnimation();
    setupForm();
    setupBackgroundParallax();
}

function setupBackgroundParallax(): void {
    const txt1 = document.getElementById('bg-text-1');
    const txt2 = document.getElementById('bg-text-2');
    const txt3 = document.getElementById('bg-text-3');

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;

        if (txt1) {
            txt1.style.transform = `translateX(${scrolled * 0.15}px)`;
        }
        if (txt2) {
            txt2.style.transform = `translateX(${scrolled * -0.15}px)`;
        }
        if (txt3) {
            txt3.style.transform = `translateX(${scrolled * 0.08}px)`;
        }
    });
}

function setupGallery(): void {
    const galleryContainer = document.getElementById('photo-gallery');
    const galleryInner = document.getElementById('gallery-inner');
    if (!galleryContainer || !galleryInner) return;

    const images = Array.from(galleryInner.getElementsByTagName('img')) as HTMLImageElement[];
    if (images.length === 0) return;

    const gap = 20;
    
    images.forEach(img => {
        const clone = img.cloneNode(true) as HTMLImageElement;
        galleryInner.appendChild(clone);
    });

    let totalOriginalWidth = 0;
    images.forEach(img => {
        totalOriginalWidth += img.offsetWidth + gap;
    });
    galleryInner.style.width = `${totalOriginalWidth * 2}px`;

    let currentX = 0;
    const defaultSpeed = 0.6;
    let isHovered = false;
    let mouseXRatio = 0;
    let resumeTimeout: number | null = null;

    function animate(): void {
        if (isHovered) {
            const hoverSpeed = mouseXRatio * 8;
            currentX -= hoverSpeed;
        } else {
            currentX -= defaultSpeed;
        }

        if (currentX > 0) {
            currentX = -totalOriginalWidth + (currentX % totalOriginalWidth);
        } else if (Math.abs(currentX) >= totalOriginalWidth) {
            currentX = currentX % totalOriginalWidth;
        }

        if (galleryInner) {
            galleryInner.style.transform = `translateX(${currentX}px)`;
        }

        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);

    galleryContainer.addEventListener('mousemove', (e: MouseEvent) => {
        if (resumeTimeout) window.clearTimeout(resumeTimeout);
        isHovered = true;

        const rect = galleryContainer.getBoundingClientRect();
        const containerWidth = rect.width;
        const relativeX = e.clientX - rect.left;

        mouseXRatio = (relativeX / containerWidth) - 0.5;
    });

    galleryContainer.addEventListener('mouseleave', () => {
        if (resumeTimeout) window.clearTimeout(resumeTimeout);
        resumeTimeout = window.setTimeout(() => {
            isHovered = false;
        }, 2000);
    });

    galleryContainer.addEventListener('touchstart', () => {
        if (resumeTimeout) window.clearTimeout(resumeTimeout);
        isHovered = true;
        mouseXRatio = 0;
    }, { passive: true });

    galleryContainer.addEventListener('touchend', () => {
        if (resumeTimeout) window.clearTimeout(resumeTimeout);
        resumeTimeout = window.setTimeout(() => {
            isHovered = false;
        }, 2000);
    });
}

function setupScrollAnimation(): void {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -80px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => observer.observe(el));
}

function setupForm(): void {
    const form = document.getElementById('join-form') as HTMLFormElement;
    if (!form) return;

    form.addEventListener('submit', (e: Event) => {
        e.preventDefault();
        const email = (document.getElementById('user-email') as HTMLInputElement).value;

        form.innerHTML = `
            <div style="text-align: center; padding: 20px 0; animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;">
                <div style="font-size: 3rem; margin-bottom: 16px;">🎉</div>
                <h3 style="font-size: 1.4rem; font-weight: 700; color: var(--text-main); margin-bottom: 8px;">申請を受け付けました！</h3>
                <p style="color: var(--text-muted); font-size: 0.9rem; max-width: 400px; margin: 0 auto 24px auto;">
                    ご入力いただいた内容を確認後、登録されたメールアドレス（${email}）宛てにサークル運営担当から折り返しご連絡いたします。
                </p>
                <div style="font-size: 0.8rem; color: var(--text-light);">※通常24時間以内に返信しております。</div>
            </div>
        `;
    });
}

window.addEventListener("load", initializeSite);