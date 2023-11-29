// dark-mode.js

// DOM이 완전히 로드된 후에 요소에 접근하기 위해 이벤트 리스너 사용
document.addEventListener("DOMContentLoaded", function () {

    const darkModeToggle = document.getElementById('dark-mode-toggle');

    // 다크 모드 상태를 확인하고 업데이트하는 함수
    function updateDarkModeStatus() {
        // 로컬 스토리지에서 현재 다크 모드 상태 가져오기
        const isDarkMode = localStorage.getItem('darkMode') === 'true' ||
            (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

        // 페이지에 현재 다크 모드 상태 적용
        if (isDarkMode) {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    }

    // 페이지 로드 시 다크 모드 상태 확인 및 업데이트
    updateDarkModeStatus();

    // 다크 모드 토글 버튼 클릭 이벤트
    darkModeToggle.addEventListener('click', () => {
        // 다크 모드 상태 토글
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        if (isDarkMode) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });

    // 다크 모드 활성화 함수
    function enableDarkMode() {
        // 다크 모드 스타일 적용
        document.body.classList.add('dark');
        // 로컬 스토리지 업데이트
        localStorage.setItem('darkMode', 'true');
        // 클래스 "logo"가 있는 로고 요소 찾아서 src 변경
        const logo = document.querySelector('.logo');
        if (logo) {
            logo.src = './assets/has_logo_gray.svg'; // 다크 모드 이미지 경로로 변경
        }

        const mainLogo = document.querySelector('.main-logo');
        if (mainLogo) {
            mainLogo.src = './assets/regional-2023-logo_white.svg'
        }
    }

    // 다크 모드 비활성화 함수
    function disableDarkMode() {
        // 다크 모드 스타일 제거
        document.body.classList.remove('dark');
        // 로컬 스토리지 업데이트
        localStorage.setItem('darkMode', 'false');
        // 클래스 "logo"가 있는 로고 요소 찾아서 src 변경
        const logo = document.querySelector('.logo');
        if (logo) {
            logo.src = './assets/has_logo_white.svg'; // 라이트 모드 이미지 경로로 변경
        }

        const mainLogo = document.querySelector('.main-logo');
        if (mainLogo) {
            mainLogo.src = './assets/regional-2023-logo_black.svg'
        }
    }

});