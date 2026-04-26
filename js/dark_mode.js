/**
 * dark-mode.js
 * ─────────────────────────────────────────────────────────────
 * Handles light / dark theme toggling site-wide.
 *
 * HOW IT WORKS:
 *   • Reads saved preference from localStorage ('ww-theme').
 *   • Falls back to the user's OS preference via prefers-color-scheme.
 *   • Default (no preference detected) → dark.
 *   • Sets [data-theme="dark|light"] on <html>.
 *   • Updates every .theme-toggle button's label and icon.
 *
 * HOW TO ADD TO A PAGE:
 *   1. Include theme.css in <head>.
 *   2. Add a toggle button anywhere inside <nav>:
 *        <button class="theme-toggle" id="themeToggle" aria-label="Toggle theme">
 *          <span class="toggle-icon">🌙</span>
 *          <span class="toggle-label">dark</span>
 *        </button>
 *   3. Include this script before </body>:
 *        <script src="js/dark-mode.js"></script>
 * ─────────────────────────────────────────────────────────────
 */

(function () {
    const STORAGE_KEY = 'ww-theme';
    const html = document.documentElement;

    /* ── Resolve initial theme ── */
    function getInitialTheme() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved === 'dark' || saved === 'light') return saved;
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) return 'light';
        return 'dark'; // default
    }

    /* ── Apply theme to <html> ── */
    function applyTheme(theme) {
        html.setAttribute('data-theme', theme);
        localStorage.setItem(STORAGE_KEY, theme);
        updateButtons(theme);
    }

    /* ── Update all toggle buttons on the page ── */
    function updateButtons(theme) {
        document.querySelectorAll('.theme-toggle').forEach(function (btn) {
            const icon = btn.querySelector('.toggle-icon');
            const label = btn.querySelector('.toggle-label');
            if (icon) icon.textContent = theme === 'dark' ? '☀️' : '🌙';
            if (label) label.textContent = theme === 'dark' ? 'light' : 'dark';
            btn.setAttribute('aria-pressed', String(theme === 'dark'));
        });
    }

    /* ── Toggle between themes ── */
    function toggle() {
        const current = html.getAttribute('data-theme') || 'dark';
        applyTheme(current === 'dark' ? 'light' : 'dark');
    }

    /* ── Wire up buttons (works for buttons added before DOMContentLoaded) ── */
    function bindButtons() {
        document.querySelectorAll('.theme-toggle').forEach(function (btn) {
            if (btn.dataset.dmBound) return;
            btn.dataset.dmBound = '1';
            btn.addEventListener('click', toggle);
        });
    }

    /* ── Init ── */
    applyTheme(getInitialTheme());

    /* Bind as early as possible, then again after DOM ready */
    bindButtons();
    document.addEventListener('DOMContentLoaded', bindButtons);
})();