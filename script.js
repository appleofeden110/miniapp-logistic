webApp = window.Telegram.WebApp
document.getElementById('regular_field').addEventListener('input', function (e) {
        const val = this.value.toLowerCase();
        if (val.indexOf('progress') >= 0) {
            MainButton.showProgress();
        } else {
            MainButton.hideProgress();
        }
    });